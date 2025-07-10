const messageOutput = document.getElementById("messageOutput");

window.addEventListener("message", (event) => {
  const { type, payload } = event.data;

  if (type === "PAYMENT_SUBMITTED") {
    messageOutput.textContent = JSON.stringify(payload, null, 2);
    console.log("Parent received message:", payload);
  }
},{ once: true });