function increaseQty() {
  const qty = document.getElementById("quantity");
  const error = document.getElementById("error");
  const plusBtn = document.getElementById("plusBtn");
  const minusBtn = document.getElementById("minusBtn");
  let current = parseInt(qty.value);

  if (current < 10) {
    qty.value = current + 1;
    error.textContent = "";
    plusBtn.classList.remove("blocked");
    minusBtn.classList.remove("blocked");
  } else {
    plusBtn.classList.add("blocked");
  }
}

function decreaseQty() {
  const qty = document.getElementById("quantity");
  const error = document.getElementById("error");
  const plusBtn = document.getElementById("plusBtn");
  const minusBtn = document.getElementById("minusBtn");
  let current = parseInt(qty.value);

  if (current > 1) {
    qty.value = current - 1;
    error.textContent = "";
    plusBtn.classList.remove("blocked");
    minusBtn.classList.remove("blocked");
  } else {
    minusBtn.classList.add("blocked");
  }
}
