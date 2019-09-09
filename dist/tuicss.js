/**
 * Init
 */
$(document).ready(function() {
    tabsController();
    datetimeController();
    sidenavController();
    modalController();
});

/**
 * TuiTabs controller
 */
function tabsController() {
    $(".tui-tab").click(function(event) {
        $(".tui-tab-content").hide();
        let tabContentid = $(this).attr('data-tab-content');
        $(`#${tabContentid}`).show();
        $(".tui-tab").removeClass("active");
        $(this).addClass("active");
    });
    $('.tui-tab.active').click();
}

/**
 * Date field controller
 */
function datetimeController() {

    if(!$(".tui-datetime").length) return;

    datetimeInterval();
    setInterval(datetimeInterval, 1000);

    function datetimeInterval() {
        let today = new Date();

        $(".tui-datetime").each(function() {
            let clock = $(this);
            
            let format = clock.attr("data-format");

            let month = (today.getMonth() + "").length == 2 ? today.getMonth() + 1 : "0" + (today.getMonth() + 1);
            let day = (today.getDay() + "").length == 2 ? today.getDay() + 1 : "0" + (today.getDay() + 1);
            let year = today.getFullYear();
            let hour = (today.getHours() + "").length == 2 ? today.getHours() : "0" + today.getHours();
            let hour12 = (parseInt(hour) + 24) % 12 || 12;
            let minute = (today.getMinutes() + "").length == 2 ? today.getMinutes() : "0" + today.getMinutes();
            let second = (today.getSeconds() + "").length == 2 ? today.getSeconds() : "0" + today.getSeconds();
            let ampm = parseInt(hour) >= 12 ? "PM" : "AM"; 

            format = format.replace("M", month);
            format = format.replace("d", day);
            format = format.replace("y", year);
            format = format.replace("H", hour);
            format = format.replace("h", hour12);
            format = format.replace("m", minute);
            format = format.replace("s", second);
            format = format.replace("a", ampm);

            clock.html(format);
        });
    }
}

/**
 * Sidenav Controller
 */
function sidenavController() {
    $(".tui-sidenav-button").click(function() {
        let sidenav = $(".tui-sidenav");
        if(sidenav.hasClass("active")) {
            $(".tui-sidenav").removeClass("active");
        } else {
            $(".tui-sidenav").addClass("active");
        }
    });
}

/**
 * Modal controller
 */
function modalController() {
    $(".tui-modal-button").click(function() {
        $(".tui-overlap").addClass("active");
        let modalId = $(this).attr("data-modal");
        $(`#${modalId}`).addClass("active");
    });
    $(".tui-modal-close-button").click(function() {
        $(".tui-overlap").removeClass("active");
        let modalId = $(this).attr("data-modal");
        $(`#${modalId}`).removeClass("active");
    });
}