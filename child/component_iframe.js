const form = document.getElementById("paymentForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    cardNumber: document.getElementById("cardNumber").value,
    expiryDate: document.getElementById("expiryDate").value,
    ccv: document.getElementById("ccv").value,
  };

  window.parent.postMessage(
    {
      type: "PAYMENT_SUBMITTED",
      payload: data,
    },
    "*"
  );
});
