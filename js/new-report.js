/* Author and copyright notice
 @version    2.0.2
 @package    XpertVal64 Interface
 @author     Vivian Vanatu <vivian.vanatu@lives-international.com>
 @copyright  2022 Medisol SRL
 @license    This copy is for demo purposes only. Do not copy, change or use the code with other purpose than demostrating XpertVal64 usage
*/
let reports = JSON.parse(localStorage.getItem('reports'));


let pagename = 'New report ';
    
setTitle(pagename);    

let templateid = 0, // default template id is none
	userid = 3; // logged in user id

reportFromNew();

function getMembers(userid) {
  let members = JSON.parse(localStorage.getItem('members'));
  let selected = "";
  let optionlist = "";
  
  members.forEach(function(member){
     let sel = document.querySelector('.inputOptionMembers');
     let opt = document.createElement('option');
     opt.value = member.userid;
     if (member.userid === userid) {
        opt.setAttribute('selected', 'selected');
     }
     opt.innerHTML += member.firstname + ' ' + member.lastname; 
     
     sel.appendChild(opt);
   });
}

// function getTemplates(templateid) {
//   let templates = JSON.parse(localStorage.getItem('templates'));
//   let selected = "";
//   let optionlist = "";
  
//   templates.forEach(function(template){
//      let sel = document.querySelector('.inputOptionTemplates');
//      let opt = document.createElement('option');
//      opt.value = template.templateid;
//      if (template.tempalteid === templateid) {
//         opt.setAttribute('selected', 'selected');
//      }
//      opt.innerHTML += template.title; 
     
//      sel.appendChild(opt);
//    });
// }

function getChannels() {
  let channels = JSON.parse(localStorage.getItem('channels'));
  let selected = "";
  let optionlist = "";
  let channleid = "3"

  channels.forEach(function(channel){
     let sel = document.querySelector('.inputOptionChannels');
     let opt = document.createElement('option');
     opt.value = channel.id;
     /*if (channel.channelid === channelid) {
     	opt.setAttribute('selected', 'selected');
     }*/
     opt.innerHTML += channel.id + ' - ' + channel.name; 
     sel.appendChild(opt);
   });
}

function setChannels() {
  let channelslist = Array.from(document.querySelectorAll('#inputOptionChannels option:checked'), e => e.value);
  let inputid = document.getElementById('selectedchannels');
  inputid.value = channelslist;
}

// function setTemplate() {
// 	templateid = document.getElementById('inputOptionTemplates').value;
	
// 	let templates = JSON.parse(localStorage.getItem('templates'));
// 	let templatedata = templates.find(item => item.templateid == templateid);
//  document.getElementById("inputtitle").value = templatedata.title;
// 	document.getElementById("reportstart").value = templatedata.reportstart;
// 	document.getElementById("reportend").value = templatedata.reportend;
// 	//document.querySelector('.inputOptionMembers').value = templatedata.createdby;
//  console.log(templatedata.createdby);
//  document.getElementById("inputOptionMembers").value = templatedata.createdby;


// 	document.getElementById("channels").value = templatedata.channels;
  
  
//   //console.log('Alerts: ', templatedata.alerts);
//   if (templatedata.alerts === true) {
//     document.getElementById("alertsnotif").selectedIndex = 1;
//     showNotifications(true);
    
//     //console.log(document.getElementById("inputOptionMembers").selectedIndex);
//     //document.getElementById("notifications-1").value = templatedata.notify[0].contact + ' | ' + templatedata.notify[0].phone;
//   	//document.getElementById("notifications-2").value = templatedata.notify[1].contact + ' | ' + templatedata.notify[1].phone;
//   	//document.getElementById("notifications-3").value = templatedata.notify[2].contact + ' | ' + templatedata.notify[2].phone;
        
// 	}

//   if (templatedata.alerts === false) {
//     document.getElementById("alertsnotif").selectedIndex = 2;
//     showNotifications(false);

//   }
//   let lastreport = studies.slice(-1);
// 	let newreportid = parseFloat(lastreport[0].reportid) + parseFloat(1); 
// 	const newreport = {};
// 	newreport.reportid = newreportid;
// 	newreport.title = templatedata.title;
// 	newreport.reportstart = templatedata.reportstart;
// 	newreport.reportend = templatedata.reportend;
// 	newreport.createdby = templatedata.createdby;
// 	newreport.channels = templatedata.channels;
// 	newreport.alerts = templatedata.alerts;
// 	newreport.notify = templatedata.notify;
	
