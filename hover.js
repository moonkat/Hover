// Required files: jquery.js
$(document).ready(function(){
	/**
	 * Hover
	 * 
	 * Makes the elements matching the hoverclass (CSS class) passed in highlight when mouseover event occurs
	 * @param {Object} hoverclass
	 */ 
	var hoverclassselector		= "[hoverclass]";
	var hoverclasstag 			= "hoverclass";
	var hoverclass				= $(hoverclassselector).attr(hoverclasstag);
    $(hoverclassselector).hover(function(){
			$(this).addClass(hoverclass);
			}, function(){
			$(this).removeClass(hoverclass);
	});    
    
// Below is the former function, tied into the tabs functions
    
    /*function setHover (hoverclass) {
		if ($(stubSelector).attr(hoverClassMap) != "false") {
			selectorString = "[" + hoverClassMap + "='" + hoverclass + "']";
			if ($(selectorString).hasClass(hoverclass)) { $(selectorString).removeClass(hoverclass); }
			$(selectorString).hover(function(){
				if (!$(this).hasClass(hoverclass)) {
					$(this).addClass(hoverclass);
				}
			}, function(){
				if ($(this).hasClass(hoverclass)) {
					$(this).removeClass(hoverclass);
				}
			});
		}
    }*/
});