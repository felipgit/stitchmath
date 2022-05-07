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
    document.getElementById("main").appendChild(div)
}

function createContent(html="") {
    var div = document.createElement("div")
    div.id = "content"
    document.getElementById("main").appendChild(div)
    content = document.getElementById("content")
    content.innerHTML = html
}

function drawStitchesPer10cm() {
    var html = '<div class="px-2 mt-2">' +
            '<h1 class="mb-3 px-1">Stitches/10 cm</h1>' +
            '<form>' +
                '<div class="mb-3">' +
                    '<label class="form-label px-1">Stitches (how many do you have)</label>' +
                    '<input type="number" class="form-control" id="stitches">' +
                '</div>' +
                '<div class="mb-3">' +
                    '<label class="form-label px-1">Distance (how far have got)</label>' +
                    '<input type="number" class="form-control" id="distance">' +
                '</div>' +
                '<div class="mb-3">' +
                    '<label class="form-label px-1">Answer (stitches/10 cm)</label>' +
                    '<input type="number" class="form-control" id="answer" readonly>' +
                '</div>' +
            '</form>' +
            '<button type="button" class="w-100 btn-lg btn btn-light rounded-pill" onclick="drawHome();return false;">Home</button>' +
        '</div>'
    createContent(html)
    document.getElementById("stitches").addEventListener("keyup", function (e) {
        calculateStitchesPer10cm()
    }, false);
    document.getElementById("distance").addEventListener("keyup", function (e) {
        calculateStitchesPer10cm()
    }, false);
    document.getElementById("stitches").addEventListener("input", function (e) {
        calculateStitchesPer10cm()
    });
    document.getElementById("distance").addEventListener("input", function (e) {
        calculateStitchesPer10cm()
    });
}

function drawRowsForLenght() {
    var html = '<div class="px-2 mt-2">' +
            '<h1 class="mb-3 px-1">Rows for Lenght</h1>' +
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
                    '<input type="number" class="form-control" id="answer" readonly>' +
                '</div>' +
            '</form>' +
            '<button type="button" class="w-100 btn-lg btn btn-light rounded-pill" onclick="drawHome();return false;">Home</button>' +
        '</div>'
    createContent(html)
    document.getElementById("rows").addEventListener("keyup", function (e) {
        calculateRowsForLenght()
    }, false);
    document.getElementById("distance").addEventListener("keyup", function (e) {
        calculateRowsForLenght()
    }, false);
    document.getElementById("rows").addEventListener("input", function (e) {
        calculateRowsForLenght()
    });
    document.getElementById("distance").addEventListener("input", function (e) {
        calculateRowsForLenght()
    });
}

function drawAbout() {
    var html = '<div class="px-2 mt-2">' +
            '<h1 class="mb-3">About</h1>' +
            'This is made for fun.' +
            '<button type="button" class="w-100 btn-lg btn btn-light rounded-pill" onclick="drawHome();return false;">Home</button>' +
        '</div>'
    createContent(html)
}

function drawHome() {
    var html = '<div class="d-grid gap-2 px-2 mt-2">' +
            '<button type="button" class="w-100 btn-lg btn btn-light rounded-pill" onclick="drawStitchesPer10cm();return false;">Stitches/10cm</button>' +
            '<button type="button" class="w-100 btn-lg btn btn-light rounded-pill" onclick="drawRowsForLenght();return false;">Rows for Lenght</button>' +
            '<button type="button" class="w-100 btn-lg btn btn-light rounded-pill" onclick="drawAbout();return false;">About</button>' +
        '<div>'
    createContent(html)
}

function calculateStitchesPer10cm() {
    var stitches = parseInt(document.getElementById("stitches").value)
    var distance = parseInt(document.getElementById("distance").value)
    document.getElementById("answer").value = stitches/distance*10
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
