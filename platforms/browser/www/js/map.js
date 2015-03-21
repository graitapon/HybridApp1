function Geo_onSuccess(position) {
    initialize(position);
}
        
    
function initialize(pos) {
    
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude)
    
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
    position: map.getCenter(),
    map: map,
    title: 'คุณอยู่ตรงนี้ !'
  });

/*    
  google.maps.event.addListener(map, 'center_changed', function() {
    window.setTimeout(function() {
      map.panTo(marker.getPosition());
    }, 3000);
  });

  google.maps.event.addListener(marker, 'click', function() {
    map.setZoom(8);
    map.setCenter(marker.getPosition());
  });
  */
  
}

function Geo_onError(error) {
    alert('code: '    + error.code    + '\n' +'message: ' + error.message + '\n');
}


$('#location').on('pageshow', function(){
    navigator.geolocation.getCurrentPosition(Geo_onSuccess, Geo_onError);

});

