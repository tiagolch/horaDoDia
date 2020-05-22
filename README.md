# Hora do dia
Exercício sobre a interação dinâmica dos elementos onde dependendo do horario, a cor de fundo, imagem e saudação são modificados.

https://tiagolch.github.io/horaDoDia.git.io/


```
function saudacao() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
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
```
