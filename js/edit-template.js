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
editTmp(tid);
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
  window.location = 'template.html?templateid=' + templateid;
}

function addInput() {
  outnotify = document.getElementById('outputnotify');
  let dv = document.createElement("DIV");
  dv.setAttribute("class", "col-12");
  let inp = document.createElement("INPUT");   
  inp.setAttribute("type", "text");
  inp.setAttribute("name", "notifications");
  inp.setAttribute("value", "");
  inp.setAttribute("class", "form-control");
  inp.setAttribute("aria-label", "default");
  inp.setAttribute("aria-describedby", "inputGroup-sizing-default");
  
  dv.appendChild(inp);
  outnotify.appendChild(dv);  
  //console.log(outnotify);
}

function editTmp(tid) {
	edittemplate = document.getElementById('edit-template');
  title = templatedata.title;
  studystart = templatedata.studystart;
  studyend = templatedata.studyend;
  createdby = templatedata.createdby;
  notifications = templatedata.notify;
  alerts = templatedata.alerts;
  channels = templatedata.channels;

  //let profid = document.getElementById('userid');
  let pagename = 'Edit template ' +  tid;
    
  setTitle(pagename);    
  outputnotify = "";
  notifications.forEach(element => {outputnotify += '<div class="col-12"><input type="text" name="notifications" value="' + element.contact + ' | ' + element.phone + '" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"></div>'});
  //createddata = getMemberDetails(createdby);
  edittemplate.innerHTML = `
        <form name="editProfileForm" action="javascript: saveTemplate()" >
            <div class="row" style="margin: 100px 0;">
                  
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
                      <span class="input-group-text bg-light d-block brn-left">
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
                      <span class="input-group-text bg-light d-block brn-left">
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
              <select class="inputOptionMembers custom-select" id="inputOptionMembers">
            
              </select>
            </div>
            
           <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-default">Notifications</span>
                </div>
                <div class="" style="width: 50%;" id="outputnotify">
                  
                </div>
                <div class="input-group-postpend float-left">
                <span class="input-group-text addinput" style="position: absolute; bottom: 0;" id="inputGroup-sizing-default" onclick="addInput()"> + </span>
              </div>
              </div>
              <input type="submit" value="Save" class="col-2 btn btn-success btn-block ">          
              <input type="reset" value="Cancel" class="col-2 btn btn-danger btn-block " onclick="cancelEdit()">
            </div>
          </div>
      </form>
          `;
        onotify = document.getElementById('outputnotify');
        onotify.innerHTML = outputnotify;

}