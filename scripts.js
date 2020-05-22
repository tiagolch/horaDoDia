function saudacao() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    // var hora = 3
    var hrs = data.toTimeString()
    msg.innerHTML = `${hora}`
    if (hora >= 0 && hora <= 12){
        msg.innerHTML = `Bom dia agora são<p> ${hrs}`
        img.src = "img/bomdia.jpg"
        document.body.style.background = '#e2cd9f'
    }else if (hora >=13 && hora <=18){
        msg.innerHTML = `Boa tarde agora são <p> ${hrs}`
        img.src ="img/boatarde.jpg"
        document.body.style.background = '#b9846f'
    }else {
        msg.innerHTML = `Boa noite agora são <p> ${hrs}`
        img.src = 'img/boanoite.jpg'
        document.body.style.background = '#515154'
    }
}