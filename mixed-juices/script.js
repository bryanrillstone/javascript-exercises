// Exercism - Mixed Juice

// Task 1 - Determine how long it takes to mix a juice

timeToMixJuice('Tropical Island');
timeToMixJuice('Berries & Lime');

function timeToMixJuice(name) {
    let prepTime;
    switch (name) {
      case 'Pure Strawberry Joy':
        prepTime = 0.5;
        break;
      case 'Energizer':
      case 'Green Garden':
        prepTime = 1.5;
        break;
      case 'Tropical Island':
        prepTime = 3;
        break;
      case 'All or Nothing':
        prepTime = 5;
        break;
      default:
        prepTime = 2.5;
    }
    return prepTime;
  }

// Task 2 - Replenish the lime wedge supply

limesToCut(25, ['small', 'small', 'large', 'medium', 'small']);

function limesToCut(wedgesNeeded, limes) {
    let limesNeeded = 0;
    let wedges = 0;
    let wedgesCut = 0;
    while ((limesNeeded < limes.length) && (wedgesCut <= wedgesNeeded)) {
    switch (limes[limesNeeded]) {
      case 'small':
        wedges = 4;
        break;
      case 'medium':
        wedges = 8;
        break;
      case 'large':
        wedges = 10;
        break;
    } 
    wedgesCut += wedges;
        if (wedgesNeeded !== 0) {
            limesNeeded++;
        }
} 
return limesNeeded;
}

// Task 3 - Finish the shift

remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']);
remainingOrders(13, [
  'Pure Strawberry Joy',
  'Pure Strawberry Joy',
  'Vitality',
  'Tropical Island',
  'All or Nothing',
  'All or Nothing',
  'All or Nothing',
  'Green Garden',
  'Limetime',
]);

// v01

function remainingOrders(timeLeft, orders) {
    let prepTime = 0;
    let increm = 0;
    while (timeLeft < 0) {
    switch (orders[increm]) {
        case 'Pure Strawberry Joy':
            prepTime = 0.5;
            break;
        case 'Energizer':
        case 'Green Garden':
            prepTime = 1.5;
            break;
        case 'Tropical Island':
            prepTime = 3;
            break;
        case 'All or Nothing':
            prepTime = 5;
            break;
        default:
            prepTime = 2.5;
    } 
    timeLeft -= prepTime;
        if (timeLeft !== 0) {
            increm++;
            orders.shift();
        }
} 
return orders;
}

// v02

function remainingOrders(timeLeft, orders) {
    while (timeLeft > 0) {
    timeLeft -= timeToMixJuice(orders[0]);
    orders.shift();
} 
return orders;
}
