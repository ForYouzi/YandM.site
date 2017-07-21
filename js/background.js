var background = document.getElementById('background');
window.onscroll = function() {
    // followTheScroll(background, 0)
};

function followTheScroll(obj, top) {
    var topDistance = document.documentElement.scrollTop || document.body.scrollTop;
    var delta = 10;
    if (obj.offsetTop < topDistance + top - delta) {
        obj.style.top = obj.offsetTop + delta + "px";
        setTimeout(function () { followTheScroll(obj, top); }, 10);

    } else if (obj.offsetTop > topDistance + top + delta) {
        obj.style.top = (obj.offsetTop - delta) + "px";
        setTimeout(function () { followTheScroll(obj, top); }, 10);
    } else {
        obj.style.top = topDistance + top + "px";
    }
}
