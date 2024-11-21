//Code compiled by Benji Reichler
//assets found by Harper Schmidt and Carlos Bonet
//declare all assets
let imgWelcomeScreen0; //screen 0
let imgBedIcon0;
let imgShirtIcon0;
let imgSinkIcon0;
let imgCouchIcon0;
let imgGramophoneIcon0;
let img2ndGramophoneIcon0;
let imgKnifeIcon0;
let imgTeaIcon0;
let imgGuitarIcon0;
let welcomeSong0;
let welcomeDoorSFX0;
let correctSound;
let incorrectSound;
let imgBedroom1;
let bedroomMusic1;
let imgBathroom3;
let bathroomMusic3;
let imgLivingRoom4;
let livingRoomMusic4;
let imgKitchen6;
let kitchenMusic6;
let imgMusicRoom8;
let musicRoomMusic8;
let distortedMusic9;

//declare all global variables
let scene; //0: Landing screen, 1: Game1.1, etc.
let timer;
//variables for game 2
let draggables2 = [];
let sets2 = [90,160,230,300,370]; //final
let step2 = [
  "Put arms\n through sleeves",
  "Grab shirt by the\n bottom of the shirt",
  "Put head through\n top hole of shirt"
];
let columns2 = [];
let order2 = [
  "Grab shirt by the\n bottom of the shirt",
  "Put head through\n top hole of shirt",
  "Put arms\n through sleeves"
];
let continueDrawing2 = false;
let finishNeedsToBeDrawn = false;
let draggables7 = [];
let sets7 = [90,160,230,300,370];
let step7 = [ //use columns2, sets2, draggables2 for scene 7 aswell
  "Put tea leaves in tea cup",
  "Pour kettle water\n into tea cup",
  "Turn on kettle",
  "Fill kettle with water",
  "Let steep and then enjoy"
];
let columns7 = [];
let order7 = [
  "Fill kettle with water",
  "Turn on kettle",
  "Put tea leaves in tea cup",
  "Pour kettle water\n into tea cup",
  "Let steep and then enjoy"
];
let continueDrawing7 = false;
let finishNeedsToBeDrawn7 = false;

//buttons
let welcomeButton0;
let buttonBedroom1;
let buttonKitchen1;
let buttonFinish;
let button2;
let buttonBathroom3;
let buttonLibrary3;
let buttonBedroom3;
let buttonLivingRoom4;
let buttonLibrary4;
let buttonKitchen4;
let buttonMusicRoom4;
let buttonBathroom5;
let buttonBedroom5;
let buttonLivingRoom5;
let buttonKitchen6;
let button7;
let buttonBedroom8;
let buttonLibrary8;
let buttonLivingRoom8;
let buttonGreenHouse8;
let buttonMusicRoom8;
let buttonBathroom8;
let buttonMusicRoom9;
let buttonLibrary9;
let buttonKitchen9;

//setup
let boolSetupScene1 = false;
let boolSetupScene2 = false;
let boolSetupScene3 = false;
let boolSetupScene4 = false;
let boolSetupScene5 = false;
let boolSetupScene6 = false;
let boolSetupScene7 = false;
let boolSetupScene8 = false;
let boolSetupScene9 = false;
let boolSetupScene10 = false;

