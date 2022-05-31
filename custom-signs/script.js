// Exercism - Custon Signs

// Task 1 - BUild an occasion sign

function buildSign(occasion, name) {
    return `${(occasion == 'Birthday') ? 'Happy Birthday' : 'Happy Anniversary'} ${name}!`
  }

// Task 2 - Build a birthday sign

function buildBirthdaySign(age) {
    return `Happy Birthday! What a ${age >= 50 ? 'mature' : 'young'} fellow you are.`;
  }
// Task 3 - Build a graduation sign

function graduationFor(name, year) {
    return `Congratulations ${name}!
  Class of ${year}`
  }

// Task 4 - Compute the cost of a sign

function costOf(sign, currency) {
    return `Your sign costs ${((sign.length * 2) + 20).toFixed(2)} ${currency}.`
  }

