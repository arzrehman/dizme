if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  } else {
    // Geolocation not supported
    redirectToMainPage();
  }
  
  function successCallback(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    // Make an AJAX request to the GeoNames API to get the country information
    var xhr = new XMLHttpRequest();
    var url = 'http://api.geonames.org/findNearbyJSON?lat=' + latitude + '&lng=' + longitude + '&username=arehman';
    
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var countryCode = response.countryCode;
        
        // Redirect the user based on the country code
        if (countryCode === 'US') {
          redirectToCountryPage('/us.html');
        } else if (countryCode === 'UK') {
          redirectToCountryPage('/uk.html');
        } else if (countryCode === 'PK') {
          redirectToCountryPage('/pk.html');
        } else {
          redirectToMainPage();
        }
      }
    };
    
    xhr.send();
  }
  
  function errorCallback(error) {
    // Handle geolocation error
    redirectToMainPage();
  }
  
  function redirectToCountryPage(pageUrl) {
    window.location.href = pageUrl;
  }
  
  function redirectToMainPage() {
    window.location.href = '/index.html';
  }
  