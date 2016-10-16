

$(document).ready(function(){
	$.ajax({
		url: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson",
		context: document.body
	}).done(function(data){
		console.log(data);
		parseData(data);
	});
});

function parseData(data) {
	var source = $("#earthquake-template").html();
	var template = Handlebars.compile(source);
	$(".earthquake-content").html(template(data));

}