$(document).ready(function(){
	var type, color;
	$.each($('.example-row'), function () {
		type = $(this).attr('id');
		$.each($(this).find('td'), function () {
			color = Mondrian.init(type);
			console.log(color)
			$(this).css({"background-color": color}).html('<span>' + color + '</span>');
		});
	});
});