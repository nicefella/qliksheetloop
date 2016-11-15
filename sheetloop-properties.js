define([], function () {
	'use strict';
	return {
		type: "items",
		component: "accordion",
		items: {
			settings : {
						uses: "settings",
						items : {
						intervalms: {
								type: "integer",
                                ref: "intervalms",
								label: "Interval (ms)",
								defaultValue: 5000
							},
						isactive: {
							type: "boolean",
							ref: "isactive",
							label: "Activate",
							defaultValue: false
						}
						}
			}
		}
	};
});
