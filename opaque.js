function Opaque(x, y, radius) {
    this.x = x
    this.y = y
    this.radius = radius
    this.show = function() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true)
        ctx.fillStyle = "black"
        ctx.fill()
    }
}