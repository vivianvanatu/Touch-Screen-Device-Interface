/* Author and copyright notice
 @version    2.0.2
 @package    XpertVal64 Interface
 @author     Vivian Vanatu <vivian.vanatu@lives-international.com>
 @copyright  2022 Medisol SRL
 @license    This copy is for demo purposes only. Do not copy, change or use the code with other purpose than demostrating XpertVal64 usage
*/
let reports = JSON.parse(localStorage.getItem('reports'));
let lang = JSON.parse(localStorage.getItem('language'));
let lng = '';
if (lang == "en_gb") {
	lng = JSON.parse(localStorage.getItem('language_en_gb'));
}

function getPage() {
    const searchArr = window.location.search.split('=');
    let pageno = searchArr[1];
    
    return pageno;
}

console.log(lng.reports_page_title);
function selectReport() {
	let arraycb = [];
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');

    editreportbtn = document.getElementById("edit-report-btn");
    deletereportbtn = document.getElementById("delete-report-btn");
    archivereportbtn = document.getElementById("archive-report-btn");

  if(checkboxes.length === 1) {
    editreportbtn.classList.add("enabled");
    editreportbtn.classList.remove("disabled");
  } else {
    editreportbtn.classList.add("disabled");
    editreportbtn.classList.remove("enabled");
  }

  if(checkboxes.length > 0) {
    deletereportbtn.classList.add("enabled");
    deletereportbtn.classList.remove("disabled");
    archivereportbtn.classList.add("enabled");
    archivereportbtn.classList.remove("disabled");
  } else {
    deletereportbtn.classList.add("disabled");
    deletereportbtn.classList.remove("enabled");
    archivereportbtn.classList.add("disabled");
    archivereportbtn.classList.remove("enabled");
  }

  for (var i = 0; i < checkboxes.length; i++) {
    arraycb.push(checkboxes[i].value)
  }
  
  return arraycb;
}

function editReport() {
  arraycb = selectReport();
  if(arraycb.length === 1) {
    location.href = 'edit-report.html?reportid=' + arraycb;
  } else {
  
  }
}

function deleteReport() {
  arraycb = selectReport();

  if (arraycb.length == 1) {
  	message = lng.reports_delete_single_report_message;
  } else {
  	message = lng.reports_delete_multiple_reports_message_1 + arraycb.length + language.reports_delete_multiple_reports_message_2;
  }

  let i = 0;
  let idx = 0;
  if (confirm(message)) {
	  arraycb.forEach(templateid => { 
	  	idx = reports.findIndex(item => item.reportid == arraycb[i]);
	  	if (idx > -1) {
	    		reports.splice(idx, 1);
	    		localStorage.setItem('reports', JSON.stringify(reports));
	    		
	    	}
	    i++
	  } );
	  showReports();
  }
}

function archiveReport() {
    arraycb = selectReport();

	if (arraycb.length == 1) {
	  	message = lng.reports_archive_single_report_message;
	} else {
	  	message = lng.reports_archive_multiple_reports_message_1 + arraycb.length + language.reports_archive_multiple_reports_message_2;
	}

   	let i = 0;
	let idx = 0

	if (confirm(message)) {
	    arraycb.forEach(reportid => { 
	        idx = reports.findIndex(item => item.reportid == arraycb[i]);
	        
	        if (idx > -1) {
	            
	            archivedreports.push(reports[idx]);
	            reports.splice(idx, 1);
	            localStorage.setItem('reports', JSON.stringify(reports));
	            localStorage.setItem('archivedreports', JSON.stringify(archivedreports));
	            
	        }
	        i++
	    } );
	    showReports();   
	}
}

function contentSideMenu() {
	let smenuEl     = document.getElementById('sidemenu');
	let sidemenuContent = `<div class="col-12">`;
	sidemenuContent += `<h4>Reports Side Menu</h4>
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

function showReports() {
	let reportspage = document.getElementById('reports');
	
	//let pagename = 'Reports';
	let pagename = lng.reports_page_title;
    
  	setTitle(pagename);
  	output = `<div class="col-12 p-md" style="height: 68px;">
              <a href="new-report.html" class="btn btn-lg btn-lg btn-info float-left">` + lng.reports_new_report + `</a>
              
              <a onclick="deleteReport()" id="delete-report-btn" class="btn btn-lg btn-lg btn-danger float-left ml-lg disabled">` + lng.reports_delete_report + `</a>
              <a onclick="archiveReport()" id="archive-report-btn" class="btn btn-lg btn-lg btn-secondary float-left ml-lg disabled">` + lng.reports_archive_report + `</a>
              <a class="float-right btn btn-lg btn-secondary ml-lg" href="studies.html">` + lng.reports_studies + `</a>
              <a class="float-right btn btn-lg btn-light" href="config.html">` + lng.reports_configure + `</a>
        </div>`;
  	output += `<table class="table table-striped">
						<thead>
							<tr>
						      <th scope="col">` + lng.reports_table_column_id + `</th>
						      <th scope="col">` + lng.reports_table_column_edit + `</th>
						      <th scope="col">` + lng.reports_table_column_name + `</th>
						      <th scope="col">` + lng.reports_table_column_descr + `</th>
						      <th scope="col">` + lng.reports_table_column_generated + `</th>
						      <th scope="col">` + lng.reports_table_column_start_stop_date + `</th>
						      <th scope="col">` + lng.reports_table_column_sensors + `</th>
						      <th scope="col">` + lng.reports_table_column_createdby + `</th>
						    </tr>
						</thead>
						<tbody>`;

	  let pageno = 1;
	  if (getPage() > 0 ) {
	    pageno = getPage();
	  }
	  const noi = reports.length; // length of the array
	  console.log(noi);
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

  	reports.forEach((report, index) => {
		let reportid = report.id;
		let name = report.name;
		var desclength = 50;
		let description = report.description;
		description = description.substring(0, desclength) + '...';
		let action = report.action;
		let generated = report.generated;
		let start = new Date(report.start);
		let syear = start.getFullYear();
		let smon = start.getMonth()+1;
		let sday = start.getDate();
		let startdate = sday + "/" + smon + "/" + syear;
		let stop = new Date(report.stop);
		syear = stop.getFullYear();
		smon = stop.getMonth()+1;
		sday = stop.getDate();
		let stopdate = sday + "/" + smon + "/" + syear;		
		let sensors = report.sensors;
		let createdby = report.createdby;
		index = index+1;
		let minsensor = Math.min(...sensors);
		let maxsensor = Math.max(...sensors);
		while (index >= IndexStart && index <= IndexEnd) {
			output += `<tr>
	      <th scope="row">` + index + `</th><td><div class="form-check"><input onclick="selectReport()" class="form-check-input" type="checkbox" value="` + reportid  + `" id="` + reportid  + `"></div></td><td>` + name + `</td><td><a class="table-link" href="report-nopg.html?reportid=` + reportid	+ `">` + description + `</a></td>
	      <td>` + generated + `</td><td>` + startdate + ` - ` + stopdate + `</td><td>` + minsensor + `...` + maxsensor + `</td><td><a class="table-link" href="profile.html?userid=` + createdby	+ `">` + createdby + `</td></tr>`;
      	break;
      };
      	i++;
	});
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
	reportspage.innerHTML = output;
  }
  showReports();
  contentSideMenu();