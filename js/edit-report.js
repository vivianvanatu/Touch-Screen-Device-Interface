/* Author and copyright notice
 @version    2.0.2
 @package    XpertVal64 Interface
 @author     Vivian Vanatu <vivian.vanatu@lives-international.com>
 @copyright  2022 Medisol SRL
 @license    This copy is for demo purposes only. Do not copy, change or use the code with other purpose than demostrating XpertVal64 usage
*/
let reports = JSON.parse(localStorage.getItem('reports'));

let reportid = getReportData();

function getReportData() {
    const searchArr = window.location.search.split('=');
    let reportId = searchArr[1];

    return reportId;
}

/*var __reportdata = studies.find(function(study, index) {
      if(study.id == studyid)
        return true;
    });*/

reportid = parseInt(reportid);
let reportdata = reports.find(item => item.id === reportid);
//console.log();
let rid = reportdata.id;
editReport(rid);
//console.log(reportdata);
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

function saveReport() {
  window.location = "reports.html?reportid=" + rid;
}

function cancelEdit() {
  window.location = 'report.html?reportid=' + reportid;
}



function editReport(rid) {
	editreport = document.getElementById('edit-report');
  name = reportdata.name;
  description = reportdata.description;
  action = reportdata.action;
  generated = reportdata.generated;
  start = reportdata.start;
  stop = reportdata.stop;
  sensors = reportdata.sensors;
  createdby = reportdata.createdby;  

  console.log(name);

  //let profid = document.getElementById('userid');
  let pagename = 'Edit report ' +  rid;
    
  setTitle(pagename);    
  outputnotify = "";
  // notifications.forEach(element => {outputnotify += '<div class="col-12"><input type="text" name="notifications" value="' + element.contact + ' | ' + element.phone + '" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"></div>'});
  //createddata = getMemberDetails(createdby);
  editreport.innerHTML = `
        <form name="editProfileForm" action="javascript: saveReport()" >
            <div class="row" style="margin: 100px 0;">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="">Report name</span>
              </div>
              <input type="text" name="title" value="` + name + `" class="form-control">
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Start</span>
              </div>
              <input type="text" name="studystart" value="` + start + `" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
              <span class="input-group-append">
                      <span class="input-group-text bg-light d-block brn-left">
                        <i class="fa fa-calendar"></i>
                      </span>
                    </span>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Stop</span>
              </div>
              <input type="text" name="studyend" value="` + stop + `" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
              <span class="input-group-append">
                      <span class="input-group-text bg-light d-block brn-left">
                        <i class="fa fa-calendar"></i>
                      </span>
                    </span>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Sensors</span>
              </div>
              <input type="text" name="channels" value="` + sensors + `" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputOptionMembers">Created by (select)</label>
              </div>
              <select class="inputOptionMembers custom-select" id="inputOptionMembers">
            
              </select>
            </div>
            
           
              <input type="submit" value="Generate" class="col-2 btn btn-success btn-block ">          
              <input type="reset" value="Cancel" class="col-2 btn btn-danger btn-block " onclick="cancelEdit()">
            </div>
          </div>
      </form>
          `;
        
}