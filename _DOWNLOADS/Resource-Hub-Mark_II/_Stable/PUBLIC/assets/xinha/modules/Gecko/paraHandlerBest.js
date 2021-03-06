// tabs 2

/**
 * @fileoverview By Adam Wright, for The University of Western Australia
 *
 * Distributed under the same terms as Xinha itself.
 * This notice MUST stay intact for use (see license.txt).
 *
 * Heavily modified by Yermo Lamers of DTLink, LLC, College Park, Md., USA.
 * For more info see http://www.areaedit.com
 */

/**
 * plugin Info
 */

EnterParagraphs._pluginInfo = {
  name: "EnterParagraphs",
  version: "1.0",
  developer: "Adam Wright",
  developer_url: "http://www.hipikat.org/",
  sponsor: "The University of Western Australia",
  sponsor_url: "http://www.uwa.edu.au/",
  license: "htmlArea",
};

// ------------------------------------------------------------------

// "constants"

/**
 * Whitespace Regex
 */

EnterParagraphs.prototype._whiteSpace = /^\s*$/;

/**
 * The pragmatic list of which elements a paragraph may not contain
 */

EnterParagraphs.prototype._pExclusions =
  /^(address|blockquote|body|dd|div|dl|dt|fieldset|form|h1|h2|h3|h4|h5|h6|hr|li|noscript|ol|p|pre|table|ul)$/i;

/**
 * elements which may contain a paragraph
 */

EnterParagraphs.prototype._pContainers =
  /^(body|del|div|fieldset|form|ins|map|noscript|object|td|th)$/i;

/**
 * Elements which may not contain paragraphs, and would prefer a break to being split
 */

EnterParagraphs.prototype._pBreak = /^(address|pre|blockquote)$/i;

/**
 * Elements which may not contain children
 */

EnterParagraphs.prototype._permEmpty =
  /^(area|base|basefont|br|col|frame|hr|img|input|isindex|link|meta|param)$/i;

/**
 * Elements which count as content, as distinct from whitespace or containers
 */

EnterParagraphs.prototype._elemSolid =
  /^(applet|br|button|hr|img|input|table)$/i;

/**
 * Elements which should get a new P, before or after, when enter is pressed at either end
 */

EnterParagraphs.prototype._pifySibling =
  /^(address|blockquote|del|div|dl|fieldset|form|h1|h2|h3|h4|h5|h6|hr|ins|map|noscript|object|ol|p|pre|table|ul|)$/i;
EnterParagraphs.prototype._pifyForced = /^(ul|ol|dl|table)$/i;

/**
 * Elements which should get a new P, before or after a close parent, when enter is pressed at either end
 */

EnterParagraphs.prototype._pifyParent = /^(dd|dt|li|td|th|tr)$/i;

// ---------------------------------------------------------------------

/**
 * EnterParagraphs Constructor
 */

function EnterParagraphs(editor) {
  this.editor = editor;

  // hook into the event handler to intercept key presses if we are using
  // gecko (Mozilla/FireFox)
  if (Xinha.is_gecko) {
    this.onKeyPress = this.__onKeyPress;
  }
} // end of constructor.

// ------------------------------------------------------------------

/**
 * name member for debugging
 *
 * This member is used to identify objects of this class in debugging
 * messages.
 */
EnterParagraphs.prototype.name = "EnterParagraphs";

/**
 * Gecko's a bit lacking in some odd ways...
 */
EnterParagraphs.prototype.insertAdjacentElement = function (ref, pos, el) {
  if (pos == "BeforeBegin") {
    ref.parentNode.insertBefore(el, ref);
  } else if (pos == "AfterEnd") {
    ref.nextSibling
      ? ref.parentNode.insertBefore(el, ref.nextSibling)
      : ref.parentNode.appendChild(el);
  } else if (pos == "AfterBegin" && ref.firstChild) {
    ref.insertBefore(el, ref.firstChild);
  } else if (pos == "BeforeEnd" || pos == "AfterBegin") {
    ref.appendChild(el);
  }
}; // end of insertAdjacentElement()

