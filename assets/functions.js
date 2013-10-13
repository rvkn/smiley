var createCanvas = function() {
	for(var dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++ ) {
			$("#cal-canvas").append("<div class='row' id='row" + dayOfWeek + "'></div>");
		for(var weekNum = 0; weekNum < 52; weekNum++ ) {
			var dayNum = (weekNum * 7 + dayOfWeek);
			$("#row" + dayOfWeek).append("<div class='square' id='day" + dayNum + "'data-dayNum=" + dayNum + "></div>");				
		}
	}	
};

var setActions = function() {
	window.selectedDays = [];
	
	$('.square').on('click', function() {
		window.selectedDays.push($(event.target).data('daynum'));
		$(event.target).toggleClass('selected');
	});
};


var process = function() {
	var startDate = new Date();
	startDate.setYear(new Date().getFullYear() - 1);
	startDate.setDate(startDate.getDate() - (new Date().getDay() + 6)%7);
	
	var selectedUnixTimes = [];
	
	for(var i=0; i < window.selectedDays.length; i++) {
		var newDate = new Date(startDate);
		newDate.setDate(startDate.getDate() + window.selectedDays[i]);
		console.log(newDate.getTime());
		
		selectedUnixTimes.push(newDate.getTime());
		
		var $el = $("#bash-script");
		$el.append(newDate.toISOString() + " ");
	}
};