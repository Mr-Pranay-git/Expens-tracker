# Expens-tracker

A simple expense tracker that records expenses and keeps track of money usage against a budget.

## Features

- Initialize a budget
- Add expenses with category and optional note
- List recorded expenses
- View money usage summary (spent, remaining, count)

## Usage

```bash
node index.js init 5000
node index.js add 250 Food "Dinner"
node index.js add 100 Transport "Bus pass"
node index.js list
node index.js summary
```

By default, data is saved in `expenses.json` in the repository root.
