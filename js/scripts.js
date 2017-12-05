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

    resp.forEach(function(item) {
		var countryName = $('#country-name').val();
	
        if (item.name.toLowerCase().indexOf(countryName) > -1) {
			var listItem = $('<ul>').text(item.name).appendTo(countriesList);
			$('<li>').text('capital: ' + item.capital).appendTo(listItem);
			$('<li>').text('language: ' + item.languages).appendTo(listItem);
			listItem.find('li').hide();
			listItem.click(function() {
				listItem.find('li').toggle();
			});
		} 
            console.log('indexOf: ' + (item.name).indexOf(countryName));
	});
}

