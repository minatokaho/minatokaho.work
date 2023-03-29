//グローバル変数
var x = 0;
var y = 0;

var time;

var d_x;
var d_y;

var dot_H;
var dot_S;
var dot_B
var dot_a;

var dot_x;
var dot_y;
var dot_r;

var light_H;
var light_S;
var light_B
var light_a;

var light_x;
var light_y;

var move_x=0;


//設定（preload後、一度だけ実行）
function setup() {

  //キャンバス作成
  createCanvas(windowWidth, windowHeight);

  //１秒間にdraw関数を何回実行するか
  frameRate(5);

  background(255, 255, 255);

}


