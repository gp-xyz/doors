class DoorWay {

    constructor(colors,style,vsplits,hsplits){
        this.doorwidth = 360;
        this.doorheight = 800;
        this.panebuffer = 40;

        this.dc1 = random(colors);
        this.dc2 = random(colors);
        this.style = style;
        this.knob = random(["gold","handle","sup"])
        this.vsplits=vsplits;
        this.hsplits=hsplits;
        this.panewidth = (this.doorwidth - 2*this.panebuffer) / (1+vsplits);
        this.paneheight = (this.doorheight - 2*this.panebuffer) / (1+hsplits);


    }

    show(){
        noStroke();
        //a door
        slightlyBevelRectangle(0,0,360,800,this.dc1,this.dc2,"full");
        
        //panes
        for (let vsplitcount = 0; vsplitcount <= this.vsplits; vsplitcount++){
            for (let hsplitcount = 0; hsplitcount <= this.hsplits; hsplitcount++){
            slightlyBevelRectangle(40+this.panewidth*vsplitcount,40+this.paneheight*hsplitcount,this.panewidth,this.paneheight,this.dc2,this.dc1,"light");
        
            }

        }
        
        var knobpos = random(320,480);
        if (this.knob=="gold")
        {
            fill("#ffd700");
            ellipse(320,knobpos,30,30);

        }
        else if(this.knob=="handle")
        {
            // fill(230);
            slightlyBevelRectangle(292,knobpos,50,30,color(230),color(150),"down");           
        }
        else{
            slightlyBevelRectangle(292,knobpos,50,30,color(230),color(150),"light");  
        }
    }




}

function slightlyBevelRectangle(x,y,w,h,c1,c2,style){
    for (let i =0; i<11;i++){
        var tempColor = lerpColor(color(c1),color(c2),i/11);
        fill(tempColor);
        if (style=="light"){
        rect(x+i,y+i,w-i,h-i);
        }
        else if (style=="down")
        {
            rect(x+i,y+i,w,h-i);    
        }
        else{
        rect(x+i,y+i,w-2*i,h-2*i);
        }
    }
    
}
      