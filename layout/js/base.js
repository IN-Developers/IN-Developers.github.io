
window.onscroll = function () {
    var header = document.getElementById('header');
    var headerS = document.defaultView.getComputedStyle(header, '');
    if (window.pageYOffset > 70 && headerS.display == 'none') {
        header.style.top = '-30px';
        header.style.display = 'block';
        onScrollD();
    } else if (window.pageYOffset < 70 && headerS.display != 'none') {
        header.style.top = '0px';
        onScrollU();
        
    }
}

NowScroll = false;
function onScrollD() {
    var header = document.getElementById('header');
    if (parseInt(document.defaultView.getComputedStyle(header, '').top) < 0) {
        setTimeout(onScrollD, 15);
        header.style.top = parseInt(document.defaultView.getComputedStyle(header, '').top) + 2 + 'px';
    }
}
function onScrollU() {
    var header = document.getElementById('header');
    if (parseInt(document.defaultView.getComputedStyle(header, '').top) > -30) {
        setTimeout(onScrollU, 15);
        header.style.top = parseInt(document.defaultView.getComputedStyle(header, '').top) - 1 + 'px';
    } else {
        header.style.display = 'none';
    }
}