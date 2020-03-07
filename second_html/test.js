window.onload = function()
{
  alert(document.getElementById("yumi"));
  document.getElementById("yumi").onclick = changephoto;
};

function changephoto()
{
    if(document.getElementById("yumi").src == ( "yumi.jpg" ))
    {
      document.getElementById("yumi").src = "yumi1.jpg";
    } 
    else
    {
      document.getElementById("yumi").src ="yumi.jpg";
    }
}
