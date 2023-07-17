var radio = document.querySelector('.manual-btn')
var cont = 1

setInterval(() => {
    proximoSlide()
}, 5000);

function proximoSlide() {
    cont++

    if (cont > 3) {
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
}