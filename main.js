#! usr/bin/env node
import inquirer from "inquirer";
// import chalkAnimation from "chalk-animation";
import chalk from "chalk";
// import { type } from "os";
console.log(chalk.yellow("Welcome in My Bank ATM \n PLease enter your user name and press Enter "));
const requiredthings = await inquirer.prompt([{
        message: "Please Enter Your User Name For Verification",
        type: "string",
        name: "userName"
    }, {
        message: "Please Enter  Your Pin Code",
        type: "number",
        name: "userID"
    }, {
        message: "Please Select Your Account Mode",
        type: "list",
        choices: ["savings", "current"],
        name: "accmode"
    }, {
        message: "Please Select Your Mode",
        type: "list",
        choices: ["cash Withdraw", "deposit cash", "check their account balance"],
        name: "mode",
    }, {
        message: "select your cash range",
        type: "list",
        choices: [500, 1000, 2000, 4000, 5000, "any other amount"],
        name: "amount",
        when(requiredthings) {
            return requiredthings.mode === "cash Withdraw";
        }
    }, { message: "Enter Your Amount",
        type: "number",
        name: "amount1",
        when(requiredthings) {
            return requiredthings.mode === "deposit cash";
        }
    }, {
        message: "Enter Your Amount",
        type: "number",
        name: "otheramount",
        when(requiredthings) {
            return requiredthings.amount === "any other amount";
        }
    }]);
let balance = 10000;
if (requiredthings.otheramount) {
    let remainingBalance = balance - requiredthings.otheramount;
    console.log(chalk.bgCyan(`your remaining balance is ${remainingBalance} Thank You for using My bank atm`));
}
else if (requiredthings.mode === "cash Withdraw") {
    let remainingBalance = balance - requiredthings.amount;
    console.log(chalk.bgCyan(`your remaining balance is ${remainingBalance} Thank You for using My bank atm`));
}
else if (requiredthings.mode === "deposit cash") {
    let newBalance = (`${requiredthings.amount1 + balance}`);
    console.log(`Your new balance is ${chalk.yellow(newBalance)}`);
}
else if (requiredthings.mode === "check their account balance") {
    console.log(chalk.bgCyan(`Your remaining balance is ${balance}`));
}
else {
    console.log(chalk.red("system down try again later"));
}
