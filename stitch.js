function createMenu() {
    var div = document.createElement("div")
    var navbar = '<nav class="navbar navbar-expand-lg navbar-light bg-light">' +
    '<div class="container-fluid">' +
        '<a class="navbar-brand" href=".">StitchMath</a>' +
        '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">' +
        '<span class="navbar-toggler-icon"></span>' +
        '</button>' +
        '<div class="collapse navbar-collapse" id="navbarNav">' +
        '<ul class="navbar-nav">' +
            '<li class="nav-item"><a class="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onclick="drawHome();return false;">Home</a></li>' +
            '<li class="nav-item"><a class="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onclick="drawStitchesPer10cm();return false;">Stitches/10cm</a></li>' +
            '<li class="nav-item"><a class="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onclick="drawRowsForLenght();return false;">Rows for Lenght</a></li>' +
            '<li class="nav-item"><a class="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onclick="drawAbout();return false;">About</a></li>' +
        '</ul>' +
        '</div>' +
    '</div>' +
    '</nav>'

    div.innerHTML = navbar
    document.body.appendChild(div)
}

function createContent(html="") {
    var div = document.createElement("div")
    div.id = "content"
    document.body.appendChild(div)
    content = document.getElementById("content")
    content.innerHTML = html
}

function drawStitchesPer10cm() {
    var html = '</div><h1 class="mb-3 px-1">Stiches/10 cm</h1></div>' +
        '<form>' +
            '<div class="mb-3">' +
                '<label class="form-label px-1">Stiches (how many do you have)</label>' +
                '<input type="number" class="form-control" id="stitches">' +
            '</div>' +
            '<div class="mb-3">' +
                '<label class="form-label px-1">Distance (how far have got)</label>' +
                '<input type="number" class="form-control" id="distance">' +
            '</div>' +
            '<div class="mb-3">' +
                '<label class="form-label px-1">Answer (stiches/10 cm)</label>' +
                '<input type="number" class="form-control" id="answer">' +
            '</div>' +
        '</form>' +
        '<div>' +
            '<button type="button" class="w-100 btn-lg btn btn-primary" onclick="drawHome();return false;">Home</button>' +
        '</div>'
    createContent(html)
    document.getElementById("stitches").addEventListener("keyup", function (evt) {
        calculateStichesPer10cm()
    }, false);
    document.getElementById("distance").addEventListener("keyup", function (evt) {
        calculateStichesPer10cm()
    }, false);
}

function drawRowsForLenght() {
    var html = '</div><h1 class="mb-3 px-1">Rows for Lenght</h1></div>' +
    '<form>' +
        '<div class="mb-3">' +
            '<label class="form-label px-1">Rows (how many do you have per 10 cm)</label>' +
            '<input type="number" class="form-control" id="rows">' +
        '</div>' +
        '<div class="mb-3">' +
            '<label class="form-label px-1">Distance (how far you want to go)</label>' +
            '<input type="number" class="form-control" id="distance">' +
        '</div>' +
        '<div class="mb-3">' +
            '<label class="form-label px-1">Answer (how many rows you need)</label>' +
            '<input type="number" class="form-control" id="answer">' +
        '</div>' +
    '</form>' +
    '<div>' +
        '<button type="button" class="w-100 btn-lg btn btn-primary" onclick="drawHome();return false;">Home</button>' +
    '</div>'
    createContent(html)
    document.getElementById("rows").addEventListener("keyup", function (evt) {
        calculateRowsForLenght()
    }, false);
    document.getElementById("distance").addEventListener("keyup", function (evt) {
        calculateRowsForLenght()
    }, false);
}

function drawAbout() {
    var html = '</div><h1 class="mb-3">About</h1></div>' +
        '<div>This is made for fun.</div>' +
        '<div>' +
            '<button type="button" class="w-100 btn-lg btn btn-primary" onclick="drawHome();return false;">Home</button>' +
        '</div>'
    createContent(html)
}

function drawHome() {
    var html = '<div class="d-grid gap-2">' +
        '<button type="button" class="w-100 btn-lg btn btn-success" onclick="drawStitchesPer10cm();return false;">Stitches/10cm</button>' +
        '<button type="button" class="w-100 btn-lg btn btn-danger" onclick="drawRowsForLenght();return false;">Rows for Lenght</button>' +
        '<button type="button" class="w-100 btn-lg btn btn-primary" onclick="drawAbout();return false;">About</button>' +
    '<div>'
    createContent(html)
}

function calculateStichesPer10cm() {
    var stiches = parseInt(document.getElementById("stitches").value)
    var distance = parseInt(document.getElementById("distance").value)
    document.getElementById("answer").value = stiches/distance*10
}

function calculateRowsForLenght() {
    var rows = parseInt(document.getElementById("rows").value)
    var distance = parseInt(document.getElementById("distance").value)
    document.getElementById("answer").value = rows/10*distance
}

function main() {
    createMenu()
    drawHome()
}

main()

