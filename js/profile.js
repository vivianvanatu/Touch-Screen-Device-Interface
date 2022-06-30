/* Author and copyright notice
 @version    2.0.2
 @package    XpertVal64 Interface
 @author     Vivian Vanatu <vivian.vanatu@lives-international.com>
 @copyright  2022 Medisol SRL
 @license    This copy is for demo purposes only. Do not copy, change or use the code with other purpose than demostrating XpertVal64 usage
*/
let members = JSON.parse(localStorage.getItem('members'));
let profileid = getProfileData();
let lang = JSON.parse(localStorage.getItem('language'));
let lng = '';
if (lang == "en_gb") {
  lng = JSON.parse(localStorage.getItem('language_en_gb'));
}

function getProfileData() {
    const searchArr = window.location.search.split('=');
    let profileId = searchArr[1];

    return profileId;
}

var __profiledata = members.find(function(profile, index) {
      if(profile.id == profileid)
        return true;
    });

profileid = parseInt(profileid);

let userdata = members.find(item => item.userid === profileid);

console.log(members);

viewProfile(profileid);

function contentSideMenu() {
  let smenuEl     = document.getElementById('sidemenu');
  let sidemenuContent = `<div class="col-12">`;
  sidemenuContent += `<h4>` + lng.profile_profile_side_menu + `</h4>
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

function viewProfile(userid) {
	profile = document.getElementById('profile');
  userid = userdata.userid;
  username = userdata.username;
  firstname = userdata.firstname;
  lastname = userdata.lastname;
  avatar = userdata.avatar;
  position = userdata.position;
  phone = userdata.phone;
  email = userdata.email;
  perm = userdata.permissions;

  if (perm == 1) {
    permissions = "<i class=\"fa fa-certificate grey\" aria-hidden=\"true\"></i>" + " Level One";
  }
  if (perm == 2) {
    permissions = "Level Two";
  }
  if (perm == 3) {
    permissions = "Level Three";
  }
  if (perm == 4) {
    permissions = "Level Four";
  }
  if (perm == 5) {
    permissions = "Level Five";
  }
  
  
  let pagename = firstname + ' ' +  lastname;
    
  setTitle(pagename);    



  profile.innerHTML = `
        <div class="row" style="margin: 100px 0;">
          <div class="card p-none">
            <div class="card-header">
               ` + position + ` ` + firstname + ` ` +  lastname + `
            </div>
            <div class="card-body">
            <div class="col-2 float-left ml-xlg mt-xlg mb-xlg">
              <div class="card">
                <a href="edit-profile.html?userid=` + userid + `"><img class="card-img-top" src="` + avatar + `" alt="` + firstname + ` ` +  lastname + `"></a>
              </div>
            </div>
            <div class="col-9 float-left p-lg">
              <h4 class="card-title">` + firstname + ` ` +  lastname + `</h4>
              <h6>` + lng.profile_table_position + `: ` + position + `</h6>
              <h6>` + lng.profile_table_email + `: ` + email + `</h6>
              <h6>` + lng.profile_table_phone + `: ` + phone + `</h6>
              <h6>` + lng.profile_table_permissions + `: ` + permissions + `</h6>
              <a href="edit-profile.html?userid=` + userid + `" class="btn btn-lg btn-success m-md" style="font-size: 16px;"><i class="fa fa-user" area-hidden="true"></i> ` + lng.profile_edit_profile + `</a>
              <a href="profiles.html" class="btn btn-lg btn-danger m-md" style="font-size: 16px;"><i class="fa fa-user" area-hidden="true"></i> ` + lng.profile_close_profile + `</a>
            </div>
          </div>
        </div>
          `;
}