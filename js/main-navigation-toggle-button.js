(() => {
    const clickHandlers = [];

    const mainNavigationToggleButton = document.querySelector('.main-navigation-toggle-button');
    const mainNavigationToggleButtonIcon = document.querySelector('.main-navigation-toggle-button__icon');

    if (!mainNavigationToggleButton || !mainNavigationToggleButtonIcon) {
        return;
    }

    mainNavigationToggleButton.classList.add('main-navigation-toggle-button_visible');

    const handleMainNavigationToggleButtonClick = (evt) => {
        if (!clickHandlers.length) {
            return;
        }

        mainNavigationToggleButtonIcon.classList.toggle('main-navigation-toggle-button__icon_close');

        clickHandlers.forEach((clickHandler) => clickHandler(evt));
    };

    mainNavigationToggleButton.addEventListener('click', handleMainNavigationToggleButtonClick);

    const addClickHandler = (clickHandler) => {
        clickHandlers.push(clickHandler);
    };

    window.mainNavigationToggleButton = {
        addClickHandler
    };
})();
