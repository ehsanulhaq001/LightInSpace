let points = new Array()
let opaques = new Array()
let sourceX = window.innerWidth / 2
let sourceY = window.innerHeight / 2
let reflection
let alpha
let rays
let options = document.querySelectorAll("input[name = config]")
let selectedConfig
let run

function configerations(ra, alp, ref) {
    console.log(ref, alp, ra)
    reflection = ref
    alpha = alp
    rays = ra
    console.log(ref, alp, ra)
    console.log(reflection, alpha, rays)
}

function check() {
    for (let option of options) {
        if (option.checked) {
            selectedConfig = option.value
            break
        }
    }
    console.log(selectedConfig)
    if (selectedConfig == 0) {
        configerations(0, 0, 0)
    }
    if (selectedConfig == 1) {
        configerations(0, 0, 1)
    }
    if (selectedConfig == 2) {
        configerations(0, 1, 0)
    }
    if (selectedConfig == 3) {
        configerations(0, 1, 1)
    }
    if (selectedConfig == 4) {
        configerations(1, 0, 0)
    }
    if (selectedConfig == 5) {
        configerations(1, 0, 1)
    }
    if (selectedConfig == 6) {
        configerations(1, 1, 0)
    }
    if (selectedConfig == 7) {
        configerations(1, 1, 1)
    }

}
window.onload = function() {
    document.querySelector("#holder").style.display = "none"

    start()
    for (let i = 0; i < 10; i++) {
        let x = Math.floor(Math.random() * cnv.width)
        let y = Math.floor(Math.random() * cnv.height)
        let radius = Math.floor(Math.random() * 100)
        opaques.push(new Opaque(x, y, radius))
    }
}

function start() {
    clearInterval(run)
    setup();
    run = setInterval(draw, 1000 / 100)
}

function getCoordinates(event) {
    sourceX = event.clientX
    sourceY = event.clientY
    clearInterval(run)
    start()
}

function setup() {
    cnv = document.querySelector("#canvas")
    cnv.width = window.innerWidth
    cnv.height = window.innerHeight
    cnv.style.backgroundColor = "transparent"
    ctx = cnv.getContext("2d")
    points = []

    for (let i = 0; i < 360; i += 1) {
        point = new Points(sourceX, sourceY, 4 * Math.cos(i * Math.PI / 180), 4 * Math.sin(i * Math.PI / 180))
        points.push(point)
    }
    check()
}


function draw() {

    if (rays == 0) ctx.clearRect(0, 0, cnv.width, cnv.height)
    for (let i = 0; i < points.length; i++) {
        points[i].update()
        points[i].show()
    }
    for (let i = 0; i < opaques.length; i++) {
        opaques[i].show()
    }
}

function distance(a1, b1, a2, b2) {
    return Math.sqrt((a2 - a1) * (a2 - a1) + (b2 - b1) * (b2 - b1))
}

function visibility(n) {
    if (n == 0) {
        document.querySelector("#holder").style.display = "none"
        document.querySelector("#modify").style.display = "block"
    } else if (n == 1) {
        document.querySelector("#modify").style.display = "none"
        document.querySelector("#holder").style.display = "flex"
    }
}