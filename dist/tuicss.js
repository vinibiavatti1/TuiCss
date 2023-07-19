/**
 * Replacement for jQuery's $(document).ready() function.
 * This is handy in making sure stuff fires after the DOM is ready to be touched.
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
    // Get all the tab elements (typically li tags).
    const tabs = document.getElementsByClassName('tui-tab');

    if (!tabs.length) {
        // No tabs found, return early and save a couple CPU cycles.
        return;
    }

    for (const tab of tabs) {
        // Add click listeners to them.
        tab.addEventListener('click', function (e) {

            // Check if the clicked tab is disabled
            if(e.target.classList.contains("disabled")) {
                return;
            }

            // Remove the 'active' class from any and all tabs.
            for (const otherTab of tabs) {
                otherTab.classList.remove('active');
            }

            // Get the content element.
            const tabContents = document.getElementsByClassName('tui-tab-content');

            if (tabContents) {
                for (const tabContent of tabContents) {
                    // Hide all tab contents.
                    tabContent.style.display = 'none';
                }
            } else {
                throw 'No tab content elements found.'
            }

            // Get the id of the tab contents we want to show.
            const tabContentId = e.target.getAttribute('data-tab-content');

            if (tabContentId) {
                const tabContent = document.getElementById(tabContentId);
                if (tabContent) {
                    // Show the tab contents.
                    tabContent.style.display = 'block';
                } else {
                    throw 'No tab content element with id "' + tabContentId + '" found.';
                }
            }
            // We are not going to throw an error here, since we could make the tab do something else that a tab
            // normally wouldn't do.

            // Set the clicked tab to have the 'active' class so we can use it in the next part.
            e.target.classList.add('active');

        });
    }

    // Grab the first tab with the active class.
    const activeTab = document.querySelector('.tui-tab.active');
    if (activeTab) {
        // Now click it 'click' it.
        activeTab.click();
    } else {
        // Nothing found, just click the first tab foud.
        tabs[0].click()
    }
}

/**
 * Date/time field controller
 */
function datetimeController() {
    // Get date/time elements.
    const clocks = document.getElementsByClassName('tui-datetime');

    if (!clocks.length) {
        // No date time elements found, return early and save a couple CPU cycles.
        return;
    }

    // Kick off our clock interval stuff.
    datetimeInterval();

    // Synchronize time and set interval to control the clocks
    setTimeout(() => {
        setInterval(datetimeInterval, 1000);
    }, 1000 - new Date().getMilliseconds());

    function datetimeInterval() {
        for (const clock of clocks) {
            if (clock === null) {
                continue;
            }

            // Get the format we want to display in the element.
            let format = clock.getAttribute('data-format');

            // parse out the date and time into constants.
            const today     = new Date();
            const month     = (today.getMonth() + 1).toString().padStart(2, '0');
            const day       = today.getDate().toString().padStart(2, '0');
            const dayOfWeek = (today.getDay() + 1).toString().padStart(2, '0');
            const year      = today.getFullYear().toString();
            const hour      = today.getHours().toString().padStart(2, '0');
            const hour12    = (parseInt(hour) + 24) % '12' || '12';
            const minute    = today.getMinutes().toString().padStart(2, '0');
            const second    = today.getSeconds().toString().padStart(2, '0');
            const ampm      = parseInt(hour) >= 12 ? 'PM' : 'AM';

            // Replace based on the format.
            format = format.replace('M', month);
            format = format.replace('d', day);
            format = format.replace('e', dayOfWeek);
            format = format.replace('y', year);
            format = format.replace('H', hour);
            format = format.replace('h', hour12);
            format = format.replace('m', minute);
            format = format.replace('s', second);
            format = format.replace('a', ampm);

            // Show it in the element.
            clock.innerHTML = format;
        }
    }
}

/**
 * Sidenav Controller
 * There should only side navigation element at the moment.
 */
function sidenavController() {
    // Get the side navigation button (there should be only one, but if not, we are getting the first one).
    const sideNavButton = document.querySelector('.tui-sidenav-button');

    if (!sideNavButton) {
        // No side navigation button found, return early and save a couple CPU cycles.
        return;
    }

    // Add the click event listener to the buttons.
    sideNavButton.addEventListener('click', () => {
        // Get the side navigation element (there should be only one, but if not, we are getting the first one).
        const sideNav = document.querySelector('.tui-sidenav');

        if (sideNav) {
            if (sideNav.classList.contains('active')) {
                sideNav.classList.remove('active');
            } else {
                sideNav.classList.add('active');
            }
        } else {
            throw 'No sidenav element found.'
        }
    });
}

/**
 * Modal controller
 */
function modalController() {
    // Get the overlap (overlay) element (there should be only one, but if not, we are getting the first one).
    const tuiOverlap = document.querySelector('.tui-overlap');

    if (!tuiOverlap) {
        // No overlap found element, return early and save a couple CPU cycles.
        return;
    }

    // Find modal buttons.
    const modalButtons = document.getElementsByClassName('tui-modal-button');
    for (const modalButton of modalButtons) {
        // Add the click event listener to the buttons.
        modalButton.addEventListener('click', (e) => {
            // Show the overlap.
            tuiOverlap.classList.add('active');

            // Get the display element for the modal.
            const modalId = e.target.getAttribute('data-modal');

            if (modalId) {
                const modal = document.getElementById(modalId);

                if (modal) {
                    // Show it.
                    modal.classList.add('active');
                } else {
                    throw 'No modal element with id of "' + modalId + '" found.';
                }
            } else {
                throw 'Modal close button data-modal attribute is empty or not set.'
            }
        });
    }

    // Find the close modal buttons.
    const modalCloseButtons = document.getElementsByClassName('tui-modal-close-button');

    if (modalButtons.length > 0 && !modalCloseButtons.length) {
        // A modal without a close button, is a bad modal.
        throw 'No modal close buttons found.'
    }

    for (const modalCloseButton of modalCloseButtons) {
        // Add the click event listener to the buttons.
        modalCloseButton.addEventListener('click', (e) => {
            // Hide the the overlap.
            tuiOverlap.classList.remove('active');

            // Get the display element id for the modal.
            const modalId = e.target.getAttribute('data-modal');

            if (modalId) {
                // Get the modal element.
                const modal = document.getElementById(modalId);

                if (modal) {
                    // Hide it.
                    modal.classList.remove('active');
                } else {
                    throw 'No modal element with id of "' + modalId + '" found.';
                }
            } else {
                throw 'Modal close button data-modal attribute is empty or not set.'
            }
        });
    }
}

/**
 * Init: This is at the bottom to make sure it is fired correctly.
 */
domReady(function () {
    tabsController();
    datetimeController();
    sidenavController();
    modalController();
});
