const fs = require('fs');
const os = require('os');
const path = require('path');
const test = require('node:test');
const assert = require('node:assert/strict');

const ExpenseTracker = require('./expense-tracker');

function createTempDataPath() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'expense-tracker-'));
  return path.join(dir, 'expenses.json');
}

test('initBudget stores budget and summary tracks remaining budget', () => {
  const tracker = new ExpenseTracker(createTempDataPath());

  tracker.initBudget(1000);
  tracker.addExpense(200, 'Food', 'Lunch');

  const summary = tracker.getSummary();
  assert.equal(summary.budget, 1000);
  assert.equal(summary.totalSpent, 200);
  assert.equal(summary.remainingBudget, 800);
  assert.equal(summary.expenseCount, 1);
});

test('addExpense rejects invalid amount and missing category', () => {
  const tracker = new ExpenseTracker(createTempDataPath());

  assert.throws(() => tracker.addExpense(0, 'Food'), /greater than 0/);
  assert.throws(() => tracker.addExpense(10, ''), /Category is required/);
});
