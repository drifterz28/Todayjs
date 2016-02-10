(function() {
	'use strict';
	var date = new Date();
	var today = function() {
		return date;
	}

	today.slash = function(format) {
		return todayFormat('/', format);
	};
	today.dash = function(format) {
		return todayFormat('-', format);
	};
	today.space = function(format) {
		return todayFormat(' ', format);
	};
	today.fullYear = function() {
		return date.getFullYear();
	};
	today.day = function() {
		return date.getDate();
	};
	today.dayOfWeek = function() {
		return date.getDay();
	};
	today.nameOfDay = function() {
		var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];
		return dayNames[date.getDay()];
	};

	function todayFormat(separator, format) {
		separator ? separator : '';
		return date.toISOString().split('T')[0].split('-').join(separator);
	}

	if(typeof module !== 'undefined' && module.exports) {
		module.exports = today;
	} else if(typeof define === 'function' && define.amd) {
		define(today);
	} else if(window) {
		window.today = five;
	}
}());