// ----------------------------------------------------------------

/**
 * Passes a global parent node or document fragment to forEachNode
 *
 * @param root node root node to start search from.
 * @param mode string function to apply to each node.
 * @param direction string traversal direction "ltr" (left to right) or "rtl" (right_to_left)
 * @param init boolean
 */

EnterParagraphs.prototype.forEachNodeUnder = function (
  root,
  mode,
  direction,
  init
) {
  // Identify the first and last nodes to deal with
  var start, end;

  // nodeType 11 is DOCUMENT_FRAGMENT_NODE which is a container.
  if (root.nodeType == 11 && root.firstChild) {
    start = root.firstChild;
    end = root.lastChild;
  } else {
    start = end = root;
  }
  // traverse down the right hand side of the tree getting the last child of the last
  // child in each level until we reach bottom.
  while (end.lastChild) {
    end = end.lastChild;
  }

  return this.forEachNode(start, end, mode, direction, init);
}; // end of forEachNodeUnder()

// -----------------------------------------------------------------------

/**
 * perform a depth first descent in the direction requested.
 *
 * @param left_node node "start node"
 * @param right_node node "end node"
 * @param mode string function to apply to each node. cullids or emptyset.
 * @param direction string traversal direction "ltr" (left to right) or "rtl" (right_to_left)
 * @param init boolean or object.
 */

EnterParagraphs.prototype.forEachNode = function (
  left_node,
  right_node,
  mode,
  direction,
  init
) {
  // returns "Brother" node either left or right.
  var getSibling = function (elem, direction) {
    return direction == "ltr" ? elem.nextSibling : elem.previousSibling;
  };

  var getChild = function (elem, direction) {
    return direction == "ltr" ? elem.firstChild : elem.lastChild;
  };

  var walk, lookup, fnReturnVal;

  // FIXME: init is a boolean in the emptyset case and an object in
  // the cullids case. Used inconsistently.

  var next_node = init;

  // used to flag having reached the last node.

  var done_flag = false;

  // loop ntil we've hit the last node in the given direction.
  // if we're going left to right that's the right_node and visa-versa.

  while ((walk != direction) == "ltr" ? right_node : left_node) {
    // on first entry, walk here is null. So this is how
    // we prime the loop with the first node.

    if (!walk) {
      walk = direction == "ltr" ? left_node : right_node;
    } else {
      // is there a child node?

      if (getChild(walk, direction)) {
        // descend down into the child.

        walk = getChild(walk, direction);
      } else {
        // is there a sibling node on this level?

        if (getSibling(walk, direction)) {
          // move to the sibling.
          walk = getSibling(walk, direction);
        } else {
          lookup = walk;

          // climb back up the tree until we find a level where we are not the end
          // node on the level (i.e. that we have a sibling in the direction
          // we are searching) or until we reach the end.

          while (
            !getSibling(lookup, direction) &&
            lookup != (direction == "ltr" ? right_node : left_node)
          ) {
            lookup = lookup.parentNode;
          }

          // did we find a level with a sibling?

          // walk = ( lookup.nextSibling ? lookup.nextSibling : lookup ) ;

          walk = getSibling(lookup, direction)
            ? getSibling(lookup, direction)
            : lookup;
        }
      }
    } // end of else walk.

    // have we reached the end? either as a result of the top while loop or climbing
    // back out above.

    done_flag = walk == (direction == "ltr" ? right_node : left_node);

    // call the requested function on the current node. Functions
    // return an array.
    //
    // Possible functions are _fenCullIds, _fenEmptySet
    //
    // The situation is complicated by the fact that sometimes we want to
    // return the base node and sometimes we do not.
    //
    // next_node can be an object (this.takenIds), a node (text, el, etc) or false.

    switch (mode) {
      case "cullids":
        fnReturnVal = this._fenCullIds(walk, next_node);
        break;

      case "find_fill":
        fnReturnVal = this._fenEmptySet(walk, next_node, mode, done_flag);
        break;

      case "find_cursorpoint":
        fnReturnVal = this._fenEmptySet(walk, next_node, mode, done_flag);
        break;
    }

    // If this node wants us to return, return next_node

    if (fnReturnVal[0]) {
      return fnReturnVal[1];
    }

    // are we done with the loop?

    if (done_flag) {
      break;
    }

    // Otherwise, pass to the next node

    if (fnReturnVal[1]) {
      next_node = fnReturnVal[1];
    }
  } // end of while loop

  return false;
}; // end of forEachNode()