function setup() {
  createCanvas(400, 500);
  scene = 0;
  timer = (60*26);
  textFont('Verdana');
  setupLandingScene0();
}
function draw() {
  //draw() logic written by Benji Reichler
  timer++;
  
  if(scene == 0) {//Welcome Screen
    if(timer > (60*25.5)) {
      welcomeSong0.play();
      timer = 0;
    }
  }
  if(scene == 1) { //Guess the room: Bedroom
    if(boolSetupScene1 && timer == 45) {
      boolSetupScene1 = false;
      setup1_1Scene1();
    }
    if(timer > (60*60)) {
      bedroomMusic1.stop();
      bedroomMusic1.play();
      timer = 0;
    }
  }
  if(scene == 2) { //Task sort: Put on Shirt
    if(boolSetupScene2) {
      boolSetupScene2 = false;
      setup2_1Scene2();
    }
    if(continueDrawing2) {
      drawScene2();
    } else {
      if(finishNeedsToBeDrawn) {
        drawScene2(); 
        drawFinishButton();
        text("Click anywhere to continue.", 200, 460);
      }
    }
    if(timer > (60*60)) {
      bedroomMusic1.stop();
      bedroomMusic1.play();
      timer = 0;
    }
  }
  if(scene == 3) {
    if(boolSetupScene3) {
      boolSetupScene3 = false;
      setup1_2Scene3();
    }
    if(timer > (60*60)) {
      bathroomMusic3.stop();
      bathroomMusic3.play();
      timer = 0;
    }
  }
  if(scene == 4) {
    if(boolSetupScene4) {
      boolSetupScene4 = false;
      setup1_3Scene4();
    }
    if(timer > (60*62)) {
      livingRoomMusic4.stop();
      livingRoomMusic4.play();
      timer = 0;
    }
  }
  if(scene == 5) {
    if(boolSetupScene5) {
      boolSetupScene5 = false;
      setup3_1Scene5();
    }
    if(timer > (60*60)) {
      bathroomMusic3.stop();
      bathroomMusic3.play();
      timer = 0;
    }
  }
  if(scene == 6) {
    if(boolSetupScene6) {
      boolSetupScene6 = false;
      setup1_4Scene6();
    }
    if(timer > (60*60)) {
      kitchenMusic6.stop();
      kitchenMusic6.play();
      timer = 0;
    }
  }
  if(scene == 7) {
    if(boolSetupScene7) {
      boolSetupScene7 = false;
      setup2_2Scene7();
    }
    if(continueDrawing7) {
      drawScene7();
    } else {
      if(finishNeedsToBeDrawn7) {
        drawScene7();
        finishNeedsToBeDrawn7 = false;
        drawFinishButton();
        text("Click anywhere to continue.", 200, 460);
      }
    }
    if(timer > (60*60)) {
      kitchenMusic6.stop();
      kitchenMusic6.play();
      timer = 0;
    }
  }
  if(scene == 8) {
    if(boolSetupScene8) {
      boolSetupScene8 = false;
      setup1_5Scene8();
    }
    if(timer > (60*60)) {
      musicRoomMusic8.stop();
      musicRoomMusic8.play();
      timer = 0;
    }
  }
  if(scene == 9) {
    if(boolSetupScene9) {
      boolSetupScene9 = false;
      setup3_2Scene9();
    }
    if(timer > (60*39)) {
      distortedMusic9.stop();
      distortedMusic9.play();
      timer = 0;
    }
  }
  if(scene == 10) {
    if(boolSetupScene10) {
      boolSetupScene10 = false;
      setupFinalCongratsScene10();
    }
    if(timer > (60*25.5)) {
      welcomeSong0.play();
      timer = 0;
    }
  }
}

//preload all assets
function preload() {
  //preload() logic by Benji Reichler
  imgWelcomeScreen0 = loadImage('./assets/welcomeScreen.png');
  imgBedIcon0 = loadImage('./assets/bedIcon.png');
  imgShirtIcon0 = loadImage('./assets/shirtIcon.png');
  imgSinkIcon0 = loadImage('./assets/sinkIcon.png');
  imgCouchIcon0 = loadImage('./assets/couchIcon (1).png');
  imgGramophoneIcon0 = loadImage('./assets/gramophone-Photoroom.png');
  img2ndGramophoneIcon0 = loadImage('./assets/gramophone-Photoroom.png');
  imgKnifeIcon0 = loadImage('./assets/knifeIcon (1).png');
  imgTeaIcon0 = loadImage('./assets/tea.png');
  imgGuitarIcon0 = loadImage('./assets/guitar (1).png');
  imgBedroom1 = loadImage('./assets/bedroom_old.jpg');
  welcomeSong0 = loadSound('./assets/WelcomeJazz.mp3');
  welcomeDoorSFX0 = loadSound('./assets/welcomeDoor.mp3');
  correctSound = loadSound('./assets/correct.mp3');
  incorrectSound = loadSound('./assets/incorrect.mp3');
  bedroomMusic1 = loadSound('./assets/bedroom.mp3');
  imgBathroom3 = loadImage('./assets/Bathroom (1).webp')
  bathroomMusic3 = loadSound('./assets/bathroom.mp3');
  imgLivingRoom4 = loadImage('./assets/Living Room (1).webp');
  livingRoomMusic4 = loadSound('./assets/livingRoom.mp3');
  imgKitchen6 = loadImage('./assets/Kitchen.webp');
  kitchenMusic6 = loadSound('./assets/kitchen.mp3');
  imgMusicRoom8 = loadImage('./assets/Music Room.webp');
  musicRoomMusic8 = loadSound('./assets/musicRoom.mp3');
  distortedMusic9 = loadSound('./assets/kitchenDistorted.mp3');
}

