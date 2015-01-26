$(function() {
	'use strict';

	var getGames = function(callback) {
		$.ajax({
			dataType: 'json',
			url: 'games.json'
		})
		.done(function(results) {
			callback(results);
		})
		.fail(function(e) {
			console.log('error', arguments);
		})
		.always(function() {
			// alert('complete');
		});
	};

	var populateList = function(results) {
		var gamesList = $('#gamesList');

		gamesList.empty();

		$('#gameTemplate').tmpl(results).appendTo(gamesList);
	};

	$('#openLogin').click(function() {
		$('#loginError').hide();

		$('#loginBox').dialog({
			width: 350,
			modal: true,
			buttons: {
		        Login: function() {
					var login = $('#loginInput').val();

					var name = login.substr(0, login.indexOf('@'));

					$('#loginError').hide();

					getGames(function(games) {
						if (login.toLowerCase().indexOf('@professor') > -1) {
							$('#teacherStuff').show();
							$('#studentStuff').hide();

							$('#teacherName').html(name);

							$('#teacherGames').html($('#gameTemplate').tmpl(games.slice(0, 2)));

							$('#loginBox').dialog('close');
						}
						else if (login.toLowerCase().indexOf('@aluno') > -1) {
							$('#teacherStuff').hide();
							$('#studentStuff').show();

							$('#studentName').html(name);

							$('#studentGames').html($('#gameTemplate').tmpl(games.slice(2, 4)));

							$('#loginBox').dialog('close');
						}
						else {
							$('#loginError').show();
						}
					});
				}
			}
		});
	});

	// Initial population
	getGames(populateList);

	var searchForm = $('#searchForm');

	searchForm.on('submit', function(event) {
		event.preventDefault();

		var filters = searchForm.serializeArray();

		var filteredGames = [];

		getGames(function(results) {
			$.each(results, function(i, game) {
				var passedQuery = false;
				var passedMinAge = false;
				var passedMaxAge = false;
				var passedVocabularies = true;
				var passedPlatform = false;

				$.each(filters, function(j, filter) {
					if (filter.name === 'query') {
						var query = filter.value;

						var regex = new RegExp(query, 'ig');

						var testDescription = regex.test(game.description);
						var testName = regex.test(game.name);

						if (testDescription || testName || !query) {
							passedQuery = true;
						}
					}

					if (filter.name === 'minAge') {
						var testMinAge = parseInt(game.minAge, 10) >= parseInt(filter.value, 10);

						if (filter.value === 'any' || testMinAge) {
							passedMinAge = true;
						}
					}

					if (filter.name === 'maxAge') {
						var testMaxAge = parseInt(game.maxAge, 10) >= parseInt(filter.value, 10);

						if (filter.value === 'any' || testMaxAge) {
							passedMaxAge = true;
						}
					}

					if (filter.name.indexOf('vocabulary_') > -1) {
						if ($.inArray(filter.value, game.vocabulary) === -1) {
							passedVocabularies = false;
						}
					}

					if (filter.name === 'platform') {
						if (filter.value === 'any' || $.inArray(filter.value, game.platforms) > -1) {
							passedPlatform = true;
						}
					}
				});

				if (passedQuery && passedMinAge && passedMaxAge && passedVocabularies && passedPlatform) {
					filteredGames.push(game);
				}
			});

			populateList(filteredGames);
		});
	});
});
