const button = document.getElementById('theme-toggle');

button.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

// Estilo para tema oscuro
const style = document.createElement('style');
style.innerHTML = `
  .dark-theme {
    background-color: #121212;
    color: #e0e0e0;
  }
  .dark-theme button {
    background: #e0e0e0;
    color: #121212;
  }
`;
document.head.appendChild(style);
