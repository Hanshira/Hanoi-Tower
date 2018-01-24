var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var game;
var game = new HanoiTower(3);

window.onload = function() {
  //document.getElementById("").addEventListener("click", function(){
  //get number towers
  //var game = new HanoiTower(n);
  draw(game);

  canvas.addEventListener("click", clickFunction, false);
  // }, false);
};

// return la posizione del mouse (oggetto)

function getPosition(e) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}

// return il numero della torre che sto selezionando
function whichTower(e) {
  var clickPos = getPosition(e);
  console.log(clickPos);
  if (clickPos.x > 25 && clickPos.x < 425) {
    console.log(1);
    return "1";
  } else if (clickPos.x > 450 && clickPos.x < 850) {
    console.log(2);
    return "2";
  } else if (clickPos.x > 875 && clickPos.x < 1275) {
    console.log(3);
    return "3";
  } else return false;
}

function clickFunction(e) {
  var num = whichTower(e);
  if (num) {
    var isFirstClick = game.selectTower(num);
    if (isFirstClick) {
      selectDisk(num);
    }
    resetCanvas();
    draw(game);
  }
}

// function selectDisk(num) {
//   console.log("you selected the first disk in the tower" + num);
//   selectedTower = game["tower" + num];
//   lastDiskSize = selectedTower[selectedTower.length - 1].size;
//   console.log(lastDiskSize);

//   ctx.fillStyle = "rgba(0, 128, 128, 0.5)";
//   // // disk di posizione (selectedTower.length-1) e size (lastDiskSize)
//   ctx.fillRect(
//     225 + 425 * (num - 1) - lastDiskSize / 2,
//     520 - selectedTower.length * game.diskHeigth,
//     lastDiskSize,
//     game.diskHeigth
//   );
// }

//stabilisco se posso muovere il disco o no
// function secondClick(e) {
//   var clickPos = getPosition(e);
//   destTowerNum = whichTower(e);
//   console.log("the second tower is : " + originTowerNum);
//   if (checkIfMove(originTowerNum, destTowerNum) === false) {
//     //il disco selezionato con il firstClick torna come prima
//   } else {
//     move(originTowerNum, destTowerNum);
//     resetCanvas();
//     draw(game);
//   }
// }