// -------------------------------------------------------------------

/**
 * Find a post-insertion node, only if all nodes are empty, or the first content
 *
 * @param node node current node beinge examined.
 * @param next_node node next node to be examined.
 * @param node string "find_fill" or "find_cursorpoint"
 * @param last_flag boolean is this the last node?
 */

EnterParagraphs.prototype._fenEmptySet = function (
  node,
  next_node,
  mode,
  last_flag
) {
  // Mark this if it's the first base

  if (!next_node && !node.firstChild) {
    next_node = node;
  }

  // Is it an element node and is it considered content? (br, hr, etc)
  // or is it a text node that is not just whitespace?
  // or is it not an element node and not a text node?

  if (
    (node.nodeType == 1 && this._elemSolid.test(node.nodeName)) ||
    (node.nodeType == 3 && !this._whiteSpace.test(node.nodeValue)) ||
    (node.nodeType != 1 && node.nodeType != 3)
  ) {
    switch (mode) {
      case "find_fill":
        // does not return content.

        return new Array(true, false);
        break;

      case "find_cursorpoint":
        // returns content

        return new Array(true, node);
        break;
    }
  }

  // In either case (fill or findcursor) we return the base node. The avoids
  // problems in terminal cases (beginning or end of document or container tags)

  if (last_flag) {
    return new Array(true, next_node);
  }

  return new Array(false, next_node);
}; // end of _fenEmptySet()

// ------------------------------------------------------------------------------

/**
 * remove duplicate Id's.
 *
 * @param ep_ref enterparagraphs reference to enterparagraphs object
 */

EnterParagraphs.prototype._fenCullIds = function (ep_ref, node, pong) {
  // Check for an id, blast it if it's in the store, otherwise add it

  if (node.id) {
    pong[node.id] ? (node.id = "") : (pong[node.id] = true);
  }

  return new Array(false, pong);
};

// ---------------------------------------------------------------------------------

/**
 * Grabs a range suitable for paragraph stuffing
 *
 * @param rng Range
 * @param search_direction string "left" or "right"
 *
 * @todo check blank node issue in roaming loop.
 */

