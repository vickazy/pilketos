$(document).ready(function(){
	/*======Sidebar=======*/	
	var getUrlParameter = function getUrlParameter(sParam) {
		var sPageURL = decodeURIComponent(window.location.search.substring(1)),
			sURLVariables = sPageURL.split('&'),
			sParameterName,
			i;

		for (i = 0; i < sURLVariables.length; i++ ) {
			sParameterName = sURLVariables[i].split('=');

			if ( sParameterName[0] === sParam ) {
				return sParameterName[1] === undefined ? true : sParameterName[1];
			}
		}
	};

	var page = getUrlParameter('p');

	if( page == 'dashboard' )$('#dashboard').attr('class', 'active');
	else if( page == 'calon' )$('#calon').attr('class', 'active');
	else if( page == 'data_pemilih' )$('#data').attr('class', 'active');
	else if( page == 'laporan' )$('#laporan').attr('class', 'active');

	// Preview 
	var loadFile = function(event) {
		var reader = new FileReader();
			reader.onload = function(){
				var output = document.getElementById('output');
				output.src = reader.result;
			};
		reader.readAsDataURL(event.target.files[0]);
	};

	// easeScroll
	$('html').easeScroll();

	$('#view-dashboard').load('ajax/dashboard-view.php');

	
});