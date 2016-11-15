define( [ "qlik", "./sheetloop-properties"],
function (qlik, props) {
	return {
		definition: props,
		support : {
			snapshot: true,
			export: true,
			exportData : false
		},
		paint: function ($element, layout) { 
		if (layout.isactive) {
		  for (var i = 1; i < 99999; i++)
			window.clearInterval(i);
		  	var timer = false;
		  	timer = setInterval( function (){ 
			qlik.navigation.nextSheet();
		  }, layout.intervalms);
		}
			return qlik.Promise.resolve();
		}
	};
} );

