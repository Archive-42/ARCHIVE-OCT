var mkdirp = require("../");
var path = require("path");
var fs = require("fs");
var exists = fs.exists || path.exists;
var test = require("tap").test;
var _0777 = parseInt("0777", 8);
var _0755 = parseInt("0755", 8);

test("sync", function (t) {
  t.plan(4);
  var x = Math.floor(Math.random() * Math.pow(16, 4)).toString(16);
  var y = Math.floor(Math.random() * Math.pow(16, 4)).toString(16);
  var z = Math.floor(Math.random() * Math.pow(16, 4)).toString(16);

  var file = "/tmp/" + [x, y, z].join("/");

  try {
    mkdirp.sync(file, _0755);
  } catch (err) {
    t.fail(err);
    return t.end();
  }

  exists(file, function (ex) {
    t.ok(ex, "file created");
    fs.stat(file, function (err, stat) {
      t.ifError(err);
      t.equal(stat.mode & _0777, _0755);
      t.ok(stat.isDirectory(), "target not a directory");
    });
  });
});
