window.onload = function()
{
  document.getElementById("yumi").onclick = changephoto;
};

function changephoto()
{
    if(document.getElementById("yumi").src == ( "https://lokts0311.github.io/second_html/yumi.jpg" ))
    {   
      document.getElementById("yumi").src = "https://lokts0311.github.io/second_html/yumi1.jpg";
    } 
    else
    {
      document.getElementById("yumi").src ="https://lokts0311.github.io/second_html/yumi.jpg";
    }
}
