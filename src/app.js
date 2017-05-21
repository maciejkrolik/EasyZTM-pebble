var getData = function(link){
  ajax({
    url: link, 
    type: 'json'
  },
  function(data) {
    console.log('Got data');
    simply.vibe('short');
    
    var downloaded_string = JSON.stringify(data);
    var downloaded_data = JSON.parse(downloaded_string);
    
    var bus_number = downloaded_data.feed.entry[0].gsx$linia.$t;
    var bus_number2 = downloaded_data.feed.entry[1].gsx$linia.$t;
    var bus_number3 = downloaded_data.feed.entry[2].gsx$linia.$t;
    var direction = downloaded_data.feed.entry[0].gsx$kierunek.$t;
    var direction2 = downloaded_data.feed.entry[1].gsx$kierunek.$t;
    var direction3 = downloaded_data.feed.entry[2].gsx$kierunek.$t;
    var departure = downloaded_data.feed.entry[0].gsx$odjazd.$t;
    if(departure === '')
      departure = 'Odjeżdża!';
    var departure2 = downloaded_data.feed.entry[1].gsx$odjazd.$t;
    if(departure2 === '')
      departure = 'Odjeżdża!';
    var departure3 = downloaded_data.feed.entry[2].gsx$odjazd.$t;
    
    var line = "\n----------------------\n";
    
    if(bus_number !== '')
      {
        simply.setText({body: bus_number + ' ' + departure + ' ' + direction + 
                    line + 
                    bus_number2 + ' ' + departure2 + ' ' + direction2 + 
                    line + 
                    bus_number3 + ' ' + departure3 + ' ' + direction3});
      }
    else
      {
        simply.setText({body: 'Aktualnie brak przejazdów!'});
      }
 },
 function (error) {
   simply.setText({body: 'Brak połączenia'});
 }
);
};

//First station link
var link1 = 'https://spreadsheets.google.com/feeds/list/1yGXpibApxGKPClsTlG-Jay_ZW46jRVm3UGhgMg_t630/od6/public/values?alt=json';
//Second station link
var link2 = 'https://spreadsheets.google.com/feeds/list/1EL9O1WX4oCV-PHJxt9qQqg2QBrOijWH2NvchS0HuNnE/od6/public/values?alt=json';

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