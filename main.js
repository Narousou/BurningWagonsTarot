cardlocal =  document.getElementById("cards");

var w = 300;
var h = 507;

function delta()
{
    let t = document.createElement("IMG");
    t.setAttribute("width" ,w);
    t.setAttribute("height",h);
    t.setAttribute("src", "major_arcana/the_paradox.png");
    cardlocal.appendChild(t);
}