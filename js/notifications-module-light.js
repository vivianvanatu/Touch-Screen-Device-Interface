/* Author and copyright notice
 @version    2.0.2
 @package    XpertVal64 Interface
 @author     Vivian Vanatu <vivian.vanatu@lives-international.com>
 @copyright  2022 Medisol SRL
 @license    This copy is for demo purposes only. Do not copy, change or use the code with other purpose than demostrating XpertVal64 usage
*/
    // declaration of current batery levels as well as the icons limits
    let battery = 75,
    	l1 = 10, 
    	l2 = 25, 
    	l3 = 50, 
    	l4 = 90, 
    	l5 = 100;

    let topheader = "top-header";
    displayHeader(topheader);
    function displayHeader(topheader) {
        header = document.getElementById(topheader);
        output = `  <button class="float-left btn-transparent" style="height:49px;width:50px;line-height:49px; background-color:#005b7f;color:white;" onclick="history.back()"><i class="fa fa-chevron-left fa-lg"></i></button>
                    <div class="col-md-3 float-left" style="padding-left: 10px;" id="title"></div>
                    <div class="col-md-3 float-left">
                        <h5 class="green"><a class="link-success" style="text-decoration: none;" href="trend.html?studyid=76">Study 076 running <span id="running"></span></a></h5>
                    </div>
                    <div class="col-md-4 float-left">
                        <div class="float-right" id="wifi"></div>
                        <div class="float-right" id="battery"></div>
                        <div class="float-right" id="alerts"></div>
                    </div>
                    <div style="width:6.33%" class="float-right text-right">
                        <a onclick="window.location.reload(true);" class="float-left btn-transparent" style="height:49px;width:20px;line-height:49px;color:#008dc5;"> <i class="fa fa-refresh fa-lg"></i></a>
                        <a href="dashboard.html"><i class="fa fa-bars fa-2 dark-blue"></i></a>
                    </div>`;
        header.innerHTML = output;
    }
    
    function setTitle(pagename) {
       document.title = pagename;
       id = document.getElementById('title');
       if(id !== null) {id.innerHTML = '<h5>' + pagename + '</h5>';}
       
    }
    //call to show the battery level on id="battery"
    displayBattery(battery, l1, l2, l3, l4, l5);

    // displayElement function shows 5 battery levels. You must feed the current level (battery) and the limits (l1, l2, l3, l4, l5) where it should show a different icon
    function displayBattery(battery, l1, l2, l3, l4, l5) {
        const batterye = document.getElementById("battery");
        switch (true) {
          case (battery < l1):
            batterye.innerHTML = '<i class="fa fa-battery-empty fa-1 red blink"></i>';
            break;
          case (battery < l2 && battery >= l1):
            batterye.innerHTML = '<i class="fa fa-battery-quarter fa-1 orange"></i>';
            break;
          case (battery > l2 && battery <= l3):
            batterye.innerHTML = '<i class="fa fa-battery-half fa-1 dark-blue"></i>';
            break;
          case (battery > l3 && battery <= l4):
            batterye.innerHTML = '<i class="fa fa-battery-three-quarters fa-1 dark-blue"></i>';
            break;
          case (battery > l4 && battery <= l5):
            batterye.innerHTML = '<i class="fa fa-battery-full fa-1 green"></i>';
            break;      
        }
    }
    // declaration of current wifi level
    let wifi = 4;
    
    //call to show the wifi level on id="wifi"
    displayWifi(wifi);

    // displayWifi function shows 5 levels of wifi signal: 0 (no sginal), 1, 2, 3 and 4 (full signal). You must feed the current level as 0, 1, 2, 3 or 4(battery)
    function displayWifi(wifi) {
        const wifie = document.getElementById("wifi");
        switch (wifi) {
           case 0:
             wifie.classList.add("nosignal");
             break;

           case 1:
             wifie.classList.add("one");
             break;
           
           case 2:
             wifie.classList.add("two");
             break;

           case 3:
             wifie.classList.add("three");
             break;

           case 4:
             wifie.classList.add("four");
             break;
        }        
    }
    // declaration of current level of alert
    let alert = 2;
    
    // call to display the alert on id="alerts"
    displayAlert(alert);

    //displayAlert function takes 0, 1, 2, 3 values to show the corespeonding alert
    function displayAlert(alert) {
    	const alerts = document.getElementById("alerts");
    	switch (alert) {
           case 0:
             alerts.innerHTML = '';
             break;

           case 1:
             alerts.innerHTML = '<a href="faults.html"><i class="fa fa-exclamation fa-1 dark-blue blink-slow"></i></a>';
             break;
          
           case 2:
             alerts.innerHTML = '<a href="faults.html"><i class="fa fa-exclamation-triangle fa-1 orange blink"></i></a>';
             break;

           case 3:
             alerts.innerHTML = '<a href="faults.html"><i class="fa fa-exclamation-circle fa-1 red blink-fast"></i></a>';
             break;
        }    
    }

    let dots = window.setInterval( function() {
        let wait = document.getElementById("running");
        if ( wait.innerHTML.length > 3 ) 
            wait.innerHTML = "";
        else 
            wait.innerHTML += ".";
    }, 500);


    