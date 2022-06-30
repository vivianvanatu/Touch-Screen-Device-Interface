/* Author and copyright notice
 @version    2.0.2
 @package    XpertVal64 Interface
 @author     Vivian Vanatu <vivian.vanatu@lives-international.com>
 @copyright  2022 Medisol SRL
 @license    This copy is for demo purposes only. Do not copy, change or use the code with other purpose than demostrating XpertVal64 usage
*/
const members = JSON.parse(localStorage.getItem('members'));
const archivedmembers = JSON.parse(localStorage.getItem('archivedmembers'));
let lang = JSON.parse(localStorage.getItem('language'));
let lng = '';
if (lang == "en_gb") {
	lng = JSON.parse(localStorage.getItem('language_en_gb'));
}
//console.log('retrievedObject: ', JSON.parse(members));
setDefaultProfiles();
showMembers();

function getPage() {
    const searchArr = window.location.search.split('=');
    let pageno = searchArr[1];
    
    return pageno;
}

function selectProfile() {
	let arraycb = [];
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');

    editprofilebtn = document.getElementById("edit-profile-btn");
    deleteprofilebtn = document.getElementById("delete-profile-btn");
    archiveprofilebtn = document.getElementById("archive-profile-btn");

  if(checkboxes.length === 1) {
    editprofilebtn.classList.add("enabled");
    editprofilebtn.classList.remove("disabled");
  } else {
    editprofilebtn.classList.add("disabled");
    editprofilebtn.classList.remove("enabled");
  }

  if(checkboxes.length > 0) {
    deleteprofilebtn.classList.add("enabled");
    deleteprofilebtn.classList.remove("disabled");
    archiveprofilebtn.classList.add("enabled");
    archiveprofilebtn.classList.remove("disabled");
  } else {
    deleteprofilebtn.classList.add("disabled");
    deleteprofilebtn.classList.remove("enabled");
    archiveprofilebtn.classList.add("disabled");
    archiveprofilebtn.classList.remove("enabled");
  }

  for (var i = 0; i < checkboxes.length; i++) {
    arraycb.push(checkboxes[i].value)
  }
  
  return arraycb;
}

function editProfile() {
  arraycb = selectProfile();
  if(arraycb.length === 1) {
    location.href = 'edit-profile.html?userid=' + arraycb;
  } else {
  }
}

