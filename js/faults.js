/* Author and copyright notice
 @version    2.0.2
 @package    XpertVal64 Interface
 @author     Vivian Vanatu <vivian.vanatu@lives-international.com>
 @copyright  2022 Medisol SRL
 @license    This copy is for demo purposes only. Do not copy, change or use the code with other purpose than demostrating XpertVal64 usage
*/
let faults = JSON.parse(localStorage.getItem('faults'));
let lang = JSON.parse(localStorage.getItem('language'));
let arrayWithElements = JSON.parse(localStorage.getItem('arrayWithElements'));
console.log(arrayWithElements);
let lng = '';
if (lang == "en_gb") {
  lng = JSON.parse(localStorage.getItem('language_en_gb'));
}

function getPage() {
    const searchArr = window.location.search.split('=');
    let pageno = searchArr[1];
    
    return pageno;
}

function selectFaults() {
	let arraycb = [];
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');


    ackfaultbtn = document.getElementById("ack-fault-btn");


  if(checkboxes.length > 0) {
    ackfaultbtn.classList.add("enabled");
    ackfaultbtn.classList.remove("disabled");
  } else {
    ackfaultbtn.classList.add("disabled");
    ackfaultbtn.classList.remove("enabled");
  }

  for (var i = 0; i < checkboxes.length; i++) {
    arraycb.push(checkboxes[i].value)
  }
  
  return arraycb;
}

function ackMultipleFaults() {
	arraycb = selectFaults();

   	let i = 0;
	let idx = 0;
	//if (confirm('Do you want to Acknowledge this fault?')) {
		
		arraycb.forEach(faultid => { 
		const newfaults = faults.map(obj => {
		    if (obj.faultid == faultid) {
		      obj.acknowledge = 1;
		    }
		    
		    return obj;
		  });
		  localStorage.setItem('faults', JSON.stringify(newfaults));
		});
		showFaults();   
	//}
}

function ackFault(faultid) {
	 	
	//if (confirm('Do you want to Acknowledge this fault?')) {
		
		
		const newfaults = faults.map(obj => {
		    if (obj.faultid === faultid) {
		      obj.acknowledge = faults.acknowledge
		    }

		    return obj;
		  });
		  localStorage.setItem('faults', JSON.stringify(newfaults));
		
		showFaults();   
	//}
}

function showFaults() {
	let faultspage = document.getElementById('faults');
	
	let pagename = lng.notifications_page_title;
    
  	setTitle(pagename);
  	output = `<div class="col-12 p-md">
              <a onclick="ackMultipleFaults()" id="ack-fault-btn" class="btn btn-lg btn-info float-left disabled">` + lng.notifications_ack_notification + `</a>
              <a class="btn btn-lg btn-secondary float-right" href="studies.html">` + lng.notifications_studies + `</a>
              </div>`;
  	output += `<table class="table table-striped">
						<thead>
							<tr>
						      <th scope="col">` + lng.notifications_table_column_id + `</th>
						      <th scope="col">` + lng.notifications_table_column_edit + `</th>
						      <th scope="col">` + lng.notifications_table_column_name + `</th>
						      <th scope="col">` + lng.notifications_table_column_date_time + `</th>
						      <th scope="col">` + lng.notifications_table_column_value + `</th>
						      <th scope="col">` + lng.notifications_table_column_channels + `</th>
						      <th scope="col">` + lng.notifications_table_column_studyid + `</th>
						      <th scope="col">` + lng.notifications_table_column_event + `</th>
						      <th scope="col">` + lng.notifications_table_column_ack + `</th>
						    </tr>
						</thead>
						<tbody>`;

	  let pageno = 1;
	  if (getPage() > 0 ) {
	    pageno = getPage();
	  }
	  const noi = faults.length; // length of the array
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

  	faults.forEach((fault, index) => {
		faultid = fault.faultid;
		title = fault.title;
		datetime = fault.datetime;
		studyid = fault.studyid;
		value = fault.value;
		channels = fault.channels;
		let event = "";
		let ackcode = "";
		if(fault.event == 1) {
			event = '<span class="badge bg-info text-dark">out of range</span>';
		}
		if(fault.event == 2) {
			event = '<span class="badge bg-warning text-dark">sensor removed</span>';
		}
		acknowledge = fault.acknowledge;
		if (acknowledge == 0 ) {
			ackcode = '<button onclick="ackFault(' + faultid + ')" class="btn btn-info btn-sm">Acknowledge</button>';	
		} else {
			ackcode = '<button class="btn btn-light btn-sm disabled">Acknowledged</button>';
		}
		
		if(fault.alerts === true) {alerts = "<span class=\"green\">Yes</span>"};
    	if(fault.alerts === false) {alerts = "<span class=\"red\">No</span>"};
		index = index+1;
		while (index >= IndexStart && index <= IndexEnd) {
			output += `<tr>
	      <th scope="row">` + index + `</th><td><div class="form-check"><input onclick="selectFaults()" class="form-check-input" type="checkbox" value="` + faultid  + `" id="` + faultid  + `"></div></td><td><a class="table-link">` + title + `</a></td>
	      <td>` + datetime + `</td><td>` + value + `</td><td>` + channels + `</td><td><a class="table-link" href="study.html?studyid=` + studyid	+ `">` + studyid + `</td><td>` + event + `</td><td>` + ackcode + `</td></tr>`;
      	break;
      };
      	i++;
	});
	 output += `</tbody></table>`; 

    if(numberOfPages > 1) {
      
    output += `<nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li id="prev" class="page-item ` + prevcss + `">
            <a class="page-link" href="?page=` + previewsPage + `" tabindex="-1"><i class="fa fa-angle-double-left"></i> Previous</a>
          </li>`;
    if (numberOfPages > 2) {
      output += outputpage;
    }
    output +=`<li id="next" class="page-item ` + nextcss + `">
            <a class="page-link" href="?page=` + nextPage + `">Next <i class="fa fa-angle-double-right"></i></a>
          </li>
        </ul>
      </nav></div>`;
    }
	faultspage.innerHTML = output;
  }
  showFaults();