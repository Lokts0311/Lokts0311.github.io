var currentpath = "file:///C:/Users/Jason/Desktop/test%20(2)/";

window.onload = function()
{
  document.getElementById("yumi").onclick = changephoto;
};

function changephoto()
{
    if(document.getElementById("yumi").src == ( currentpath + "yumi.jpg" ))
    {
      document.getElementById("yumi").src = "yumi1.jpg";
    } 
    else
    {
      document.getElementById("yumi").src ="yumi.jpg";
    }
}