/* Author and copyright notice
 @version    2.0.2
 @package    XpertVal64 Interface
 @author     Vivian Vanatu <vivian.vanatu@lives-international.com>
 @copyright  2022 Medisol SRL
 @license    This copy is for demo purposes only. Do not copy, change or use the code with other purpose than demostrating XpertVal64 usage
*/
let studies = JSON.parse(localStorage.getItem('studies'));

let studyid = getProfileData();

function getProfileData() {
    const searchArr = window.location.search.split('=');
    let studyId = searchArr[1];

    return studyId;
}

/*var __studydata = studies.find(function(study, index) {
      if(study.id == studyid)
        return true;
    });*/

studyid = parseInt(studyid);
let studydata = studies.find(item => item.studyid === studyid);
//console.log();
let sid = studydata.studyid;
editStd(sid);
//console.log(studydata);
function validateForm() {

  
  // let fname = document.forms["editProfileForm"]["firstname"].value;
  // let lname = document.forms["editProfileForm"]["lastname"].value;
  // let pos = document.forms["editProfileForm"]["position"].value;
  // let em = document.forms["editProfileForm"]["email"].value;
  // let ph = document.forms["editProfileForm"]["phone"].value;
  // let perm = document.forms["editProfileForm"]["permissions"].value;
  // if (fname == "" || lname == "") {
  //   alert("First name and last name must be filled out!");
  //   return false;
  // }
  // if (em == "") {
  //   alert("Email must be filled out!");
  //   return false;
  // }
  // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // if(em.value.match(mailformat)) {
  //   return true;
  // } else {
  //   alert("Email address not valid");
  //   return false;
  // }
  
 // console.log();
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

function saveEdit() {
  //window.location = 'studies.html';
  console.log('Index: ', i);  
}

function cancelEdit() {
  window.location = 'study.html?studyid=' + sid;  
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
}

function editStd(sid) {
	editstudy = document.getElementById('edit-study');
  title = studydata.title;
  studystart = studydata.studystart;
  studyend = studydata.studyend;
  createdby = studydata.createdby;
  notifications = studydata.notify;
  alerts = studydata.alerts;
  channels = studydata.channels;

  //let profid = document.getElementById('userid');
  let pagename = 'Edit study ' +  sid;
    
  setTitle(pagename);    
  outputnotify = "";
  //createddata = getMemberDetails(createdby);
    notifications.forEach(element => {outputnotify += '<div class="col-12"><input type="text" name="notifications" value="' + element.contact + ' | ' + element.phone + '" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"></div>'});
  	editstudy.innerHTML = `
        <form name="editProfileForm" action="javascript: saveEdit()">
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
      </form>`;
      onotify = document.getElementById('outputnotify');
      onotify.innerHTML = outputnotify;
}