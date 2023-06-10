/*2023/06/10 第2段階*/
/*2023/06/10 第3段階*/
/*変数の宣言*/
var ballX = 600;  //ボールのX座標
var ballY = 300;  //ボールのY座標
var ballXp = 10;  //ボールのX軸方向の速さ
var ballYp =  8;  //ボールのY軸方向の速さ
var barX = 600; //バーのX座標
var barY = 700; //バーのY座標

/*起動時の処理*/
function setup() {
    canvasSize(1200,800);
    lineW(3);
    loadImg(0, "image/bg.png");
}

/*メインループ*/
function mainloop() {
    drawImg(0,0,0); //背景画像
    setAlp(50);
    fRect(250, 50, 700, 750, "black");
    setAlp(100);
    sRect(250, 50, 700, 760, "silver");
    //== ボールの動作 ==//
    ballX = ballX + ballXp;
    ballY = ballY + ballYp;
    if(ballX <= 260 || ballX >= 940) ballXp = -ballXp; //左右の壁判定
    if(ballY <=  60 || ballY >= 790) ballYp = -ballYp; //上下の壁判定
    sCir(ballX, ballY, 10, "lime"); //ボール
    //== バーの動作 ==//
    barX = tapX; //マウスポインターのX座標をbarXに代入
    if(barX < 300) barX = 300;
    if(barX > 900) barX = 900;
    sRect(barX-50, barY-10, 100, 20, "violet"); //バー
}