
function clickHandler() {
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    alert(`Спасибо ${name} за то, что выбрали наш сервис, на вашу почту ${email} будет отправленно письмо с подтверждением!` )
    location.href = "endPoint.html"
}
