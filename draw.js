//描画の関数
function draw() {

  background(251, 250, 248); 
  imageMode(CENTER);

  push();
  translate(width / 2, height / 3);
  
  scale(1);
 
  time = millis() / 4;

  //描画。

  d_x = 5;
  d_y = 0.01;

  if(move_x == d_x){
    move_x = 0;
  }

  move_x ++;

  for(var j = 0; j < height * (3 / 4); j = j + d_y){
    for(var i = -width / 2; i < width; i = i + d_x){

      dot_H = 200;
      dot_S = 0 + noise(j / 150,  i / 30, time / 30) * 10;
      dot_B = (80 + (noise(j / 150, i / 30, time / 30) * 10)) - j / 15;
      dot_a = 50;
      
      dot_x = i;
      dot_y = j + noise(j / 100, i / 50, time / 200) * 20;
      dot_r = 6 + j / 100;

      colorMode(HSB, 360, 100, 100, 100);
      fill(dot_H, dot_S, dot_B, dot_a);
      noStroke();
      circle(dot_x * (1 + j / 200) + move_x * (1 + j / 200), dot_y, dot_r);

    } 
      d_y = d_y + 1;

      //光の描画。
      light_x = random(-width / 2, width / 2);
      light_y = j;
      fill(0, 0, 100, 100 - j / 10);
      circle(light_x, light_y, dot_r);
  }

    pop();
    
}
