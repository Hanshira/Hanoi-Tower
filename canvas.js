var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var diskHeigth = 50;
//ctx.scale(0.8, 0.8);
// ctx.shadowColor = "rgba(32, 13, 13, 0.2)";
// ctx.shadowOffsetX = 10;
// ctx.shadowOffsetY = 10;

roundedRect(ctx, 25, 570, 400, 70, 15, "#4d2800");
roundedRect(ctx, 450, 570, 400, 70, 15, "#4d2800");
roundedRect(ctx, 875, 570, 400, 70, 15, "#4d2800");
roundedRect(ctx, 210, 70, 30, 500, 15, "#4d2800");
roundedRect(ctx, 635, 70, 30, 500, 15, "#4d2800");
roundedRect(ctx, 1060, 70, 30, 500, 15, "#4d2800");
ctx.fill();

function draw(game) {
  for (j = 1; j <= 3; j++) {
    for (var i = 0; i < game["tower" + j].length; i++) {
      var disk = game["tower" + j][i];
      roundedRect(
        ctx,
        225 + 425 * (j - 1) - disk.size / 2,
        520 - i * diskHeigth,
        disk.size,
        diskHeigth,
        15,
        game["tower" + j][i].color
      );
    }
  }
  ctx.save();
  var line1 = "Moves: " + game.howManyMoves();
  var line2 = "Minimum moves: " + game.minimumMoves;
  ctx.fillStyle = "#4d2800";
  ctx.font = " 20px sans-serif";
  ctx.fillText(line1, 400, 50);
  ctx.fillText(line2, 800, 50);
  ctx.restore();
}

function drawSelectDisk(num) {
  var selectedTower = game["tower" + num];
  var lastDiskSize = selectedTower[selectedTower.length - 1].size;
  var lastDiskColor = selectedTower[selectedTower.length - 1].color;

  roundedRect(
    ctx,
    225 + 425 * (num - 1) - lastDiskSize / 2,
    570 - selectedTower.length * diskHeigth,
    lastDiskSize,
    diskHeigth,
    15,
    "red"
  );
}

function resetCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#4d2800";
  roundedRect(ctx, 25, 570, 400, 70, 15, "#4d2800");
  roundedRect(ctx, 450, 570, 400, 70, 15, "#4d2800");
  roundedRect(ctx, 875, 570, 400, 70, 15, "#4d2800");
  roundedRect(ctx, 210, 70, 30, 500, 15, "#4d2800");
  roundedRect(ctx, 635, 70, 30, 500, 15, "#4d2800");
  roundedRect(ctx, 1060, 70, 30, 500, 15, "#4d2800");
}

function roundedRect(ctx, x, y, width, height, radius, color) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height - radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.lineTo(x + width - radius, y + height);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.lineTo(x + width, y + radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.lineTo(x + radius, y);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.fill();
}
