/* Author and copyright notice
 @version    2.0.2
 @package    XpertVal64 Interface
 @author     Vivian Vanatu <vivian.vanatu@lives-international.com>
 @copyright  2022 Medisol SRL
 @license    This copy is for demo purposes only. Do not copy, change or use the code with other purpose than demostrating XpertVal64 usage
*/
newProfile();

function validateForm() {
  let avatar = "media/avatars/default.jpg";
  let userid = document.getElementById('userid').value;
  let username = document.getElementById('username').value;
  
  //avatar = document.getElementById('inputavatar').value;
  // if (avatar == null) {
  //   avatar = "media/avatars/default.jpg";
  // }
  let fname = document.getElementById('firstname').value;
  let lname = document.getElementById('lastname').value;
  let pos = document.getElementById('position').value;
  let em = document.getElementById('email').value;
  let ph = document.getElementById('phone').value;
  let perm = document.getElementById('permissions').value;
  if (fname == "" || lname == "") {
    console.log("First name and last name must be filled out!");
    return false;
  }
  if (em == "") {
    console.log("Email must be filled out!");
    return false;
  }
  
  const profileData = [
    {
      userid: parseInt(userid),
      username: username,
      firstname: fname,
      lastname: lname,
      position: pos,
      email: em,
      phone: ph,
      avatar: avatar,
      permissions: perm
    }
  ];  

  return profileData[0];
  
}

function prepareData() {
  let members = JSON.parse(localStorage.getItem('members'));
  let lastuser = members.slice(-1);
  let newuserid = parseInt(lastuser[0].userid) + parseInt(1); 
  let nui = document.getElementById('userid').value = newuserid;
  
  return newuserid;
  console.log(nui);
  
}
function saveNewProfile() {
  let members = JSON.parse(localStorage.getItem('members'));
  let nuid = prepareData();
  const formval = validateForm();
  members.push(formval);
  localStorage.removeItem('members');
  localStorage.setItem('members', JSON.stringify(members));
  window.location = 'profile.html?userid=' + nuid;
  console.log('save new profile', nuid);
}
function cancelNewProfile() {
  window.location = 'profiles.html';
}

function contentSideMenu() {
  let smenuEl     = document.getElementById('sidemenu');
  let sidemenuContent = `<div class="col-12">`;
  sidemenuContent += `<h4>New Profile Side Menu</h4>
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

function newProfile() {
	newprofile = document.getElementById('new-profile');
  
  let pagename = 'New profile';
    
  setTitle(pagename);    
  newprofile.innerHTML = `
        <form name="newProfileForm" action="javascript: saveNewProfile()" onload="prepareData()">
            <div class="row" style="margin: 50px 0;">
            <div class="col-2 float-left ml-xlg mt-xlg mb-xlg">
              <div class="card">

              <img class="card-img-top" src="media/avatars/default.jpg" alt="Default Avatar">
              <!-- Button trigger modal -->
              <button type="button" class="btn btn-lg btn-info p-none" style="font-size: 14px;" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Update image
              </button>
              <!-- Modal -->
              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">New Profile</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                      </button>
                    </div>
                    <div class="modal-body">
                      <div class="col-6 mb-md offset-3">
                        <img class="card-img-top" src="media/avatars/default.jpg" alt="Default Avatar">
                      </div>
                      
                      <hr/>
                      <h6>Change your profile image:</h6>

                      <div class="input-group mb-3">
                        <input type="file" class="form-control" id="inputavatar" value="media/avatars/default.jpg">
                        <label class="input-group-text" for="inputavatar">Upload</label>
                      </div>

                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-lg btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-lg btn-info">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-9 float-left p-lg">
          <fieldset disabled>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="userid-label">User Id</span>
                </div>
                <input type="text" id="userid" value="" class="form-control">
              </div>
          </fieldset>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="username-label">Username</span>
              </div>
              <input type="text" id="username" value="" class="form-control">
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="fullname-label">First and last name</span>
              </div>
              <input type="text" id="firstname" value="" class="form-control">
              <input type="text" id="lastname" value="" class="form-control">
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Position</span>
              </div>
              <input type="text" id="position" value="" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
              </div>
              <input type="text" id="email" value="" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Phone</span>
              </div>
              <input type="text" id="phone" value="" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="permissions">Permissions</label>
              </div>
              <select class="custom-select" id="permissions">
                <option value="1" selected>Level One</option>
                <option value="2">Level Two</option>
                <option value="3">Level Three</option>
                <option value="4">Level Four</option>
                <option value="5">Level Five</option>
              </select>
            </div>
              <input type="submit" value="Save" class="col-2 btn btn-success btn-block ">          
              <input type="reset" value="Cancel" class="col-2 btn btn-danger btn-block " onclick="cancelNewProfile()">
            </div>
          </div>
      </form>
          `;
          prepareData();
}

