document.getElementsByClassName('buttbox')[0].innerHTML = document.getElementsByClassName('buttbox')[0].getAttribute('text');
document.getElementsByClassName('buttbox')[1].innerHTML = document.getElementsByClassName('buttbox')[1].getAttribute('text');
document.getElementsByClassName('buttbox')[2].innerHTML = document.getElementsByClassName('buttbox')[2].getAttribute('text');
let butt_active = 0;
document.getElementsByClassName('butt-active')[0].onclick = function() {
    butt_active++;
    if (butt_active == 1) { // State: Open
        document.getElementsByClassName('in-box')[0].hidden = false;
        document.getElementById('img-butt').src = 'img/close_white_24dp.svg';
    }
    if (butt_active == 2) { // State: Close
        document.getElementsByClassName('in-box')[0].hidden = true;
        document.getElementById('img-butt').src = 'img/menu_white_24dp.svg';
        butt_active = 0;
    }
}