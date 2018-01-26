var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var game;
var numTower;

window.onload = function() {
  document.getElementById("select").addEventListener(
    "change",
    function() {
      numTower = document.getElementById("select").value;
      game = new HanoiTower(numTower);
      resetCanvas();
      draw(game);
      canvas.addEventListener("click", clickFunction, false);
    },
    false
  );
  document
    .getElementById("reset-button")
    .addEventListener("click", resetbutton, false);
};

function startGame(num) {
  game = new HanoiTower(num);
  resetCanvas();
  draw(game);
  canvas.addEventListener("click", clickFunction, false);
}

function getPosition(e) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}

function whichTower(e) {
  var clickPos = getPosition(e);
  console.log(clickPos);
  if (clickPos.x > 25 && clickPos.x < 425) {
    return "1";
  } else if (clickPos.x > 450 && clickPos.x < 850) {
    return "2";
  } else if (clickPos.x > 875 && clickPos.x < 1275) {
    return "3";
  } else return false;
}

function clickFunction(e) {
  var num = whichTower(e);
  if (num) {
    var isFirstClick = game.selectTower(num);
    if (isFirstClick) {
      drawSelectDisk(num);
    } else {
      resetCanvas();
      draw(game);
      setTimeout(function() {
        game.checkIfWin();
      }, 500);
    }
  }
}

function resetbutton(e) {
  resetCanvas();
  startGame(numTower);
}

// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQBSNN8u2EBffW8mCDSsHObNRsbLotIime3yYiDyV7Xb1N8hhSxg