EnterParagraphs.prototype.processSide = function (rng, search_direction) {
  var next = function (element, search_direction) {
    return search_direction == "left"
      ? element.previousSibling
      : element.nextSibling;
  };

  var node = search_direction == "left" ? rng.startContainer : rng.endContainer;
  var offset = search_direction == "left" ? rng.startOffset : rng.endOffset;
  var roam,
    start = node;

  // Never start with an element, because then the first roaming node might
  // be on the exclusion list and we wouldn't know until it was too late

  while (start.nodeType == 1 && !this._permEmpty.test(start.nodeName)) {
    start = offset ? start.lastChild : start.firstChild;
  }

  // Climb the tree, left or right, until our course of action presents itself
  //
  // if roam is NULL try start.
  // if roam is NOT NULL, try next node in our search_direction
  // If that node is NULL, get our parent node.
  //
  // If all the above turns out NULL end the loop.
  //
  // FIXME: gecko (firefox 1.0.3) - enter "test" into an empty document and press enter.
  // sometimes this loop finds a blank text node, sometimes it doesn't.

  while (
    (roam = roam
      ? next(roam, search_direction)
        ? next(roam, search_direction)
        : roam.parentNode
      : start)
  ) {
    // next() is an inline function defined above that returns the next node depending
    // on the direction we're searching.

    if (next(roam, search_direction)) {
      // If the next sibling's on the exclusion list, stop before it

      if (this._pExclusions.test(next(roam, search_direction).nodeName)) {
        return this.processRng(
          rng,
          search_direction,
          roam,
          next(roam, search_direction),
          search_direction == "left" ? "AfterEnd" : "BeforeBegin",
          true,
          false
        );
      }
    } else {
      // If our parent's on the container list, stop inside it

      if (this._pContainers.test(roam.parentNode.nodeName)) {
        return this.processRng(
          rng,
          search_direction,
          roam,
          roam.parentNode,
          search_direction == "left" ? "AfterBegin" : "BeforeEnd",
          true,
          false
        );
      } else if (this._pExclusions.test(roam.parentNode.nodeName)) {
        // chop without wrapping

        if (this._pBreak.test(roam.parentNode.nodeName)) {
          return this.processRng(
            rng,
            search_direction,
            roam,
            roam.parentNode,
            search_direction == "left" ? "AfterBegin" : "BeforeEnd",
            false,
            search_direction == "left" ? true : false
          );
        } else {
          // the next(roam,search_direction) in this call is redundant since we know it's false
          // because of the "if next(roam,search_direction)" above.
          //
          // the final false prevents this range from being wrapped in <p>'s most likely
          // because it's already wrapped.

          return this.processRng(
            rng,
            search_direction,
            (roam = roam.parentNode),
            next(roam, search_direction)
              ? next(roam, search_direction)
              : roam.parentNode,
            next(roam, search_direction)
              ? search_direction == "left"
                ? "AfterEnd"
                : "BeforeBegin"
              : search_direction == "left"
              ? "AfterBegin"
              : "BeforeEnd",
            false,
            false
          );
        }
      }
    }
  }
}; // end of processSide()

// ------------------------------------------------------------------------------

/**
 * processRng - process Range.
 *
 * Neighbour and insertion identify where the new node, roam, needs to enter
 * the document; landmarks in our selection will be deleted before insertion
 *
 * @param rn Range original selected range
 * @param search_direction string Direction to search in.
 * @param roam node
 * @param insertion string may be AfterBegin of BeforeEnd
 * @return array
 */

