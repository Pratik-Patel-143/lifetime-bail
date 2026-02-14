let messageIndex = 0;

const messages = [
  "Objection overruled 😏",
  "Think again Counsel 😄",
  "Court insists on YES ❤️",
  "Last hearing before lifetime commitment 😉"
];

function handleNoClick() {
  const noButton = document.querySelector('.no-button');
  const yesButton = document.querySelector('.yes-button');

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(
    window.getComputedStyle(yesButton).fontSize
  );
  yesButton.style.fontSize = `${currentSize * 1.3}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
