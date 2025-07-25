let currentStep = 1;

function nextStep() {
  document.getElementById(`step-${currentStep}`).classList.add('hidden');
  currentStep++;
  document.getElementById(`step-${currentStep}`).classList.remove('hidden');
}

// Step 2: Select Brand
function selectBrand(elem) {
  const brand = elem.querySelector('.brand-name').textContent;
  document.getElementById('selected-brand').textContent = "Selected: " + brand;
  document.getElementById('summary-brand').textContent = "Brand: " + brand;
  nextStep();
}

// Step 3: Select Category
function selectCategory(elem) {
  const category = elem.textContent;
  document.getElementById('selected-category').textContent = "Selected: " + category;
  document.getElementById('summary-category').textContent = "Category: " + category;
  nextStep();
}

// Step 4: Select Quantity
function selectQuantity(select) {
  const qty = select.value;
  if (qty) {
    document.getElementById('selected-quantity').textContent = "Selected: " + qty;
    document.getElementById('summary-quantity').textContent = "Quantity: " + qty;
    nextStep();
  }
}

// Step 5: Select Time
function selectTime(input) {
  const time = input.value;
  if (time) {
    document.getElementById('selected-time').textContent = "Delivery at: " + time;
    document.getElementById('summary-time').textContent = "Delivery Time: " + time;
    nextStep();
  }
}

function applyCoupon() {
  const code = document.querySelector('.coupon-input').value.trim();
  if (code) {
    document.getElementById('selected-coupon').textContent = "Coupon Applied: " + code;
    document.getElementById('summary-coupon').textContent = "Coupon: " + code;

    document.getElementById(`step-${currentStep}`).classList.add('hidden');
    document.getElementById('summary').classList.remove('hidden'); // <-- this shows summary!
  } else {
    alert("Please enter a coupon code.");
  }
}
