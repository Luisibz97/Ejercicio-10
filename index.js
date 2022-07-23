import { subtraction, sums } from "./controller.js";
import chalk from 'chalk'

const logGreen = chalk.green

subtraction( 1, 2 )

sums( 4, 5 )


console.log(logGreen(subtraction(sums(1, 2), sums(4, 5))))