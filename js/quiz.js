/**
 * Created by Dineile on 9/19/2015.
 */

function checkAnswers(){

    var count=0;
	var arr= ["A","B","D","B","D","A","C","A","D","A"];
	for (var a=1;a<=arr.length;a++){
		x=document.getElementsByName("q"+a.toString());
		var ans;
		for (var b=0;b<x.length;b++){
			if (x[b].checked==true){
				ans=x[b].value;
				console.log(ans);
			}
		}
		if (ans===arr[a-1]){
			count++;
		}
	}	
	alert ("You got "+count.toString()+" correct.");
	event.preventDefault();
	redirect("index.html");	
	return false;
}

document.addEventListener('DOMContentLoaded', function() {
    alert ("Welcome. You have 2 minutes to complete the quiz. Click OK to begin.")
}, false);

function redirect(page)
{
	window.location = page;
}