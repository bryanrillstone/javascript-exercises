// Exercism - Lasagna Maker

// Task 1 - Determine whether the lasagna is done

function cookingStatus(timeRemaining) {
    if ((timeRemaining  === null) || (timeRemaining === undefined)) {
      return 'You forgot to set the timer.'
    }
    return (timeRemaining == 0) ? 'Lasagna is done.' : 'Not done, please wait.';
  }

//   Task 2 - Estimate the preparation time

export function preparationTime(layers, prepTime = 2) {
    return layers.length * prepTime;
  }

// Task 3 - Compute the amounts of noodles and sauce needed

function quantities(arr) {
    let countNoodles = 0;
    let countSauce = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == 'noodles') {
        countNoodles++;
      }
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == 'sauce') {
        countSauce++;
      }
    }
    return {
      noodles: countNoodles * 50,
      sauce: countSauce * 0.2
    }
  }

// Task 4 - Add the secret ingredient

function addSecretIngredient(a,b) {
    b[b.length] = a[a.length - 1];
  }

// Task 5 - Scale the recipe

function scaleRecipte(a,b) {
    let scaleFacter = (b/2);
    let scaledRecipe = {};
    for (const key in a) {
        scaledRecipe[key] = a[key] * scaleFacter;
    };
    return scaledRecipe;
}