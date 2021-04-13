var flag = prompt('quele est la première couleur du  drapeau Français ? bleu,blanc ou rouge ?');
var color1='bleu';
var color2 = 'rouge';
var color3= 'blanc'
if (flag == color1){
    alert('bien joué!');
}else if (flag == color2){
    alert("non le rouge est le troisème ");
}else if(flag == color3){
    alert("non le blanc est le deuxième ");
}else{
    alert("l'entrée est incorrect");
}