EnterParagraphs.prototype.processRng = function (
  rng,
  search_direction,
  roam,
  neighbour,
  insertion,
  pWrap,
  preBr
) {
  var node = search_direction == "left" ? rng.startContainer : rng.endContainer;
  var offset = search_direction == "left" ? rng.startOffset : rng.endOffset;

  // Define the range to cut, and extend the selection range to the same boundary

  var editor = this.editor;
  var newRng = editor._doc.createRange();

  newRng.selectNode(roam);
  // extend the range in the given direction.

  if (search_direction == "left") {
    newRng.setEnd(node, offset);
    rng.setStart(newRng.startContainer, newRng.startOffset);
  } else if (search_direction == "right") {
    newRng.setStart(node, offset);
    rng.setEnd(newRng.endContainer, newRng.endOffset);
  }
  // Clone the range and remove duplicate ids it would otherwise produce

  var cnt = newRng.cloneContents();

  // in this case "init" is an object not a boolen.

  this.forEachNodeUnder(cnt, "cullids", "ltr", this.takenIds, false, false);

  // Special case, for inserting paragraphs before some blocks when caret is at
  // their zero offset.
  //
  // Used to "open up space" in front of a list, table. Usefull if the list is at
  // the top of the document. (otherwise you'd have no way of "moving it down").

  var pify, pifyOffset, fill;
  pify =
    search_direction == "left"
      ? newRng.endContainer.nodeType == 3
        ? true
        : false
      : newRng.startContainer.nodeType == 3
      ? false
      : true;
  pifyOffset = pify ? newRng.startOffset : newRng.endOffset;
  pify = pify ? newRng.startContainer : newRng.endContainer;

  if (
    this._pifyParent.test(pify.nodeName) &&
    pify.parentNode.childNodes.item(0) == pify
  ) {
    while (!this._pifySibling.test(pify.nodeName)) {
      pify = pify.parentNode;
    }
  }

  // NODE TYPE 11 is DOCUMENT_FRAGMENT NODE
  // I do not profess to understand any of this, simply applying a patch that others say is good - ticket:446
  if (cnt.nodeType == 11 && !cnt.firstChild) {
    if (
      pify.nodeName != "BODY" ||
      (pify.nodeName == "BODY" && pifyOffset != 0)
    ) {
      //WKR: prevent body tag in empty doc
      cnt.appendChild(editor._doc.createElement(pify.nodeName));
    }
  }

  // YmL: Added additional last parameter for fill case to work around logic
  // error in forEachNode()

  fill = this.forEachNodeUnder(cnt, "find_fill", "ltr", false);

  if (
    fill &&
    this._pifySibling.test(pify.nodeName) &&
    (pifyOffset == 0 ||
      (pifyOffset == 1 && this._pifyForced.test(pify.nodeName)))
  ) {
    roam = editor._doc.createElement("p");
    roam.innerHTML = "&nbsp;";

    // roam = editor._doc.createElement('p');
    // roam.appendChild(editor._doc.createElement('br'));

    // for these cases, if we are processing the left hand side we want it to halt
    // processing instead of doing the right hand side. (Avoids adding another <p>&nbsp</p>
    // after the list etc.

    if (search_direction == "left" && pify.previousSibling) {
      return new Array(pify.previousSibling, "AfterEnd", roam);
    } else if (search_direction == "right" && pify.nextSibling) {
      return new Array(pify.nextSibling, "BeforeBegin", roam);
    } else {
      return new Array(
        pify.parentNode,
        search_direction == "left" ? "AfterBegin" : "BeforeEnd",
        roam
      );
    }
  }

  // If our cloned contents are 'content'-less, shove a break in them

  if (fill) {
    // Ill-concieved?
    //
    // 3 is a TEXT node and it should be empty.
    //

    if (fill.nodeType == 3) {
      // fill = fill.parentNode;

      fill = editor._doc.createDocumentFragment();
    }

    if (
      (fill.nodeType == 1 && !this._elemSolid.test()) ||
      fill.nodeType == 11
    ) {
      // FIXME:/CHECKME: When Xinha is switched from WYSIWYG to text mode
      // Xinha.getHTMLWrapper() will strip out the trailing br. Not sure why.

      // fill.appendChild(editor._doc.createElement('br'));

      var pterminator = editor._doc.createElement("p");
      pterminator.innerHTML = "&nbsp;";

      fill.appendChild(pterminator);
    } else {
      // fill.parentNode.insertBefore(editor._doc.createElement('br'),fill);

      var pterminator = editor._doc.createElement("p");
      pterminator.innerHTML = "&nbsp;";

      fill.parentNode.insertBefore(parentNode, fill);
    }
  }

  // YmL: If there was no content replace with fill
  // (previous code did not use fill and we ended up with the
  // <p>test</p><p></p> because Gecko was finding two empty text nodes
  // when traversing on the right hand side of an empty document.

  if (fill) {
    roam = fill;
  } else {
    // And stuff a shiny new object with whatever contents we have

    roam =
      pWrap || (cnt.nodeType == 11 && !cnt.firstChild)
        ? editor._doc.createElement("p")
        : editor._doc.createDocumentFragment();
    roam.appendChild(cnt);
  }

  if (preBr) {
    roam.appendChild(editor._doc.createElement("br"));
  }
  // Return the nearest relative, relative insertion point and fragment to insert

  return new Array(neighbour, insertion, roam);
}; // end of processRng()

// ----------------------------------------------------------------------------------

/**
 * are we an <li> that should be handled by the browser?
 *
 * there is no good way to "get out of" ordered or unordered lists from Javascript.
 * We have to pass the onKeyPress 13 event to the browser so it can take care of
 * getting us "out of" the list.
 *
 * The Gecko engine does a good job of handling all the normal <li> cases except the "press
 * enter at the first position" where we want a <p>&nbsp</p> inserted before the list. The
 * built-in behavior is to open up a <li> before the current entry (not good).
 *
 * @param rng Range range.
 */

