/*
	@author Arunkumar Maha for 2my4edge.com
*/
; (function(){

jQuery('document').ready(function() {
	function filter_portfolio() {
		var script = jQuery('#fuel').val();
		var dynamic = jQuery('#class').val();
		var code = jQuery('#type').val();
		var target = '';
		
		if(script != 'k') { target += '.' + script; }
		if(dynamic != 'k') { target += '.' + dynamic; }
		if(code != 'k') { target += '.' + code; }
		if(target == '') target = '.';
		var $items_container = jQuery("#portfolio-container");		
		$items_container.isotope({
			itemSelector : ".portfolio",
			layoutMode: "masonry",
			filter: target
		});
	}
	jQuery('#fuel, #class, #type').on('change', function() {
		filter_portfolio();
	});
});	
})();
