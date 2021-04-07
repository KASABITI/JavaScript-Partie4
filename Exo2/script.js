var x = 0;
var array = [];

function addElement(){
 array.unshift(document.getElementById("id").value);
 alert( array[x] + " ajouté au tableau" );
 document.getElementById("id").value = "";
}
function displayArray(){
   var screen = document.getElementById("container");
    var e = "";
    for (var y=0; y<array.length; y++)
    {
      e +=  array[y] + "  ";
    }
    alert(e);
    screen.innerHTML= e;
 }
