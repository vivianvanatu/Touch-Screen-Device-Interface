/* Author and copyright notice
 @version    2.0.2
 @package    XpertVal64 Interface
 @author     Vivian Vanatu <vivian.vanatu@lives-international.com>
 @copyright  2022 Medisol SRL
 @license    This copy is for demo purposes only. Do not copy, change or use the code with other purpose than demostrating XpertVal64 usage
*/
let studies = JSON.parse(localStorage.getItem('studies'));
let lang = JSON.parse(localStorage.getItem('language'));
let lng = '';
if (lang == "en_gb") {
  lng = JSON.parse(localStorage.getItem('language_en_gb'));
}
let channels = JSON.parse(localStorage.getItem('channels'));
let pagename = lng.new_study_new_study;
    
setTitle(pagename);    
newstudy = document.getElementById('new-study');

/*output = `
        <form name="editProfileForm" action="javascript:saveNewStudy()" >
        <div class="row">
        	<div class="col-md-6">
        	<div class="input-group mb-3">
	              <div class="input-group-prepend">
	                <label class="input-group-text" for="inputConfigStudy">Create new study</label>
	              </div>
	              <select class="inputConfigStudy custom-select" id="inputConfigStudy" onchange="configStudy(this.value)">
	            		<option value="0" selected>Please select...</option>
	            		<option value="1" >From Existing Template</option>
	            		<option value="2" >From An Old Test</option>
	            		<option value="3" >Configure Now</option>
	              </select>
            </div>
            </div>
        </div>
        <div class="row" style="margin: 10px 0;" id="createStudy"></div>
        `;
        
output += `</form>`;*/
output = `<div class="row" id="new-study-options">
                <div class="col-4 fbtn fbtn-lt-blue m-sm" onclick="javascript:studyFromTemplate()"><h1><i class="fa fa-file-text-o" aria-hidden="true"></i> ` + lng.new_study_from_template + `</h1></div>
                <div class="col-4 fbtn fbtn-red m-sm" onclick="javascript:studyFromTest()"><h1><i class="fa fa-file-text-o" aria-hidden="true"></i>  ` + lng.new_study_from_old_test + `</h1></div>
                <div class="col-4 fbtn fbtn-dk-green m-sm" onclick="javascript:studyFromNew()"><h1><i class="fa fa-cog" aria-hidden="true"></i> ` + lng.new_study_configure_now + `</h1></div>
          </div>
          <div class="row" style="margin: 10px 0;" id="createStudy"></div>`;

newstudy.innerHTML = output;

let templateid = 0, // default template id is none
	userid = 3; // logged in user id

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

function getTemplates(templateid) {
  let templates = JSON.parse(localStorage.getItem('templates'));
  let selected = "";
  let optionlist = "";
  
  templates.forEach(function(template){
     let sel = document.querySelector('.inputOptionTemplates');
     let opt = document.createElement('option');
     opt.value = template.templateid;
     if (template.tempalteid === templateid) {
        opt.setAttribute('selected', 'selected');
     }
     opt.innerHTML += template.title; 
     
     sel.appendChild(opt);
   });
}

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

function setTemplate() {
	templateid = document.getElementById('inputOptionTemplates').value;
	
	let templates = JSON.parse(localStorage.getItem('templates'));
	let templatedata = templates.find(item => item.templateid == templateid);
  document.getElementById("inputtitle").value = templatedata.title;
	document.getElementById("studystart").value = templatedata.studystart;
	document.getElementById("studyend").value = templatedata.studyend;
  console.log(templatedata.createdby);
  document.getElementById("inputOptionMembers").value = templatedata.createdby;


	document.getElementById("channels").value = templatedata.channels;
  
  
  //console.log('Alerts: ', templatedata.alerts);
  if (templatedata.alerts === true) {
    document.getElementById("alertsnotif").selectedIndex = 1;
    showNotifications(true);       
	}

  if (templatedata.alerts === false) {
    document.getElementById("alertsnotif").selectedIndex = 2;
    showNotifications(false);

  }
  let laststudy = studies.slice(-1);
	let newstudyid = parseFloat(laststudy[0].studyid) + parseFloat(1); 
	const newstudy = {};
	newstudy.studyid = newstudyid;
	newstudy.title = templatedata.title;
	newstudy.studystart = templatedata.studystart;
	newstudy.studyend = templatedata.studyend;
	newstudy.createdby = templatedata.createdby;
	newstudy.channels = templatedata.channels;
	newstudy.alerts = templatedata.alerts;
	newstudy.notify = templatedata.notify;
	
	localStorage.setItem('newstudy', JSON.stringify(newstudy));

}

