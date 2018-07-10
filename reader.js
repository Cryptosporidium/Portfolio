
 
 (function() {

window.onload = check;

function check() {
	var urlmenu = document.getElementById( 'menu1' );
	var small = documnet.getElementById("small");
	var med = document.getElementById("med");
	var large = document.getElementById("large");
	var content = document.getElementById(
	window.onchange = chapterSelect(urlmenu);
	fontChange(small, "8pt");
	fontChange(med, "12pt");
	fontChange(large, "18pt");
}

function chapterSelect(urlmenu) {
 urlmenu.onchange = function() {
      window.location.assign( this.options[ this.selectedIndex ].value );
 };
}

function fontChange(butt, size){
	butt.onclick = function(){
		butt.style.fontSize = size;
	}
}

}) ();