function preload(){}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();

    user_name = "";
}

function draw(){}

function take_snapshot(){
    user_name = document.getElementById("user_name").value;
    save(user_name);
}