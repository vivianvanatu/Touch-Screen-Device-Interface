/* Author and copyright notice
 @version    2.0.2
 @package    XpertVal64 Interface
 @author     Vivian Vanatu <vivian.vanatu@lives-international.com>
 @copyright  2022 Medisol SRL
 @license    This copy is for demo purposes only. Do not copy, change or use the code with other purpose than demostrating XpertVal64 usage
*/
addCSSInHead();

function addCSSInHead() {
       const link1 = document.createElement('link');
       link1.href = 'css/bootstrap.min.css';
       link1.rel = 'stylesheet';

       document.getElementsByTagName('head')[0].appendChild(link1);

       const link2 = document.createElement('link');
       link2.href = 'fa/css/font-awesome.min.css';
       link2.rel = 'stylesheet';

       document.getElementsByTagName('head')[0].appendChild(link2);

       const link3 = document.createElement('link');
       link3.href = 'css/style.css';
       link3.rel = 'stylesheet';

       document.getElementsByTagName('head')[0].appendChild(link3);

       const link4 = document.createElement('link');
       link4.href = 'css/custom.css';
       link4.rel = 'stylesheet';

       document.getElementsByTagName('head')[0].appendChild(link4);
      
}