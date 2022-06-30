/* Author and copyright notice
 @version    2.0.2
 @package    XpertVal64 Interface
 @author     Vivian Vanatu <vivian.vanatu@lives-international.com>
 @copyright  2022 Medisol SRL
 @license    This copy is for demo purposes only. Do not copy, change or use the code with other purpose than demostrating XpertVal64 usage
*/
let reportid = getReportData();

function getReportData() {
    const searchArr = window.location.search.split('=');
    let reportId = searchArr[1];

    return reportId;
}
 
function getPage() {
	const params = new Proxy(new URLSearchParams(window.location.search), {
	  get: (searchParams, prop) => searchParams.get(prop),
	});
	let value = params.page;
    
    return value;
}

reportid = parseInt(reportid);

let reportdata = JSON.parse(localStorage.getItem('report' + reportid + 'data'));
reportdata = reportdata.find(item => item.id === reportid);

let rid = reportdata.id;
showReport(rid);


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

function showReport(rid) {
	let reportpage = document.getElementById('report');
	
	let pagename = 'Report ' + rid;
    
  	setTitle(pagename);
  	//console.log(reportdata);
  	let createdbyuser = getMemberDetails(reportdata.createdby);
  	console.log(createdbyuser);
  	let hgt = "";
  	let bMenu = document.getElementById("bottomMenu");
  	//let scrollcontent = document.getElementById("page-content-scroll");
  	//if ( bMenu.classList.contains('showmenu'))  { scrollcontent.style.height = '610px'; } else { scrollcontent.style.height = '745px'; }
  	output = `<div class="col-12 page-content-scroll" id="page-content-scroll">
  					<div class="col-5 float-left"><h6>` + reportdata.name + `</h6><p>` + createdbyuser.position + `: <a href="profile.html?userid=` + createdbyuser.userid + `">` + createdbyuser.firstname + ` ` + createdbyuser.lastname + `</a></p></div>
  					<div class="col-7 float-left"><span class="float-right mt-xlg">Start: ` + reportdata.start + ` | Stop: ` + reportdata.stop + ` | Generated: ` + reportdata.generated + `</span></div>
  					<table class="table table-striped table-condensed">
						<thead>
							<tr>`;
	output +=   `<th scope="col">#</th>`;
	output +=   `<th scope="col">Time</th>`;
	let sensors = reportdata.sensors;
	
	sensormin = Math.min(...sensors);
	sensormax = Math.max(...sensors);
	let sensorscount = sensors.length;
	
	outputsensor = '';
	sensors.forEach((sensor, index) => {
		outputsensor += '<th scope="col">' + sensor + '</th>';
	
	})
	output +=   	   outputsensor + `</tr>`;
	output += 	`</thead>
				<tbody>`;

	let sensordata = reportdata.data;
	let sensorsdatacount = sensordata.length;
	outputsensordata = '';
	i=1;
	// let pageno = 1;
	// if (getPage('page') > 0 ) {
	//    pageno = getPage('page');
	// }
	//const noipp = 399; // number of rows per page
	const noi = sensorsdatacount; // length of the array
	
	// const currentPage = pageno; // current page - default is 1
	// const previewsPage = parseFloat(currentPage) - 1;
	// const nextPage = parseFloat(currentPage) + 1;
	// const numberOfPages = Math.ceil(noi/noipp); // how many pages ar needed to display the array
	// pages = Array.from({length:numberOfPages},(val,ind)=>ind+1)
	outputpage ="";
	
	// pages.forEach(function(page) { 
	// 		curpagecss = "";
	// 		if (currentPage == page) {
	// 			curpagecss = "current";
	// 		}
	// 		outputpage += '<li id="pages" class="pages"><a href="?reportid=' + rid + '&page=' + page + '" class="page-link ' + curpagecss + '">' + page + '</a></li>';  
	// });

	// const firstPage = 1;
	// const lastPage = numberOfPages;
	// const IndexValue = noipp; // the value of the index until the first page display elements
	// const IndexStart = IndexValue * currentPage - IndexValue + 1;
	// const IndexEnd = IndexValue * currentPage;
	// console.log('cp: ', IndexValue);
	  
	
	// let prevcss = "";
	// let nextcss = "";   
	// nextcss = "enabled";
	// prevcss = "enabled";
	// if (currentPage == firstPage) {
	// 	prevcss = "disabled"; 
	// }
	// if (currentPage == lastPage) {
	//    nextcss = "disabled"; 
	// }
	
	
	sensordata.forEach((data, index) => {

	  index = index + 1;
	  
	  // while (index >= IndexStart && index <= IndexEnd) {
		if (data.sensor == sensormin) {
			outputsensordata +=	'<tr><td>' + i + '</td><td>' + data.time + '</td>';
		}
		outputsensordata += '<td>' + data.value + '</td>';
		if (data.sensor == sensormax) {
			outputsensordata +=	'</tr>';
			i++;
		}
		// break;
	  // }

	})
	outputsensordata += '</tr>';
	//console.log(outputsensordata);
	output += 	outputsensordata;

	output += `</tbody></table>`; 

    
	reportpage.innerHTML = output;
}
  
