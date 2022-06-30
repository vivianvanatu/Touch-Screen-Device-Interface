/* Author and copyright notice
 @version    2.0.2
 @package    XpertVal64 Interface
 @author     Vivian Vanatu <vivian.vanatu@lives-international.com>
 @copyright  2022 Medisol SRL
 @license    This copy is for demo purposes only. Do not copy, change or use the code with other purpose than demostrating XpertVal64 usage
*/
let lang = JSON.parse(localStorage.getItem('language'));
let lng = '';
if (lang == "en_gb") {
  lng = JSON.parse(localStorage.getItem('language_en_gb'));
}

showDashboard();

var arrayWithElements = new Array();

function clickListener(e) 
{   
    var clickedElement=(window.event)
                        ? window.event.srcElement
                        : e.target,
        tags=document.getElementsByTagName(clickedElement.tagName);

    for(var i=0;i<tags.length;++i)
    {
      if(tags[i]==clickedElement)
      {
        arrayWithElements.push({tag:clickedElement.tagName,index:i}); 
        console.log(arrayWithElements);
        localStorage.setItem('arrayWithElements', JSON.stringify(arrayWithElements));
      }    
    }
}

document.onclick = clickListener;

function showDashboard() {

	let dashboardpage = document.getElementById('dashboard');
	
	let pagename = lng.dashboard_page_title;
    
  	//setTitle(pagename);
	
	let output = "";

	output += `<div class="row">
                <div class="col-4 fbtn fbtn-dk-blue" onclick="window.location='index.html';"><h1><i class="fa fa-home" aria-hidden="true"></i> ` + lng.overview_page_title + `</h1></div></a>
                <div class="col-4 fbtn fbtn-red" onclick="window.location='channels.html';"><h1><i class="fa fa-th" aria-hidden="true"></i> ` + lng.channels_page_title + `</h1></div>
                <div class="col-4 fbtn fbtn-lt-blue" onclick="window.location='profiles.html';"><h1><i class="fa fa-user" aria-hidden="true"></i> ` + lng.profiles_page_title + `</h1></div>
        </div>
        <div class="row">
                <div class="col-4 fbtn fbtn-mage" onclick="window.location='studies.html';"><h1><i class="fa fa-thermometer-quarter" aria-hidden="true"></i> ` + lng.studies_page_title + `</h1></div>
                <div class="col-4 fbtn fbtn-mage-red" onclick="window.location='reports.html';"><h1><i class="fa fa-file-text-o" aria-hidden="true"></i> ` + lng.reports_page_title + `</h1></div>
                <div class="col-4 fbtn fbtn-orange" onclick="window.location='templates.html';"><h1><i class="fa fa-file-code-o" aria-hidden="true"></i> ` + lng.templates_page_title + `</h1></div>
        </div>
        <div class="row">
                <div class="col-4 fbtn fbtn-blue" onclick="window.location='settings.html';"><h1><i class="fa fa-cog" aria-hidden="true"></i> ` + lng.settings_page_title + `</h1></div>
                <div class="col-4 fbtn fbtn-fire-red" onclick="window.location='faults.html';"><h1><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> ` + lng.notifications_page_title + `</h1></div>
                <div class="col-4 fbtn fbtn-dk-green" onclick="window.location='help.html';"><h1><i class="fa fa-question-circle" aria-hidden="true"></i> ` + lng.help_page_title + `</h1></div>
        </div>`;

    dashboardpage.innerHTML = output;
}
