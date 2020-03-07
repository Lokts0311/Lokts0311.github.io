window.onload = function()
{
  alert(document.getElementById("yumi").src);
  document.getElementById("yumi").onclick = changephoto;
};

function changephoto()
{
    if(document.getElementById("yumi").src == ( "yumi.jpg" ))
    {   
      document.getElementById("yumi").src = "yumi1.jpg";
      alert(document.getElementById("yumi").src);
    } 
    else
    {
      document.getElementById("yumi").src ="yumi.jpg";
    }
}
