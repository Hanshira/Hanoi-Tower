var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//ctx.scale(0.8, 0.8);
ctx.fillStyle = "#4d2800";
ctx.fillRect(25, 570, 400, 70);
ctx.fillRect(450, 570, 400, 70);
ctx.fillRect(875, 570, 400, 70);
ctx.fillRect(210, 70, 30, 500);
ctx.fillRect(635, 70, 30, 500);
ctx.fillRect(1060, 70, 30, 500);

function draw(game) {
  var diskHeigth = 50;
  for (j = 1; j <= 3; j++) {
    for (var i = 0; i < game["tower" + j].length; i++) {
      ctx.fillStyle = "rgba(0, 128, 128, 0.5)";
      var disk = game["tower" + j][i];
      //change the color of the disks?
      ctx.fillRect(
        225 + 425 * (j - 1) - disk.size / 2,
        520 - i * diskHeigth,
        disk.size,
        diskHeigth
      );
    }
  }
}

function selectDisk(num) {
  console.log("you selected the first disk in the tower" + num);
  var selectedTower = game["tower" + num];
  var lastDiskSize = selectedTower[selectedTower.length - 1].size;
  console.log(lastDiskSize);
  ctx.fillStyle = "rgba(0, 128, 128, 0.5)";
  // // disk di posizione (selectedTower.length-1) e size (lastDiskSize)
  ctx.fillRect(
    225 + 425 * (num - 1) - lastDiskSize / 2,
    520 - selectedTower.length * game.diskHeigth,
    lastDiskSize,
    game.diskHeigth
  );
}

function resetCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#4d2800";
  ctx.fillRect(25, 570, 400, 70);
  ctx.fillRect(450, 570, 400, 70);
  ctx.fillRect(875, 570, 400, 70);
  ctx.fillRect(210, 70, 30, 500);
  ctx.fillRect(635, 70, 30, 500);
  ctx.fillRect(1060, 70, 30, 500);
}
