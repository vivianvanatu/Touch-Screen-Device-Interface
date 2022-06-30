/* Author and copyright notice
 @version    2.0.2
 @package    XpertVal64 Interface
 @author     Vivian Vanatu <vivian.vanatu@lives-international.com>
 @copyright  2022 Medisol SRL
 @license    This copy is for demo purposes only. Do not copy, change or use the code with other purpose than demostrating XpertVal64 usage
*/
let templates = JSON.parse(localStorage.getItem('templates'));
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

function selectTemplate() {
	let arraycb = [];
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');

    edittemplatebtn = document.getElementById("edit-template-btn");
    deletetemplatebtn = document.getElementById("delete-template-btn");
    // archivetemplatebtn = document.getElementById("archive-template-btn");

  if(checkboxes.length === 1) {
    edittemplatebtn.classList.add("enabled");
    edittemplatebtn.classList.remove("disabled");
  } else {
    edittemplatebtn.classList.add("disabled");
    edittemplatebtn.classList.remove("enabled");
  }

  if(checkboxes.length > 0) {
    deletetemplatebtn.classList.add("enabled");
    deletetemplatebtn.classList.remove("disabled");
    // archivetemplatebtn.classList.add("enabled");
    // archivetemplatebtn.classList.remove("disabled");
  } else {
    deletetemplatebtn.classList.add("disabled");
    deletetemplatebtn.classList.remove("enabled");
    // archivetemplatebtn.classList.add("disabled");
    // archivetemplatebtn.classList.remove("enabled");
  }

  for (var i = 0; i < checkboxes.length; i++) {
    arraycb.push(checkboxes[i].value)
  }
  
  return arraycb;
}

function editTemplate() {
  arraycb = selectTemplate();
  if(arraycb.length === 1) {
    location.href = 'edit-template.html?templateid=' + arraycb;
  } else {
  
  }
}

function deleteTemplate() {
  arraycb = selectTemplate();
  
  if (arraycb.length == 1) {
	  	message = lng.templates_delete_single_template_message;
	} else {
	  	message = lng.templates_delete_multiple_templates_message_1 + arraycb.length + language.templates_delete_multiple_templates_message_2;
	}

  let i = 0;
  let idx = 0
  if (confirm(message)) {
	  arraycb.forEach(templateid => { 
	  	idx = templates.findIndex(item => item.templateid == arraycb[i]);
	  	if (idx > -1) {
	    		templates.splice(idx, 1);
	    		localStorage.setItem('templates', JSON.stringify(templates));
	    		
	    	}
	    i++
	  } );
	  showTemplates();
  }
}

function archiveTemplate() {
    arraycb = selectTemplate();
   	
   	if (arraycb.length == 1) {
	  	message = lng.templates_archive_single_template_message;
	} else {
	  	message = lng.templates_archive_multiple_templates_message_1 + arraycb.length + language.templates_archive_multiple_templates_message_2;
	}

   	let i = 0;
	let idx = 0

	if (confirm(message)) {
	    arraycb.forEach(templateid => { 
	        idx = templates.findIndex(item => item.templateid == arraycb[i]);
	        
	        if (idx > -1) {
	            
	            archivedtemplates.push(templates[idx]);
	            templates.splice(idx, 1);
	            localStorage.setItem('templates', JSON.stringify(templates));
	            localStorage.setItem('archivedtemplates', JSON.stringify(archivedtemplates));
	            
	        }
	        i++
	    } );
	    showTemplates();   
	}
}

function contentSideMenu() {
  let smenuEl     = document.getElementById('sidemenu');
  let sidemenuContent = `<div class="col-12">`;
  sidemenuContent += `<h4>Templates Side Menu</h4>
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

function showTemplates() {
	let templatespage = document.getElementById('templates');
	
	let pagename = lng.templates_page_title;
    
  	setTitle(pagename);
  	output = `<div class="col-12 p-md">
              <a href="new-template.html" class="btn btn-lg btn-info float-left">` + lng.templates_new_template + `</a>
              <a onclick="editTemplate()" id="edit-template-btn" class="btn btn-lg btn-success float-left ml-lg disabled">` + lng.templates_edit_template + `</a>
              <a onclick="deleteTemplate()" id="delete-template-btn" class="btn btn-lg btn-danger float-left ml-lg disabled">` + lng.templates_delete_template + `</a>
              <!--<a onclick="archiveTemplate()" id="archive-template-btn" class="btn btn-lg btn-secondary float-left ml-lg disabled">` + lng.templates_archive_template + `</a>-->
              <a class="btn btn-lg btn-secondary float-right ml-lg" href="studies.html">` + lng.templates_studies + `</a>
              <a class="btn btn-lg btn-light float-right" href="config.html">` + lng.templates_configure + `</a>
        </div>`;
  	output += `<table class="table table-striped">
						<thead>
							<tr>
						      <th scope="col">` + lng.templates_table_column_id + `</th>
						      <th scope="col">` + lng.templates_table_column_edit + `</th>
						      <th scope="col">` + lng.templates_table_column_name + `</th>
						      <th scope="col">` + lng.templates_table_column_start + `</th>
						      <th scope="col">` + lng.templates_table_column_stop + `</th>
						      <th scope="col">` + lng.templates_table_column_alerts + `</th>
						      <th scope="col">` + lng.templates_table_column_createdby + `</th>
                     	    </tr>
						</thead>
						<tbody>`;

	  let pageno = 1;
	  if (getPage() > 0 ) {
	    pageno = getPage();
	  }
	  const noi = templates.length; // length of the array
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

  	templates.forEach((template, index) => {
		templateid = template.templateid;
		title = template.title;
		studystart = template.studystart;
		studyend = template.studyend;
		createdby = template.createdby;
		channels = template.channels;
		notify = template.notify;
		if(template.alerts === true) {alerts = "<span class=\"green\">" + lng.templates_table_value_yes + "</span>"};
    	if(template.alerts === false) {alerts = "<span class=\"red\">" + lng.templates_table_value_no + "</span>"};
		index = index+1;
		while (index >= IndexStart && index <= IndexEnd) {
			output += `<tr>
	      <th scope="row">` + index + `</th><td><div class="form-check"><input onclick="selectTemplate()" class="form-check-input" type="checkbox" value="` + templateid  + `" id="` + templateid  + `"></div></td><td><a class="table-link" href="template.html?templateid=` + templateid	+ `">` + title + `</a></td>
	      <td>` + studystart + `</td><td>` + studyend + `</td><td>` + alerts + `</td><td><a class="table-link" href="profile.html?userid=` + templateid	+ `">` + createdby + `</td></tr>`;
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
	templatespage.innerHTML = output;
  }
  showTemplates();