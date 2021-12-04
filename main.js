function setup(){
    canvas=createCanvas(1000, 800);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

}

function draw(){
    image(video,0,0, 1000, 800);
}