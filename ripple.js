function Points(x, y, xv, yv) {
    this.x = x
    this.y = y
    this.xv = xv
    this.yv = yv
    this.alpha = 1
    this.update = function() {
        this.x += this.xv
        this.y += this.yv
        if (this.x > cnv.width || this.x < 0) {
            this.xv *= -1
        }
        if (this.y > cnv.height || this.y < 0) {
            this.yv *= -1
        }
        this.alpha -= 0.002
    }

    this.show = function() {
        ctx.globalAlpha = this.alpha;
        ctx.beginPath()
        ctx.arc(this.x, this.y, 1, 0, 2 * Math.PI, true)
        ctx.strokeStyle = "yellow"
        ctx.stroke()
    }
}