function setupLandingScene0() {
  //Scene 0 and helper functions created by Benji Reichler
  //welcome photo
  imgWelcomeScreen0.resize(400, 500);
  image(imgWelcomeScreen0, 0, 0);
  //progress bar
  strokeWeight(2);
  line(75, 66, 325, 66);
  line(75, 66, 75, 76);
  imgBedIcon0.resize(40, 40);
  image(imgBedIcon0, 55, 76);
  line(106, 66, 106, 56);
  imgShirtIcon0.resize(36,40);
  image(imgShirtIcon0, 88, 16);
  line(137, 66, 137, 76);
  imgSinkIcon0.resize(30,30);
  image(imgSinkIcon0, 122, 81);
  line(150+18, 66, 150+18, 56);
  imgCouchIcon0.resize(40,40);
  image(imgCouchIcon0, 148, 20);
  line(175+25, 66, 175+25, 76);
  imgGramophoneIcon0.resize(30, 30);
  image(imgGramophoneIcon0, 185, 81);
  line(200+31, 66, 200+31, 56);
  imgKnifeIcon0.resize(30, 30);
  image(imgKnifeIcon0, 185+31, 25);
  line(225+37, 66, 225+37, 76);
  imgTeaIcon0.resize(54, 40);
  image(imgTeaIcon0, 198+37, 75);
  line(250+43, 66, 250+43, 56);
  imgGuitarIcon0.resize(46, 46);
  image(imgGuitarIcon0, 225+43, 10);
  line(275+50, 66, 275+50, 76);
  img2ndGramophoneIcon0.resize(30, 30);
  image(imgGramophoneIcon0, 260+50, 81);
  
  textAlign(CENTER, CENTER);
  fill("white");
  textFont('Verdana');
  textSize(17);
  text("Pay attention to the music!!", 200, 445);
  text("Click anywhere to start", 200, 346);

  //button over whole welcome screen
  welcomeButton0 = createButton('');
  welcomeButton0.position(0, 0);
  welcomeButton0.size(width, height);
  welcomeButton0.style('opacity','0');
  welcomeButton0.style('border', 'none');
  welcomeButton0.mousePressed(welcomeButtonClicked0);
}
function welcomeButtonClicked0() {
  welcomeButton0.remove();
  timer = ((60*60)-15);
  boolSetupScene1 = true;
  welcomeSong0.stop();
  welcomeDoorSFX0.play();
  background(0);
  scene = 1;
}

function setup1_1Scene1() {
  //Scene 1 and helper functions created by Benji Reichler
  //draw background image
  imgBedroom1.resize(500, 500);
  image(imgBedroom1, 0, 0, 400, 500, 20, 0, 400, 500);
  //draw question box
  fill("#c07e67");
  noStroke();
  rect(50, 350, 300, 100, 25);
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(14);
  text("What room are you in?", 200, 375);
  //draw first button
  buttonBedroom1 = createButton("Bedroom"); //correct
  buttonBedroom1.position(205, 395);
  buttonBedroom1.size(120,40);
  buttonBedroom1.style('background-color','rgb(163, 98, 75)');
  buttonBedroom1.style('border-radius', '25px');
  buttonBedroom1.style('border', 'none');
  buttonBedroom1.style('font-size', '14px');
  buttonBedroom1.style('font-family', 'Verdana');
  buttonBedroom1.mousePressed(buttonBedroomClicked1);
  //draw second button
  buttonKitchen1 = createButton("Kitchen"); //incorrect
  buttonKitchen1.position(75, 395);
  buttonKitchen1.size(120,40);
  buttonKitchen1.style('background-color','rgb(163, 98, 75)');
  buttonKitchen1.style('border-radius', '25px');
  buttonKitchen1.style('border', 'none');
  buttonKitchen1.style('font-size', '14px');
  buttonKitchen1.style('font-family', 'Verdana');
  buttonKitchen1.mousePressed(buttonKitchenClicked1);
}
function buttonBedroomClicked1() { //correct
  correctSound.play();
  answerSent1();
  drawCorrectTextBoxGame1();
}
function buttonKitchenClicked1() { //incorrect
  incorrectSound.play();
  answerSent1();
  drawIncorrectTextBoxGame1();
}
function answerSent1() {
  buttonBedroom1.remove();
  buttonKitchen1.remove();
  background("#c07e67");
  drawFinishButton();
  //write description
  textSize(20);
  text("This is the bedroom.", 200, 370);
  text("Here, you can find your bed;", 200, 410);
  text("this is where you sleep.", 200, 450);
  //show image again
  imgBedroom1.resize(340, 340);
  image(imgBedroom1, 30, 150, 340, 180, 0, 110, 340, 180);
}
function drawCorrectTextBoxGame1() {
  fill(98, 227, 89); //green
  rect(75, 30, 250, 100, 25);
  fill(0);
  textSize(44);
  text("Correct!", 200, 85);
}
function drawIncorrectTextBoxGame1() {
  fill(235, 89, 70); //red
  rect(75, 30, 250, 100, 25);
  fill(0);
  textSize(44);
  text("Incorrect!", 200, 85);
}
function drawFinishButton() {
  buttonFinish = createButton('');
  buttonFinish.style('opacity', '0');
  buttonFinish.position(0, 0);
  buttonFinish.size(400, 500);
  buttonFinish.style('border', 'none');
  buttonFinish.mousePressed(finishButtonClicked);
}
function finishButtonClicked() {
  buttonFinish.remove();
  //set which scene should be setup
  switch(scene) {
    case 1: 
      boolSetupScene2 = true;
      continueDrawing2 = true;
      break;
    case 2:
      boolSetupScene3 = true;
      timer = (60*60);
      break;
    case 3:
      boolSetupScene4 = true;
      timer = (60*62);
      break;
    case 4:
      boolSetupScene5 = true;
      timer = (60*60);
      break;
    case 5:
      boolSetupScene6 = true;
      timer = (60*60);
      break;
    case 6:
      boolSetupScene7 = true;
      continueDrawing7 = true;
      break;
    case 7:
      boolSetupScene8 = true;
      timer = (60*60);
      break;
    case 8:
      boolSetupScene9 = true;
      timer = (60*39);
      break;
    case 9:
      boolSetupScene10 = true;
      timer = (60*26); 
      break;
    default:
      // default case if needed
      break;
  }
  scene++;
  //stop all sounds
  if(correctSound && correctSound.isPlaying()) {
    correctSound.stop();
  }
  if(incorrectSound && incorrectSound.isPlaying()) {
    incorrectSound.stop();
  }
  if(welcomeSong0 && welcomeSong0.isPlaying()) {
    welcomeSong0.stop();
  }
  if(welcomeDoorSFX0 && welcomeDoorSFX0.isPlaying()) {
    welcomeDoorSFX0.stop();
  }
  if(bedroomMusic1 && bedroomMusic1.isPlaying()) {
    bedroomMusic1.pause();
  }
  if(bathroomMusic3 && bathroomMusic3.isPlaying()) {
    bathroomMusic3.stop();
  }
  if(livingRoomMusic4 && livingRoomMusic4.isPlaying()) {
    livingRoomMusic4.stop();
  }
  if(kitchenMusic6 && kitchenMusic6.isPlaying()) {
    kitchenMusic6.pause();
  }
  if(musicRoomMusic8 && musicRoomMusic8.isPlaying()) {
    musicRoomMusic8.stop();
  }
  if(distortedMusic9 && distortedMusic9.isPlaying()) {
    distortedMusic9.stop();
  }
}

