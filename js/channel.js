/* Author and copyright notice
 @version    2.0.2
 @package    XpertVal64 Interface
 @author     Vivian Vanatu <vivian.vanatu@lives-international.com>
 @copyright  2022 Medisol SRL
 @license    This copy is for demo purposes only. Do not copy, change or use the code with other purpose than demostrating XpertVal64 usage
*/
let channels = JSON.parse(localStorage.getItem('channels'));

channelid = getChannelData();

function getChannelData() {
    const searchArr = window.location.search.split('=');
    let channelId = searchArr[1];
    let chid = document.getElementById('channel');
    if(1 <= channelId && channelId <= 64 ) {
      channelId = searchArr[1];

    } else {
      channelId = '1';
    }
    //chid.innerHTML = '<p>Channel is ' + channelId + '</p>';
    let pagename = "Channel" + ' ' + channelId;
    setTitle(pagename);
    //title = document.getElementById('title');
    //title.innerHTML = '<h5>' + pagename + '<h5>';

    return channelId;
}

var __channeldata = channels.find(function(channel, index) {
			if(channel.id == channelid)
				return true;
		});

function getSensorType(type) {
	switch(type) {
        case 0:
		    sensortype = "none";
       		break;
        case 1:
	        sensortype ="PT-100";
	        break;
	    case 2:
	        sensortype = "humidity";
	        break;
	    case 3:
	        sensortype = "pressure logger";
	        break;
	    case 4:
	        sensortype = "pressure transducer";
	        break;
	    case 5:
	        sensortype = "thermocouple";
	        break;
	    default:
	        // code block
	}

	return sensortype;
}
function saveTrend() {
  //get the input id of each checkbox where channelStatus = 'checked' and add it to an array. Return the array.
}
function contentSideMenu() {
  let smenuEl     = document.getElementById('sidemenu');
  let sidemenuContent = `<div class="col-12">`;
  sidemenuContent += `<div class="col-12 clearfix"><div class="col-9 float-left"><h4>Show Channels</h4></div><div class="col-3 float-right"><a onclick="saveTrend(trendchannels)" class="btn btn-lg btn-success">Save</a></div></div>
            <hr>
            <div class="col-12" style="overflow-y: scroll; height: 564px;">`;
  let channelStatus = ''; 
  channels.forEach((channel, index) => {

      if (channelid == channel.id) {
          channelStatus = 'checked';
      } else { channelStatus = ''; }
      sidemenuContent += `<div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" role="switch" id="` + channel.id + `"` + channelStatus + `>
                          <label class="form-check-label" for="flexSwitchCheckDefault">Channel #` + channel.id + `</label>
                          </div>`
      console.log('channelid', channel.id);
  });

  
  sidemenuContent += `</div>
            <hr></div>`;
  smenuEl.innerHTML = sidemenuContent;
}
contentSideMenu();
       
function xpertvalData({id, name, temperature, ttype, tmax, tmin, humidity, htype, hmax, hmin, pressure, ptype, pmax, pmin, aqint, start, stop}) {
   	moduleclass = "";
    if( id <= 16 ) {moduleclass = "module-one";}
    if( id > 16 && id <= 32 ) {moduleclass = "module-two";}
    if( id > 32 && id <= 48 ) {moduleclass = "module-three";}
    if( id > 48 ) {moduleclass = "module-four";}
   	if(temperature){temperature = temperature.toFixed(2); tmax = tmax.toFixed(2); tmin = tmin.toFixed(2); localStorage.setItem("storageTemp", temperature); localStorage.setItem("storageTmax", tmax); localStorage.setItem("storageTmin", tmin); temperature = "<p id=\"temperature\">Temperature:  " + temperature + "°C</p><p class=\"scd\">Max. T°C:  " + tmax + "°C</p><p class=\"scd\">Min. T°C:   " + tmin + "°C</p>"; ttype = getSensorType(ttype); } else {temperature = "";}
   	if(humidity){humidity = humidity.toFixed(2); hmax = hmax.toFixed(2); hmin = hmin.toFixed(2); localStorage.setItem("storageHumid", humidity); localStorage.setItem("storageHmax", hmax); localStorage.setItem("storageHmin", hmin); humidity = "<p id=\"humidity\">Humidity:  " + humidity + "BarA</p><p class=\"scd\">Max. RH:  " + hmax + "BarA</p><p class=\"scd\">Min. RH:  " + hmin + "BarA</p>"; htype = getSensorType(htype); htype = ", " + htype; } else {humidity = ""; htype = "";}
   	if(pressure){pressure = pressure.toFixed(2); pmax = pmax.toFixed(2); pmin = pmin.toFixed(2); localStorage.setItem("storagePress", pressure); localStorage.setItem("storagePmax", pmax); localStorage.setItem("storagePmin", pmin); pressure = "<p id=\"pressure\">Pressure:  " + pressure + "BarA</p><p class=\"scd\">Max. P:  " + pmax + "BarA</p><p class=\"scd\">Min. P:  " + pmin + "BarA</p>"; ptype = getSensorType(ptype); ptype = ", " + ptype;} else {pressure = ""; ptype = "";}
   	type = "<p class=\"type\">Type: " + ttype + htype + ptype + "</p>";
   	document.getElementById("modulediv").className = moduleclass;
   	return "<p class=\"title mt-xlg " + moduleclass + "\">Channel " + channelid + " of 64</p>" + type + temperature + humidity + pressure + "<p>Aquisition: " + aqint + "</p><p>Running for: 2d 10h 15m</p><p class=\"scd\">Start: " + start + "</p><p class=\"scd\">Stop: " + stop + "</p>";
}
	
let element = document.getElementById("sidebar-left");
element.innerHTML = xpertvalData(__channeldata);
