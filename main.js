var HanoiTower = function(n) {
  this.diskNumber = n;
  this.minimumMoves = Math.pow(2, n) - 1;
  var diskMimimumSize = 60;
  var incrementDiskSize = 40;
  this.defaultTower = [];
  this.tower1 = [];
  this.tower2 = [];
  this.tower3 = [];
  this.counter = 0;
  this.towerSelect = [];
  for (i = this.diskNumber - 1; i >= 0; i--) {
    this.defaultTower.push({
      size: incrementDiskSize * i + diskMimimumSize,
      color:
        "rgb(" +
        Math.floor(Math.random() * 255) +
        ", " +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        ")"
    });
  }
  this.defaultGame();
};

HanoiTower.prototype.defaultGame = function() {
  this.tower1 = this.defaultTower.slice(0);
  this.tower2 = [];
  this.tower3 = [];
};

HanoiTower.prototype.checkIfMove = function(originTowerNum, destTowerNum) {
  var origin = this["tower" + originTowerNum];
  var destination = this["tower" + destTowerNum];
  if (origin.length <= 0 || originTowerNum === destTowerNum)
    //{
    //   $("#modalAlert").addClass("showModal");
    //   $("#modalAlert").html(
    //     "<p>Illegal movement</p>"
    //   );
    // }
    alert("Illegal movement");
  else {
    if (
      destination.length >= 1 &&
      destination[destination.length - 1].size < origin[origin.length - 1].size
    )
      //  {
      //   $("#modalAlert").addClass("showModal");
      //   $("#modalAlert").html(
      //     "<p>Illegal movement</p>"
      //   );
      // }
      return alert("Illegal movement");
    else return true;
  }
};

HanoiTower.prototype.move = function(originTowerNum, destTowerNum) {
  if (this.checkIfMove(originTowerNum, destTowerNum) === true) {
    var origin = this["tower" + originTowerNum];
    var destination = this["tower" + destTowerNum];
    destination.push(origin[origin.length - 1]);
    origin.pop();
    this.counter += 1;
    return this.HanoiTower;
  } else return "Impossible movement";
};

HanoiTower.prototype.selectTower = function(num) {
  var origin = this["tower" + num];
  if (this.towerSelect.length === 0 && origin.length > 0) {
    this.towerSelect.push(num);
    return true;
  } else if (this.towerSelect.length === 1) {
    this.towerSelect.push(num);
    this.originTowerNum = this.towerSelect[0];
    this.destTowerNum = this.towerSelect[1];
    this.move(this.originTowerNum, this.destTowerNum);
    this.towerSelect = [];
    return false;
  }
};

HanoiTower.prototype.howManyMoves = function() {
  return this.counter;
};

HanoiTower.prototype.checkIfWin = function() {
  var i = 0;
  test = true;
  while (test && i < this.diskNumber) {
    if (
      this.tower3.length > 1 &&
      this.tower3[i].size === this.defaultTower[i].size
    )
      test = true;
    else test = false;
    i++;
  }
  if (test === true && this.howManyMoves() === this.minimumMoves)
    alert("Congratulations, you won and with the minimum moves!");
  else if (test === true) alert("Congratulations, you won!");
  return test;
};

HanoiTower.prototype.reset = function() {
  this.defaultGame();
};
