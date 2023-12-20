function preLoad(){
}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(530, 270);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}
function draw(){
    image(video, 0, 0, 640, 480);
    tint(tint_color);
}
function filtour(){
    tint_color = document.getElementById("colour").value;
}
function take_snapshot(){
    save("image_filter.png");
}