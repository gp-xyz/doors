var palet1 = ["#d65780","#c9b1bd","#9dd1f1","#f4b860","#aceb98"];
var greengrey = ["#6b6054","#929487","#a1b0ab","#c3dac3","#d5ecd4"];
var browns = ["#452103","#210f04","#652103","#320f04","#101010"]
var expalete = ["#f4442e","#fff05a","#690500","#ffd2ac"]
var doorWidth = 360;
var doorHeight = 800;
var doorPane = .88
var dc1 = "#452103";
var dc2 = "#210f04";

function setup() {
  createCanvas(1000, 1000);
  background(255);
  var colorchoice = random([palet1,greengrey,browns,expalete])
  var myVsplit = random([0,0,1,1,2,11,30]);
  var myHsplit = random([0,0,1,1,2,11,30]);
  var aaa = new DoorWay(colorchoice,"style",myVsplit,myHsplit);
  aaa.show();


}

function draw() {
 


}
