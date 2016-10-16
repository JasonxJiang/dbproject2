

$(document).ready(function(){
	getData();
	$("button").click(function(){
		getData();
	})
});

function getData() {
	$.ajax({
		url: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson",
		context: document.body
	}).done(function(data){
		console.log(data);
		parseData(data);
	});
}

function parseData(data) {
	var source = $("#earthquake-template").html();
	var template = Handlebars.compile(source);
	$(".earthquake-content").html(template(data));
}