function setup2_1Scene2() {
  //Scene 2 logic and helper methods written by Nathaniel Joseph with some code inspired by ChatGPT and compiled here and tweaked by Benji Reichler
  strokeWeight(0.6);
  bedroomMusic1.play();
  for (let i = 0; i < 3; i++) {
    draggables2.push(new DraggableG2(40, sets2[i], 145, 40, step2[i]));
  }
  for(let i = 0; i < 3; i++) {
    columns2.push(new ColumnsG2(180, sets2[i]-10, 160, 60));
  }
  
  button2 = createAndDrawRoomButton("Check", 200-60, 450, checkPressed2);
}
function drawScene2() {
  background("#c07e67");
  // Draw all draggables
  for (let c of columns2){
    c.show();
  }
  for (let d of draggables2) {
    d.update();
    d.show();
  }
  text("Put on a shirt", 200,50);
  line(160,60,240,60);
  
  text("Instructions",200,300);
  line(160,310,240,310);
  text("1. Using your mouse, click and drag\n each object to move it around.", 200,330);
  text("2. Move each step into the\n correct order from top to bottom.",200,370);
  text("3. When you are done, click on\n the check button to verify your results.", 200, 410);
}
function checkPressed2() {
  let sortedDraggables = [...draggables2].sort((a, b) => a.y - b.y);
  for(let i = 0; i < sortedDraggables.length; i++) {
    if (sortedDraggables[i].value === order2[i]) {
     sortedDraggables[i].isCorrect = true;
      sortedDraggables[i].isIncorrect = false;
    }
    else{
      sortedDraggables[i].isIncorrect = true;
      sortedDraggables[i].isCorrect = false;
    }
    //check if continueDrawing2 should be false
    continueDrawing2 = false;
    if(sortedDraggables[i].isIncorrect) { //will run unless every step is in the correct order
      continueDrawing2 = true;
    }
  }
  if(!continueDrawing2) {
    finishNeedsToBeDrawn = true;
    correctSound.play();
    button2.remove();
  }
}
function mousePressed() { //will this cause problems
  if(scene==2) {
    for (let d of draggables2) {
      d.pressed();
    }
  }
  if(scene==7) {
    for (let d of draggables7) {
      d.pressed();
    }
  }
}
function mouseReleased() {
  if(scene==2) {
    for (let d of draggables2) {
      d.released();
      d.click();
    }
  }
  if(scene==7) {
    for (let d of draggables7) {
      d.released();
      d.click();
    }
  }
}
class ColumnsG2{
  constructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  show(){  
    fill(163,98,75);
    rect(this.x,this.y,this.w,this.h);
  }
  
}
class DraggableG2 {
  constructor(x, y, w, h,value) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.value = "";
    
