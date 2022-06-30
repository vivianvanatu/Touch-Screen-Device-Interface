/* Author and copyright notice
 @version    2.0.2
 @package    XpertVal64 Interface
 @author     Vivian Vanatu <vivian.vanatu@lives-international.com>
 @copyright  2022 Medisol SRL
 @license    This copy is for demo purposes only. Do not copy, change or use the code with other purpose than demostrating XpertVal64 usage
*/
// Sample channel values (id, name, type 1, value 1, type 2, value 2, type 3, value 3)
// 0 - none, 1 - PT-100, 2 -  humidity:, 3 - pressure logger, 4 - pressure transducer, 5 - thermocouple.
// Retrieve the object from storage
  
let channels = JSON.parse(localStorage.getItem('channels'));

let gridchannels = document.getElementById('grid-channels');
  
let pagename = 'Grid Channels';
    
setTitle(pagename);

if(gridchannels !== null) {
  gridChannels();
}

function gridChannels() {
  showChannels();
  console.log('Grid Channels', channels);
}

function getPage() {
    const searchArr = window.location.search.split('=');
    let pageno = searchArr[1];
    
    
    return pageno;
}

function showChannels() {

  output = `<div class="col-12"><table class="table table-striped">
            <thead>
              <tr>
                  <th scope="col">Channel ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">Type</th>
                  <th scope="col">Temperature</th>
                  <th scope="col">TMin | TMax</th>
                  <th scope="col">Start</th>
                  <th scope="col">Stop</th>
                </tr>
            </thead>
            <tbody>`;

  let pageno = 1;
  if (getPage() > 0 ) {
    pageno = getPage();
  }
  const noi = channels.length; // length of the array
  const noipp = 15; // number of items per page
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

  channels.forEach((channel, index) => {
    channelid = channel.id;
    name = channel.name;
    //title = title.substring(0, 15);
    temperature = channel.temperature;
    console.log(channel.ttype);
    if (channel.ttype == 0 || channel.ttype == undefined) {
      ttype = 'none';
    }
    if (channel.ttype == 1) {
      ttype = 'PT-100';
    }
    if (channel.ttype == 2) {
      ttype = 'humidity sensor';
    }
    if (channel.ttype == 3) {
      ttype = 'pressure sensor';
    }
    if (channel.ttype == 4) {
      ttype = 'pressure transducer';
    }
    if (channel.ttype == 5) {
      ttype = 'thermocouple';
    }
    
    tmax = channel.tmax;
    tmin = channel.tmin;
    start = channel.start;
    stop = channel.stop;
    
    index = index + 1;
    while (index >= IndexStart && index <= IndexEnd) {
        output += `<tr>
        <td>` + channelid + `</td>
        <td><a class="table-link" href="channel.html?channelid=` + channelid  + `">` + name + `</a></td>
        <td>` + ttype + `</td><td>` + temperature + `</td><td>` + tmin + ` | ` + tmax + `</td><td>` + start + `</td><td>` + stop + `</td></tr>`;
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
  gridchannels.innerHTML = output;

} 



// function xpertvalData(channel) {
//           csssensors = "empty";
//           sensno = 0;
//           icon1 = "";
//           icon2 = "";
//           icon3 = "";
//           if (channel.temperature) {
//             icon1 = "fa-thermometer-quarter";
//             sensno++;
//           }
//           if (channel.humidity) {
//             icon2 = "fa-tint";
//             sensno++;
//           }
//           if (channel.pressure) {
//             icon3 = "fa-dot-circle-o";
//             sensno++;
//           }
//           switch(sensno) {
//               case 1:
//                 csssensors = "onesensors col-12";
//                 break;
//               case 2:
//                 csssensors = "twosensors col-6";
//                 break;
//               case 3:
//                 csssensors = "threesensors col-4";
//                 break;
//             }
//             basemod = "";
//             namemod = "<p>" + channel.name + "</p>";
//             if (sensno == 0) {
//                 basemod = "<div class=\"data\" style=\"line-height: 45px;\"><p>Empty</p></div>";
//                 namemod = "";
//             }
//             temperaturemod = "";
//             if ( channel.temperature ) {
//                 temperaturemod = "<div class=\"data " + csssensors + " float-left green\"><i class=\"fa " + icon1 + "\" aria-hidden=\"true\"></i><p>" + channel.temperature + "</p></div>";
//             }
//             humiditymod = "";
//             if ( channel.humidity ) {
//                 humiditymod = "<div class=\"data " + csssensors + " float-left green\"><i class=\"fa " + icon2 + "\" aria-hidden=\"true\"></i><p>" + channel.humidity + "</p></div>";
//             }
//             pressuremod = "";
//             if ( channel.pressure ) {
//                 pressuremod = "<div class=\"data " + csssensors + " float-left green\"><i class=\"fa " + icon3 + "\" aria-hidden=\"true\"></i><p>" + channel.pressure + "</p></div>";
//             }
//           if( channel.id % 8 === 0 ) {nrow = "</tr><tr>";} else {nrow = "";}
//           if( channel.id <= 16 ) {moduleclass = "module-one";}
//           if( channel.id > 16 && channel.id <= 32 ) {moduleclass = "module-two";}
//           if( channel.id > 32 && channel.id <= 48 ) {moduleclass = "module-three";}
//           if( channel.id > 48 ) {moduleclass = "module-four";}
//           let output = "<td><div class=\"col text-center\"><a href=\"channel.html?channel=" + channel.id + "\"><div class=\"sensor\"><div class=\"sensor-head " + moduleclass + "\"><div class=\"col-2 float-left text-left\" style=\"padding: 0 0 0 5px;\"><p>" + channel.id + "</p></div><div class=\"float-left text-left\"><p>" + namemod + "</p></div></div><div class=\"sensor-body\">" + basemod + temperaturemod + humiditymod + pressuremod + "</div></div></a></div></td>" + nrow;

//           return output;
//   }
