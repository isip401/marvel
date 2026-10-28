const themeToggle = document.querySelector('#themeToggle');
const themeIcon = document.querySelector('#themeIcon');
const themeLabel = document.querySelector('#themeLabel');
const filterButtons = document.querySelectorAll('.filter-chip');
const characterCards = document.querySelectorAll('.character-card');

// Сохраняем выбранную тему в браузере, чтобы она не сбрасывалась при обновлении.
const savedTheme = localStorage.getItem('marvel-theme');
if (savedTheme === 'light') {
  document.body.classList.add('light-theme');
  updateThemeButton(true);
}

function updateThemeButton(isLight) {
  themeIcon.textContent = isLight ? '☀' : '☾';
  themeLabel.textContent = isLight ? 'Светлая тема' : 'Тёмная тема';
  themeToggle.setAttribute('aria-label', isLight ? 'Включить тёмную тему' : 'Включить светлую тему');
}

themeToggle.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light-theme');
  localStorage.setItem('marvel-theme', isLight ? 'light' : 'dark');
  updateThemeButton(isLight);
});

// Фильтрация карточек по тематическим категориям.
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.toggle('active', item === button);
    });

    characterCards.forEach((card) => {
      const matches = selectedFilter === 'all' || card.dataset.category === selectedFilter;
      card.hidden = !matches;
    });
  });
});