    this.value = value;
    this.dragging = false;
    this.rollover = false;
    this.isCorrect = false;
    this.isIncorrect = false;
  }

  update() {
    
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }

    // Adjust position if being dragged
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
  }

  show() {
    stroke(0);
    if (this.dragging) {
      fill(50);
    } else if (this.rollover) {
      fill(100);
    } else {
      fill("#c07e67");
    }
    rect(this.x, this.y, this.w, this.h,5);
    textFont('Verdana');
    textSize(11);
    fill("black");
    textAlign(CENTER,CENTER);
    text(this.value,this.x + 75,this.y + 20);
    
    if (this.isCorrect) {
      fill(0,255,0); //green
      //textSize(16);
      text("✔", this.x + this.w - 10, this.y + this.h - 10);
      fill("black");
    }
    if (this.isIncorrect) {
      fill("red");
      text("X", this.x + this.w - 10, this.y + this.h - 10);
      fill("black");
    }
    
  }

  pressed() {
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.dragging = true;
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;
      
      draggables2.splice(draggables2.indexOf(this), 1);
      draggables2.push(this);
    }
  }

  released() {
    this.dragging = false;
    
  }
  
  click(){
    for(let c of columns2){
      if(Math.abs(this.x - c.x) < 40 && Math.abs(this.y - c.y) < 40 || Math.abs(this.w + this.x) - c.x > this.w + 400 && Math.abs(this.h + this.y) - c.y > this.h + 40){
          this.x = c.x + 10;
          this.y = c.y + 10;
      }
    }
  }
}

function setup1_2Scene3() {
  //Scene 3 and helper functions created by Benji Reichler and tweaked by Harper Schmidt
  strokeWeight(1);
  //draw background image
  imgBathroom3.resize(500, 500);
  image(imgBathroom3, 0, 0, 400, 500, 0, 0, 450, 500);
  //draw question box
  fill("#c07e67");
  noStroke();
  rect(50, 350, 300, 145, 25);
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(14);
  text("What room are you in?", 200, 375);
  //draw 2nd button
  buttonBathroom3 = createButton("Bathroom"); //correct
  buttonBathroom3.position(75, 395);
  buttonBathroom3.size(120,40);
  buttonBathroom3.style('background-color','rgb(163, 98, 75)');
  buttonBathroom3.style('border-radius', '25px');
  buttonBathroom3.style('border', 'none');
  buttonBathroom3.style('font-size', '14px');
  buttonBathroom3.style('font-family', 'Verdana');
  buttonBathroom3.mousePressed(buttonBathroomClicked3);
  //draw 1st button
  buttonLibrary3 = createButton("Library");
  buttonLibrary3.position(205, 395);
  buttonLibrary3.size(120,40);
  buttonLibrary3.style('background-color','rgb(163, 98, 75)');
  buttonLibrary3.style('border-radius', '25px');
  buttonLibrary3.style('border', 'none');
  buttonLibrary3.style('font-size', '14px');
  buttonLibrary3.style('font-family', 'Verdana');
  buttonLibrary3.mousePressed(buttonLibraryClicked3);
  //draw 3rd button
  buttonBedroom3 = createButton("Bedroom");
  buttonBedroom3.position(140, 443);
  buttonBedroom3.size(120,40);
  buttonBedroom3.style('background-color','rgb(163, 98, 75)');
  buttonBedroom3.style('border-radius', '25px');
  buttonBedroom3.style('border', 'none');
  buttonBedroom3.style('font-size', '14px');
  buttonBedroom3.style('font-family', 'Verdana');
  buttonBedroom3.mousePressed(buttonBedroomClicked3);
}
function buttonBathroomClicked3() { //correct
  correctSound.play();
  answerSent3();
  drawCorrectTextBoxGame1();
}
function buttonLibraryClicked3() { //incorrect
  incorrectSound.play();
  answerSent3();
  drawIncorrectTextBoxGame1();
}
function buttonBedroomClicked3() {
  buttonLibraryClicked3(); //both functions do the same; response for incorrect answer
}
function answerSent3() {
  buttonBathroom3.remove();
  buttonLibrary3.remove();
  buttonBedroom3.remove();
  background("#c07e67");
  drawFinishButton();
  //write description
  textSize(20);
  text("This is the bathroom.", 200, 370);
  text("Here, you can shower,", 200, 410);
  text("and prepare for your day.", 200, 450);
  //show image again
  imgBathroom3.resize(340, 340);
  image(imgBathroom3, 30, 145, 340, 180, 0, 145, 340, 190);
}

