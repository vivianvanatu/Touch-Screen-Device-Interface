/* Author and copyright notice
 @version    2.0.2
 @package    XpertVal64 Interface
 @author     Vivian Vanatu <vivian.vanatu@lives-international.com>
 @copyright  2022 Medisol SRL
 @license    This copy is for demo purposes only. Do not copy, change or use the code with other purpose than demostrating XpertVal64 usage
*/
let members = JSON.parse(localStorage.getItem('members'));

let profileid = getProfileData();

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
//console.log();
editProfile(profileid);

function validateForm() {
  let fname = document.getElementById('firstname').value;
  let lname = document.getElementById('lastname').value;
  let pos = document.getElementById('position').value;
  let em = document.getElementById('email').value;
  let ph = document.getElementById('phone').value;
  let perm = document.getElementById('permissions').value;
  if (fname == "" || lname == "") {
    alert("First name and last name must be filled out!");
    return false;
  }
  if (em == "") {
    alert("Email must be filled out!");
    return false;
  }
  
  const profileData = [
    {
      userid: profileid,
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
  //window.location = 'profile.html?userid=' + profileid;
  //console.log('validateForm');
  
}
function saveEdit() {
  const formval = validateForm();
  const newmembers = members.map(obj => {
    if (obj.userid === profileid) {
      obj = formval
    }

    return obj;
  });
  localStorage.setItem('members', JSON.stringify(newmembers));
  window.location = 'profile.html?userid=' + profileid;
}
function cancelEdit() {
  window.location = 'profile.html?userid=' + profileid;
}
function editProfile(userid) {
	editprofile = document.getElementById('edit-profile');
  username = userdata.username;
  firstname = userdata.firstname;
  lastname = userdata.lastname;
  avatar = userdata.avatar;
  position = userdata.position;
  phone = userdata.phone;
  email = userdata.email;

  //let profid = document.getElementById('userid');
  let pagename = 'Edit ' + firstname + ' ' +  lastname + ' profile';
    
  setTitle(pagename);    
  
  
  
	editprofile.innerHTML = `
        <form name="editProfileForm" action="javascript: saveEdit()">
            <div class="row" style="margin: 100px 0;">
            <div class="col-2 float-left ml-xlg mt-xlg mb-xlg">
              <div class="card">

              <img class="card-img-top" src="` + avatar + `" alt="` + firstname + ` ` +  lastname + `">
              <!-- Button trigger modal -->
              <button type="button" class="btn btn-lg btn-info p-none" style="font-size: 14px;" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Update image
              </button>
              <!-- Modal -->
              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">` + firstname + ` ` +  lastname + `</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                      </button>
                    </div>
                    <div class="modal-body">
                      <div class="col-6 mb-md offset-3">
                        <img class="card-img-top" src="` + avatar + `" alt="` + firstname + ` ` +  lastname + `">
                      </div>
                      
                      <hr/>
                      <h6>Change your profile image:</h6>

                      <div class="input-group mb-3">
                        <input type="file" class="form-control" id="inputGroupFile02">
                        <label class="input-group-text" for="inputGroupFile02">Upload</label>
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
          
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="">First and last name</span>
              </div>
              <input type="text" id="firstname" value="` + firstname + `" class="form-control" required>
              <input type="text" id="lastname" value="` + lastname + `" class="form-control" required>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Position</span>
              </div>
              <input type="text" id="position" value="` + position + `" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" required>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
              </div>
              <input type="text" id="email" value="` + email + `" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" required>
            </div>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Phone</span>
              </div>
              <input type="text" id="phone" value="` + phone + `" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" required>
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
            <div class="input-group mb-3 mt-3">
              <input type="submit" value="Save" class="col-2 btn btn-success btn-block " >          
              <input type="reset" value="Cancel" class="col-2 btn btn-danger btn-block " style="margin-left: 20px;" onclick="cancelEdit()">
            </div>
            
            </div>
          </div>
      </form>
          `;
}