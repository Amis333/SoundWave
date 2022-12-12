
function clickHandler() {
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    alert(`Спасибо, ${name}, что выбрали наш сервис, на вашу почту ${email} будет отправленно письмо с подтверждением!` )
    location.href = "endPoint.html"
}

function subMail() {

    let name = document.getElementById('name').value
    let text = document.getElementById('message').value
    console.log(text)
    location.href = `mailto:vlad172348@gmail.com&body=${text}?subject=${name} спрашивает`

}