function setup1_3Scene4() {
  //draw background image
  imgLivingRoom4.resize(500, 500);
  image(imgLivingRoom4, 0, 0, 400, 500, 20, 0, 400, 500);
  //draw question box
  fill("#c07e67");
  noStroke();
  rect(50, 350, 300, 145, 25);
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(14);
  text("What room are you in?", 200, 375);
  //draw 4th button
  buttonLivingRoom4 = createButton("Living Room"); //correct
  buttonLivingRoom4.position(205, 443);
  buttonLivingRoom4.size(120,40);
  buttonLivingRoom4.style('background-color','rgb(163, 98, 75)');
  buttonLivingRoom4.style('border-radius', '25px');
  buttonLivingRoom4.style('border', 'none');
  buttonLivingRoom4.style('font-size', '14px');
  buttonLivingRoom4.style('font-family', 'Verdana');
  buttonLivingRoom4.mousePressed(buttonLivingRoomClicked4);
  //draw 1st button
  buttonMusicRoom4 = createButton("Music Room");
  buttonMusicRoom4.position(75, 395);
  buttonMusicRoom4.size(120,40);
  buttonMusicRoom4.style('background-color','rgb(163, 98, 75)');
  buttonMusicRoom4.style('border-radius', '25px');
  buttonMusicRoom4.style('border', 'none');
  buttonMusicRoom4.style('font-size', '14px');
  buttonMusicRoom4.style('font-family', 'Verdana');
  buttonMusicRoom4.mousePressed(buttonIncorrectAnswerClicked4);
  //draw 2nd button
  buttonKitchen4 = createButton("Kitchen");
  buttonKitchen4.position(205, 395);
  buttonKitchen4.size(120,40);
  buttonKitchen4.style('background-color','rgb(163, 98, 75)');
  buttonKitchen4.style('border-radius', '25px');
  buttonKitchen4.style('border', 'none');
  buttonKitchen4.style('font-size', '14px');
  buttonKitchen4.style('font-family', 'Verdana');
  buttonKitchen4.mousePressed(buttonIncorrectAnswerClicked4);
  //draw 3rd button
  buttonLibrary4 = createButton("Library");
  buttonLibrary4.position(75, 443);
  buttonLibrary4.size(120,40);
  buttonLibrary4.style('background-color','rgb(163, 98, 75)');
  buttonLibrary4.style('border-radius', '25px');
  buttonLibrary4.style('border', 'none');
  buttonLibrary4.style('font-size', '14px');
  buttonLibrary4.style('font-family', 'Verdana');
  buttonLibrary4.mousePressed(buttonIncorrectAnswerClicked4);
}
function buttonLivingRoomClicked4() {
  correctSound.play();
  answerSent4();
  drawCorrectTextBoxGame1();
}
function buttonIncorrectAnswerClicked4() {
  incorrectSound.play();
  answerSent4();
  drawIncorrectTextBoxGame1();
}
function answerSent4() {
  buttonLivingRoom4.remove();
  buttonMusicRoom4.remove();
  buttonKitchen4.remove();
  buttonLibrary4.remove();
  background("#c07e67");
  drawFinishButton();
  //write description
  textSize(20);
  text("This is the living room.", 200, 370);
  text("Here, you can relax", 200, 410);
  text("and even watch TV.", 200, 450);
  //show image again
  imgLivingRoom4.resize(340, 340);
  image(imgLivingRoom4, 30, 145, 340, 180, 0, 110, 340, 180);
}

function setup3_1Scene5() { //uses bathroomMusic3
  background("#c07e67");
  //strokeWeight(0); ?
  fill(0);
  textSize(14);
  text("Where have I heard this song before?", 200, 200);
  //make buttons
  buttonBathroom5 = createButton("Bathroom");
  buttonBathroom5.position(75, 225);
  buttonBathroom5.mousePressed(buttonBathroomClicked5);
  buttonBedroom5 = createButton("Bedroom");
  buttonBedroom5.position(205, 225);
  buttonBedroom5.mousePressed(buttonIncorrectClicked5);
  buttonLivingRoom5 = createButton("Living Room");
  buttonLivingRoom5.position(140, 275);
  buttonLivingRoom5.mousePressed(buttonIncorrectClicked5);

  let buttonArr = [buttonBathroom5, buttonBedroom5, buttonLivingRoom5];
  for(let thisButton of buttonArr) {
    thisButton.size(120,40);
    thisButton.style('background-color','rgb(163, 98, 75)');
    thisButton.style('border-radius', '25px');
    thisButton.style('border', 'none');
    thisButton.style('font-size', '14px');
    thisButton.style('font-family', 'Verdana');
  }
}
function buttonBathroomClicked5() { //correct
  correctSound.play();
  answerSent5();
  //show correct text
  text("Correct!", 200, 85);
  textSize(20);
  text("Good job!", 200, 350);
  text("Continue paying attention!", 200, 390);
}
function buttonIncorrectClicked5() {
  incorrectSound.play();
  answerSent5();
  //show incorrect text
  text("Incorrect!", 200, 85);
  textSize(20);
  text("This song was played in the bathroom.", 200, 350);
  text("Pay more attention next time!", 200, 390);
}
function answerSent5() {
  buttonBedroom5.remove();
  buttonLivingRoom5.remove();
  buttonBathroom5.remove();
  background("#c07e67");
  //draw image
  imgBathroom3.resize(340, 340); //should be unnecessary given each level is played in order
  image(imgBathroom3, 30, 145, 340, 180, 0, 145, 340, 190);
  fill(0);
  textSize(44);
  drawFinishButton();
}

