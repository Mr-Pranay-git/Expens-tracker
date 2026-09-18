const fs = require('fs');
const path = require('path');

class ExpenseTracker {
  constructor(dataFilePath = path.join(process.cwd(), 'expenses.json')) {
    this.dataFilePath = dataFilePath;
  }

  loadData() {
    if (!fs.existsSync(this.dataFilePath)) {
      return { budget: 0, expenses: [] };
    }

    const raw = fs.readFileSync(this.dataFilePath, 'utf-8');
    const parsed = JSON.parse(raw);

    return {
      budget: Number(parsed.budget) || 0,
      expenses: Array.isArray(parsed.expenses) ? parsed.expenses : [],
    };
  }

  saveData(data) {
    fs.writeFileSync(this.dataFilePath, JSON.stringify(data, null, 2));
  }

  initBudget(amount) {
    const budget = Number(amount);
    if (!Number.isFinite(budget) || budget < 0) {
      throw new Error('Budget must be a non-negative number.');
    }

    const data = this.loadData();
    data.budget = budget;
    this.saveData(data);
    return data;
  }

  addExpense(amount, category, note = '') {
    const value = Number(amount);
    if (!Number.isFinite(value) || value <= 0) {
      throw new Error('Expense amount must be greater than 0.');
    }

    if (!category || !String(category).trim()) {
      throw new Error('Category is required.');
    }

    const data = this.loadData();
    const expense = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
      amount: value,
      category: String(category).trim(),
      note: String(note).trim(),
      createdAt: new Date().toISOString(),
    };

    data.expenses.push(expense);
    this.saveData(data);
    return expense;
  }

  listExpenses() {
    return this.loadData().expenses;
  }

  getSummary() {
    const data = this.loadData();
    const totalSpent = data.expenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);

    return {
      budget: data.budget,
      totalSpent,
      remainingBudget: data.budget - totalSpent,
      expenseCount: data.expenses.length,
    };
  }
}

module.exports = ExpenseTracker;
