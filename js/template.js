/* Author and copyright notice
 @version    2.0.2
 @package    XpertVal64 Interface
 @author     Vivian Vanatu <vivian.vanatu@lives-international.com>
 @copyright  2022 Medisol SRL
 @license    This copy is for demo purposes only. Do not copy, change or use the code with other purpose than demostrating XpertVal64 usage
*/
let templates = JSON.parse(localStorage.getItem('templates'));

let templateid = getProfileData();

function getProfileData() {
    const searchArr = window.location.search.split('=');
    let templateId = searchArr[1];

    return templateId;
}

/*var __templatedata = studies.find(function(study, index) {
      if(study.id == studyid)
        return true;
    });*/

templateid = parseInt(templateid);
let templatedata = templates.find(item => item.templateid === templateid);
//console.log();
let tid = templatedata.templateid;
showTemplate(tid);
//console.log(templatedata);
function validateForm() {

  
}

function getMemberDetails(userid) {
  let members = JSON.parse(localStorage.getItem('members'));
  let memberdata = members.find(item => item.userid === userid);
  
  return memberdata;
}
function getMembers(userid) {
  let members = JSON.parse(localStorage.getItem('members'));
  let selected = "";
  let optionlist = "";
  //let memberslist = ``;
  //console.log(members);
  
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
getMembers(createdby);

function saveTemplate() {
  window.location = "templates.html?templateid=" + tid;
}

function cancelEdit() {
  window.location = 'templates.html';
}

function contentSideMenu() {
  let smenuEl     = document.getElementById('sidemenu');
  let sidemenuContent = `<div class="col-12">`;
  sidemenuContent += `<h4>Template Side Menu</h4>
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

function showTemplate(tid) {
	edittemplate = document.getElementById('template');
  title = templatedata.title;
  studystart = templatedata.studystart;
  studyend = templatedata.studyend;
  createdby = templatedata.createdby;
  notifications = templatedata.notify;
  alerts = templatedata.alerts;
  channels = templatedata.channels;

  //let profid = document.getElementById('userid');
  let pagename = 'Edit study ' +  tid;
    
  setTitle(pagename);    
  outputnotify = "";
  notifications.forEach(element => {outputnotify += '<div class="col-12"><input type="text" name="notifications" value="' + element.contact + ' | ' + element.phone + '" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"></div>'});
  //createddata = getMemberDetails(createdby);
  	edittemplate.innerHTML = `
        <form name="editProfileForm" action="javascript: saveTemplate()" >
          <fieldset disabled>
            <div class="row" style="margin: 0;">
                  
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="">Study title</span>
              </div>
              <input type="text" name="title" value="` + title + `" class="form-control">
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Start Time</span>
              </div>
              <input type="text" name="studystart" value="` + studystart + `" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
              <span class="input-group-append">
                      <span class="input-group-text bg-light d-block">
                        <i class="fa fa-calendar"></i>
                      </span>
                    </span>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">End Time</span>
              </div>
              <input type="text" name="studyend" value="` + studyend + `" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
              <span class="input-group-append">
                      <span class="input-group-text bg-light d-block">
                        <i class="fa fa-calendar"></i>
                      </span>
                    </span>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Channels</span>
              </div>
              <input type="text" name="channels" value="` + channels + `" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputOptionMembers">Created by (select)</label>
              </div>
              <select class="inputOptionMembers custom-select" id="inputOptionMembers" style="background-color: #ecedf0;">
            
              </select>
            </div>
            
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-default">Notifications</span>
                </div>
                <div class="row" id="outputnotify">
                  
                </div>
              </div>
              
              
            </div>
            </fieldset>
              <a href="edit-template.html?templateid=` + tid + `" class="col-2 btn btn-success btn-block ">Edit Template</a>          
              <a href="templates.html" class="col-2 btn btn-danger btn-block">Cancel</a>
            </div>
          </div>
        
      </form>
          `;
        onotify = document.getElementById('outputnotify');
        onotify.innerHTML = outputnotify;
}