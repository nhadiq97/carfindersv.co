
; (function(){

jQuery('document').ready(function() {
	function filter_portfolio() {
		var script = jQuery('#fuel').val();
		var dynamic = jQuery('#selectFielddynamic').val();
		var code = jQuery('#selectFieldcode').val();
		var target = '';

		if(script != 'petrol') { target += '.' + script; }
		if(dynamic != 'petrol') { target += '.' + dynamic; }
		if(code != 'petrol') { target += '.' + code; }
		if(target == '') target = '.petrol';
		var $items_container = jQuery("#portfolio-container");
		$items_container.isotope({
			itemSelector : ".portfolio",
			layoutMode: "masonry",
			filter: target
		});
	}
	jQuery('#fuel, #selectFielddynamic, #selectFieldcode').on('change', function() {
		filter_portfolio();
	});
});
})();