function setup1_4Scene6() { //kitchen
  //draw background image
  imgKitchen6.resize(500, 500);
  image(imgKitchen6, 0, 0, 400, 500, 20, 0, 400, 500);
  //draw question box
  fill("#c07e67");
  noStroke();
  rect(5, 350, 390, 145, 25);
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(14);
  text("What room are you in?", 200, 375);
  //draw buttons (2 top row, 3 bottom row)
  buttonKitchen6 = createAndDrawRoomButton("Kitchen", 10, 443, buttonKitchenClicked6); //correct, 3rd
  buttonMusicRoom6 = createAndDrawRoomButton("Music Room", 140, 443, buttonIncorrectClicked6); //4th
  buttonGreenHouse6 = createAndDrawRoomButton("Green House", 75, 395, buttonIncorrectClicked6); //1st
  buttonLivingRoom6 = createAndDrawRoomButton("Living Room", 270, 443, buttonIncorrectClicked6); //5th
  buttonLibrary6 = createAndDrawRoomButton("Library", 205, 395, buttonIncorrectClicked6); //2nd
}
function createAndDrawRoomButton(nameForButton, topLeftCornerX, topLeftCornerY, functionToLinkTo) {
  let b = createButton(nameForButton);
  b.position(topLeftCornerX, topLeftCornerY);
  b.size(120,40);
  b.style('background-color','rgb(163, 98, 75)');
  b.style('border-radius', '25px');
  b.style('border', 'none');
  b.style('font-size', '14px');
  b.style('font-family', 'Verdana');
  b.mousePressed(functionToLinkTo);
  return b;
}
function buttonKitchenClicked6() {
  correctSound.play();
  answerSent6();
  drawCorrectTextBoxGame1();
}
function buttonIncorrectClicked6() {
  incorrectSound.play();
  answerSent6();
  drawIncorrectTextBoxGame1();
}
function answerSent6() {
  buttonKitchen6.remove();
  buttonMusicRoom6.remove();
  buttonGreenHouse6.remove();
  buttonLivingRoom6.remove();
  buttonLibrary6.remove();
  background("#c07e67");
  //write description
  textSize(20);
  text("This is the kitchen.", 200, 370);
  text("Here, you can cook", 200, 410);
  text("and prepare food.", 200, 450);
  //show image again
  imgKitchen6.resize(340, 340);
  image(imgKitchen6, 30, 145, 340, 180, 0, 90, 340, 180);

  drawFinishButton();
}

function setup2_2Scene7() { //task make tea
  //Scene 2 logic and helper methods written by Nathaniel Joseph with some code inspired by ChatGPT and compiled here and tweaked by Benji Reichler
  
  strokeWeight(0.6);
  kitchenMusic6.play();
  for (let i = 0; i < 5; i++) {
    draggables7.push(new DraggableG2L7(40, sets7[i], 145, 40, step7[i]));
  }
  for(let i = 0; i < 5; i++) {
    columns7.push(new ColumnsG2L7(190, sets7[i]-10, 160, 60));
  }
  
  button7 = createAndDrawRoomButton("Check", 200-60, 450, checkPressed7);
}
function drawScene7() {
  background("#c07e67");
  // Draw all draggables
  for (let c of columns7){
    c.show();
  }
  for (let d of draggables7) {
    d.update();
    d.show();
  }
  text("Make Tea", 200,50);
  line(160,60,240,60);
}
function checkPressed7() {
  let sortedDraggables7 = [...draggables7].sort((a, b) => a.y - b.y);
  for(let i = 0; i < sortedDraggables7.length; i++) {
    if (sortedDraggables7[i].value === order7[i]) {
     sortedDraggables7[i].isCorrect = true;
      sortedDraggables7[i].isIncorrect = false;
    }
    else{
      sortedDraggables7[i].isIncorrect = true;
      sortedDraggables7[i].isCorrect = false;
    }
    //check if continueDrawing7 should be false
    continueDrawing7 = false;
    if(sortedDraggables7[i].isIncorrect) { //will run unless every step is in the correct order
      continueDrawing7 = true;
    }
  }
  if(!continueDrawing7) {
    finishNeedsToBeDrawn7 = true;
    correctSound.play();
    button7.remove();
  }
}
class ColumnsG2L7 {
  constructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  show(){  
    fill(163,98,75);
    rect(this.x,this.y,this.w,this.h);
  }
}
class DraggableG2L7 {
  constructor(x, y, w, h,value) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.value = "";
    
