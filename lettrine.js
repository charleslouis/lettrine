/*
Lettrine.js
*/

	var text =  $("p:first-child");
	var textHtml = text.html();
	var firstLetter = text.text().charAt(0)
	var lettrine = '<div class="lettrine">'+firstLetter+'</div>';
	text.html(textHtml.substring(1));
	text.prepend(lettrine);
