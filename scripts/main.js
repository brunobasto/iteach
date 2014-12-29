$(function() {
	'use strict';

	$.ajax({
		dataType: 'json',
		url: 'games.json'
	})
	.done(function(res) {
		$("#gameTemplate").tmpl(res).appendTo("#gamesList");

		$('#search').fastLiveFilter('#gamesList');
	})
	.fail(function(e) {
		console.log('error', arguments);
	})
	.always(function() {
		// alert( "complete" );
	});
});
