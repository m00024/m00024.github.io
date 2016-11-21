
var main = function()
{
  draw = function()
  {
      stroke(255,255,255);
      //noStroke();
      //stroke(mouseX,mouseY,(mouseY-mouseX));
      fill(mouseY, mouseX, (mouseX-mouseY));
      
      if (mouseIsPressed)
      {
       ellipse(mouseX, mouseY, mouseX, mouseY);
      }
      else
      {
       rect(mouseX-(mouseX/2),mouseY-(mouseY/2),mouseX,mouseY);
      }
   };
};
$(document).ready(main);
