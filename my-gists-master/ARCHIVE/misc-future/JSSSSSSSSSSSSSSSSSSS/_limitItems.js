"use strict";
module.exports = function generate__limitItems(it, $keyword, $ruleType) {
  let out = " ";
  const $lvl = it.level;
  const $dataLvl = it.dataLevel;
  const $schema = it.schema[$keyword];
  const $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  const $errSchemaPath = it.errSchemaPath + "/" + $keyword;
  const $breakOnError = !it.opts.allErrors;
  var $errorKeyword;
  const $data = "data" + ($dataLvl || "");
  const $isData = it.opts.$data && $schema && $schema.$data;
  let $schemaValue;
  if ($isData) {
    out +=
      " var schema" +
      $lvl +
      " = " +
      it.util.getData($schema.$data, $dataLvl, it.dataPathArr) +
      "; ";
    $schemaValue = "schema" + $lvl;
  } else {
    $schemaValue = $schema;
  }
  const $op = $keyword == "maxItems" ? ">" : "<";
  out += "if ( ";
  if ($isData) {
    out +=
      " (" +
      $schemaValue +
      " !== undefined && typeof " +
      $schemaValue +
      " != 'number') || ";
  }
  out += " " + $data + ".length " + $op + " " + $schemaValue + ") { ";
  var $errorKeyword = $keyword;
  const $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ""; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out +=
      " { keyword: '" +
      ($errorKeyword || "_limitItems") +
      "' , dataPath: (dataPath || '') + " +
      it.errorPath +
      " , schemaPath: " +
      it.util.toQuotedString($errSchemaPath) +
      " , params: { limit: " +
      $schemaValue +
      " } ";
    if (it.opts.messages !== false) {
      out += " , message: 'should NOT have ";
      if ($keyword == "maxItems") {
        out += "more";
      } else {
        out += "fewer";
      }
      out += " than ";
      if ($isData) {
        out += "' + " + $schemaValue + " + '";
      } else {
        out += "" + $schema;
      }
      out += " items' ";
    }
    if (it.opts.verbose) {
      out += " , schema:  ";
      if ($isData) {
        out += "validate.schema" + $schemaPath;
      } else {
        out += "" + $schema;
      }
      out +=
        "         , parentSchema: validate.schema" +
        it.schemaPath +
        " , data: " +
        $data +
        " ";
    }
    out += " } ";
  } else {
    out += " {} ";
  }
  const __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) {
    /* istanbul ignore if */
    if (it.async) {
      out += " throw new ValidationError([" + __err + "]); ";
    } else {
      out += " validate.errors = [" + __err + "]; return false; ";
    }
  } else {
    out +=
      " var err = " +
      __err +
      ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
  }
  out += "} ";
  if ($breakOnError) {
    out += " else { ";
  }
  return out;
};
