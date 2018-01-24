var HanoiTower = function(n) {
  this.diskNumber = n;
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
      size: incrementDiskSize * i + diskMimimumSize
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
  if (origin.length <= 0) return false;
  else {
    if (
      destination.length >= 1 &&
      destination[destination.length - 1].size < origin[origin.length - 1].size
    )
      return false;
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
    test = this.tower3[i] === this.defaultTower[i];
    i++;
  }
  if (test === true) console.log("you did it!");
  return test;
};

HanoiTower.prototype.reset = function() {
  this.defaultGame();
};
