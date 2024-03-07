const collection = document.getElementsByClassName("grid-items");
var k=0;
for(var i=0;i<collection.length;i++){
    collection[i].addEventListener("click",setcolor);
}
function checkwinner()
{
    if((collection[0].innerHTML == collection[1].innerHTML && collection[1].innerHTML == collection[2].innerHTML)||
    (collection[0].innerHTML == collection[3].innerHTML && collection[3].innerHTML == collection[6].innerHTML)||
    (collection[0].innerHTML == collection[4].innerHTML && collection[4].innerHTML == collection[8].innerHTML)||
    (collection[0].innerHTML == collection[1].innerHTML && collection[1].innerHTML == collection[2].innerHTML)||
    (collection[3].innerHTML == collection[4].innerHTML && collection[4].innerHTML == collection[5].innerHTML)||
    (collection[6].innerHTML == collection[7].innerHTML && collection[7].innerHTML == collection[8].innerHTML)||
    (collection[2].innerHTML == collection[4].innerHTML && collection[4].innerHTML == collection[6].innerHTML)||
    (collection[2].innerHTML == collection[5].innerHTML && collection[5].innerHTML == collection[8].innerHTML)||
    (collection[1].innerHTML == collection[4].innerHTML && collection[4].innerHTML == collection[7].innerHTML))
    return true;
    else
    return false;
}
function setcolor(element){
    if(k>=0)
    {
    if(k%2==0)
    element.innerHTML="X";
    else
    element.innerHTML="O";
    element.style.color="rgb(169, 164, 164)";
    k+=1;
    }
    if(checkwinner() && k>0)
    {
        var ele = document.getElementById("container");
        if(k%2==0)
        {
            // var ele = document.getElementById("container");
            if(mediaQuery.matches)
            {
                document.getElementById("container").innerHTML = "Congratulations Player-2(O)";
                document.getElementById("container").style.marginLeft = "2px";
                document.getElementById("container").style.fontSize = "20px"
            }
            else{
             document.getElementById("container").innerHTML = "Congratulations Player-2(O)";
             document.getElementById("container").style.marginLeft = "-8rem";
            }
        }
        else{
            if(mediaQuery.matches)
            {
                document.getElementById("container").innerHTML = "Congratulations Player-1(X)";
                document.getElementById("container").style.marginLeft = "2px";
                document.getElementById("container").style.fontSize = "20px"
            }
            else{
             document.getElementById("container").innerHTML = "Congratulations Player-1(X)";
             document.getElementById("container").style.marginLeft = "-8rem";
            }
        }
    }
    else if(k==9)
    {
        
            document.getElementById("container").innerHTML = "It's a draw";
    }
}
