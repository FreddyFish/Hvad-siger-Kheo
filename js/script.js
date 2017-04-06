var quotes=new Array();
quotes[0] = "Kheo's kød siger: Ja";
quotes[1] = "Kheo's kød siger: Nej";

var q = quotes.length;
var whichquote=Math.round(Math.random()*(q-1));

function showquote(){
    document.getElementById('quote').innerHTML = quotes[whichquote];
    document.getElementsByTagName('img')[whichquote].style.display="block";
}
showquote();
