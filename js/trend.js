/* Author and copyright notice
 @version    2.0.2
 @package    XpertVal64 Interface
 @author     Vivian Vanatu <vivian.vanatu@lives-international.com>
 @copyright  2022 Medisol SRL
 @license    This copy is for demo purposes only. Do not copy, change or use the code with other purpose than demostrating XpertVal64 usage
*/

studyid = getStudy();

function getStudy() {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  let value = params.studyid;
    
    return value;
}


studyid = parseInt(studyid);

let studydata = JSON.parse(localStorage.getItem('studies'));
studydata = studydata.find(item => item.studyid === studyid);

let channels = studydata.channels;

let channelsdata = JSON.parse(localStorage.getItem('channels'));
//console.log(channels);
channels.forEach((channel, index) => {
     channeldata = channelsdata.find(item => item.id === channel);
     //console.log(channeldata);
});
let pagename = "Study" + ' ' + studyid;
setTitle(pagename);
let trend = document.getElementById('trend');
console.log(channeldata);
xpertvalData(channeldata);

function xpertvalData({id, name, temperature, ttype, tmax, tmin, humidity, htype, hmax, hmin, pressure, ptype, pmax, pmin, aqint, start, stop}) {
    moduleclass = "";
    if( id <= 16 ) {moduleclass = "module-one";}
    if( id > 16 && id <= 32 ) {moduleclass = "module-two";}
    if( id > 32 && id <= 48 ) {moduleclass = "module-three";}
    if( id > 48 ) {moduleclass = "module-four";}
     if(temperature){temperature = temperature.toFixed(2); tmax = tmax.toFixed(2); tmin = tmin.toFixed(2); localStorage.setItem("storageTemp", temperature); localStorage.setItem("storageTmax", tmax); localStorage.setItem("storageTmin", tmin); temperature = "<p id=\"temperature\">Temperature:  " + temperature + "°C</p><p class=\"scd\">Max. T°C:  " + tmax + "°C</p><p class=\"scd\">Min. T°C:   " + tmin + "°C</p>"; /*ttype = getSensorType(ttype);*/ } else {temperature = "";}
     if(humidity){humidity = humidity.toFixed(2); hmax = hmax.toFixed(2); hmin = hmin.toFixed(2); localStorage.setItem("storageHumid", humidity); localStorage.setItem("storageHmax", hmax); localStorage.setItem("storageHmin", hmin); humidity = "<p id=\"humidity\">Humidity:  " + humidity + "BarA</p><p class=\"scd\">Max. RH:  " + hmax + "BarA</p><p class=\"scd\">Min. RH:  " + hmin + "BarA</p>"; /*htype = getSensorType(htype);*/ htype = ", " + htype; } else {humidity = ""; htype = "";}
     if(pressure){pressure = pressure.toFixed(2); pmax = pmax.toFixed(2); pmin = pmin.toFixed(2); localStorage.setItem("storagePress", pressure); localStorage.setItem("storagePmax", pmax); localStorage.setItem("storagePmin", pmin); pressure = "<p id=\"pressure\">Pressure:  " + pressure + "BarA</p><p class=\"scd\">Max. P:  " + pmax + "BarA</p><p class=\"scd\">Min. P:  " + pmin + "BarA</p>"; /*ptype = getSensorType(ptype);*/ ptype = ", " + ptype;} else {pressure = ""; ptype = "";}
     type = "<p class=\"type\">Type: " + ttype + htype + ptype + "</p>";
     document.getElementById("modulediv").className = moduleclass;
     //return "<p class=\"title mt-xlg " + moduleclass + "\">Channel " + channelid + " of 64</p>" + type + temperature + humidity + pressure + "<p>Aquisition: " + aqint + "</p><p>Running for: 2d 10h 15m</p><p class=\"scd\">Start: " + start + "</p><p class=\"scd\">Stop: " + stop + "</p>";
}
  
function contentSideMenu() {
  let smenuEl     = document.getElementById('sidemenu');
  let sidemenuContent = `<div class="col-12">`;
  sidemenuContent += `<div class="col-12 clearfix"><div class="col-9 float-left"><h4>Show Channels</h4></div><div class="col-3 float-right"><a href="#" class="btn btn-lg btn-success">Save</a></div></div>
            <hr>
            <div class="col-12" style="overflow: scroll; height: 564px;">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #001</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #002</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #003</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #004</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #005</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" disabled>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #006</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #007</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #008</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" disabled>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #009</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #010</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #011</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" disabled>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #012</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #013</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #014</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #015</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #016</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #017</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" disabled>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #018</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #019</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #020</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" disabled>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #021</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #022</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #023</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" disabled>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #024</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #025</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #026</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #027</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #028</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #029</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" disabled>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #030</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #031</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #032</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" disabled>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #033</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #034</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #035</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" disabled>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #036</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #037</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #038</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #039</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #040</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #041</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" disabled>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #042</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #043</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #044</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" disabled>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #045</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #046</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #047</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" disabled>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #048</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #049</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #050</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #051</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #052</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #053</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" disabled>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #054</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #055</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #056</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" disabled>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #057</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #058</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #059</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" disabled>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #060</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #061</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #062</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked disabled>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #063</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked disabled>
              <label class="form-check-label" for="flexSwitchCheckDefault">Channel #064</label>
            </div>
            </div>
            <hr>
            `;
  sidemenuContent += `</div>`;
  smenuEl.innerHTML = sidemenuContent;
}
contentSideMenu();