function nextBlock(current,keyCode){
	if (((current==3||current==6||current==9) && keyCode==37)||((current==4||current==7) && keyCode==39)){
		return(current);
	}
	var next_current=current;

	switch(keyCode) {
		case 37:
			next_current+=1;
		break;

		case 38:
			next_current+=3;
		break;

		case 39:
			next_current-=1;
		break;

		case 40:
			next_current-=3;
		break;

	}
	if (next_current>=1 && next_current<=9){
		return(next_current);
	} else {
		return(current);
	}
}

function sameList(list1,list2){//renvois True si list1 et list2 sont identiques
	if (list1.length!=list2.length){
		return(false);
	}
	for (var i=0, c=list1.length; i<c;i++){
		if (list1[i]!=list2[i]){
			return(false);
		}
	}
	return(true);
}

// initialisation de la grille aléatoire
var list_alea=_.shuffle([1,2,3,4,5,6,7,8,9]);
var content_final=[];
for (var i=1; i<=9 ; i++) {
	var id1=document.getElementById(i.toString());
	content_final.push(id1.innerHTML);
}
for (var j=1; j<=9 ; j++) {
	var id=document.getElementById(j.toString());
	var content_current=[];
	id.innerHTML=content_final[list_alea[j-1]-1];
	content_current.push(id.innerHTML);
}
var content_init=content_current;
var current=list_alea.indexOf(9)+1;
var compteur=0;

// Mouvement des blocs avec les flèches
// la variable current pointe vers la case blanche et la fonction nextBlock déplace ce pointeur et échange le contenu
// des cases en fonction des flèches
document.addEventListener('keydown', function(e) {
		var next=nextBlock(current, e.keyCode);
		if (current!=next){
	        var id1=document.getElementById(current.toString());
			var id2=document.getElementById(next.toString());
			var text1=id1.innerHTML;
			var text2=id2.innerHTML;

			id1.innerHTML=text2;
			id2.innerHTML =text1;
			
			content_current[current-1]=text2;
			content_current[next-1]=text1;
			compteur+=1;
			current=next;

			compt=document.getElementById("compteur");
			compt.innerHTML=compteur.toString();
		}
		setTimeout(function(){
		if (sameList(content_final,content_current)){
			alert("C'est gagné !");
			current=1000;
			content_current=_.shuffle(content_final);
		}},100);
     	});


// Boutton Restart
var button=document.getElementById("button");

button.addEventListener('click',function(){
	for (var j=1; j<=9 ; j++) {
		document.getElementById(j.toString()).innerHTML=content_final[list_alea[j-1]-1];
		current=list_alea.indexOf(9)+1;
		content_current=content_init;
		compteur=0;
		compt=document.getElementById("compteur");
		compt.innerHTML="0";
}
});