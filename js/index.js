
  $( document ).ready(function() {
	var reset_password = getUrlParameter('rp');
	var forgot_password = getUrlParameter('fp');
	if((reset_password != null && reset_password !== null && reset_password !== '') || (forgot_password != null && forgot_password !== null && forgot_password !== '')) 
	{
		$("#my-tab-content div").each(function() {
			return $(this).removeClass("active")
			});
		/*   active removerrrrr   */
			if( typeof reset_password!=="undefined" && reset_password!==null && reset_password.length >= 16 )
			{
				$('#reset_password').addClass('active');
			}
			else if( typeof forgot_password!=="undefined" && forgot_password!==null && forgot_password.length >= 16 ){	
			
				$('#forgot').addClass('active');
			}
			else{
				$('#login').addClass('active');
			}
	}
  });
  
function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1));
    var sURLVariables = sPageURL.split('&'), sParameterName, i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}