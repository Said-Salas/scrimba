const button = document.getElementById('actionBtn');
const message = document.getElementById('message');

function handleClick() {
  const now = new Date();
  message.textContent = `Last clicked at ${now.toLocaleTimeString()}`;
}

button.addEventListener('click', handleClick);


