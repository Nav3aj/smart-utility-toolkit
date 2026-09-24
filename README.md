
```markdown
# Smart Utility Toolkit

*Course:* Web Dev III (Node.js & Express Backend)  
*Unit:* (Unit–1) Lab Assignment 1 — Node.js core modules (`process`, `http`, `fs`, `crypto`)

A collection of small CLI/server utilities built using only Node.js *built-in core modules* — no npm packages, no Express, no database.

## Project Structure

```text
smart-utility-toolkit/
├── calculator.js         # CLI calculator (process.argv)
├── app.js                # demonstrates importing & reusing custom modules
├── server.js             # HTTP server with /, /about, /contact routes + 404
├── fileManager.js        # Create/Read/Update/Delete using fs module
├── dice.js               # random dice roller using crypto module
├── Execution Flow.js     # demonstrates Node.js event loop & async execution order
├── modules/
│   ├── isEven.js          # custom module (module.exports = function)
│   └── logger.js          # custom module (module.exports = { fn1, fn2 })
└── README.md

```

## How to run each part

```bash
# 1. CLI calculator
node calculator.js add 10 5
node calculator.js subtract 10 5
node calculator.js multiply 10 5
node calculator.js divide 10 5
node calculator.js modulus 10 5 # bonus operation
node calculator.js power 2 5   # bonus operation

# 2. Custom module reuse demo (isEven + logger)
node app.js

# 3. HTTP server — then visit http://localhost:3000/, /about, /contact
node server.js

# 4. File manager (create -> read -> update -> delete, with graceful error handling)
node fileManager.js

# 5. Dice roller (crypto-based randomness, saves history to dice-history.txt)
node dice.js

# 6. Execution Flow demo (demonstrates asynchronous execution & event loop)
node "Execution Flow.js"

```

## What each file demonstrates

| File | Core module / concept |
| --- | --- |
| `calculator.js` | `process.argv` for CLI input, `switch` for operations, error handling for invalid input/division by zero |
| `modules/isEven.js` | `module.exports` — exporting a single function |
| `modules/logger.js` | `module.exports = {}` — exporting multiple named functions, plus timestamped + color-coded logs |
| `app.js` | `require()` — importing and reusing your own custom modules |
| `server.js` | `http` module — creating a server, routing by `req.url`, status codes, 404 handling |
| `fileManager.js` | `fs` module — async CRUD (`writeFile` → `readFile` → `appendFile` → `unlink`) with graceful error handling for a missing file |
| `dice.js` | `crypto.randomInt()` for secure randomness, looped rolls, roll history saved to a text file |
| `Execution Flow.js` | Demonstrates the non-blocking asynchronous event loop, microtask/macrotask timing, and execution order in Node.js |

## Bonus features included

* ✅ Colored terminal output (ANSI escape codes) in `logger.js`
* ✅ Timestamp logs in the logger module
* ✅ Calculator supports extra operations (`modulus`, `power`) beyond the required four
* ✅ Dice roll history stored in `dice-history.txt`
* ✅ Graceful handling of a missing-file error in `fileManager.js`
* ✅ Asynchronous execution flow demonstration (`Execution Flow.js`)

## Restrictions followed

* No external npm packages
* No Express.js or third-party frameworks
* No database integration
* Only Node.js built-in core modules used (`process`, `http`, `fs`, `crypto`)
* All programs run via terminal commands (`node <file>.js`)

```

```
