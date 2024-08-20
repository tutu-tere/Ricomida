
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


$("#enviarCorreo").click(function () {
    alert("El correo fue enviado correctamente...")
})

$("h4").dblclick(function () {
    $(this).css({
        "color": "red"
    })
})

$("h2, h3, .card-title").hover(function () {
    $(this).css({
        "cursor": "pointer"
    })
})

$(".card-title").click(function () {
    $('.card-text').toggle()
})