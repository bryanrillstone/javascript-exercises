// Exercism - Fruit Picker

// Task 1 - Check if the grocer's service is online

function isServiceOnline() {
    return checkStatus(status => status == 'ONLINE');
  }

// Task 2 - See if the grocer has some fruit

function pickFruit(variety, quantity, callback) {
    return checkInventory(({variety, quantity}), callback);
  }

// Task 3 - Create a callback to buy fruit if the inventory is available

function purchaseInventoryIfAvailable(err, isAvailable) {
    if (err) throw Error(err);
    return isAvailable ? 'PURCHASE' : 'NOOP';
  }

// Task 4 - Put it all together

function pickAndPurchaseFruit(variety, quantity) {
    return pickFruit(variety, quantity, purchaseInventoryIfAvailable);
  }