// 	localStorage.setItem('newreport', JSON.stringify(newreport));

// }

function saveNewReport() {
  reporttitle = document.getElementById("inputtitle").value; 
  reportstart = document.getElementById("reportstart").value;
  reportend = document.getElementById("reportend").value;
  createdby = document.getElementById("inputOptionMembers").value;

	let savenewreport = JSON.parse(localStorage.getItem('newreport'));
	reports.push(savenewreport);
	localStorage.setItem('reportsnew', JSON.stringify(reports));
  
	window.location = 'new-report.html';
}

function currentDateTime() {
	var currentdate = new Date(); 
	var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    
    return datetime;
}

function cancelNewReport() {
  window.location = 'reports.html';
}

// function showNotifications(showalerts) {
//   let notifyfieldset = document.getElementById('notify');
//   let shownotifyfieldset = "";
    
//   if (showalerts == true) {
    
//     shownotifyfieldset = `<div class="input-group mb-3">
//               <div class="input-group-prepend">
//                 <span class="input-group-text" id="inputGroup-sizing-default">Notifications</span>
//               </div>
//               <input type="text" id="notifications-1" name="notifications" value="" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
//               <input type="text" id="notifications-2" name="notifications" value="" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
//               <input type="text" id="notifications-3" name="notifications" value="" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
//             </div>`;
  
//   } 
//   if (showalerts == false) {
//     shownotifyfieldset = "";
  
//   }
  
//   notifyfieldset.innerHTML = shownotifyfieldset;
  
// }

function reportFromNew() {
	newreport = document.getElementById('new-report');

	output = `<form name="creteReportForm" action="javascript:saveNewReport()" >
         <div class="col-12 p-md">
         <div class="col-6">         
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="title">Report Title</span>
              </div>
              <input type="text" name="title" value="" class="form-control">
            </div>
         </div>
         <div class="col-6 float-left">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="start-time">Start Time</span>
              </div>
              <input type="text" id="reportstart" name="reportstart" value="" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
              <span class="input-group-append">
                <span class="input-group-text bg-light d-block">
                    <i class="fa fa-calendar"></i>
                </span>
              </span>
            </div>
         </div>
         <div class="col-6 float-left pl-sm">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">End Time</span>
              </div>
              <input type="text" id="reportend" name="reportend" value="" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
              <span class="input-group-append">
                      <span class="input-group-text bg-light d-block">
                        <i class="fa fa-calendar"></i>
                      </span>
                    </span>
            </div>
         </div>
         <div class="col-12">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Channels</span>
              </div>
              <div class="col-3">
              <input type="text" id="selectedchannels" name="selectedchannels" value="" class="form-control" style="border-radius: 0;" aria-label="Default" aria-describedby="inputGroup-sizing-default">            
              </div>
              <select class="inputOptionChannels form-select" multiple aria-label="multiple channels select " id="inputOptionChannels"  onchange="setChannels()" size="11">
				  <option selected>Select the channels you want to use:</option>		  
			  </select>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputOptionMembers">Created by (select)</label>
              </div>
              <select class="inputOptionMembers custom-select" id="inputOptionMembers">
              </select>
            </div>
            <input type="submit" value="Save" class="col-2 btn btn-lg btn-success btn-block">          
            <input type="reset" value="Cancel" class="col-2 btn btn-lg btn-danger btn-block" onclick="cancelNewReport()">
        </div>
        </div>
        </form>`;
	newreport.innerHTML = output;
	document.getElementById('reportstart').value = currentDateTime();
	document.getElementById('reportend').value = currentDateTime();
	getMembers(userid);
	getChannels();

}

function contentSideMenu() {
  let smenuEl     = document.getElementById('sidemenu');
  let sidemenuContent = `<div class="col-12">`;
  sidemenuContent += `<h4>New Report Side Menu</h4>
            <hr>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
              <label class="form-check-label" for="flexSwitchCheckDefault">List / Cards profiles</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
              <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
            </div>
            <hr>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" disabled>
              <label class="form-check-label" for="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled" checked disabled>
              <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
            </div>
            <hr>
            `;
  sidemenuContent += `</div>`;
  smenuEl.innerHTML = sidemenuContent;
}
contentSideMenu();