EnterParagraphs.prototype.isNormalListItem = function (rng) {
  var node, listNode;

  node = rng.startContainer;

  if (
    typeof node.nodeName != "undefined" &&
    node.nodeName.toLowerCase() == "li"
  ) {
    // are we a list item?

    listNode = node;
  } else if (
    typeof node.parentNode != "undefined" &&
    typeof node.parentNode.nodeName != "undefined" &&
    node.parentNode.nodeName.toLowerCase() == "li"
  ) {
    // our parent is a list item.

    listNode = node.parentNode;
  } else {
    // neither we nor our parent are a list item. this is not a normal
    // li case.
    var listNode = this.editor._getFirstAncestorForNodeAndWhy(node, ["li"])[0];
    if (typeof listNode == "undefined" || !listNode) {
      return false;
    }
  }

  // at this point we have a listNode. Is it the first list item?

  if (!listNode.previousSibling) {
    // are we on the first character of the first li?

    if (rng.startOffset == 0) {
      return false;
    }
  }
  return true;
}; // end of isNormalListItem()

// ----------------------------------------------------------------------------------
/**
 * Called when a key is pressed in the editor
 */

EnterParagraphs.prototype.__onKeyPress = function (ev) {
  // If they've hit enter and shift is not pressed, handle it

  if (
    ev.keyCode == 13 &&
    !ev.shiftKey &&
    this.editor._iframe.contentWindow.getSelection
  ) {
    return this.handleEnter(ev);
  }
}; // end of _onKeyPress()

// -----------------------------------------------------------------------------------

/**
 * Handles the pressing of an unshifted enter for Gecko
 */

EnterParagraphs.prototype.handleEnter = function (ev) {
  var cursorNode;

  // Grab the selection and associated range

  var sel = this.editor.getSelection();
  var rng = this.editor.createRange(sel);

  // if we are at the end of a list and the node is empty let the browser handle
  // it to get us out of the list.

  if (this.isNormalListItem(rng)) {
    return true;
  }

  // as far as I can tell this isn't actually used.

  this.takenIds = new Object();

  // Grab ranges for document re-stuffing, if appropriate
  //
  // pStart and pEnd are arrays consisting of
  // [0] neighbor node
  // [1] insertion type
  // [2] roam

  var pStart = this.processSide(rng, "left");

  var pEnd = this.processSide(rng, "right");

  // used to position the cursor after insertion.

  cursorNode = pEnd[2];

  // Get rid of everything local to the selection

  sel.removeAllRanges();
  rng.deleteContents();

  // Grab a node we'll have after insertion, since fragments will be lost
  //
  // we'll use this to position the cursor.

  var holdEnd = this.forEachNodeUnder(
    cursorNode,
    "find_cursorpoint",
    "ltr",
    false,
    true
  );

  if (!holdEnd) {
    alert("INTERNAL ERROR - could not find place to put cursor after ENTER");
  }

  // Insert our carefully chosen document fragments

  if (pStart) {
    this.insertAdjacentElement(pStart[0], pStart[1], pStart[2]);
  }

  if (pEnd && pEnd.nodeType != 1) {
    this.insertAdjacentElement(pEnd[0], pEnd[1], pEnd[2]);
  }

  // Move the caret in front of the first good text element

  if (holdEnd && this._permEmpty.test(holdEnd.nodeName)) {
    var prodigal = 0;
    while (holdEnd.parentNode.childNodes.item(prodigal) != holdEnd) {
      prodigal++;
    }

    sel.collapse(holdEnd.parentNode, prodigal);
  } else {
    // holdEnd might be false.

    try {
      sel.collapse(holdEnd, 0);

      // interestingly, scrollToElement() scroll so the top if holdEnd is a text node.

      if (holdEnd.nodeType == 3) {
        holdEnd = holdEnd.parentNode;
      }

      this.editor.scrollElementIntoViewport(holdEnd);
      //this.editor.scrollToElement(holdEnd);
    } catch (e) {
      // we could try to place the cursor at the end of the document.
    }
  }

  this.editor.updateToolbar();

  Xinha._stopEvent(ev);

  return true;
}; // end of handleEnter()

// END
