var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList
	});
	console.log('country name: ' + countryName);
}

function showCountriesList(resp) {
	countriesList.empty();

	// var filteredArray = [];
	// filteredArray.forEach(function(item) {
	// 	var countryName = $('#country-name').val();
	// 	// if (countryName.indexOf(item.name) 

	// });
    resp.forEach(function(item) {
		var countryName = $('#country-name').val();
		var firstCountryLetter = countryName.charAt(0).toLowerCase();
		var secondCountryLetter = countryName.charAt(1).toLowerCase();
		var firstItemLetter = (item.name).charAt(0).toLowerCase();
		var secondItemLetter = (item.name).charAt(1).toLowerCase();
		if (firstCountryLetter === firstItemLetter || secondCountryLetter === secondItemLetter) {	
		
			var listItem = $('<ul>').text(item.name).appendTo(countriesList);
			$('<li>').text('capital: ' + item.capital).appendTo(listItem);
			$('<li>').text('language: ' + item.languages).appendTo(listItem);
			listItem.find('li').hide();
			listItem.click(function() {
				listItem.find('li').toggle();
			});
		} else console.log('porażka');	
			// console.log('item.name: ' + item.name);
			// console.log('length Name: ' + countryName.length);
			// console.log('length item: ' + (item.name).length);
			// console.log('indexOf: ' + (item.name).indexOf(countryName));
			// console.log('charAt country: ' + countryName.charAt(0));
			// console.log('charAt item: ' + (item.name).charAt(0));
			// console.log('charAt country: ' + countryName.charAt(1));
			// console.log('charAt item: ' + (item.name).charAt(1));
			
			
		
		//} else  $('<li>').text('Please enter a valid name for your country.').appendTo(countriesList);
		
	});
}

