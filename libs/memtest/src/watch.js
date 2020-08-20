const chalk = require('chalk');

if (require.main === module) {
    console.error(chalk.red(`Starting fake watch mode`));

    for (let index = 0; index < 1000000; index++) {
        console.log(chalk.blue('The quick brown fox jumped over the dogs back'));        
    }

    console.error(chalk.red(`Finished fake watch mode`));
}