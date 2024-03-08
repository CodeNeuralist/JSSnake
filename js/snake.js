class Snake {
    constructor() {
        this.x = 10;
        this.y = 10;
        this.dx = 1;
        this.dy = 0;
        this.cells = [{ x: 10, y: 10 }];
    }

    move() {
        const head = { x: this.x + this.dx, y: this.y + this.dy };
        this.cells.unshift(head);
        this.x = head.x;
        this.y = head.y;
        this.cells.pop();
    }

    changeDirection(dx, dy) {
        this.dx = dx;
        this.dy = dy;
    }

    draw(ctx, gridSize) {
        ctx.fillStyle = "#000";
        this.cells.forEach(cell => {
            ctx.fillRect(cell.x * gridSize, cell.y * gridSize, gridSize, gridSize);
        });
    }
}
