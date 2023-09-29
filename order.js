const bubbleMilktea = {
  small: 25,
  medium: 30,
  large: 35,
};

const icedLatte = {
  small: 24,
  medium: 29,
  large: 34,
};

const pineappleJuice = {
  small: 23,
  medium: 28,
  large: 33,
};

function calculatePrice() {
  var price = 0;
  const drink = document.getElementById("selectDrink");
  const size = document.getElementsByName("size");
  if (drink.value) {
    console.log("drink.value", drink.value);
    for (let chosenSize of size) {
      if (chosenSize.checked) {
        switch (drink.value) {
          case "bubbleMilktea":
            price = bubbleMilktea[chosenSize.value];
            break;
          case "pineappleJuice":
            price = pineappleJuice[chosenSize.value];
            break;
          case "pineappleJuice":
            price = pineappleJuice[chosenSize.value];
            break;
          default:
            break;
        }
        console.log("chosenSize", chosenSize.value);
        console.log("price", price);
      }
    }

    console.log(price);

    var priceElement = document.getElementById("price");
    priceElement.textContent = price; //price.toString()
    console.log("priceElement.textContent", priceElement.textContent);
    var priceElement = document.getElementById("price");
    priceElement.textContent = price; //price.toString()
    console.log("priceElement.textContent", priceElement.textContent);
  } else {
    alert("Please select a drink first.");
    for (let chosenSize of size) {
      chosenSize.checked = false;
    }
  }
}

function validateForm() {
  if (
    validateName() &&
    validateDrink() &&
    validateSize() &&
    validateIce() &&
    validateSweetness()
  ) {
    return true;
  } else {
    return false;
  }
}

function validateName() {
  const name = document.getElementById("nameInput");
  if (name.value.trim() == "") {
    alert("Please enter your name.");
    return false;
  }
  return true;
}

function validateDrink() {
  const drink = document.getElementById("selectDrink");
  if (drink.value == "") {
    alert("Please select a drink first.");
    return false;
  }
  return true;
}

function validateSize() {
  const size = document.getElementsByName("size");
  for (let chosenSize of size) {
    if (chosenSize.checked) {
      return true;
    }
  }
  alert("Please select a size.");
  return false;
}

function validateIce() {
  const ice = document.getElementsByName("ice");
  for (let chosenIce of ice) {
    if (chosenIce.checked) {
      return true;
    }
  }
  alert("Please select an ice level.");
  return false;
}

function validateSweetness() {
  const sweetness = document.getElementsByName("sweetness");
  for (let chosenSweetness of sweetness) {
    if (chosenSweetness.checked) {
      return true;
    }
  }
  alert("Please select a sweetness level.");
  return false;
}

function placeOrder(event) {
  event.preventDefault();
  if (validateForm()) {
    const name = document.getElementById("nameInput");
    const drink = document.getElementById("selectDrink");
    const size = document.getElementsByName("size");
    const ice = document.getElementsByName("ice");
    const sweetness = document.getElementsByName("sweetness");
    const priceElement = document.getElementById("price");
    var orderData = [];
    orderData.push(name.value.trim());
    orderData.push(drink.value);
    for (let chosenSize of size) {
      if (chosenSize.checked) {
        orderData.push(chosenSize.value);
      }
    }
    for (let chosenIce of ice) {
      if (chosenIce.checked) {
        orderData.push(chosenIce.value);
      }
    }
    for (let chosenSweetness of sweetness) {
      if (chosenSweetness.checked) {
        orderData.push(chosenSweetness.value);
      }
    }
    localStorage.setItem("orders", JSON.stringify(orderData));
    alert("Order placed successfully! Thank you for your order.");
  }
}
function resetButton(event) {
  document.getElementById("order-form").reset();
  var priceElement = document.getElementById("price");
  priceElement.textContent = "0";
}
