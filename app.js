let posX1, posX2, posY1, posY2, posX3, posY3; //variables de la posicion de los puntos de la linea
let t = 0;
let tam1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(random * (5, 100, 100));



}

function draw() {

    background(5, 100, 100, 10);

    posX1 = noise(t) * width;
    posY1 = noise(t + 1) * height;
    posX2 = noise(t + 2) * width;
    posY2 = noise(t + 3) * height;
    posX3 = noise(t + 4) * width;
    posY3 = noise(t + 5) * height;

    tam1 = noise(t) * 200;



    //line(posX1, posY1, posX2, posY2);
    stroke(5, 25, 55, 50);
    strokeWeight(random * 10);
    noFill();
    circle(posX1, posY1, tam1);
    stroke(255, 255, 255, 60);
    strokeWeight(random * 70);
    noFill();
    circle(posX2, posY2, tam1);
    stroke(200, 25, 55, 30);
    strokeWeight(random * 40);
    noFill();
    circle(posX3, posY3, tam1);


    stroke(0, 0, 0, 30);
    strokeWeight(random * 20);
    noFill();
    triangle(posX1, posY1, posX2, posY2, posX3, posY3);

    t += 0.008;

}
