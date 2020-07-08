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
            this.xv = reflection ? -this.xv : undefined
        }
        if (this.y > cnv.height || this.y < 0) {
            this.yv = reflection ? -this.yv : undefined
        }
        for (let i = 0; i < opaques.length; i++) {
            if (distance(this.x, this.y, opaques[i].x, opaques[i].y) < opaques[i].radius) {
                this.x = -1
                this.y = -1
                this.xv = 0
                this.yv = 0
            }
        }
        this.alpha -= 0.002 * alpha
    }

    this.show = function() {
        ctx.globalAlpha = this.alpha;
        ctx.beginPath()
        ctx.arc(this.x, this.y, 1, 0, 2 * Math.PI, true)
        ctx.strokeStyle = "yellow"
        ctx.stroke()
    }
}