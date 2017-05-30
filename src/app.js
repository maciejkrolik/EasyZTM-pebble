// First station link
var link1 = 'http://87.98.237.99:88/delays?stopId=1349';
// Second station link
var link2 = 'http://87.98.237.99:88/delays?stopId=1981';

// Initialize the screen
simply.scrollable(true);

// Start getting the data after launching the app - first station
getData(link1);

// If you click the select button timetable is refreshing - first station
simply.on('singleClick', function(e) {
  getData(link1);
  console.log('Single button clicked');
});

// If you long click the select button timetable is changing for the second station
simply.on('longClick', function(e) {
  getData(link2);
  console.log('Long button clicked');
});

// Getting data from the internet
function getData(link){
  ajax({
    url: link, 
    type: 'json'
  },
  function(data) {
    console.log('Got data');
    simply.vibe('short');
    
    var downloadedData = JSON.parse(JSON.stringify(data));
    
    var numberOfBuses = length(downloadedData.delay);
    if(numberOfBuses === 0)
      {
        simply.setText({body: 'Aktualnie brak połączeń dla wybranego przystanku!'});
        return;
      }
    
    // Preparing text to display on a watch
    var line = "\n----------------------\n";
    var text = '';
    
    for(var i = 0; i < numberOfBuses; i++)
      {
        var busNumber = downloadedData.delay[i].routeId;
        text += busNumber + ' - ';
        var estimatedTime = calculateTime(downloadedData.delay[i].estimatedTime);
        text += estimatedTime;
        var headSign = downloadedData.delay[i].headsign;
        text += headSign + line;
      }
    
    simply.setText({body: text});
    
  },
  function (error) {
    simply.vibe('short');
    simply.setText({body: 'Brak połączenia z siecią!'});
  }
 );
}

// Counting current number of buses available in JSON
function length(obj) {
  return Object.keys(obj).length;
}

// Transforming time data
function calculateTime(obj) {
  var date = new Date();
  var modTime = Math.abs(obj.slice(3, 5) - date.getMinutes());
  
  if(modTime < 10 && modTime > 0)
    modTime += ' min   ';
  else if(modTime === 0)
    modTime = 'Odjazd!   ';
  else
    modTime = obj + '    ';
  
  return modTime;
}