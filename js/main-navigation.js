(() => {
    const mainNavigation = document.querySelector('.main-navigation');

    if (!mainNavigation) {
        return;
    }

    const handleMainNavigationToggleButtonClick = () => {
        mainNavigation.classList.toggle('main-navigation_opened');
    }

    window.mainNavigationToggleButton.addClickHandler(handleMainNavigationToggleButtonClick);
})();
