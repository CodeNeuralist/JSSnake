window.onload = function() {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    const gridSize = 20;
    const snake = new Snake();
    let food = generateFood();

    document.addEventListener("keydown", handleKeyDown);

    function handleKeyDown(event) {
        const keyPressed = event.key;
        switch (keyPressed) {
            case "ArrowUp":
                snake.changeDirection(0, -1);
                break;
            case "ArrowDown":
                snake.changeDirection(0, 1);
                break;
            case "ArrowLeft":
                snake.changeDirection(-1, 0);
                break;
            case "ArrowRight":
                snake.changeDirection(1, 0);
                break;
        }
    }

    function generateFood() {
        return {
            x: Math.floor(Math.random() * (canvas.width / gridSize)),
            y: Math.floor(Math.random() * (canvas.height / gridSize))
        };
    }

    function drawFood() {
        ctx.fillStyle = "red";
        ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
    }

    function checkFoodCollision() {
        if (snake.x === food.x && snake.y === food.y) {
            snake.cells.push({ ...snake.cells[snake.cells.length - 1] });
            food = generateFood();
        }
    }

    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snake.move();
        checkFoodCollision();
        snake.draw(ctx, gridSize);
        drawFood();
        setTimeout(gameLoop, 100);
    }

    gameLoop();
}
