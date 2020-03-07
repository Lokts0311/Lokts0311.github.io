window.onload = function()
{
  document.getElementById("yumi").onclick = changephoto;
};

function changephoto()
{
    alert(document.getElementById("yumi"));
    if(document.getElementById("yumi").src == ( "yumi.jpg" ))
    {
      document.getElementById("yumi").src = "yumi1.jpg";
    } 
    else
    {
      document.getElementById("yumi").src ="yumi.jpg";
    }
}
