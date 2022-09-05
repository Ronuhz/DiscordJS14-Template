const chalk = require("chalk");

module.exports = {
  name: "error",
  execute(error) {
    console.log(
      chalk.green(`An error occured with the database connection: ${error}`)
    );
  },
};
