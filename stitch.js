function createMenu() {
    var div = document.createElement("div")
    var navbar = '<nav class="navbar navbar-expand-lg navbar-light bg-light">' +
    '<div class="container-fluid">' +
        '<a class="navbar-brand" href=".">StitchMath</a>' +
        '<button class="navbar-toggler btn-no-style" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">' +
            '<span class="navbar-toggler-icon"></span>' +
        '</button>' +
        '<div class="collapse navbar-collapse" id="navbarNav">' +
        '<ul class="navbar-nav">' +
            '<li class="nav-item"><a class="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onclick="drawHome();return false;">Home</a></li>' +
            '<li class="nav-item"><a class="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onclick="drawStitchGauge();return false;">Stitch Gauge</a></li>' +
            '<li class="nav-item"><a class="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onclick="drawRowGauge();return false;">Row Gauge</a></li>' +
            '<li class="nav-item"><a class="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" onclick="drawUnitConverter();return false;">Unit Converter</a></li>' +
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

function urlAddPath(selection) {
    window.history.pushState("#selection", "x", window.location.origin + "#" + selection);
    window.history.pushState
    window.addEventListener("popstate", historyListener, false);
}

function historyListener(event) {
    drawHome()
}

function drawStitchGauge() {
    var html = '<div class="px-2 mt-2">' +
                    '<h1 class="mb-3 px-1">Stitch Gauge</h1>' +
                    '<form>' +
                        '<label class="form-label px-1"><b>Stitches</b> (how many do you have)</label>' +
                        '<div class="input-group mb-3 rounded-pill bg-white">' +
                            '<span class="input-group-icon" id="icon-stitches"><i class="fas fa-lg fa-infinity"></i></span>' +
                            '<input type="number" class="form-control form-control-lg input-custom" aria-describedby="icon-stitches" id="stitches">' +
                        '</div>' +
                         '<label class="form-label px-1"><b>Distance</b> (how far have you got)</label>' +
                        '<div class="input-group mb-3 rounded-pill bg-white">' +
                            '<span class="input-group-icon" id="icon-distance"><i class="fas fa-lg fa-ruler-horizontal"></i></span>' +
                            '<input type="number" class="form-control form-control-lg input-custom" aria-describedby="icon-distance" id="distance">' +
                        '</div>' +
                        '<label class="form-label px-1"><b>Answer</b> (stitches/10 cm)</label>' +
                        '<div class="input-group mb-3 rounded-pill bg-white">' +
                            '<span class="input-group-icon" id="icon-answer"><i class="fas fa-lg fa-circle-check"></i></span>' +
                            '<input type="number" class="form-control form-control-lg input-custom" aria-describedby="icon-answer" id="answer" readonly>' +
                        '</div>' +
                    '</form>' +
                    '<button type="button" class="w-100 btn-lg btn btn-light rounded-pill" onclick="drawHome();return false;">Home</button>' +
                '</div>'
    createContent(html)
    urlAddPath("StitchesPer10cm")
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

function drawRowGauge() {
    var html = '<div class="px-2 mt-2">' +
                    '<h1 class="mb-3 px-1">Row Gauge</h1>' +
                    '<form>' +
                    '<label class="form-label px-1"><b>Rows</b> (how many rows do you have per 10 cm)</label>' +
                        '<div class="input-group mb-3 rounded-pill bg-white">' +
                            '<span class="input-group-icon" id="icon-rows"><i class="fas fa-lg fa-align-justify"></i></span>' +
                            '<input type="number" class="form-control form-control-lg input-custom" aria-describedby="icon-rows" id="rows">' +
                        '</div>' +
                         '<label class="form-label px-1"><b>Distance</b> (how far do you want to go)</label>' +
                        '<div class="input-group mb-3 rounded-pill bg-white">' +
                            '<span class="input-group-icon" id="icon-distance"><i class="fas fa-lg fa-ruler-horizontal"></i></span>' +
                            '<input type="number" class="form-control form-control-lg input-custom" aria-describedby="icon-distance" id="distance">' +
                        '</div>' +
                        '<label class="form-label px-1"><b>Answer</b> (how many rows you need)</label>' +
                        '<div class="input-group mb-3 rounded-pill bg-white">' +
                            '<span class="input-group-icon" id="icon-answer"><i class="fas fa-lg fa-circle-check"></i></span>' +
                            '<input type="number" class="form-control form-control-lg input-custom" aria-describedby="icon-answer" id="answer" readonly>' +
                        '</div>' +
                    '</form>' +
                    '<button type="button" class="w-100 btn-lg btn btn-light rounded-pill" onclick="drawHome();return false;">Home</button>' +
                '</div>'
    createContent(html)
    urlAddPath("RowsForLenght")
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

function drawUnitConverter() {
    var html = '<div class="px-2 mt-2">' +
                    '<h1 class="mb-3 px-1">Unit Converter</h1>' +
                    '<form>' +
                    '<label class="form-label px-1"><b>Centimeters</b> (metric)</label>' +
                        '<div class="input-group mb-3 rounded-pill bg-white">' +
                            '<span class="input-group-icon" id="icon-cm"><i class="fas fa-lg fa-earth-europe"></i></span>' +
                            '<input type="number" class="form-control form-control-lg input-custom" aria-describedby="icon-cm" id="cm">' +
                        '</div>' +
                         '<label class="form-label px-1"><b>Inches</b> (imperial)</label>' +
                        '<div class="input-group mb-3 rounded-pill bg-white">' +
                            '<span class="input-group-icon" id="icon-inches"><i class="fas fa-lg fa-earth-americas"></i></span>' +
                            '<input type="number" class="form-control form-control-lg input-custom" aria-describedby="icon-inches" id="inches">' +
                        '</div>' +
                    '</form>' +
                    '<button type="button" class="w-100 btn-lg btn btn-light rounded-pill" onclick="drawHome();return false;">Home</button>' +
                '</div>'
    createContent(html)
    urlAddPath("UnitConverter")
    document.getElementById("cm").addEventListener("keyup", function (e) {
        calculateUnitConverter("cm")
    }, false);
    document.getElementById("inches").addEventListener("keyup", function (e) {
        calculateUnitConverter("inches")
    }, false);
    document.getElementById("cm").addEventListener("input", function (e) {
        calculateUnitConverter("cm")
    });
    document.getElementById("inches").addEventListener("input", function (e) {
        calculateUnitConverter("inches")
    });
}

function drawAbout() {
    var html = '<div class="px-2 mt-2">' +
                    '<h1 class="mb-3">About</h1>' +
                    'This is made for fun.<br>' +
                    'For any questions please create an issue on <a href="https://github.com/felipgit/stitchmath" target="_blank" class="link-light">GitHub</a>.' +
                    '<div class="d-grid gap-2 px-2 mt-2">' +
                        '<a class="w-100 btn-lg btn btn-light rounded-pill" href="https://github.com/felipgit/stitchmath" target="_blank"><i class="fab fa-github"></i> GitHub</a>' +
                        '<button type="button" class="w-100 btn-lg btn btn-light rounded-pill" onclick="drawHome();return false;">Home</button>' +
                    '<div>' +
                '</div>'
    createContent(html)
    urlAddPath("About")
}

function drawHome() {
    var html = '<div class="d-grid gap-2 px-2 mt-2">' +
                    '<button type="button" class="w-100 btn-lg btn btn-light rounded-pill" onclick="drawStitchGauge();return false;">Stitch Gauge</button>' +
                    '<button type="button" class="w-100 btn-lg btn btn-light rounded-pill" onclick="drawRowGauge();return false;">Row Gauge</button>' +
                    '<button type="button" class="w-100 btn-lg btn btn-light rounded-pill" onclick="drawUnitConverter();return false;">Unit Converter</button>' +
                    '<button type="button" class="w-100 btn-lg btn btn-light rounded-pill" onclick="drawAbout();return false;">About</button>' +
                '<div>'
    createContent(html)
    urlAddPath("Home")
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

function calculateUnitConverter(unit) {
    let y=2.540005080010160020320040640081280162560325120650241300482600965201930403860807721615443230886461772923545847091694183388366776733553467106934213868427736855473710947421894843789687579375158750317500635001270002
    let x = parseInt(document.getElementById(unit).value)
    switch(unit) {
    case "cm":
        var answer = x/y
        var opposite = "inches"
        break
    case "inches":
        var answer = x*y
        var opposite = "cm"
        break
    }
    document.getElementById(opposite).value = answer
}

function main() {
    createMenu()
    drawHome()
}

main()
