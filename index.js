#!/usr/bin/env node
const ExpenseTracker = require('./expense-tracker');

const tracker = new ExpenseTracker();
const [, , command, ...args] = process.argv;

function printUsage() {
  console.log('Expense Tracker');
  console.log('Usage:');
  console.log('  node index.js init <budget>');
  console.log('  node index.js add <amount> <category> [note]');
  console.log('  node index.js list');
  console.log('  node index.js summary');
}

try {
  switch (command) {
    case 'init': {
      const [budget] = args;
      tracker.initBudget(budget);
      console.log(`Budget initialized: ${Number(budget)}`);
      break;
    }
    case 'add': {
      const [amount, category, ...noteParts] = args;
      const note = noteParts.join(' ');
      const expense = tracker.addExpense(amount, category, note);
      console.log(`Expense added: ${expense.amount} (${expense.category})`);
      break;
    }
    case 'list': {
      const expenses = tracker.listExpenses();
      if (expenses.length === 0) {
        console.log('No expenses recorded yet.');
        break;
      }

      expenses.forEach((expense, index) => {
        console.log(
          `${index + 1}. ${expense.category} - ${expense.amount} (${expense.note || 'No note'}) [${expense.createdAt}]`
        );
      });
      break;
    }
    case 'summary': {
      const summary = tracker.getSummary();
      console.log(`Budget: ${summary.budget}`);
      console.log(`Total spent: ${summary.totalSpent}`);
      console.log(`Remaining budget: ${summary.remainingBudget}`);
      console.log(`Number of expenses: ${summary.expenseCount}`);
      break;
    }
    default:
      printUsage();
  }
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}