function contentSideMenu() {
	let smenuEl     = document.getElementById('sidemenu');
	let sidemenuContent = `<div class="col-12">`;
	sidemenuContent += `<h4>` + lng.profiles_side_menu + `</h4>
						<hr>
						<div class="form-check form-switch">
						  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
						  <label class="form-check-label" for="flexSwitchCheckDefault">` + lng.profiles_list_cards_profiles + `</label>
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

function deleteProfile() {
  arraycb = selectProfile();
  let i = 0;
  let idx = 0

  if (confirm('Are you sure you want to delete?')) {
    arraycb.forEach(profileid => { 
        idx = members.findIndex(item => item.userid == arraycb[i]);
        if (idx > -1) {
            members.splice(idx, 1);
            localStorage.setItem('members', JSON.stringify(members));
            
        }
        i++
    } );
    showMembers();   
  }
}

function archiveProfile() {
   arraycb = selectProfile();
   	let i = 0;
	let idx = 0

	if (confirm('Are you sure you want to delete?')) {
	    arraycb.forEach(profileid => { 
	        idx = members.findIndex(item => item.userid == arraycb[i]);
	        
	        if (idx > -1) {
	            
	            archivedmembers.push(members[idx]);
	            members.splice(idx, 1);	            
	            localStorage.setItem('members', JSON.stringify(members));
	            localStorage.setItem('archivedmembers', JSON.stringify(archivedmembers));
	            
	        }
	        i++
	    } );
	    showMembers();   
	}
}

function showMembers() {
	let showprofiles = localStorage.getItem('showprofiles');
	let profiles = document.getElementById('profiles');
	
	let pagename = lng.profiles_profiles;
    
  	setTitle(pagename);
  	

  	output = `<div class="row p-md pr-none">
  			  <div class="col-10 float-left p-none" id="left-buttons">`;
            

	if (showprofiles === 'cards') {
		output += `<a href="new-profile.html" class="btn btn-lg btn-info float-left">` + lng.profiles_new_profile + `</a>
        </div>
        <div class="col-2 float-right">
          <button onclick="showCardProfiles()" class="btn btn-lg btn-transparent float-right"><i class="fa fa-th-large fa-lg" aria-hidden="true"></i></button>
          <button onclick="showListProfiles()" class="btn btn-lg btn-transparent float-right"><i class="fa fa-th-list fa-lg" aria-hidden="true"></i></button>                  
      	</div>
      </div>`; 
	}
	if (showprofiles === 'list') {
		output += `<a href="new-profile.html" class="btn btn-lg btn-info float-left">` + lng.profiles_new_profile + `</a>
				   <a onclick="editProfile()" id="edit-profile-btn" class="btn btn-lg btn-success float-left ml-lg disabled">` + lng.profiles_edit_profile + `</a>
                   <a onclick="deleteProfile()" id="delete-profile-btn" class="btn btn-lg btn-danger float-left ml-lg disabled">` + lng.profiles_delete_profile + `</a>
                  <a onclick="archiveProfile()" id="archive-profile-btn" class="btn btn-lg btn-secondary float-left ml-lg disabled">` + lng.profiles_archive_profile + `</a>
		        </div>
		        <div class="col-2 float-right">
		          <button onclick="showCardProfiles()" class="btn btn-lg btn-transparent float-right"><i class="fa fa-th-large fa-lg" aria-hidden="true"></i></button>
		          <button onclick="showListProfiles()" class="btn btn-lg btn-transparent float-right"><i class="fa fa-th-list fa-lg" aria-hidden="true"></i></button>                  
		        </div>
		      </div>`;
		output += `<table class="table table-striped">
						<thead>
							<tr>
						      <th scope="col">` + lng.profiles_table_column_id + `</th>
						      <th scope="col">` + lng.profiles_table_column_edit + `</th>
						      <th scope="col">` + lng.profiles_table_column_name + `</th>
						      <th scope="col">` + lng.profiles_table_column_pos + `</th>
						      <th scope="col">` + lng.profiles_table_column_phone + `</th>
						      <th scope="col">` + lng.profiles_table_column_email + `</th>
						    </tr>
						</thead>
						<tbody>`;
	}
	
	
	let pageno = 1;
	if (getPage() > 0 ) {
		pageno = getPage();
	}
	const noi = members.length; // length of the array

	const noipp = 12; // number of items per page
	const currentPage = pageno; // current page - default is 1
	const previewsPage = parseFloat(currentPage) - 1;
	const nextPage = parseFloat(currentPage) + 1;
	const numberOfPages = Math.ceil(noi/noipp); // how many pages ar needed to display the array
	
   	pages = Array.from({length:numberOfPages},(val,ind)=>ind+1)
   	outputpage ="";
   	pages.forEach(function(page) { 
   		curpagecss = "";
   		if (currentPage == page) {
   			curpagecss = "current";
   		}

   		outputpage += '<li id="pages" class="pages"><a href="?page=' + page + '" class="page-link ' + curpagecss + '">' + page + '</a></li>';  
   		});

	
	const firstPage = 1;
	const lastPage = numberOfPages;
	const IndexValue = noipp; // the value of the index until the first page display elements
	const IndexStart = IndexValue * currentPage - IndexValue + 1;
	const IndexEnd = IndexValue * currentPage;
	
	let i = 1;
	let prevcss = "";
	let nextcss = "";		
	nextcss = "enabled";
	prevcss = "enabled";
	if (currentPage == firstPage) {
		prevcss = "disabled";	
    	
	}
	if (currentPage == lastPage) {
		nextcss = "disabled";	
    	
	}

	members.forEach((member, index) => {
		userid = member.userid;
		username = member.username;
		firstname = member.firstname;
		lastname = member.lastname;
		fullname = member.firstname + ' ' + member.lastname;
		position = member.position;
		email = member.email;
		phone = member.phone;
		avatar = member.avatar;
		index = index+1;
		//console.log('NOI: ', noi, 'Index: ', index, 'IndexValue: ', IndexValue, 'IndexStart: ', IndexStart, 'IndexEnd: ', IndexEnd)
		while (index >= IndexStart && index <= IndexEnd) {
			//console.log(index);
			if (showprofiles === 'cards') {
				output += `<div class="col-2 float-left pt-none pb-sm pl-lg pr-lg"><a class="card-link" href="profile.html?userid=` + userid
				+ `"><div class="card"><img class="card-img-top" src="` + avatar + `" alt="` + fullname + `"><div class="card-body"><h5 class="card-title">` + firstname + `</h5><p class="card-text">` + position + `</p></div></div></a></div>`;
		    
	      	}
	      	if (showprofiles === 'list') {
	      		output += `<tr>
	      <th scope="row">` + index + `</th><td><div class="form-check"><input onclick="selectProfile()" class="form-check-input" type="checkbox" value="` + userid  + `" id="` + userid  + `"></div></td><td><a class="table-link" href="profile.html?userid=` + userid	+ `">` + fullname + `</a></td>
	      <td>` + position + `</td><td>` + phone + `</td><td>` + email + `</td></tr>`;
	      	} 
      	break;
      };
      	i++;
	}
	);
	if (showprofiles === 'list') { 

		output += `</tbody></table>`; 

		if(numberOfPages > 1) {
			
		output += `<nav aria-label="Page navigation example">
			  <ul class="pagination justify-content-center">
			    <li id="prev" class="page-item ` + prevcss + `">
			      <a class="page-link" href="?page=` + previewsPage + `" tabindex="-1"><i class="fa fa-angle-double-left"></i> ` + lng.pagination_previous + `</a>
			    </li>`;
		if (numberOfPages > 2) {
			output += outputpage;
		}
		output +=`<li id="next" class="page-item ` + nextcss + `">
			      <a class="page-link" href="?page=` + nextPage + `">` + lng.pagination_next + ` <i class="fa fa-angle-double-right"></i></a>
			    </li>
			  </ul>
			</nav></div>`;
	}
}
	if (showprofiles === 'cards') { 

		//output += `</tbody></table>`; 

		if(numberOfPages > 1) {
		output += `<div class="col-12 float-left" style="margin-top: 11px;" ><nav aria-label="Page navigation example">
			  <ul class="pagination justify-content-center">
			    <li id="prev" class="page-item ` + prevcss + `">
			      <a class="page-link" href="?page=` + previewsPage + `" tabindex="-1"><i class="fa fa-angle-double-left"></i> ` + lng.pagination_previous + `</a>
			    </li>`;
		if (numberOfPages > 1) {
			output += outputpage;
		}
		output +=`<li id="next" class="page-item ` + nextcss + `">
			      <a class="page-link" href="?page=` + nextPage + `">` + lng.pagination_next + ` <i class="fa fa-angle-double-right"></i></a>
			    </li>
			  </ul>
			</nav></div>`;
	}

	}
	profiles.innerHTML = output;
	contentSideMenu();
} 

function setDefaultProfiles() {
	if (localStorage.getItem("showprofiles") === null) {
		localStorage.setItem('showprofiles', 'list');
	}
}

function showCardProfiles() {
	localStorage.setItem('showprofiles', 'cards');
	showMembers();
}

function showListProfiles() {
	localStorage.setItem('showprofiles', 'list');
	showMembers();
}