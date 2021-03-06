// works great on about:dino

// 1. save this file to your snippets.
// 2. load about:dino
// 3. evaluate the snippet
// 4. hit up arrow to trigger the game.
// 5. profit

(function() {
  perfnow = performance.now;
  // slow down performance.now so the dino game is Slooooooooww
  performance.now = (...args) => perfnow.call(performance) / 2.5;

  window.outascii = window.outascii || document.createElement('textarea');
  outascii.style.cssText = `
position: absolute;
top: 0px;
font-size: 8px;
width: 760px;
height: 363px;
z-index: 10;
font-family: monospace;
background: #000000e0;
color: #0bff0b;
right: 0;
`;
  document.body.append(outascii);

  let prevFrame = '';
  const sourceCanvas = document.querySelector('canvas');
  const backingCanvas = document.createElement('canvas');
  const backcontext = backingCanvas.getContext('2d');

  const scalingFactor = 6; // bigger is smaller.
  const refreshRateInMs = 175;

  // string length of 13 is expected below.
  const ascii = '@GLftli;:,.  '
    .split()
    .reverse()
    .join('');

  // might want to defer the first call to DCL or something..
  render(sourceCanvas, backcontext, sourceCanvas.offsetWidth / 4, sourceCanvas.offsetHeight / 4);

  function render(sourceCanvas, backcontext, w, h) {
    // Draw source canvas onto the smaller backing canvas
    backcontext.fillStyle = 'white';
    backcontext.fillRect(0, 0, w, h);
    backcontext.drawImage(sourceCanvas, 0, 0, w, h);

    // Grab the pixel data from the backing canvas
    var data = backcontext.getImageData(0, 0, w, h).data;

    var chars = '',
      px = 0,
      pxlen = w * h * 4;

    // Loop through the pixels
    for (var ih = 0; ih < h; ih++) {
      for (var iw = 0; iw < w; iw++) {
        // Convert the color into an appropriate character based on luminance
        // magic numbers depend on ascii string length of 13, so scale accordingly
        chars += ascii[(62 * data[px++] + 123 * data[px++] + 23 * data[px++]) >>> 12];
        px++; // don't need alpha
      }
      chars += '\n';
    }

    frame = `/*
${chars}
*/
//# sourceURL=foo.js`;

    if (prevFrame !== frame) {
      prevFrame = frame;
      eval(frame);
    }

    // Write the char data into the output divs
    outascii.textContent = chars;

    // Start over!
    setTimeout(_ => {
      render(sourceCanvas, backcontext, w, h);
    }, refreshRateInMs);
  }
})();
