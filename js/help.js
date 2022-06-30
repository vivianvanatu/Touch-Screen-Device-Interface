/* Author and copyright notice
 @version    2.0.2
 @package    XpertVal64 Interface
 @author     Vivian Vanatu <vivian.vanatu@lives-international.com>
 @copyright  2022 Medisol SRL
 @license    This copy is for demo purposes only. Do not copy, change or use the code with other purpose than demostrating XpertVal64 usage
*/
showHelp();

function showHelp(){
	let helppage = document.getElementById('help');
	
	let pagename = 'Help';
    
  	setTitle(pagename);

  // 	let showpagSettings = 0,
		// showpagChannels = 0,
		// showpagStudies = 1,
		// showpagReports = 1,
		// showpagTemplates = 1,
		// showpagProfiles = 1;

	// let pagination;

	pagecontentProfiles = pagecontentTemplates = pagecontentReports = pagecontentStudies = pagecontentChannels = pagecontentSettings =  `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id diam quis mi vestibulum viverra sed vel leo. Donec sodales enim gravida accumsan pretium. Fusce iaculis tellus id ipsum feugiat, eu luctus ligula viverra. Pellentesque et massa tortor. Morbi felis est, volutpat at accumsan eget, suscipit a velit. Nulla finibus maximus dui eget varius. Vestibulum ac enim eget arcu ullamcorper posuere. Nam vel tortor eget odio blandit mollis. Fusce ac tellus tempor mauris dignissim placerat. Proin vestibulum, turpis laoreet finibus convallis, ligula massa convallis lectus, et vestibulum lorem lorem at risus.
						</p>
						<p>
							Mauris sagittis enim quis commodo pulvinar. Fusce purus sem, iaculis vitae pharetra blandit, egestas at justo. Donec sit amet sem posuere, tempor ligula vel, bibendum ex. Mauris ex odio, eleifend eget purus nec, auctor consectetur sapien. Aliquam vitae lectus eget augue pellentesque congue. Curabitur vehicula aliquet lacus sed commodo. Suspendisse lectus lectus, mattis quis sagittis vel, dapibus sed arcu. Praesent fringilla vel ligula ut pulvinar. Aliquam quis lorem at augue rutrum blandit id quis nisi. Nunc eget erat ex. In vel eleifend nibh. In neque purus, varius non quam et, maximus gravida risus. Quisque posuere nisl felis, eu luctus elit sollicitudin eu. Fusce suscipit ut sem congue pharetra. Aenean fringilla, urna quis venenatis scelerisque, orci arcu finibus orci, cursus aliquam arcu arcu ut risus.
						</p>
						<p>
							Suspendisse lacus ex, cursus vitae dolor id, accumsan egestas turpis. Suspendisse dictum commodo lectus, in convallis neque. Vivamus non nisi et erat hendrerit pretium. Curabitur tristique enim eget turpis volutpat, id cursus risus interdum. Sed pellentesque eget elit venenatis hendrerit. Cras dignissim nunc ac tortor dignissim posuere. Nulla congue mollis nisl sit amet accumsan. Phasellus orci erat, ornare ut dignissim sed, condimentum et sapien. Sed iaculis quam arcu, quis egestas urna iaculis at. Vivamus elementum lacus ut aliquet vestibulum. Integer suscipit metus eleifend, vehicula nibh id, commodo lorem. Donec suscipit tempor leo, quis sagittis nunc fringilla eu. Phasellus vel porttitor justo, bibendum porttitor dui. Donec vitae risus a mi eleifend tincidunt nec in est. Ut a imperdiet urna. Quisque tempor sapien gravida libero rhoncus auctor.
						</p>
						<p>
							Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam nec sem non felis ornare commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus convallis lorem vitae tortor imperdiet faucibus. Mauris bibendum porttitor arcu, sagittis pharetra sem accumsan at. Vivamus ut sem diam. Donec et tempus urna.
						</p>
						<p>
							Praesent congue arcu sit amet erat pretium, a semper metus faucibus. Duis ac condimentum lectus, vitae hendrerit risus. Quisque rutrum pharetra tortor, ut tempus enim ultrices quis. Cras viverra nulla non tellus malesuada viverra. Nunc sit amet orci nec nisl mattis maximus at sed ex. In euismod dolor et velit aliquet placerat. Suspendisse nunc ex, euismod non neque nec, porta imperdiet sapien. Suspendisse ut viverra dui. Vivamus egestas eu metus non pellentesque. Maecenas pharetra enim et nisi mollis, sed mollis lorem rutrum. Proin tincidunt ante ut commodo mattis. Suspendisse quis massa nec nibh luctus gravida sagittis sit amet arcu.
						</p>`;

	
	helppage.innerHTML = `<div class="row">
            <div class="col-2">
              <div class="list-group" id="list-tab" role="tablist">
                <a class="list-group-item list-group-item-action active" id="list-1-list" data-bs-toggle="list" href="#list-1" role="tab" aria-controls="list-fvalue-config" onclick="loadPageContent()">
                  <i class="fa fa-sliders fa-lg mr-xlg"></i>Settings
                </a>
                <a class="list-group-item list-group-item-action" id="list-2-list" data-bs-toggle="list" href="#list-2" role="tab" aria-controls="list-calibration">
                  <i class="fa fa-th fa-lg mr-xlg"></i>Channels
                </a>
                <a class="list-group-item list-group-item-action" id="list-3-list" data-bs-toggle="list" href="#list-3" role="tab" aria-controls="list-measurement-units">
                  <i class="fa fa-thermometer-quarter fa-lg mr-xlg"></i>Studies
                </a>
                <a class="list-group-item list-group-item-action" id="list-4-list" data-bs-toggle="list" href="#list-4" role="tab" aria-controls="list-reg-settings">
                  <i class="fa fa-file-text-o fa-lg mr-xlg"></i>Reports
                </a>
                </a>
                <a class="list-group-item list-group-item-action" id="list-5-list" data-bs-toggle="list" href="#list-5" role="tab" aria-controls="list-communications">
                  <i class="fa fa-file-code-o fa-lg mr-xlg"></i>Templates
                </a>
                </a>
                <a class="list-group-item list-group-item-action" id="list-6-list" data-bs-toggle="list" href="#list-6" role="tab" aria-controls="list-display">
                  <i class="fa fa-user fa-lg mr-xlg"></i>Profiles
                </a>
                </a>
              </div>
            </div>
            <div class="col-10">
              <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="list-1" role="tabpanel" aria-labelledby="list-1-list">
                  <h4>Settings</h4>
                    <div class="col-12 page-content-pages" id="page-content">
                      <hr class="solid mt-xs mb-xs"/>`

                     + pagecontentSettings +

                      `<div id="pagination1" class="position-absolute" style="top: 660px; left: 525px;">
                      	<nav aria-label="Page navigation example">
						  <ul class="pagination">
						    <li class="page-item"><a class="page-link" href="help.html?channelspage=1">Previous</a></li>
						    <li class="page-item"><a class="page-link" href="help.html?channelspage=1">1</a></li>
						    <li class="page-item"><a class="page-link" href="help.html?channelspage=2">2</a></li>
						    <li class="page-item"><a class="page-link" href="help.html?channelspage=3">3</a></li>
						    <li class="page-item"><a class="page-link" href="help.html?channelspage=2">Next</a></li>
						  </ul>
						</nav>
                      </div>
                    </div>
                  </div>
                <div class="tab-pane fade" id="list-2" role="tabpanel" aria-labelledby="list-2-list">
                  <h4>Channels</h4>
                    <div class="col-12 page-content-scroll" id="page-content">
                      <hr class="solid mt-xs mb-xs"/>`
                      
                     + pagecontentChannels +

                      `<div id="pagination2" class="position-absolute" style="top: 660px; left: 525px;"></div>
                    </div>                 
                </div>
                <div class="tab-pane fade" id="list-3" role="tabpanel" aria-labelledby="list-3-list">
                    <h4>Studies</h4>
                    <div class="col-12 page-content-scroll" id="page-content">
                      <hr class="solid mt-xs mb-xs"/>`
                       
                     + pagecontentStudies +

                      `<div id="pagination3" class="position-absolute" style="top: 660px; left: 525px;"></div>
                    </div>
                </div>
                <div class="tab-pane fade" id="list-4" role="tabpanel" aria-labelledby="list-4-list">
                    <h4>Reports</h4>
                    <div class="col-12 page-content-scroll" id="page-content">
                      <hr class="solid mt-xs mb-xs"/>`
                      
                     + pagecontentReports +

                      `<div id="pagination4" class="position-absolute" style="top: 660px; left: 525px;">
                      </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="list-5" role="tabpanel" aria-labelledby="list-5-list">
                    <h4>Templates</h4>
                    <div class="col-12 page-content-pages" id="page-content">
                      <hr class="solid mt-xs mb-xs"/>`
                      
                     + pagecontentTemplates +

                      `<div id="pagination5" class="position-absolute" style="top: 660px; left: 525px;">
                      <nav aria-label="Page navigation example">
						  <ul class="pagination">
						    <li class="page-item"><a class="page-link" href="help.html?channelspage=1">Previous</a></li>
						    <li class="page-item"><a class="page-link" href="help.html?channelspage=1">1</a></li>
						    <li class="page-item"><a class="page-link" href="help.html?channelspage=2">2</a></li>
						    <li class="page-item"><a class="page-link" href="help.html?channelspage=3">3</a></li>
						    <li class="page-item"><a class="page-link" href="help.html?channelspage=2">Next</a></li>
						  </ul>
						</nav></div>
                    </div>
                </div>
                <div class="tab-pane fade" id="list-6" role="tabpanel" aria-labelledby="list-6-list">
                  <h4>Profiles</h4>
                  <div class="col-12 page-content-pages" id="page-content">
                    <hr class="solid mt-xs mb-xs"/>`
                       
                     + pagecontentProfiles +

                      `<div id="pagination6" class="position-absolute" style="top: 660px; left: 525px;">
                      <nav aria-label="Page navigation example">
						  <ul class="pagination">
						    <li class="page-item"><a class="page-link" href="help.html#list-6?channelspage=1">Previous</a></li>
						    <li class="page-item"><a class="page-link" href="help.html#list-6?channelspage=1">1</a></li>
						    <li class="page-item"><a class="page-link" href="help.html#list-6?channelspage=2">2</a></li>
						    <li class="page-item"><a class="page-link" href="help.html#list-6?channelspage=3">3</a></li>
						    <li class="page-item"><a class="page-link" href="help.html#list-6?channelspage=2">Next</a></li>
						  </ul>
						</nav>
					</div>                   
                  </div>
                </div> 
            </div>
                </div>
              </div>
            </div>`;

}

function contentSideMenu() {
  let smenuEl     = document.getElementById('sidemenu');
  let sidemenuContent = `<div class="col-12">`;
  sidemenuContent += `<h4>Help Side Menu</h4>
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