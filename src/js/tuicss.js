/**
 * Replacement for jQuery's $(document).ready() function.
 * Stolen from:https://stackoverflow.com/a/53601942/344028
 *
 * @param fn Callback.
 */
function domReady(fn) {
    // If we're early to the party
    document.addEventListener('DOMContentLoaded', fn);

    // If late; I mean on time.
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
        fn();
    }
}

/**
 * TuiTabs controller
 */
function tabsController() {
    const tabs = document.getElementsByClassName('tui-tab');

    for (const tab of tabs) {
        tab.addEventListener('click', function (e) {
            // Deactivate the tab.
            tab.classList.remove('active');

            const tabContents = document.getElementsByClassName('tui-tab-content');

            for (const tabContent of tabContents) {
                tabContent.style.display = 'none';
            }

            const tabContentId = e.target.getAttribute('data-tab-content');
            const tabContent   = document.getElementById(tabContentId);
            if (tabContent) {
                tabContent.style.display = 'block';
            }

            // Set the clicked tab to have the active click for the next part.
            e.target.classList.add('active');
        });
    }


    const activeTab = document.querySelector('.tui-tab.active');

    if (activeTab) {
        // There can only be one active tab, so click the first found.
        activeTab.click();
    }
}

/**
 * Date/time field controller
 */
function datetimeController() {
    const clocks = document.getElementsByClassName('tui-datetime');

    // No elements found, return early.
    if (!clocks.length) {
        return;
    }

    datetimeInterval();
    setInterval(datetimeInterval, 1000);

    function datetimeInterval() {
        for (const clock of clocks) {
            const interval = setInterval(() => {
                if (clock === null) {
                    clearInterval(interval);
                    return;
                }

                let format = clock.getAttribute('data-format');

                const today  = new Date();
                const month  = (today.getMonth() + '').length === 2 ? today.getMonth() + 1 : '0' + (today.getMonth() + 1);
                const day    = (today.getDay() + '').length === 2 ? today.getDay() + 1 : '0' + (today.getDay() + 1);
                const year   = today.getFullYear() + '';
                const hour   = (today.getHours() + '').length === 2 ? today.getHours() : '0' + today.getHours();
                const hour12 = (parseInt(hour) + 24) % '12' || '12';
                const minute = (today.getMinutes() + '').length === 2 ? today.getMinutes() : '0' + today.getMinutes();
                const second = (today.getSeconds() + '').length === 2 ? today.getSeconds() : '0' + today.getSeconds();
                const ampm   = parseInt(hour) >= 12 ? 'PM' : 'AM';

                format = format.replace('M', month);
                format = format.replace('d', day);
                format = format.replace('y', year);
                format = format.replace('H', hour);
                format = format.replace('h', hour12);
                format = format.replace('m', minute);
                format = format.replace('s', second);
                format = format.replace('a', ampm);

                clock.innerHTML = format;
            });
        }
    }
}

/**
 * Sidenav Controller
 */
function sidenavController() {
    const sideNavButtons = document.getElementsByClassName('tui-sidenav-button');

    for (const sideNavButton of sideNavButtons) {
        sideNavButton.addEventListener('click', () => {
            const sideNavs = document.getElementsByClassName('tui-sidenav');
            for (const sideNav of sideNavs) {
                if (sideNav.classList.contains('active')) {
                    sideNav.classList.remove('active');
                } else {
                    sideNav.classList.add('active');
                }
            }
        });
    }
}

/**
 * Modal controller
 */
function modalController() {
    // Attach to the button that shows the modal.
    const modalButtons = document.getElementsByClassName('tui-modal-button');
    for (const modalButton of modalButtons) {
        modalButton.addEventListener('click', (e) => {
            const tuiOverlaps = document.getElementsByClassName('tui-overlap');
            for (const tuiOverlap of tuiOverlaps) {
                tuiOverlap.classList.add('active');
            }

            const modalId = e.target.getAttribute('data-modal');
            const modal   = document.getElementById(modalId);
            modal.classList.add('active');
        });
    }

    // Attach to the button that removes the modal.
    const modalCloseButtons = document.getElementsByClassName('tui-modal-close-button');
    for (const modalCloseButton of modalCloseButtons) {
        modalCloseButton.addEventListener('click', (e) => {
            const tuiOverlaps = document.getElementsByClassName('tui-overlap');
            for (const tuiOverlap of tuiOverlaps) {
                tuiOverlap.classList.remove('active');
            }

            const modalId = e.target.getAttribute('data-modal');
            const modal   = document.getElementById(modalId);
            modal.classList.remove('active');
        });
    }
}

/**
 * Init: This is at the bottom to make sure the functions are parsed. It's a CYA.
 */
domReady(function () {
    tabsController();
    datetimeController();
    sidenavController();
    modalController();
});
