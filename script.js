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
    error.textContent = "✖ আপনি সর্বোচ্চ ১০টি নিতে পারেন!";
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
    error.textContent = "✖ আপনি ন্যূনতম ১টি নিতে পারেন!";
    minusBtn.classList.add("blocked");
  }
}
