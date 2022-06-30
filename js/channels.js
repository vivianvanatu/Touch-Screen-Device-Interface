/* Author and copyright notice
 @version    2.0.2
 @package    XpertVal64 Interface
 @author     Vivian Vanatu <vivian.vanatu@lives-international.com>
 @copyright  2022 Medisol SRL
 @license    This copy is for demo purposes only. Do not copy, change or use the code with other purpose than demostrating XpertVal64 usage
*/

// Sample channel values (id, name, type 1, value 1, type 2, value 2, type 3, value 3)
// 0 - none, 1 - PT-100, 2 -  humidity:, 3 - pressure logger, 4 - pressure transducer, 5 - thermocouple.
// Retrieve the object from storage
  
let channels = JSON.parse(localStorage.getItem('channels'));
showChannels();

function showChannels() {
  channelsElement = document.getElementById("channels");
  let showoutput = `<div class="table-reversed">
      <table class="table ports align-middle" style="margin-bottom: 0px;">
        <tbody>
           <div class="row" id="rowch">`;
  channels.forEach(function(channel){
    
    showoutput += xpertvalData(channel);
    });
  showoutput += `</div>
        </tbody>
      </table>
    </div>`;
  //console.log('showoutput', channels);
  channelsElement.innerHTML = showoutput;
}

function xpertvalData(channel) {
          csssensors = "empty";
          sensno = 0;
          icon1 = "";
          icon2 = "";
          icon3 = "";
          if (channel.temperature) {
            icon1 = "fa-thermometer-quarter";
            sensno++;
          }
          if (channel.humidity) {
            icon2 = "fa-tint";
            sensno++;
          }
          if (channel.pressure) {
            icon3 = "fa-dot-circle-o";
            sensno++;
          }
          switch(sensno) {
              case 1:
                csssensors = "onesensors col-12";
                break;
              case 2:
                csssensors = "twosensors col-6";
                break;
              case 3:
                csssensors = "threesensors col-4";
                break;
            }
            basemod = "";
            namemod = "<p>" + channel.name + "</p>";
            if (sensno == 0) {
                basemod = "<div class=\"data\" style=\"line-height: 45px;\"><p>Empty</p></div>";
                namemod = "";
            }
            temperaturemod = "";
            if ( channel.temperature ) {
                temperaturemod = "<div class=\"data " + csssensors + " float-left green\"><i class=\"fa " + icon1 + "\" aria-hidden=\"true\"></i><p>" + channel.temperature + "</p></div>";
            }
            humiditymod = "";
            if ( channel.humidity ) {
                humiditymod = "<div class=\"data " + csssensors + " float-left green\"><i class=\"fa " + icon2 + "\" aria-hidden=\"true\"></i><p>" + channel.humidity + "</p></div>";
            }
            pressuremod = "";
            if ( channel.pressure ) {
                pressuremod = "<div class=\"data " + csssensors + " float-left green\"><i class=\"fa " + icon3 + "\" aria-hidden=\"true\"></i><p>" + channel.pressure + "</p></div>";
            }
          if( channel.id % 8 === 0 ) {nrow = "</tr><tr>";} else {nrow = "";}
          if( channel.id <= 16 ) {moduleclass = "module-one";}
          if( channel.id > 16 && channel.id <= 32 ) {moduleclass = "module-two";}
          if( channel.id > 32 && channel.id <= 48 ) {moduleclass = "module-three";}
          if( channel.id > 48 ) {moduleclass = "module-four";}
          let output = "<td><div class=\"col text-center\"><a href=\"channel.html?channel=" + channel.id + "\"><div class=\"sensor\"><div class=\"sensor-head " + moduleclass + "\"><div class=\"col-2 float-left text-left\" style=\"padding: 0 0 0 5px;\"><p>" + channel.id + "</p></div><div class=\"float-left text-left\"><p>" + namemod + "</p></div></div><div class=\"sensor-body\">" + basemod + temperaturemod + humiditymod + pressuremod + "</div></div></a></div></td>" + nrow;

          return output;
  }



function contentSideMenu() {
  let smenuEl     = document.getElementById('sidemenu');
  let sidemenuContent = `<div class="col-12">`;
  sidemenuContent += `<div class="col-12 clearfix"><div class="col-9 float-left"><h4>Show Channels</h4></div><div class="col-3 float-right"><a onclick="saveTrend(trendchannels)" class="btn btn-lg btn-success">Save</a></div></div>
            <hr>
            <div class="col-12" style="overflow-y: scroll; height: 564px;">`;
  let channelStatus = ''; 
  channels.forEach((channel, index) => {

      sidemenuContent += `<div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" role="switch" id="` + channel.id + `: ` + channel.temperature + `" checked>
                          <label class="form-check-label" for="flexSwitchCheckDefault">Channel #` + channel.id + `</label>
                          </div>`
      console.log('channelid', channel.temperature);
  });

  
  sidemenuContent += `</div>
            <hr></div>`;
  smenuEl.innerHTML = sidemenuContent;
}
contentSideMenu();