function saveNewStudy() {
	let savenewstudy = JSON.parse(localStorage.getItem('newstudy'));
	studies.push(savenewstudy);
	localStorage.setItem('studies', JSON.stringify(studies));
	window.location = 'studies.html';
}

function setChannels() {
	let channelslist = Array.from(document.querySelectorAll('.inputOptionChannels:checked'), e => e.value);
	let inputid = document.getElementById('selectedchannels');
	inputid.value = channelslist;
}

function configStudy(configid) {
	
		if (configid == 0) {
		createstudy = document.getElementById('createStudy');
		output = '';
		createstudy.innerHTML = output;
	}
	if (configid == 1) {
		studyFromTemplate();
	}
	if (configid == 2) {
		studyFromTest();
	}
	if (configid == 3) {
		studyFromNew();
	}
	return configid;
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

function cancelNewStudy() {
  window.location = 'new-study.html';
}

function showNotifications(showalerts) {
  let notifyfieldset = document.getElementById('notify');
  let shownotifyfieldset = "";
    
  if (showalerts == true) {
    
    shownotifyfieldset = `<div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">` + lng.notifications_page_title + `</span>
              </div>
              <input type="text" id="notifications-1" name="notifications" value="" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
              <input type="text" id="notifications-2" name="notifications" value="" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
              <input type="text" id="notifications-3" name="notifications" value="" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
            </div>`;
  
  } 
  if (showalerts == false) {
    shownotifyfieldset = "";
  
  }
  
  notifyfieldset.innerHTML = shownotifyfieldset;
  
}

function notifyFieldset() {
  let showalerts = document.querySelector('.selectAlerts').value;
  showNotifications(showalerts);
  
}

// function selectElement(id, valueToSelect) {    
//     let element = document.getElementById(id);
//     element.value = valueToSelect;
//     console.log(element);
// }
function contentSideMenu() {
  let smenuEl     = document.getElementById('sidemenu');
  let sidemenuContent = `<div class="col-12">`;
  sidemenuContent += `<h4>` + lng.new_study_side_menu + `</h4>
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

function studyFromTemplate() {
	createstudy = document.getElementById('createStudy');
  newStudyOptions = document.getElementById('new-study-options');

	output = `		
        <div class="col-12 pr-none">
        	<div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputOptionTemplates">` + lng.new_study_from_template + `</label>
              </div>
              <select class="inputOptionTemplates custom-select" id="inputOptionTemplates">
              </select>
              <button class="btn btn-lg btn-outline-secondary" type="button" id="inputOptionTemplatesSet" onclick="setTemplate()" >` + lng.new_study_label_from_template_set + `</button>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="">` + lng.new_study_label_study_title + `</span>
              </div>
              <input type="text" id="inputtitle" name="title" value="" class="form-control">
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">` + lng.new_study_label_start_time + `</span>
              </div>
              <input type="text" id="studystart" name="studystart" value="" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
              <span class="input-group-append">
                      <span class="input-group-text bg-light d-block">
                        <i class="fa fa-calendar"></i>
                      </span>
                    </span>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">` + lng.new_study_label_end_time + `</span>
              </div>
              <input type="text" id="studyend" name="studyend" value="" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
              <span class="input-group-append">
                      <span class="input-group-text bg-light d-block">
                        <i class="fa fa-calendar"></i>
                      </span>
                    </span>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">` + lng.new_study_label_channels + `</span>
              </div>
              <input type="text" id="channels" name="channels" value="" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputOptionMembers">` + lng.new_study_label_created_by + `</label>
              </div>
              <select class="inputOptionMembers custom-select" id="inputOptionMembers">
            
              </select>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="alertsnotif">` + lng.new_study_label_send_notifications + `</label>
              </div>
              <select class="selectAlerts custom-select" id="alertsnotif" onchange="notifyFieldset()">
                <option>` + lng.new_study_label_send_notifications_select + `</option>
                <option value="true">` + lng.new_study_label_send_notifications_yes + `</option>
                <option value="false">` + lng.new_study_label_send_notifications_no + `</option>            
              </select>
            </div>
                 
            <div id="notify"></div>
              <input type="submit" value="` + lng.new_study_from_template_save + `" class="col-2 btn btn-lg btn-success btn-block ">          
              <input type="reset" value="` + lng.new_study_from_template_cancel + `" class="col-2 btn btn-lg btn-danger btn-block " onclick="cancelNewStudy()">
            </div>
          </div>
		`;
  newStudyOptions.style.display = 'none';
	createstudy.innerHTML = output;
	document.getElementById('studystart').value = currentDateTime();
	document.getElementById('studyend').value = currentDateTime();
	getTemplates(templateid);
	getMembers(userid);
}

function studyFromTest() {
	createstudy = document.getElementById('createStudy');
  newStudyOptions = document.getElementById('new-study-options');
	output = `
        <div class="col-12 pr-none">		
        <div class="col-6">         
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="">` + lng.new_study_label_study_from_test_title + `</span>
              </div>
              <input type="text" name="title" value="" class="form-control">
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">` + lng.new_study_from_test_label_start_time + `</span>
              </div>
              <input type="text" id="studystart" name="studystart" value="" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
              <span class="input-group-append">
                      <span class="input-group-text bg-light d-block">
                        <i class="fa fa-calendar"></i>
                      </span>
                    </span>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">` + lng.new_study_from_test_label_end_time + `</span>
              </div>
              <input type="text" id="studyend" name="studyend" value="" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
              <span class="input-group-append">
                      <span class="input-group-text bg-light d-block">
                        <i class="fa fa-calendar"></i>
                      </span>
                    </span>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">` + lng.new_study_from_test_label_channels + `</span>
              </div>
              <input type="text" id="channels" name="channels" value="" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputOptionMembers">` + lng.new_study_from_test_label_created_by + `</label>
              </div>
              <select class="inputOptionMembers custom-select" id="inputOptionMembers">

              </select>
            </div>
        </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="alertsnotif">` + lng.new_study_from_test_label_send_notifications + `</label>
              </div>
              <select class="selectAlerts custom-select" id="alertsnotif" onchange="notifyFieldset()">
                <option>` + lng.new_study_from_test_label_send_notifications_select + `</option>
                <option value="1">` + lng.new_study_from_test_label_send_notifications_yes + `</option>
                <option value="0">` + lng.new_study_from_test_label_send_notifications_no + `</option>            
              </select>
            </div>
            <div id="notify"></div>
              <input type="submit" value="` + lng.new_study_from_test_save + `" class="col-2 btn btn-lg btn-success btn-block ">          
              <input type="reset" value="` + lng.new_study_from_test_cancel + `" class="col-2 btn btn-lg btn-danger btn-block" onclick="cancelNewStudy()">
            </div>
          </div>
      </div>
		`;
  newStudyOptions.style.display = 'none';
	createstudy.innerHTML = output;
	document.getElementById('studystart').value = currentDateTime();
	document.getElementById('studyend').value = currentDateTime();
	getMembers(userid);
}

function nextStep() {
let step1 = document.getElementById('step-1');
let step2 = document.getElementById('step-2');
step1.style.display = "none"; 
step2.style.display = "block"; 
}
function prevStep() {
let step1 = document.getElementById('step-1');
let step2 = document.getElementById('step-2');
step1.style.display = "block"; 
step2.style.display = "none"; 
}
function studyFromNew() {
	createstudy = document.getElementById('createStudy');
  newStudyOptions = document.getElementById('new-study-options');

	output = `		
      <div class="col-12 pr-none" id="step-1">
         <div class="col-6 float-left pr-sm">         
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="title">` + lng.new_study_label_configure_now_title + `</span>
              </div>
              <input type="text" name="title" value="" class="form-control">
            </div>
         </div>
         <div class="col-3 float-left">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="start-time">` + lng.new_study_label_configure_now_start_time + `</span>
              </div>
              <input type="text" id="studystart" name="studystart" value="" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
              <span class="input-group-append">
                <span class="input-group-text bg-light d-block">
                    <i class="fa fa-calendar"></i>
                </span>
              </span>
            </div>
         </div>
         <div class="col-3 float-left pl-sm">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">` + lng.new_study_label_configure_now_end_time + `</span>
              </div>
              <input type="text" id="studyend" name="studyend" value="" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
              <span class="input-group-append">
                      <span class="input-group-text bg-light d-block">
                        <i class="fa fa-calendar"></i>
                      </span>
              </span>
            </div>
         </div>
         <div class="col-12 float-left">
            
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-default">` + lng.new_study_label_configure_now_channels + `</span>
                </div>
                <div class="col-6">
                  <input type="text" id="selectedchannels" name="selectedchannels" value="" class="form-control" style="border-radius: 0;" aria-label="Default" aria-describedby="inputGroup-sizing-default">            
                </div>
                <div class="col-5 float-right">
                  <span class="input-group-text bg-light d-block text-right" style="border-top-left-radius: 0; border-bottom-left-radius: 0;">` + lng.new_study_label_configure_now_channels_select + `</span>
                </div>
              
            </div>`;
            
output += `<div class="table-reversed mb-3">
              <table class="table align-middle" style="margin-bottom: 0px;">
                <tbody>
                   <div class="row" id="rowch">
                    <tr>`;
                      channels.forEach(function(channel){
                        if( channel.id % 8 === 0 ) {nrow = "</tr><tr>";} else {nrow = "";}
                        if( channel.id <= 16 ) {moduleclass = "module-one";}
                        if( channel.id > 16 && channel.id <= 32 ) {moduleclass = "module-two";}
                        if( channel.id > 32 && channel.id <= 48 ) {moduleclass = "module-three";}
                        if( channel.id > 48 ) {moduleclass = "module-four";}
                        output += `<td>
                                    <div class="col-1">
                                      <div class="input-group mb-1" style="width:90px;">
                                        <div class="input-group-text">
                                          <input class="inputOptionChannels form-check-input mt-0" type="checkbox" value="` + channel.id + `" aria-label="Checkbox for following text input" onchange="setChannels()">
                                        </div>
                                        <input type="text" class="form-control" value="` + channel.id + `" aria-label="Text input with checkbox">
                                      </div>
                                    </div>
                                   </td>` + nrow;
                      });
  output +=                   `</tr>
                   </div>
                </tbody>
              </table>
            </div>
            </div>
            <div class="col-6">
              
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputOptionMembers">` + lng.new_study_label_configure_now_created_by + `</label>
                </div>
                <select class="inputOptionMembers custom-select" id="inputOptionMembers">
                </select>
              </div>
            </div>

            
            <div id="notify"></div>
              <input type="reset" value="` + lng.new_study_label_configure_now_cancel + `" class="col-2 btn btn-lg btn-danger btn-block" onclick="cancelNewStudy()">
              <input type="next" value="` + lng.new_study_label_configure_now_next + `" class="col-2 btn btn-lg btn-info float-right btn-block" onclick="nextStep()">          
              

        </div>
        </div>`;
  output += `<div class="col-12" id="step-2" style="display:none;">`;
  output += `<input type="reset" value="` + lng.new_study_label_configure_now_back + `" class="col-2 btn btn-lg btn-info btn-block" onclick="prevStep()">
              <input type="next" value="` + lng.new_study_label_configure_now_next + `" class="col-2 btn btn-lg btn-info float-right btn-block" onclick="nextStep()"> `;
  output += `</div>`;
  newStudyOptions.style.display = 'none';
	createstudy.innerHTML = output;
	document.getElementById('studystart').value = currentDateTime();
	document.getElementById('studyend').value = currentDateTime();
	getMembers(userid);
	getChannels();
}

contentSideMenu();