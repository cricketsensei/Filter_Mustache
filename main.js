lip_X = 0;
lip_Y = 0;
function preload(){
    mustache = loadImage('https://i.postimg.cc/qRVCnpyg/mustache.png')
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
    user_name = "";
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        lip_X = results[0].pose.nose.x-25;
        lip_Y = results[0].pose.nose.y+12;
        console.log("nose x = " + lip_X);
        console.log("nose y = " + lip_Y);
    }
}
function draw(){
    image(video, 0, 0, 300, 300)
    image(mustache, lip_X, lip_Y, 50, 30);
}

function take_snapshot(){
    user_name = document.getElementById("user_name").value;
    save(user_name);
}