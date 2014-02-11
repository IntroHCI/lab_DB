'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(function(e) {
		// Prevent following the link
		e.preventDefault();

		// Get the div ID, e.g., "project3"
		var projectID = $(this).closest('.project').attr('id');
		// get rid of 'project' from the front of the id 'project3'
		var idNumber = projectID.substr('project'.length);

		console.log("User clicked on project " + idNumber);

		var url_call = '/project/'+idNumber;

		console.log('sending ajax request to: '+url_call);

		$.get(url_call, function(result) {
			console.log(result);

			var new_html =
				'<img src="'+result.image+'" class="detailsImage"></img>'+
				'<div class="project-date">'+result.date+'</div>'+
				'<div class="project-summary">'+result.summary+'</div>';

			var details_div = $('#project' + idNumber + ' .details');
			details_div.html(new_html);
		});
	});

	$('#colorBtn').click(function(e) {
		console.log("User clicked on color button");

		$.get('/palette', function(result) {
			var colors = result.colors.hex;
			console.log(colors);

			$('body').css('background-color', colors[0]);
			$('.thumbnail').css('background-color', colors[1]);
			$('h1, h2, h3, h4, h5, h5').css('color', colors[2]);
			$('p').css('color', colors[3]);
			$('.project img').css('opacity', .75);
		})
	});
}