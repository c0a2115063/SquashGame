/*2023/06/10 第2段階*/
/*2023/06/10 第3段階*/
/*2023/06/10 第4段階*/
/*2023/06/12 第5段階*/

/*変数の宣言*/
var ballX = 600;  //ボールのX座標
var ballY = 300;  //ボールのY座標
var ballXp =  0;  //ボールのX軸方向の速さ
var ballYp =  0;  //ボールのY軸方向の速さ
var barX = 600; //バーのX座標
var barY = 700; //バーのY座標
var score = 0;  //ゲームスコア
var scene = 0;  //ゲーム画面を管理する為の変数
/*起動時の処理*/
function setup() {
    canvasSize(1200,800);
    lineW(3);
    loadImg(0, "image/bg.png");
    loadSound(0, "sound/se.m4a");
}

/*メインループ*/
function mainloop() {
    drawImg(0,0,0); //背景画像
    setAlp(50);
    fRect(250, 50, 700, 750, "black");
    setAlp(100);
    sRect(250, 50, 700, 760, "silver");
    fText("SCORE "+score, 600, 25, 36, "white"); //スコア表示
    sCir(ballX, ballY, 10, "lime"); //ボール
    sRect(barX-50, barY-10, 100, 20, "violet"); //バー
    //====ゲームタイトル画面シーン====//
    if (scene == 0) {
        fText("Squash Game", 600, 200, 48, "cyan"); //タイトル
        fText("Click to start.", 600, 600, 36, "gold");//クリックするとスタートする
        if(tapC == 1){//画面をクリックしたら
            ballX = 600;
            ballY = 300;
            ballXp = 12;
            ballYp =  8;
            score = 0;
            scene = 1; //ゲームプレイ画面に移行
        }
    }
    //====ゲームプレイ中====//
    else if(scene == 1){
        //== ボールの動作 ==//
        ballX = ballX + ballXp;
        ballY = ballY + ballYp;
        if(ballX <= 260 || ballX >= 940) ballXp = -ballXp; //左右の壁判定
        if(ballY <=  60) ballYp = 8+rnd(8); //上下の壁判定
        /*ボールが一番下に落ちた時*/
        if(ballY > 800) scene = 2;
        //== バーの動作 ==//
        barX = tapX; //マウスポインターのX座標をbarXに代入
        if(barX < 300) barX = 300;
        if(barX > 900) barX = 900;
        //== バーでボールを打ち返す ==//
        if(barX-60 < ballX && ballX < barX+60 && barY-30 < ballY && ballY < barY-10){
            ballYp = -8-rnd(8);
            score = score + 100;
            playSE(0);
        }
    }
    //====ゲームオーバーシーン====//
    else if(scene == 2){
        fText("GAME OVER", 600, 400, 36, "red");
        if(tapC == 1){
            scene = 0;
            tapC = 0;
        }
    }
}