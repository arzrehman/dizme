if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback);
  }
  
  function successCallback(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
  
    // Make an AJAX request to a geolocation API to get the country information
    var xhr = new XMLHttpRequest();
    var url = 'http://api.geonames.org/findNearbyJSON?lat=' + latitude + '&lng=' + longitude + '&username=arehman';
  
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var countryCode = response.country_code;
  
        // Use the country code to redirect the user
        if (countryCode === 'US') {
          window.location.href = '/us.html';
        } else if (countryCode === 'UK') {
          window.location.href = '/uk.html';
        } else if (countryCode === 'PK') {
          window.location.href = '/pk.html';
        }
      }
    };
  
    xhr.send();
  }
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  } else {
    // Geolocation is not supported
    // Handle the scenario accordingly (e.g., display a default page)
  }
  
  function successCallback(position) {
    // Your existing code to handle the successful geolocation retrieval
    // ...
  }
  
  function errorCallback(error) {
    // Handle the scenario when the user denies access to their location
    // Redirect the user to a default page or display a message
    // ...
  }
  