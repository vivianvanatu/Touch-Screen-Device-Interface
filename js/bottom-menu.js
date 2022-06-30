let menuid = "bottom-menu";

displayBottomMenu(menuid);
toggleMenu = document.getElementById("toggle-menu");
scrollcontent = document.getElementById("page-content-scroll");
setTimeout(() => {
        toggleMenu.style.transition = 'all 1s';
        toggleMenu.style.opacity = '0.1';
        if (scrollcontent !== null) {
          scrollcontent.style.height = '745px';
        }
        console.log('745px1');
      }, 3000);
function showBottomMenu() {
  toggleMenu = document.getElementById("toggle-menu");
  bottomMenu = document.getElementById("bottomMenu");
  scrollcontent = document.getElementById("page-content-scroll");
  if ( bottomMenu.classList.contains('showmenu') ) {
      bottomMenu.classList.add('hidemenu');
      bottomMenu.classList.remove('showmenu');
      toggleMenu.classList.add('showup');
      toggleMenu.classList.remove('showdown');
      toggleMenu.style.opacity = '1';
      if (scrollcontent !== null) {
        scrollcontent.style.height = '745px';
      }
      console.log('745px');    
       
  } else {
      bottomMenu.classList.add('showmenu');
      bottomMenu.classList.remove('hidemenu');
      toggleMenu.classList.add('showdown');
      toggleMenu.classList.remove('showup');
      toggleMenu.style.opacity = '1';
      if (scrollcontent !== null) {
        scrollcontent.style.height = '610px';
      }
      console.log('610px');      
  }
  setTimeout(() => {
        toggleMenu.style.transition = 'all 1s';
        toggleMenu.style.opacity = '0.1';
      }, 3000);
}

function displayBottomMenu(menuid) {
      const menu = document.getElementById(menuid);
      menu.innerHTML = `<a class="toggle-menu" onclick="showBottomMenu()" id="toggle-menu"><i class="fa fa-chevron-down" aria-hidden="true"></i></a>
      <nav class="navbar navbar-expand-lg navbar-light bg-light showmenu" id="bottomMenu">
        <div class="container-fluid">
          <div class="row m-none clickEffect" >
            <ul class="nav nav-xval-pills dropup">
              <li class="nav-item"><a class="nav-xval-link active" aria-current="page" href="dashboard.html"><i class="fa fa-bars"></i> MENU</a></li>
              <li class="nav-item"><a class="nav-xval-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-th"></i> View</a>
                <ul class="dropdown-menu" role="menu">
                    <li><a class="dropdown-item" href="trend.html"> Trend</a></li>
                    <li><a class="dropdown-item" href="reports.html"> Report</a></li>
                    <li><a class="dropdown-item" href="grid.html"> Grid</a></li>
                    <li><a class="dropdown-item" href="channels.html"> Channels</a></li>
                </ul>
              </li>
              <li class="nav-item"><a class="nav-xval-link" href="settings.html"><i class="fa fa-cog" aria-hidden="true"></i> Settings</a></li>
              <li class="nav-item"><a class="nav-xval-link" href="faults.html" tabindex="-1" aria-disabled="true"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Faults</a></li>
            </ul>
          </div>
        </div>
      </nav>`;
}      //<li class="nav-item dropup"><a class="nav-xval-link dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"> View</a>