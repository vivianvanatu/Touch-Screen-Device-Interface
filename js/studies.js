/* Author and copyright notice
 @version    2.0.2
 @package    XpertVal64 Interface
 @author     Vivian Vanatu <vivian.vanatu@lives-international.com>
 @copyright  2022 Medisol SRL
 @license    This copy is for demo purposes only. Do not copy, change or use the code with other purpose than demostrating XpertVal64 usage
*/
let studies = JSON.parse(localStorage.getItem('studies'));
let archivedstudies = JSON.parse(localStorage.getItem('archivedstudies'));
let lang = JSON.parse(localStorage.getItem('language'));
let lng = '';
if (lang == "en_gb") {
  lng = JSON.parse(localStorage.getItem('language_en_gb'));
}

showStudies(studies);

function getPage() {
    const searchArr = window.location.search.split('=');
    let pageno = searchArr[1];  
    return pageno;
}

function selectStudy() {
  var arraycb = []
  var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
  editstudybtn = document.getElementById("edit-study-btn");
  deletestudybtn = document.getElementById("delete-study-btn");
  archivestudybtn = document.getElementById("archive-study-btn");
  if(checkboxes.length === 1) {
    editstudybtn.classList.add("enabled");
    editstudybtn.classList.remove("disabled");
  } else {
    editstudybtn.classList.add("disabled");
    editstudybtn.classList.remove("enabled");
  }
  if(checkboxes.length > 0) {
    deletestudybtn.classList.add("enabled");
    deletestudybtn.classList.remove("disabled");
    archivestudybtn.classList.add("enabled");
    archivestudybtn.classList.remove("disabled");
  } else {
    deletestudybtn.classList.add("disabled");
    deletestudybtn.classList.remove("enabled");
    archivestudybtn.classList.add("disabled");
    archivestudybtn.classList.remove("enabled");
  }
  for (var i = 0; i < checkboxes.length; i++) {
    arraycb.push(checkboxes[i].value)
  }  
  return arraycb;
}

function editStudy() {
  arraycb = selectStudy();
  if(arraycb.length === 1) {
    location.href = 'edit-study.html?studyid=' + arraycb;
  } else {
  }
}

function deleteStudy() {
  arraycb = selectStudy();
  let i = 0;
  let idx = 0
  if (arraycb.length == 1) {
    message = lng.studies_delete_single_study_message;
  } else {
    message = lng.studies_delete_multiple_studies_message_1 + arraycb.length + language.studies_delete_multiple_studies_message_2;
  }
  if (confirm(message)) {
    arraycb.forEach(studyid => { 
        idx = studies.findIndex(item => item.studyid == arraycb[i]);
        if (idx > -1) {
            studies.splice(idx, 1);
            localStorage.setItem('studies', JSON.stringify(studies));
        }
        i++
    } );
    showStudies();   
  }
}

function archiveStudy() {
  arraycb = selectStudy();
    let i = 0;
  let idx = 0

  if (arraycb.length == 1) {
    message = lng.studies_archive_single_study_message;
  } else {
    message = lng.studies_archive_multiple_studies_message_1 + arraycb.length + language.studies_delete_multiple_studies_message_2;
  }

  if (confirm(message)) {
      arraycb.forEach(studyid => { 
          idx = studies.findIndex(item => item.studyid == arraycb[i]);
          
          if (idx > -1) {
              
              archivedstudies.push(studies[idx]);
              studies.splice(idx, 1);
              //console.log(archivedstudies);
              localStorage.setItem('studies', JSON.stringify(studies));
              localStorage.setItem('archivedstudies', JSON.stringify(archivedstudies));
              
          }
          i++
      } );
      showStudies();   
  }
}

function contentSideMenu() {
  let smenuEl     = document.getElementById('sidemenu');
  let sidemenuContent = `<div class="col-12">`;
  sidemenuContent += `<h4>` + lng.studies_side_menu + `</h4>
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

function showStudies() {
  studiespage = document.getElementById('studies');
  
  let pagename = lng.studies_page_title;
    
  setTitle(pagename);    

  output = `<div class="col-12 p-md">
              <a href="new-study.html" class="btn btn-lg btn-info float-left">` + lng.studies_new_study + `</a>
              <a onclick="editStudy()" id="edit-study-btn" class="btn btn-lg btn-success float-left ml-lg disabled">` + lng.studies_edit_study + `</a>
              <a onclick="deleteStudy()" id="delete-study-btn" class="btn btn-lg btn-danger float-left ml-lg disabled">` + lng.studies_delete_study + `</a>
              <a onclick="archiveStudy()" id="archive-study-btn" class="btn btn-lg btn-secondary float-left ml-lg disabled">` + lng.studies_archive_study + `</a>
              <a class="float-right btn btn-lg btn-secondary ml-lg" href="templates.html">` + lng.studies_templates + `</a>
              <a class="float-right btn btn-lg btn-light" href="config.html">` + lng.studies_configure + `</a>
        </div>`;
  output += `<table class="table table-striped">
            <thead>
              <tr>
                  
                  <th scope="col">` + lng.studies_table_column_id + `</th>
                  <th scope="col">` + lng.studies_table_column_edit + `</th>
                  <th scope="col">` + lng.studies_table_column_name + `</th>
                  <th scope="col">` + lng.studies_table_column_start + `</th>
                  <th scope="col">` + lng.studies_table_column_stop + `</th>
                  <th scope="col">` + lng.studies_table_column_alerts + `</th>
                  <th scope="col">` + lng.studies_table_column_createdby + `</th>
                </tr>
            </thead>
            <tbody>`;

  let pageno = 1;
  if (getPage() > 0 ) {
    pageno = getPage();
  }
  const noi = studies.length; // length of the array
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

  studies.forEach((study, index) => {
    studyid = study.studyid;
    title = study.title;
    //title = title.substring(0, 15);
    studystart = study.studystart;
    studyend = study.studyend;
    createdby = study.createdby;
    channels = study.channels;
    if(study.alerts === true) {alerts = "<span class=\"green\">" + lng.studies_table_value_yes + "</span>"};
    if(study.alerts === false) {alerts = "<span class=\"red\">" + lng.studies_table_value_no + "</span>"};
    notificationlist = study.notify;
    index = index + 1;
    while (index >= IndexStart && index <= IndexEnd) {
        output += `<tr>
        <td>` + studyid + `</td><td><div class="form-check"><input onclick="selectStudy()" class="form-check-input" type="checkbox" value="` + studyid  + `" id="` + studyid  + `"></div></td>
        <td><a class="table-link" href="study.html?studyid=` + studyid  + `">` + title + `</a></td>
        <td>` + studystart + `</td><td>` + studyend + `</td><td>` + alerts + `</td><td><a class="table-link" href="profile.html?userid=` + createdby + `">` + createdby + `</a></td></tr>`;
        break;
      };
    i++;
   }
   );
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
  studiespage.innerHTML = output;
} 
contentSideMenu();
