function setup() {
    canvas = createCanvas(450, 350);
    canvas.position(415, 100);
    video = createCapture(VIDEO);
    video.size(350, 250);
    video.hide();
}
function draw() {
    image(video,50, 50, 350, 250);
    stroke("black");
    fill("brown");
    rect(20, 20, 60, 310);
    rect(20, 20, 410, 60);
    rect(370, 20, 60, 310);
    rect(20, 270, 410, 60);
    stroke("black");
    fill("lightgray");
    circle(50, 50, 50);
    circle(400, 300, 50);
    circle(400, 50, 50);
    circle(50, 300, 50);
}
function preload() {}
function take_snapshot() {
    save('Photo_frame.png');
}