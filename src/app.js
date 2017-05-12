var getData = function(){
  console.log("getting data");
  ajax({
    url: 'https://spreadsheets.google.com/feeds/list/1yGXpibApxGKPClsTlG-Jay_ZW46jRVm3UGhgMg_t630/od6/public/values?alt=json', 
    type: 'json'
  },
  function(data) {
    console.log("gotdata");
    simply.vibe('short');
    
    var downloaded_data = JSON.stringify(data);
    
    var linia = downloaded_data.indexOf("text", 1713);
    var output3 = downloaded_data.substring(linia + 12, linia + 15);
    var kierunek = downloaded_data.indexOf("kierunek");
    var output = downloaded_data.substring(kierunek + 10, kierunek + 20);
    var odjazd = downloaded_data.indexOf("odjazd");
    var output2 = downloaded_data.substring(odjazd + 8, odjazd + 16);
    if (output2.indexOf("$") > 0)
      {
        output2 = "Odjeżdża!";
      }
    
    var linia_2 = downloaded_data.indexOf("text", kierunek);
    var output3_2 = downloaded_data.substring(linia_2 + 12, linia_2 + 15);
    var kierunek_2 = downloaded_data.indexOf("kierunek", linia_2);
    var output_2 = downloaded_data.substring(kierunek_2 + 10, kierunek_2 + 20);
    var odjazd_2 = downloaded_data.indexOf("odjazd", kierunek_2);
    var output2_2 = downloaded_data.substring(odjazd_2 + 8, odjazd_2 + 17);
    if (output2_2.indexOf("}") > 0)
      {
        output2_2 = downloaded_data.substring(odjazd_2 + 8, odjazd_2 + 13);
      }
    
    var linia_3 = downloaded_data.indexOf("text", kierunek_2);
    var output3_3 = downloaded_data.substring(linia_3 + 12, linia_3 + 15);
    var kierunek_3 = downloaded_data.indexOf("kierunek", linia_3);
    var output_3 = downloaded_data.substring(kierunek_3 + 10, kierunek_3 + 20);
    var odjazd_3 = downloaded_data.indexOf("odjazd", kierunek_3);
    var output2_3 = downloaded_data.substring(odjazd_3 + 8, odjazd_3 + 17);
    if (output2_3.indexOf("}") > 0)
      {
        output2_3 = downloaded_data.substring(odjazd_3 + 8, odjazd_3 + 13);
      }
    
    var przerwa = " ";
    var kreska = "\n----------------------\n";
    
    simply.setText({body: output3 +przerwa+ output +przerwa+ output2 + kreska + output3_2 +przerwa+ output_2 +przerwa+ output2_2 + kreska + output3_3 +przerwa+ output_3 +przerwa+ output2_3});
 },
 function (error) {
   console.log("Got error: "+JSON.stringify(error));
   simply.setText({body: "Brak połączenia"});
   simply.vibe('double');
 }
);
};

var getData2 = function(){
  console.log("getting data");
  ajax({
    url: 'https://spreadsheets.google.com/feeds/list/1EL9O1WX4oCV-PHJxt9qQqg2QBrOijWH2NvchS0HuNnE/od6/public/values?alt=json', 
    type: 'json'
  },
  function(data) {
    console.log("gotdata2");
    var downloaded_data = JSON.stringify(data);
    simply.vibe('short');
    
    var linia = downloaded_data.indexOf("text", 1713);
    var output3 = downloaded_data.substring(linia + 12, linia + 15);
    var kierunek = downloaded_data.indexOf("kierunek");
    var output = downloaded_data.substring(kierunek + 10, kierunek + 20);
    var odjazd = downloaded_data.indexOf("odjazd");
    var output2 = downloaded_data.substring(odjazd + 8, odjazd + 16);
    if (output2.indexOf("$") > 0)
      {
        output2 = "Odjeżdża!";
      }
    
    var linia_2 = downloaded_data.indexOf("text", kierunek);
    var output3_2 = downloaded_data.substring(linia_2 + 12, linia_2 + 15);
    var kierunek_2 = downloaded_data.indexOf("kierunek", linia_2);
    var output_2 = downloaded_data.substring(kierunek_2 + 10, kierunek_2 + 20);
    var odjazd_2 = downloaded_data.indexOf("odjazd", kierunek_2);
    var output2_2 = downloaded_data.substring(odjazd_2 + 8, odjazd_2 + 17);
    if (output2_2.indexOf("}") > 0)
      {
        output2_2 = downloaded_data.substring(odjazd_2 + 8, odjazd_2 + 13);
      }
    
    var linia_3 = downloaded_data.indexOf("text", kierunek_2);
    var output3_3 = downloaded_data.substring(linia_3 + 12, linia_3 + 15);
    var kierunek_3 = downloaded_data.indexOf("kierunek", linia_3);
    var output_3 = downloaded_data.substring(kierunek_3 + 10, kierunek_3 + 20);
    var odjazd_3 = downloaded_data.indexOf("odjazd", kierunek_3);
    var output2_3 = downloaded_data.substring(odjazd_3 + 8, odjazd_3 + 17);
    if (output2_3.indexOf("}") > 0)
      {
        output2_3 = downloaded_data.substring(odjazd_3 + 8, odjazd_3 + 13);
      }
    
    var przerwa = " ";
    var kreska = "\n----------------------\n";
    
    simply.setText({body: output3 +przerwa+ output +przerwa+ output2 + kreska + output3_2 +przerwa+ output_2 +przerwa+ output2_2 + kreska + output3_3 +przerwa+ output_3 +przerwa+ output2_3});
 },
 function (error) {
   console.log("Got error: "+JSON.stringify(error));
   simply.setText({body: "Brak połączenia"});
 }
);
};

console.log("Loading...");

// Initialize the screen
simply.scrollable(true);

// Start getting the data
getData();

// If you click the select button timetable is refreshing
simply.on('singleClick', function(e) {
  getData();
});

// If you long click the select button timetable is changing for Przemyska station
simply.on('longClick', function(e) {
  getData2();
});