var gulp = require("gulp");
var ncp = require("child_process");

gulp.task("unittest", () => {
  // no-op as there no UTs in the sample
});

gulp.task("functionaltest", () => {
  var webAppUrl,
    indexOfWebAppUrlOption = process.argv.indexOf("--webAppUrl");
  if (indexOfWebAppUrlOption > -1) {
    webAppUrl = process.argv[indexOfWebAppUrlOption + 1];
  }

  process.env["webAppUrl"] = webAppUrl;
  var options = {
    stdio: "inherit",
  };

  var output;
  try {
    output = ncp.execSync("npm test functional_tests/*.js", options);
  } catch (err) {
    process.exit(1);
  }
});
