const dropDown = document.getElementById('dropdown');
const gearIcon = document.getElementById('gear');
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

gearIcon.addEventListener('click', e => {
    e.stopPropagation();
    dropDown.classList.remove('pref--hidden');
});

document.addEventListener('click', e => {
    dropDown.classList.add('pref--hidden');
});

searchButton.addEventListener('click', e => {
    searchInput.classList.toggle('search-bar--hidden');
})

searchInput.addEventListener('click', e => {
    e.stopPropagation();
})
