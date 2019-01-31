/**
 * styleExists
 *
 * Check whether the given style exist
 */

const fs = require("fs");
const styles = fs.readdirSync("src/styles/sass/core");

function styleExists(style) {
  return styles.indexOf(style) >= 0;
}

module.exports = styleExists;
