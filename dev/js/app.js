const shareButton = document.querySelector('.button--share');
const shareMenu = document.querySelector('.share__menu--close')

console.log(shareButton);
console.log(shareMenu);

const changeStateMenu = () => {
    if (shareMenu.classList.contains('share__menu--close')){
        shareMenu.classList.replace('share__menu--close', 'share__menu--open');
    } else if (shareMenu.classList.contains('share__menu--open')) {
        shareMenu.classList.replace('share__menu--open', 'share__menu--close');
    }
}

shareButton.addEventListener('click', (e) => {
    changeStateMenu();
});