    this.value = value;
    this.dragging = false;
    this.rollover = false;
    this.isCorrect = false;
    this.isIncorrect = false;
  }

  update() {
    
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }

    // Adjust position if being dragged
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
  }

  show() {
    stroke(0);
    if (this.dragging) {
      fill(50);
    } else if (this.rollover) {
      fill(100);
    } else {
      fill("#c07e67");
    }
    rect(this.x, this.y, this.w, this.h,5);
    textFont('Verdana');
    textSize(11);
    fill("black");
    textAlign(CENTER,CENTER);
    text(this.value,this.x + 75,this.y + 20);
    
    if (this.isCorrect) {
      fill("green");
      textSize(16);
      text("✔", this.x + this.w - 10, this.y + this.h - 10);
      fill("black");
    }
    if (this.isIncorrect){
      fill("red");
      text("X", this.x + this.w - 10, this.y + this.h - 10);
      fill("black");
    }
  }

  pressed() {
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.dragging = true;
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;
      
      draggables7.splice(draggables7.indexOf(this), 1);
      draggables7.push(this);
    }
  }

  released() {
    this.dragging = false;
    
  }
  
  click(){
    for(let c of columns7){
      if(Math.abs(this.x - c.x) < 40 && Math.abs(this.y - c.y) < 40 || Math.abs(this.w + this.x) - c.x > this.w + 400 && Math.abs(this.h + this.y) - c.y > this.h + 40){
          this.x = c.x + 10;
          this.y = c.y + 10;
      }
    }
  }
}

function setup1_5Scene8() { //room music (used to be library)
  //draw background image
  imgMusicRoom8.resize(500, 500);
  image(imgMusicRoom8, 0, 0, 400, 500, 0, 0, 400, 500);
  //draw question box
  fill("#c07e67");
  noStroke();
  rect(5, 350, 390, 145, 25);
  textAlign(CENTER, CENTER);
  fill(0);
  textSize(14);
  text("What room are you in?", 200, 375);
  //draw buttons (3 top row, 3 bottom row)
  buttonBathroom8 = createAndDrawRoomButton("Bathroom", 140, 443, buttonIncorrectClicked8); //5th
  buttonMusicRoom8 = createAndDrawRoomButton("Music Room", 270, 443, buttonMusicRoomClicked8); //6th correct
  buttonGreenHouse8 = createAndDrawRoomButton("Green House", 270, 395, buttonIncorrectClicked8); //3rd
  buttonLivingRoom8 = createAndDrawRoomButton("Living Room", 10, 443, buttonIncorrectClicked8); //4th
  buttonLibrary8 = createAndDrawRoomButton("Library", 140, 395, buttonIncorrectClicked8); // 2nd
  buttonBedroom8 = createAndDrawRoomButton("Bedroom", 10, 395, buttonIncorrectClicked8); //1st
}
function buttonMusicRoomClicked8() {
  correctSound.play();
  answerSent8();
  drawCorrectTextBoxGame1();
}
function buttonIncorrectClicked8() {
  incorrectSound.play();
  answerSent8();
  drawIncorrectTextBoxGame1();
}
function answerSent8() {
  //remove buttons
  buttonBathroom8.remove();
  buttonMusicRoom8.remove();
  buttonGreenHouse8.remove();
  buttonLivingRoom8.remove();
  buttonLibrary8.remove();
  buttonBedroom8.remove();
  background("#c07e67");
  //write description
  textSize(20);
  text("This is the music room.", 200, 370);
  text("Here, you can listen to your", 200, 410);
  text("favorite songs and have fun!", 200, 450);
  //show image again
  imgMusicRoom8.resize(340, 340);
  image(imgMusicRoom8, 30, 145, 340, 180, 0, 90, 340, 180);
  drawFinishButton();
}

function setup3_2Scene9() {
  background("#c07e67");
  fill(0);
  textSize(14);
  text("Where have I heard this song before?", 200, 200);
  //make buttons
  buttonKitchen9 = createAndDrawRoomButton("Kitchen", 205, 225, buttonKitchenClicked9);
  buttonLibrary9 = createAndDrawRoomButton("Library", 75, 225, buttonIncorrectClicked9);
  buttonMusicRoom9 = createAndDrawRoomButton("Music Room", 140, 275, buttonIncorrectClicked9);
  text("Warning! The audio is modified", 200, 365);
}
function buttonKitchenClicked9() {
  correctSound.play();
  answerSent9();
  //show correct text
  text("Correct!", 200, 85);
  textSize(20);
  text("Good job!", 200, 350);
}
function buttonIncorrectClicked9() {
  incorrectSound.play();
  answerSent9();
  //show incorrect text
  text("Incorrect!", 200, 85);
  textSize(20);
  text("This song was played in the kitchen", 200, 350);
  text("Pay more attention next time!", 200, 390);
}
function answerSent9() {
  buttonKitchen9.remove();
  buttonLibrary9.remove();
  buttonMusicRoom9.remove();
  background("#c07e67");
  //draw image
  imgKitchen6.resize(340, 340); //should be unnecessary given each level is played in order
  image(imgKitchen6, 30, 145, 340, 180, 0, 90, 340, 180);
  fill(0);
  textSize(44);
  drawFinishButton();
}

function setupFinalCongratsScene10() {
  background("#c07e67");
  fill(0);
  textSize(24);
  text("Congratulations!", 200, 200);
  text("You are now ready\nfor your day!", 200, 270);
}