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
}
function showCountriesList(resp) {
	countriesList.empty();
  }
  function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {
		$('<li>').text('country name: ' + item.name).appendTo(countriesList);
		$('<li>').text('capital: ' + item.capital).appendTo(countriesList);
		$('<li>').text('language: ' + item.languages).appendTo(countriesList);
    });
}