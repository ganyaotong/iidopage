/*
iidoMenu is a generator for page menu
you need to customize callback
*/
var iidoMenu = function iidoMenu(pageMenuId){
	this.pageMenuId = pageMenuId;
	return this;
}

iidoMenu.prototype.generate = function(pageCount,current) {
	current = parseInt(current);
	var html = "";
	var startHtml = "";
	var currentHtml = "<li class='current'>"+current+"</li>";
	var stopHtml = "";
	if (current==1) {
		startHtml = "";
	}else{
		var count = 4;
		 for (var i = current-1; i >= 1; i--) {
		 	if (count==0) {
		 		break;
		 	}
			startHtml = "<li>"+i+"</li>"+startHtml;
			count --;
		} 
	}

	for (var i = current+1; i < current+5; i++) {
		if (i>pageCount) {
			break;
		}
		stopHtml += "<li>"+i+"</li>";
	}

	html = startHtml+currentHtml+stopHtml;
	
	document.getElementById(this.pageMenuId).innerHTML = html;
	return this;
};

iidoMenu.prototype.callback = function(callback) {
	callback();
};

function pageMenu(pageMenuId){
	return new iidoMenu(pageMenuId);
}