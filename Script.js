const buttons = document.getElementsByClassName('a2');
const p12 = document.getElementsByClassName('p12');
const lines = document.getElementsByClassName('line');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        let p = p12[i];
        let line = lines[i];

        let isOpen = p.classList.contains('db');

        if (isOpen) {
            line.classList.remove('db');
            line.classList.add('dn');
            p.classList.remove('db');
            p.classList.add('dn');
            buttons[i].innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
        } else {
            line.classList.remove('dn');
            line.classList.add('db');
            p.classList.remove('dn');
            p.classList.add('db');
            buttons[i].innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
        }
    });
}