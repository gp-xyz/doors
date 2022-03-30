var palet1 = ["#d65780","#c9b1bd","#9dd1f1","#f4b860","#aceb98"];
var greengrey = ["#6b6054","#929487","#a1b0ab","#c3dac3","#d5ecd4"];
var browns = ["#452103","#210f04","#652103","#320f04","#101010"]
var doorWidth = 360;
var doorHeight = 800;
var doorPane = .88
var dc1 = "#452103";
var dc2 = "#210f04";

function setup() {
  createCanvas(1000, 1000);
  background(255);
  var colorchoice = random([palet1,greengrey,browns])
  var myVsplit = random([0,0,1,1,2,11,30]);
  var myHsplit = random([0,0,1,1,2,11,30]);
  var aaa = new DoorWay(colorchoice,"style",myVsplit,myHsplit);
  aaa.show();
  // noStroke();
  // slightlyBevelRectangle(0,0,360,800,dc1,dc2);
  // slightlyBevelRectangle(40,40,280,720,dc2,dc1);

}

function draw() {
 
  
  // aaa.show();
  // fill(dc1)
  // text(mouseX+","+mouseY,500,10);


  //   //2 doors
  //   rect(100,100,doorWidth,doorHeight);
  //   rect(500,100,doorWidth,doorHeight);
  //   fill(dc2);
  //   rect(140,140,280,720);

  //   for (let i =0; i<56;i++){
  //     var tempColor = lerpColor(color(dc1),color(dc2),i/56);
  //     fill(tempColor);
  //     rect(140+i,140+i,280-i,720-i);
  //   }

  //   for (let i =0; i<11;i++){
  //     var tempColor = lerpColor(color(dc1),color(dc2),i/11);
  //     fill(tempColor);
  //     rect(540+i,140+i,280-i,720-i);
  //   }



}
