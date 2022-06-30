/* Author and copyright notice
 @version    2.0.2
 @package    XpertVal64 Interface
 @author     Vivian Vanatu <vivian.vanatu@lives-international.com>
 @copyright  2022 Medisol SRL
 @license    This copy is for demo purposes only. Do not copy, change or use the code with other purpose than demostrating XpertVal64 usage
*/
function redirectPage(page) {
  window.location.replace(page);
}

function showDateTime() {
       let today = new Date();
       let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
       if(today.getSeconds() < 10) {
              seconds = "0" + today.getSeconds();
       } else {
              seconds = today.getSeconds();
       }
       let time = today.getHours() + ":" + today.getMinutes() + ":" + seconds;
       let dateTime = date + ' ' + time;
       let output = '<h5 style="float:right;">' + dateTime + '</h5>'; 
       document.getElementById("currentDateTime").innerHTML = output;
}


let language = "en_gb";
let language_en_gb = 
              {
                     reports_page_title:'Reports', 
                     reports_reports_side_menu: 'Reports Side Menu',
                     reports_delete_single_report_message:'Are you sure you want to delete the report?',
                     reports_delete_multiple_reports_message_1:'Are you sure you want to delete',
                     reports_delete_multiple_reports_message_2:' reports?', 
                     reports_archive_single_report_message:'Are you sure you want to archive the report?',
                     reports_archive_multiple_reports_message_1:'Are you sure you want to archive',
                     reports_archive_multiple_reports_message_2:' reports?',
                     reports_new_report:'New Report',
                     reports_edit_report:'Edit Report',
                     reports_delete_report:'Delete Report',
                     reports_archive_report:'Archive Report',
                     reports_view_report:'View Report',
                     reports_configure:'Configure',
                     reports_studies:'Studies',
                     reports_table_column_id:'Id',
                     reports_table_column_edit:'',
                     reports_table_column_name:'Name',
                     reports_table_column_descr:'Description',
                     reports_table_column_generated:'Generated',
                     reports_table_column_start:'Start Date',
                     reports_table_column_stop:'Stop Date',
                     reports_table_column_start_stop_date:'Start - Stop Date',
                     reports_table_column_sensors:'Sensors',
                     reports_table_column_createdby:'Created by',
                     studies_page_title:'Studies',
                     studies_studies_side_menu:'Studies Side Menu', 
                     studies_delete_single_study_message:'Are you sure you want to delete the study?',
                     studies_delete_multiple_studies_message_1:'Are you sure you want to delete',
                     studies_delete_multiple_studies_message_2:' studies?', 
                     studies_archive_single_study_message:'Are you sure you want to archive the study?',
                     studies_archive_multiple_studies_message_1:'Are you sure you want to archive',
                     studies_archive_multiple_studies_message_2:' studies?',
                     studies_new_study:'New Study',
                     studies_edit_study:'Edit Study',
                     studies_delete_study:'Delete Study',
                     studies_archive_study:'Archive Study',
                     studies_view_study:'View Study',
                     studies_configure:'Configure',
                     studies_templates:'Templates',
                     studies_table_column_id:'#',
                     studies_table_column_edit:'',
                     studies_table_column_name:'Title',
                     studies_table_column_descr:'Description',                     
                     studies_table_column_start:'Start',
                     studies_table_column_stop:'Stop',
                     studies_table_column_start_stop_date:'Start - Stop Date',
                     studies_table_column_alerts:'Alerts',
                     studies_table_column_createdby:'Created by',
                     studies_table_value_yes:'Yes',
                     studies_table_value_no:'No',
                     new_study_new_study: 'New study',
                     new_study_page_title: 'New study',
                     new_study_side_menu: 'New Study Side Menu',
                     new_study_from_template: 'From Template',
                     new_study_label_from_template: 'From Template',
                     new_study_label_from_template_set: 'Set',
                     new_study_label_study_title: 'Study Title',
                     new_study_label_start_time: 'Start Time',
                     new_study_label_end_time: 'End Time',
                     new_study_label_channels: 'Channels',
                     new_study_label_created_by: 'Created by (select)',
                     new_study_label_send_notifications: 'Send notifications?',
                     new_study_label_send_notifications_select: 'Select...',
                     new_study_label_send_notifications_yes: 'Yes',
                     new_study_label_send_notifications_no: 'No',
                     new_study_from_template_save: 'Save',
                     new_study_from_template_cancel: 'Cancel',
                     new_study_from_old_test: 'From An Old Test',
                     new_study_configure_now: 'Configure Now',
                     new_study_label_study_from_test_title:'Study From Test title',
                     new_study_from_test_label_start_time:'Start Time',
                     new_study_from_test_label_end_time:'End Time',
                     new_study_from_test_label_channels:'Channels',
                     new_study_from_test_label_created_by:'Created by (select)',
                     new_study_from_test_label_send_notifications:'Send Notifications?',
                     new_study_from_test_label_send_notifications_select:'Select...',
                     new_study_from_test_label_send_notifications_yes:'Yes',
                     new_study_from_test_label_send_notifications_no:'No',
                     new_study_from_test_save: 'Save',
                     new_study_from_test_cancel: 'Cancel',

                     new_study_label_configure_now_title: 'Study Title',
                     new_study_label_configure_now_start_time:'Start Time',
                     new_study_label_configure_now_end_time:'End Time',
                     new_study_label_configure_now_channels:'Channels',
                     new_study_label_configure_now_channels_select:'Select the channels you want to use:',
                     new_study_label_configure_now_created_by:'Created by (select)',
                     new_study_label_configure_now_send_notifications:'Send Notifications?',
                     new_study_label_configure_now_send_notifications_select:'Select...',
                     new_study_label_configure_now_send_notifications_yes:'Yes',
                     new_study_label_configure_now_send_notifications_no:'No',
                     new_study_label_configure_now_save: 'Save',
                     new_study_label_configure_now_cancel: 'Cancel',
                     new_study_label_configure_now_next:'Next',
                     new_study_label_configure_now_back:'Back',

                     templates_page_title:'Templates', 
                     templates_templates_side_menu: 'Templates Side Menu',
                     templates_delete_single_template_message:'Are you sure you want to delete the template?',
                     templates_delete_multiple_templates_message_1:'Are you sure you want to delete',
                     templates_delete_multiple_templates_message_2:' templates?', 
                     templates_archive_single_template_message:'Are you sure you want to archive the template?',
                     templates_archive_multiple_templates_message_1:'Are you sure you want to archive',
                     templates_archive_multiple_templates_message_2:' templates?',
                     templates_new_template:'New Template',
                     templates_edit_template:'Edit Template',
                     templates_delete_template:'Delete Template',
                     templates_archive_template:'Archive Template',
                     templates_view_template:'View Template',
                     templates_configure:'Configure',
                     templates_studies:'Studies',
                     templates_table_column_id:'#',
                     templates_table_column_edit:'',
                     templates_table_column_name:'Title',
                     templates_table_column_descr:'Description',                     
                     templates_table_column_start:'Start',
                     templates_table_column_stop:'Stop',
                     templates_table_column_start_stop_date:'Start - Stop Date',
                     templates_table_column_alerts:'Alerts',
                     templates_table_column_createdby:'Created by',
                     templates_table_value_yes:'Yes',
                     templates_table_value_no:'No',
                     profiles_profiles_side_menu:'Profiles Side Menu',
                     profiles_list_cards_profiles: 'List / Cards profiles',
                     profiles_profiles: 'Profiles',
                     profiles_new_profile: 'New Profile',
                     profiles_edit_profile: 'Edit Profile',
                     profiles_delete_profile: 'Delete Profile',
                     profiles_archive_profile: 'Archive Profile',
                     profiles_table_column_id: '#',
                     profiles_table_column_edit: '',
                     profiles_table_column_name: 'Name',
                     profiles_table_column_pos: 'Position',
                     profiles_table_column_phone: 'Phone',
                     profiles_table_column_email: 'Email',
                     profile_profile_side_menu: 'Profile Side Menu',
                     profile_edit_profile: 'Edit Profile',
                     profile_close_profile: 'Close',
                     profile_table_position: 'Position',
                     profile_table_email: 'Email',
                     profile_table_phone: 'Phone',
                     profile_table_permissions: 'Permissions',

                     notifications_page_title:'Notifications',
                     notifications_ack_notification:'Acknowledge',
                     notifications_studies:'Studies',
                     notifications_table_column_id:'#',
                     notifications_table_column_edit:'',
                     notifications_table_column_name:'Title',
                     notifications_table_column_descr:'Description',                     
                     notifications_table_column_date_time:'Date & Time',
                     notifications_table_column_value:'Value',
                     notifications_table_column_channels:'Channels',
                     notifications_table_column_studyid:'Study ID',
                     notifications_table_column_event:'Event',
                     notifications_table_column_ack:'Acknowledge',
                     notifications_table_column_event_outofrange:'out of range',
                     notifications_table_column_event_sensorremoved:'sensor removed',

                     dashboard_page_title:'Dashboard',
                     overview_page_title:'Overview',
                     channels_page_title:'Channels',
                     profiles_page_title:'Profiles',
                     settings_page_title:'Settings',                
                     help_page_title:'Help',

                     pagination_previous:'Previous',
                     pagination_next:'Next',
                     pagination_firstpage:'First',
                     pagination_lastpage:'Last',
              };

let channelslist = [
              {id:1, name:'Temperature 1', temperature:37.45, ttype:1, tmax:41.195, tmin:33.705, aqint:'00:02:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00'},
              {id:2, name:'Temperature 2', temperature:4.53, ttype:1, tmax:5.52, tmin:3.55, humidity:53.84, htype:2, hmax:55.99, hmin:51.54, aqint:'00:02:00', start:'07/07/2021-09:00:01', stop:'09/07/2021-19:15:01'},
              {id:3, name:'Temperature 3', temperature:4.39, ttype:1, tmax:6.24, tmin:1.21, humidity:55.19, htype:2, hmax:55.69, hmin:53.24, aqint:'00:02:00', start:'07/07/2021-09:00:02', stop:'09/07/2021-19:15:02'},
              {id:4, name:'Temperature 4', temperature:4.65, ttype:1, tmax:5.98, tmin:3.06, humidity:53.84, htype:2, hmax:54.27, hmin:51.78, aqint:'00:02:00', start:'07/07/2021-09:00:03', stop:'09/07/2021-19:15:03'},
              {id:5, name:'Temperature 5', temperature:4.53, ttype:1, tmax:5.59, tmin:3.26, humidity:53.61, htype:2, hmax:55.2183, hmin:52.0017, aqint:'00:02:00', start:'07/07/2021-09:00:04', stop:'09/07/2021-19:15:04'},
              {id:6, name:'Temperature 6', temperature:3.99, ttype:1, tmax:4.1097, tmin:3.8703, humidity:56.33, htype:2, hmax:58.0199, hmin:54.6401, aqint:'00:02:00', start:'07/07/2021-09:00:05', stop:'09/07/2021-19:15:05'},
              {id:7, name:'Temperature 7', temperature:4.27, ttype:1, tmax:4.3981, tmin:4.1419, humidity:56.32, htype:2, hmax:58.0096, hmin:54.6304, aqint:'00:02:00', start:'07/07/2021-09:00:06', stop:'09/07/2021-19:15:06'},
              {id:8, name:'Temperature 8', temperature:4.55, ttype:1, tmax:4.6865, tmin:4.4135, humidity:56.06, htype:2, hmax:57.7418, hmin:54.3782, aqint:'00:02:00', start:'07/07/2021-09:00:07', stop:'09/07/2021-19:15:07'},
              {id:9, name:'Temperature 9', temperature:4.81, ttype:1, tmax:4.9543, tmin:4.6657, humidity:55.71, htype:2, hmax:57.3813, hmin:54.0387, aqint:'00:02:00', start:'07/07/2021-09:00:08', stop:'09/07/2021-19:15:08'},
              {id:10, name:'Temperature 10', temperature:5.06, ttype:1, tmax:5.2118, tmin:4.9082, humidity:55.36, htype:2, hmax:57.0208, hmin:53.6992, aqint:'00:02:00', start:'07/07/2021-09:00:09', stop:'09/07/2021-19:15:09'},
              {id:11, name:'Temperature 11', temperature:5.27, ttype:1, tmax:5.4281, tmin:5.1119, humidity:54.98, htype:2, hmax:56.6294, hmin:53.3306, aqint:'00:02:00', start:'07/07/2021-09:00:10', stop:'09/07/2021-19:15:10'},
              {id:12, name:'Temperature 12', temperature:5.5, ttype:1, tmax:5.665, tmin:5.335, humidity:54.65, htype:2, hmax:56.2895, hmin:53.0105, aqint:'00:02:00', start:'07/07/2021-09:00:11', stop:'09/07/2021-19:15:11'},
              {id:13, name:'Temperature 13', temperature:5.09, ttype:1, tmax:5.2427, tmin:4.9373, humidity:53.71, htype:2, hmax:55.3213, hmin:52.0987, aqint:'00:02:00', start:'07/07/2021-09:00:12', stop:'09/07/2021-19:15:12'},
              {id:14, name:'Temperature 14', temperature:4.25, ttype:1, tmax:4.3775, tmin:4.1225, humidity:52.73, htype:2, hmax:54.3119, hmin:51.1481, aqint:'00:02:00', start:'07/07/2021-09:00:13', stop:'09/07/2021-19:15:13'},
              {id:15, name:'Temperature 15', temperature:6.27, ttype:1, tmax:6.4581, tmin:6.0819, humidity:54.22, htype:2, hmax:55.8466, hmin:52.5934, aqint:'00:02:00', start:'07/07/2021-09:00:13', stop:'09/07/2021-19:15:13'},
              {id:16, name:'Temperature 16', temperature:49.52, ttype:3, tmax:51.0056, tmin:48.0344, pressure:0.9794, ptype:3, pmax:1.008782, pmin:0.950018, aqint:'00:02:00', start:'07/07/2021-09:00:14', stop:'09/07/2021-19:15:14'},
              {id:17, name:'Temperature 17', temperature:49.79, ttype:3, tmax:51.2837, tmin:48.2963, pressure:0.9729, ptype:3, pmax:1.002087, pmin:0.943713, aqint:'00:02:00', start:'07/07/2021-09:00:15', stop:'09/07/2021-19:15:15'},
              {id:18, name:'Temperature 18', temperature:50.05, ttype:3, tmax:51.5515, tmin:48.5485, pressure:0.9729, ptype:3, pmax:1.002087, pmin:0.943713, aqint:'00:02:00', start:'07/07/2021-09:00:16', stop:'09/07/2021-19:15:16'},
              {id:19, name:'Temperature 19', temperature:50.31, ttype:3, tmax:51.8193, tmin:48.8007, pressure:0.9727, ptype:3, pmax:1.001881, pmin:0.943519, aqint:'00:02:00', start:'07/07/2021-09:00:17', stop:'09/07/2021-19:15:17'},
              {id:20, name:'Temperature 20', temperature:50.59, ttype:3, tmax:52.1077, tmin:49.0723, pressure:0.9723, ptype:3, pmax:1.001469, pmin:0.943131, aqint:'00:02:00', start:'07/07/2021-09:00:18', stop:'09/07/2021-19:15:18'},
              {id:21, name:'Temperature 21', temperature:50.86, ttype:3, tmax:52.3858, tmin:49.3342, pressure:0.9725, ptype:3, pmax:1.001675, pmin:0.943325, aqint:'00:02:00', start:'07/07/2021-09:00:19', stop:'09/07/2021-19:15:19'},
              {id:22, name:'Temperature 22', temperature:67.09, ttype:3, tmax:69.1027, tmin:65.0773, pressure:1.2154, ptype:4, pmax:1.251862, pmin:1.178938, aqint:'00:02:00', start:'07/07/2021-09:00:20', stop:'09/07/2021-19:15:20'},
              {id:23, name:'Temperature 23', temperature:67.43, ttype:3, tmax:69.4529, tmin:65.4071, pressure:1.2215, ptype:5, pmax:1.258145, pmin:1.184855, aqint:'00:02:00', start:'07/07/2021-09:00:21', stop:'09/07/2021-19:15:21'},
              {id:24, name:'Temperature 24', temperature:67.79, ttype:3, tmax:69.8237, tmin:65.7563, pressure:1.2246, ptype:6, pmax:1.261338, pmin:1.187862, aqint:'00:02:00', start:'07/07/2021-09:00:22', stop:'09/07/2021-19:15:22'},
              {id:25, name:'Temperature 25', temperature:68.16, ttype:3, tmax:70.2048, tmin:66.1152, pressure:1.2289, ptype:7, pmax:1.265767, pmin:1.192033, aqint:'00:02:00', start:'07/07/2021-09:00:23', stop:'09/07/2021-19:15:23'},
              {id:26, name:'Temperature 26', temperature:68.55, ttype:3, tmax:70.6065, tmin:66.4935, pressure:1.2288, ptype:8, pmax:1.265664, pmin:1.191936, aqint:'00:02:00', start:'07/07/2021-09:00:24', stop:'09/07/2021-19:15:24'},
              {id:27, name:'Temperature 27', temperature:69.14, ttype:3, tmax:71.2142, tmin:67.0658, pressure:1.2273, ptype:9, pmax:1.264119, pmin:1.190481, aqint:'00:02:00', start:'07/07/2021-09:00:25', stop:'09/07/2021-19:15:25'},
              {id:28, name:'Temperature 28', temperature:35.92, ttype:1, tmax:36.9976, tmin:34.8424, aqint:'00:02:00', start:'07/07/2021-09:00:26', stop:'09/07/2021-19:15:26'},
              {id:29, name:'Temperature 29', temperature:35.94, ttype:1, tmax:37.0182, tmin:34.8618, aqint:'00:02:00', start:'07/07/2021-09:00:27', stop:'09/07/2021-19:15:27'},
              {id:30, name:'Temperature 30', temperature:35.93, ttype:1, tmax:37.0079, tmin:34.8521, aqint:'00:02:00', start:'07/07/2021-09:00:28', stop:'09/07/2021-19:15:28'},
              {id:31, name:'Temperature 31', temperature:35.95, ttype:1, tmax:37.0285, tmin:34.8715, aqint:'00:02:00', start:'07/07/2021-09:00:29', stop:'09/07/2021-19:15:29'},
              {id:32, name:'Temperature 32', temperature:35.96, ttype:1, tmax:37.0388, tmin:34.8812, aqint:'00:02:00', start:'07/07/2021-09:00:30', stop:'09/07/2021-19:15:30'},
              {id:33, name:'Temperature 33', temperature:35.97, ttype:1, tmax:37.0491, tmin:34.8909, aqint:'00:02:00', start:'07/07/2021-09:00:31', stop:'09/07/2021-19:15:31'},
              {id:34, name:'Temperature 34', temperature:35.98, ttype:1, tmax:37.0594, tmin:34.9006, aqint:'00:02:00', start:'07/07/2021-09:00:32', stop:'09/07/2021-19:15:32'},
              {id:35, name:'Temperature 35', temperature:35.99, ttype:1, tmax:37.0697, tmin:34.9103, aqint:'00:02:00', start:'07/07/2021-09:00:33', stop:'09/07/2021-19:15:33'},
              {id:36, name:'Temperature 36', temperature:36, ttype:1, tmax:37.08, tmin:34.92, aqint:'00:02:00', start:'07/07/2021-09:00:34', stop:'09/07/2021-19:15:34'},
              {id:37, name:'Temperature 37', temperature:36.02, ttype:1, tmax:37.1006, tmin:34.939, aqint:'00:02:00', start:'07/07/2021-09:00:35', stop:'09/07/2021-19:15:35'},
              {id:38, name:'Temperature 38', temperature:36.04, ttype:1, tmax:37.1212, tmin:34.9588, aqint:'00:02:00', start:'07/07/2021-09:00:36', stop:'09/07/2021-19:15:36'},
              {id:39, name:'Temperature 39', temperature:36.05, ttype:1, tmax:37.1315, tmin:34.9685, aqint:'00:02:00', start:'07/07/2021-09:00:37', stop:'09/07/2021-19:15:37'},
              {id:40, name:'Temperature 40', temperature:36.05, ttype:1, tmax:37.1315, tmin:34.9685, aqint:'00:02:00', start:'07/07/2021-09:00:38', stop:'09/07/2021-19:15:38'},
              {id:41, name:'Temperature 41', temperature:36.05, ttype:1, tmax:37.1315, tmin:34.9685, aqint:'00:02:00', start:'07/07/2021-09:00:39', stop:'09/07/2021-19:15:39'},
              {id:42, name:'Temperature 42', temperature:36.07, ttype:1, tmax:37.1521, tmin:34.9879, aqint:'00:02:00', start:'07/07/2021-09:00:40', stop:'09/07/2021-19:15:40'},
              {id:43, name:'Temperature 43', temperature:36.07, ttype:1, tmax:37.1521, tmin:34.9879, aqint:'00:02:00', start:'07/07/2021-09:00:41', stop:'09/07/2021-19:15:41'},
              {id:44, name:'Temperature 44', temperature:36.06, ttype:1, tmax:37.1418, tmin:34.9782, aqint:'00:02:00', start:'07/07/2021-09:00:42', stop:'09/07/2021-19:15:42'},
              {id:45, name:'Temperature 45', temperature:36.07, ttype:1, tmax:37.1521, tmin:34.9879, aqint:'00:02:00', start:'07/07/2021-09:00:43', stop:'09/07/2021-19:15:43'},
              {id:46, name:'Temperature 46', temperature:36.08, ttype:1, tmax:37.1624, tmin:34.9976, aqint:'00:02:00', start:'07/07/2021-09:00:44', stop:'09/07/2021-19:15:44'},
              {id:47, name:'Temperature 47', temperature:36.09, ttype:1, tmax:37.1727, tmin:35.0073, aqint:'00:02:00', start:'07/07/2021-09:00:45', stop:'09/07/2021-19:15:45'},
              {id:48, name:'Temperature 48', temperature:36.12, ttype:1, tmax:37.2036, tmin:35.0364, aqint:'00:02:00', start:'07/07/2021-09:00:46', stop:'09/07/2021-19:15:46'},
              {id:49, name:'Temperature 49', temperature:36.13, ttype:1, tmax:37.2139, tmin:35.0461, aqint:'00:02:00', start:'07/07/2021-09:00:47', stop:'09/07/2021-19:15:47'},
              {id:50, name:'Temperature 50', temperature:36.11, ttype:1, tmax:37.1933, tmin:35.0267, aqint:'00:02:00', start:'07/07/2021-09:00:48', stop:'09/07/2021-19:15:48'},
              {id:51, name:'Temperature 51', temperature:36.14, ttype:1, tmax:37.2242, tmin:35.0558, aqint:'00:02:00', start:'07/07/2021-09:00:49', stop:'09/07/2021-19:15:49'},
              {id:52, name:'Temperature 52', temperature:36.14, ttype:1, tmax:37.2242, tmin:35.0558, aqint:'00:02:00', start:'07/07/2021-09:00:50', stop:'09/07/2021-19:15:50'},
              {id:53, name:'Temperature 53', temperature:1.93, ttype:1, tmax:1.9879, tmin:1.8721, aqint:'00:02:00', start:'07/07/2021-09:00:51', stop:'09/07/2021-19:15:51'},
              {id:54, name:'Temperature 54', temperature:1.94, ttype:1, tmax:1.9982, tmin:1.8818, aqint:'00:02:00', start:'07/07/2021-09:00:52', stop:'09/07/2021-19:15:52'},
              {id:55, name:'Temperature 55', temperature:1.93, ttype:1, tmax:1.9879, tmin:1.8721, aqint:'00:02:00', start:'07/07/2021-09:00:53', stop:'09/07/2021-19:15:53'},
              {id:56, name:'Temperature 56', temperature:1.94, ttype:1, tmax:1.9982, tmin:1.8818, aqint:'00:02:00', start:'07/07/2021-09:00:54', stop:'09/07/2021-19:15:54'},
              {id:57, name:'Temperature 57', temperature:1.94, ttype:1, tmax:1.9982, tmin:1.8818, aqint:'00:02:00', start:'07/07/2021-09:00:55', stop:'09/07/2021-19:15:55'},
              {id:58, name:'Temperature 58', temperature:1.94, ttype:1, tmax:1.9982, tmin:1.8818, aqint:'00:02:00', start:'07/07/2021-09:00:56', stop:'09/07/2021-19:15:56'},
              {id:59, name:'Temperature 59', temperature:1.95, ttype:1, tmax:2.0085, tmin:1.8915, aqint:'00:02:00', start:'07/07/2021-09:00:57', stop:'09/07/2021-19:15:57'},
              {id:60, name:'Temperature 60', temperature:1.95, ttype:1, tmax:2.0085, tmin:1.8915, aqint:'00:02:00', start:'07/07/2021-09:00:58', stop:'09/07/2021-19:15:58'},
              {id:61, name:'Temperature 61', temperature:1.95, ttype:1, tmax:2.0085, tmin:1.8915, aqint:'00:02:00', start:'07/07/2021-09:00:59', stop:'09/07/2021-19:15:59'},
              {id:62, name:'Temperature 62', temperature:1.95, ttype:1, tmax:2.0085, tmin:1.8915, aqint:'00:02:00', start:'07/07/2021-09:00:60', stop:'09/07/2021-19:15:60'},
              {id:63},
              {id:64}
          ];
let reportslist = [
              {id:1, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 8},
              {id:2, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 8},
              {id:3, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:4, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 7},
              {id:5, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:6, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:7, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.OFF', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 6},
              {id:8, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.OFF', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:9, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:10, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 2},
              {id:11, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.OFF', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:12, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:13, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 2},
              {id:14, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:15, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 2},
              {id:16, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:17, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.OFF', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:18, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 3},
              {id:19, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:20, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:21, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 4},
              {id:22, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:23, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:24, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:25, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:26, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:27, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 12},
              {id:28, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:29, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:30, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:31, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 11},
              {id:32, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 9},
              {id:33, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:34, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:35, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:36, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 8},
              {id:37, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:38, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:39, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 7},
              {id:40, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:41, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:42, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:43, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 6},
              {id:44, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:45, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:46, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:47, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 4},
              {id:48, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:49, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:50, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:51, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:52, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 3},
              {id:53, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:54, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:55, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:56, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 1},
              {id:57, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:58, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:59, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:60, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:61, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 7},
              {id:62, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:63, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:64, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 5},
              {id:65, name:'EN285 Autoclave Validation', description:'Autoclave Validation cycle for EN285 autoclave #1334456', action:'Func.ON', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], createdby: 3}
          ];
let report1data = 
          [
              {id:1, name:'EN285 Autoclave Validation', generated:'09/07/2021-19:15:00', start:'07/07/2021-09:00:00', stop:'09/07/2021-19:15:00', sensors: [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 
              data: [
                {sensor: 10, time: '07/07/2021-09:00:00', value: 24.5},
                {sensor: 11, time: '07/07/2021-09:00:00', value: 24.7},
                {sensor: 12, time: '07/07/2021-09:00:00', value: 24.6},
                {sensor: 13, time: '07/07/2021-09:00:00', value: 24.9},
                {sensor: 14, time: '07/07/2021-09:00:00', value: 25.0},
                {sensor: 15, time: '07/07/2021-09:00:00', value: 25.0},
                {sensor: 16, time: '07/07/2021-09:00:00', value: 25.1},
                {sensor: 17, time: '07/07/2021-09:00:00', value: 25.0},
                {sensor: 18, time: '07/07/2021-09:00:00', value: 25.2},
                {sensor: 19, time: '07/07/2021-09:00:00', value: 24.8},
                {sensor: 20, time: '07/07/2021-09:00:00', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:00:00', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:00:00', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:00:00', value: 24.5},
                {sensor: 24, time: '07/07/2021-09:00:00', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:00:00', value: 24.7},
                {sensor: 26, time: '07/07/2021-09:00:00', value: 24.8},
                {sensor: 27, time: '07/07/2021-09:00:00', value: 24.8},
                {sensor: 28, time: '07/07/2021-09:00:00', value: 24.6},
                {sensor: 29, time: '07/07/2021-09:00:00', value: 25.1},
                {sensor: 30, time: '07/07/2021-09:00:00', value: 25.0},

                {sensor: 10, time: '07/07/2021-09:00:30', value: 25.0},
                {sensor: 11, time: '07/07/2021-09:00:30', value: 24.7},
                {sensor: 12, time: '07/07/2021-09:00:30', value: 24.6},
                {sensor: 13, time: '07/07/2021-09:00:30', value: 24.5},
                {sensor: 14, time: '07/07/2021-09:00:30', value: 24.6},
                {sensor: 15, time: '07/07/2021-09:00:30', value: 24.7},
                {sensor: 16, time: '07/07/2021-09:00:30', value: 24.8},
                {sensor: 17, time: '07/07/2021-09:00:30', value: 24.8},
                {sensor: 18, time: '07/07/2021-09:00:30', value: 24.6},
                {sensor: 19, time: '07/07/2021-09:00:30', value: 25.1},
                {sensor: 20, time: '07/07/2021-09:00:30', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:00:30', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:00:30', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:00:30', value: 24.9},
                {sensor: 24, time: '07/07/2021-09:00:30', value: 25.0},
                {sensor: 25, time: '07/07/2021-09:00:30', value: 25.0},
                {sensor: 26, time: '07/07/2021-09:00:30', value: 25.1},
                {sensor: 27, time: '07/07/2021-09:00:30', value: 25.0},
                {sensor: 28, time: '07/07/2021-09:00:30', value: 25.2},
                {sensor: 29, time: '07/07/2021-09:00:30', value: 24.8},
                {sensor: 30, time: '07/07/2021-09:00:30', value: 24.5},

                {sensor: 10, time: '07/07/2021-09:01:00', value: 25.5},
                {sensor: 11, time: '07/07/2021-09:01:00', value: 25.7},
                {sensor: 12, time: '07/07/2021-09:01:00', value: 25.6},
                {sensor: 13, time: '07/07/2021-09:01:00', value: 25.9},
                {sensor: 14, time: '07/07/2021-09:01:00', value: 25.0},
                {sensor: 15, time: '07/07/2021-09:01:00', value: 25.0},
                {sensor: 16, time: '07/07/2021-09:01:00', value: 25.1},
                {sensor: 17, time: '07/07/2021-09:01:00', value: 25.0},
                {sensor: 18, time: '07/07/2021-09:01:00', value: 25.2},
                {sensor: 19, time: '07/07/2021-09:01:00', value: 24.8},
                {sensor: 20, time: '07/07/2021-09:01:00', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:01:00', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:01:00', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:01:00', value: 24.7},
                {sensor: 24, time: '07/07/2021-09:01:00', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:01:00', value: 24.8},
                {sensor: 26, time: '07/07/2021-09:01:00', value: 25.0},
                {sensor: 27, time: '07/07/2021-09:01:00', value: 25.0},
                {sensor: 28, time: '07/07/2021-09:01:00', value: 24.8},
                {sensor: 29, time: '07/07/2021-09:01:00', value: 25.2},
                {sensor: 30, time: '07/07/2021-09:01:00', value: 25.1},

                {sensor: 10, time: '07/07/2021-09:01:30', value: 25.5},
                {sensor: 11, time: '07/07/2021-09:01:30', value: 25.7},
                {sensor: 12, time: '07/07/2021-09:01:30', value: 25.6},
                {sensor: 13, time: '07/07/2021-09:01:30', value: 25.9},
                {sensor: 14, time: '07/07/2021-09:01:30', value: 25.0},
                {sensor: 15, time: '07/07/2021-09:01:30', value: 25.0},
                {sensor: 16, time: '07/07/2021-09:01:30', value: 25.1},
                {sensor: 17, time: '07/07/2021-09:01:30', value: 25.0},
                {sensor: 18, time: '07/07/2021-09:01:30', value: 25.2},
                {sensor: 19, time: '07/07/2021-09:01:30', value: 24.8},
                {sensor: 20, time: '07/07/2021-09:01:30', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:01:30', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:01:30', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:01:30', value: 24.7},
                {sensor: 24, time: '07/07/2021-09:01:30', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:01:30', value: 24.8},
                {sensor: 26, time: '07/07/2021-09:01:30', value: 25.0},
                {sensor: 27, time: '07/07/2021-09:01:30', value: 25.0},
                {sensor: 28, time: '07/07/2021-09:01:30', value: 24.8},
                {sensor: 29, time: '07/07/2021-09:01:30', value: 25.2},
                {sensor: 30, time: '07/07/2021-09:01:30', value: 25.1},

                {sensor: 10, time: '07/07/2021-09:02:00', value: 24.5},
                {sensor: 11, time: '07/07/2021-09:02:00', value: 24.7},
                {sensor: 12, time: '07/07/2021-09:02:00', value: 24.6},
                {sensor: 13, time: '07/07/2021-09:02:00', value: 24.9},
                {sensor: 14, time: '07/07/2021-09:02:00', value: 25.0},
                {sensor: 15, time: '07/07/2021-09:02:00', value: 25.0},
                {sensor: 16, time: '07/07/2021-09:02:00', value: 25.1},
                {sensor: 17, time: '07/07/2021-09:02:00', value: 25.0},
                {sensor: 18, time: '07/07/2021-09:02:00', value: 25.2},
                {sensor: 19, time: '07/07/2021-09:02:00', value: 24.8},
                {sensor: 20, time: '07/07/2021-09:02:00', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:02:00', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:02:00', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:02:00', value: 24.5},
                {sensor: 24, time: '07/07/2021-09:02:00', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:02:00', value: 24.7},
                {sensor: 26, time: '07/07/2021-09:02:00', value: 24.8},
                {sensor: 27, time: '07/07/2021-09:02:00', value: 24.8},
                {sensor: 28, time: '07/07/2021-09:02:00', value: 24.6},
                {sensor: 29, time: '07/07/2021-09:02:00', value: 25.1},
                {sensor: 30, time: '07/07/2021-09:02:00', value: 25.0},

                {sensor: 10, time: '07/07/2021-09:02:30', value: 24.5},
                {sensor: 11, time: '07/07/2021-09:02:30', value: 24.7},
                {sensor: 12, time: '07/07/2021-09:02:30', value: 24.6},
                {sensor: 13, time: '07/07/2021-09:02:30', value: 24.9},
                {sensor: 14, time: '07/07/2021-09:02:30', value: 25.0},
                {sensor: 15, time: '07/07/2021-09:02:30', value: 25.0},
                {sensor: 16, time: '07/07/2021-09:02:30', value: 25.1},
                {sensor: 17, time: '07/07/2021-09:02:30', value: 25.0},
                {sensor: 18, time: '07/07/2021-09:02:30', value: 25.2},
                {sensor: 19, time: '07/07/2021-09:02:30', value: 24.8},
                {sensor: 20, time: '07/07/2021-09:02:30', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:02:30', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:02:30', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:02:30', value: 24.5},
                {sensor: 24, time: '07/07/2021-09:02:30', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:02:30', value: 24.7},
                {sensor: 26, time: '07/07/2021-09:02:30', value: 24.8},
                {sensor: 27, time: '07/07/2021-09:02:30', value: 24.8},
                {sensor: 28, time: '07/07/2021-09:02:30', value: 24.6},
                {sensor: 29, time: '07/07/2021-09:02:30', value: 25.1},
                {sensor: 30, time: '07/07/2021-09:02:30', value: 25.0},

                {sensor: 10, time: '07/07/2021-09:03:00', value: 24.5},
                {sensor: 11, time: '07/07/2021-09:03:00', value: 24.7},
                {sensor: 12, time: '07/07/2021-09:03:00', value: 24.6},
                {sensor: 13, time: '07/07/2021-09:03:00', value: 24.9},
                {sensor: 14, time: '07/07/2021-09:03:00', value: 25.0},
                {sensor: 15, time: '07/07/2021-09:03:00', value: 25.0},
                {sensor: 16, time: '07/07/2021-09:03:00', value: 25.1},
                {sensor: 17, time: '07/07/2021-09:03:00', value: 25.0},
                {sensor: 18, time: '07/07/2021-09:03:00', value: 25.2},
                {sensor: 19, time: '07/07/2021-09:03:00', value: 24.8},
                {sensor: 20, time: '07/07/2021-09:03:00', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:03:00', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:03:00', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:03:00', value: 24.5},
                {sensor: 24, time: '07/07/2021-09:03:00', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:03:00', value: 24.7},
                {sensor: 26, time: '07/07/2021-09:03:00', value: 24.8},
                {sensor: 27, time: '07/07/2021-09:03:00', value: 24.8},
                {sensor: 28, time: '07/07/2021-09:03:00', value: 24.6},
                {sensor: 29, time: '07/07/2021-09:03:00', value: 25.1},
                {sensor: 30, time: '07/07/2021-09:03:00', value: 25.0},

                {sensor: 10, time: '07/07/2021-09:04:00', value: 24.5},
                {sensor: 11, time: '07/07/2021-09:04:00', value: 24.7},
                {sensor: 12, time: '07/07/2021-09:04:00', value: 24.6},
                {sensor: 13, time: '07/07/2021-09:04:00', value: 24.9},
                {sensor: 14, time: '07/07/2021-09:04:00', value: 25.0},
                {sensor: 15, time: '07/07/2021-09:04:00', value: 25.0},
                {sensor: 16, time: '07/07/2021-09:04:00', value: 25.1},
                {sensor: 17, time: '07/07/2021-09:04:00', value: 25.0},
                {sensor: 18, time: '07/07/2021-09:04:00', value: 25.2},
                {sensor: 19, time: '07/07/2021-09:04:00', value: 24.8},
                {sensor: 20, time: '07/07/2021-09:04:00', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:04:00', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:04:00', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:04:00', value: 24.5},
                {sensor: 24, time: '07/07/2021-09:04:00', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:04:00', value: 24.7},
                {sensor: 26, time: '07/07/2021-09:04:00', value: 24.8},
                {sensor: 27, time: '07/07/2021-09:04:00', value: 24.8},
                {sensor: 28, time: '07/07/2021-09:04:00', value: 24.6},
                {sensor: 29, time: '07/07/2021-09:04:00', value: 25.1},
                {sensor: 30, time: '07/07/2021-09:04:00', value: 25.0},

                {sensor: 10, time: '07/07/2021-09:05:00', value: 24.5},
                {sensor: 11, time: '07/07/2021-09:05:00', value: 24.7},
                {sensor: 12, time: '07/07/2021-09:05:00', value: 24.6},
                {sensor: 13, time: '07/07/2021-09:05:00', value: 24.9},
                {sensor: 14, time: '07/07/2021-09:05:00', value: 25.0},
                {sensor: 15, time: '07/07/2021-09:05:00', value: 25.0},
                {sensor: 16, time: '07/07/2021-09:05:00', value: 25.1},
                {sensor: 17, time: '07/07/2021-09:05:00', value: 25.0},
                {sensor: 18, time: '07/07/2021-09:05:00', value: 25.2},
                {sensor: 19, time: '07/07/2021-09:05:00', value: 24.8},
                {sensor: 20, time: '07/07/2021-09:05:00', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:05:00', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:05:00', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:05:00', value: 24.5},
                {sensor: 24, time: '07/07/2021-09:05:00', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:05:00', value: 24.7},
                {sensor: 26, time: '07/07/2021-09:05:00', value: 24.8},
                {sensor: 27, time: '07/07/2021-09:05:00', value: 24.8},
                {sensor: 28, time: '07/07/2021-09:05:00', value: 24.6},
                {sensor: 29, time: '07/07/2021-09:05:00', value: 25.1},
                {sensor: 30, time: '07/07/2021-09:05:00', value: 25.0},

                {sensor: 10, time: '07/07/2021-09:05:30', value: 24.5},
                {sensor: 11, time: '07/07/2021-09:05:30', value: 24.7},
                {sensor: 12, time: '07/07/2021-09:05:30', value: 24.6},
                {sensor: 13, time: '07/07/2021-09:05:30', value: 24.9},
                {sensor: 14, time: '07/07/2021-09:05:30', value: 25.0},
                {sensor: 15, time: '07/07/2021-09:05:30', value: 25.0},
                {sensor: 16, time: '07/07/2021-09:05:30', value: 25.1},
                {sensor: 17, time: '07/07/2021-09:05:30', value: 25.0},
                {sensor: 18, time: '07/07/2021-09:05:30', value: 25.2},
                {sensor: 19, time: '07/07/2021-09:05:30', value: 24.8},
                {sensor: 20, time: '07/07/2021-09:05:30', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:05:30', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:05:30', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:05:30', value: 24.5},
                {sensor: 24, time: '07/07/2021-09:05:30', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:05:30', value: 24.7},
                {sensor: 26, time: '07/07/2021-09:05:30', value: 24.8},
                {sensor: 27, time: '07/07/2021-09:05:30', value: 24.8},
                {sensor: 28, time: '07/07/2021-09:05:30', value: 24.6},
                {sensor: 29, time: '07/07/2021-09:05:30', value: 25.1},
                {sensor: 30, time: '07/07/2021-09:05:30', value: 25.0},

                {sensor: 10, time: '07/07/2021-09:06:00', value: 24.5},
                {sensor: 11, time: '07/07/2021-09:06:00', value: 24.7},
                {sensor: 12, time: '07/07/2021-09:06:00', value: 24.6},
                {sensor: 13, time: '07/07/2021-09:06:00', value: 24.9},
                {sensor: 14, time: '07/07/2021-09:06:00', value: 25.0},
                {sensor: 15, time: '07/07/2021-09:06:00', value: 25.0},
                {sensor: 16, time: '07/07/2021-09:06:00', value: 25.1},
                {sensor: 17, time: '07/07/2021-09:06:00', value: 25.0},
                {sensor: 18, time: '07/07/2021-09:06:00', value: 25.2},
                {sensor: 19, time: '07/07/2021-09:06:00', value: 24.8},
                {sensor: 20, time: '07/07/2021-09:06:00', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:06:00', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:06:00', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:06:00', value: 24.5},
                {sensor: 24, time: '07/07/2021-09:06:00', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:06:00', value: 24.7},
                {sensor: 26, time: '07/07/2021-09:06:00', value: 24.8},
                {sensor: 27, time: '07/07/2021-09:06:00', value: 24.8},
                {sensor: 28, time: '07/07/2021-09:06:00', value: 24.6},
                {sensor: 29, time: '07/07/2021-09:06:00', value: 25.1},
                {sensor: 30, time: '07/07/2021-09:06:00', value: 25.0},

                {sensor: 10, time: '07/07/2021-09:06:30', value: 24.5},
                {sensor: 11, time: '07/07/2021-09:06:30', value: 24.7},
                {sensor: 12, time: '07/07/2021-09:06:30', value: 24.6},
                {sensor: 13, time: '07/07/2021-09:06:30', value: 24.9},
                {sensor: 14, time: '07/07/2021-09:06:30', value: 25.0},
                {sensor: 15, time: '07/07/2021-09:06:30', value: 25.0},
                {sensor: 16, time: '07/07/2021-09:06:30', value: 25.1},
                {sensor: 17, time: '07/07/2021-09:06:30', value: 25.0},
                {sensor: 18, time: '07/07/2021-09:06:30', value: 25.2},
                {sensor: 19, time: '07/07/2021-09:06:30', value: 24.8},
                {sensor: 20, time: '07/07/2021-09:06:30', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:06:30', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:06:30', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:06:30', value: 24.5},
                {sensor: 24, time: '07/07/2021-09:06:30', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:06:30', value: 24.7},
                {sensor: 26, time: '07/07/2021-09:06:30', value: 24.8},
                {sensor: 27, time: '07/07/2021-09:06:30', value: 24.8},
                {sensor: 28, time: '07/07/2021-09:06:30', value: 24.6},
                {sensor: 29, time: '07/07/2021-09:06:30', value: 25.1},
                {sensor: 30, time: '07/07/2021-09:06:30', value: 25.0},

                {sensor: 10, time: '07/07/2021-09:07:00', value: 24.5},
                {sensor: 11, time: '07/07/2021-09:07:00', value: 24.7},
                {sensor: 12, time: '07/07/2021-09:07:00', value: 24.6},
                {sensor: 13, time: '07/07/2021-09:07:00', value: 24.9},
                {sensor: 14, time: '07/07/2021-09:07:00', value: 25.0},
                {sensor: 15, time: '07/07/2021-09:07:00', value: 25.0},
                {sensor: 16, time: '07/07/2021-09:07:00', value: 25.1},
                {sensor: 17, time: '07/07/2021-09:07:00', value: 25.0},
                {sensor: 18, time: '07/07/2021-09:07:00', value: 25.2},
                {sensor: 19, time: '07/07/2021-09:07:00', value: 24.8},
                {sensor: 20, time: '07/07/2021-09:07:00', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:07:00', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:07:00', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:07:00', value: 24.5},
                {sensor: 24, time: '07/07/2021-09:07:00', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:07:00', value: 24.7},
                {sensor: 26, time: '07/07/2021-09:07:00', value: 24.8},
                {sensor: 27, time: '07/07/2021-09:07:00', value: 24.8},
                {sensor: 28, time: '07/07/2021-09:07:00', value: 24.6},
                {sensor: 29, time: '07/07/2021-09:07:00', value: 25.1},
                {sensor: 30, time: '07/07/2021-09:07:00', value: 25.0},

                {sensor: 10, time: '07/07/2021-09:07:30', value: 24.5},
                {sensor: 11, time: '07/07/2021-09:07:30', value: 24.7},
                {sensor: 12, time: '07/07/2021-09:07:30', value: 24.6},
                {sensor: 13, time: '07/07/2021-09:07:30', value: 24.9},
                {sensor: 14, time: '07/07/2021-09:07:30', value: 25.0},
                {sensor: 15, time: '07/07/2021-09:07:30', value: 25.0},
                {sensor: 16, time: '07/07/2021-09:07:30', value: 25.1},
                {sensor: 17, time: '07/07/2021-09:07:30', value: 25.0},
                {sensor: 18, time: '07/07/2021-09:07:30', value: 25.2},
                {sensor: 19, time: '07/07/2021-09:07:30', value: 24.8},
                {sensor: 20, time: '07/07/2021-09:07:30', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:07:30', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:07:30', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:07:30', value: 24.5},
                {sensor: 24, time: '07/07/2021-09:07:30', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:07:30', value: 24.7},
                {sensor: 26, time: '07/07/2021-09:07:30', value: 24.8},
                {sensor: 27, time: '07/07/2021-09:07:30', value: 24.8},
                {sensor: 28, time: '07/07/2021-09:07:30', value: 24.6},
                {sensor: 29, time: '07/07/2021-09:07:30', value: 25.1},
                {sensor: 30, time: '07/07/2021-09:07:30', value: 25.0},

                {sensor: 10, time: '07/07/2021-09:08:00', value: 24.5},
                {sensor: 11, time: '07/07/2021-09:08:00', value: 24.7},
                {sensor: 12, time: '07/07/2021-09:08:00', value: 24.6},
                {sensor: 13, time: '07/07/2021-09:08:00', value: 24.9},
                {sensor: 14, time: '07/07/2021-09:08:00', value: 25.0},
                {sensor: 15, time: '07/07/2021-09:08:00', value: 25.0},
                {sensor: 16, time: '07/07/2021-09:08:00', value: 25.1},
                {sensor: 17, time: '07/07/2021-09:08:00', value: 25.0},
                {sensor: 18, time: '07/07/2021-09:08:00', value: 25.2},
                {sensor: 19, time: '07/07/2021-09:08:00', value: 24.8},
                {sensor: 20, time: '07/07/2021-09:08:00', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:08:00', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:08:00', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:08:00', value: 24.5},
                {sensor: 24, time: '07/07/2021-09:08:00', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:08:00', value: 24.7},
                {sensor: 26, time: '07/07/2021-09:08:00', value: 24.8},
                {sensor: 27, time: '07/07/2021-09:08:00', value: 24.8},
                {sensor: 28, time: '07/07/2021-09:08:00', value: 24.6},
                {sensor: 29, time: '07/07/2021-09:08:00', value: 25.1},
                {sensor: 30, time: '07/07/2021-09:08:00', value: 25.0},

                {sensor: 10, time: '07/07/2021-09:08:30', value: 24.5},
                {sensor: 11, time: '07/07/2021-09:08:30', value: 24.7},
                {sensor: 12, time: '07/07/2021-09:08:30', value: 24.6},
                {sensor: 13, time: '07/07/2021-09:08:30', value: 24.9},
                {sensor: 14, time: '07/07/2021-09:08:30', value: 25.0},
                {sensor: 15, time: '07/07/2021-09:08:30', value: 25.0},
                {sensor: 16, time: '07/07/2021-09:08:30', value: 25.1},
                {sensor: 17, time: '07/07/2021-09:08:30', value: 25.0},
                {sensor: 18, time: '07/07/2021-09:08:30', value: 25.2},
                {sensor: 19, time: '07/07/2021-09:08:30', value: 24.8},
                {sensor: 20, time: '07/07/2021-09:08:30', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:08:30', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:08:30', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:08:30', value: 24.5},
                {sensor: 24, time: '07/07/2021-09:08:30', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:08:30', value: 24.7},
                {sensor: 26, time: '07/07/2021-09:08:30', value: 24.8},
                {sensor: 27, time: '07/07/2021-09:08:30', value: 24.8},
                {sensor: 28, time: '07/07/2021-09:08:30', value: 24.6},
                {sensor: 29, time: '07/07/2021-09:08:30', value: 25.1},
                {sensor: 30, time: '07/07/2021-09:08:30', value: 25.0},

                {sensor: 10, time: '07/07/2021-09:09:00', value: 24.5},
                {sensor: 11, time: '07/07/2021-09:09:00', value: 24.7},
                {sensor: 12, time: '07/07/2021-09:09:00', value: 24.6},
                {sensor: 13, time: '07/07/2021-09:09:00', value: 24.9},
                {sensor: 14, time: '07/07/2021-09:09:00', value: 25.0},
                {sensor: 15, time: '07/07/2021-09:09:00', value: 25.0},
                {sensor: 16, time: '07/07/2021-09:09:00', value: 25.1},
                {sensor: 17, time: '07/07/2021-09:09:00', value: 25.0},
                {sensor: 18, time: '07/07/2021-09:09:00', value: 25.2},
                {sensor: 19, time: '07/07/2021-09:09:00', value: 24.8},
                {sensor: 20, time: '07/07/2021-09:09:00', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:09:00', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:09:00', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:09:00', value: 24.5},
                {sensor: 24, time: '07/07/2021-09:09:00', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:09:00', value: 24.7},
                {sensor: 26, time: '07/07/2021-09:09:00', value: 24.8},
                {sensor: 27, time: '07/07/2021-09:09:00', value: 24.8},
                {sensor: 28, time: '07/07/2021-09:09:00', value: 24.6},
                {sensor: 29, time: '07/07/2021-09:09:00', value: 25.1},
                {sensor: 30, time: '07/07/2021-09:09:00', value: 25.0},

                {sensor: 10, time: '07/07/2021-09:09:30', value: 24.5},
                {sensor: 11, time: '07/07/2021-09:09:30', value: 24.7},
                {sensor: 12, time: '07/07/2021-09:09:30', value: 24.6},
                {sensor: 13, time: '07/07/2021-09:09:30', value: 24.9},
                {sensor: 14, time: '07/07/2021-09:09:30', value: 25.0},
                {sensor: 15, time: '07/07/2021-09:09:30', value: 25.0},
                {sensor: 16, time: '07/07/2021-09:09:30', value: 25.1},
                {sensor: 17, time: '07/07/2021-09:09:30', value: 25.0},
                {sensor: 18, time: '07/07/2021-09:09:30', value: 25.2},
                {sensor: 19, time: '07/07/2021-09:09:30', value: 24.8},
                {sensor: 20, time: '07/07/2021-09:09:30', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:09:30', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:09:30', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:09:30', value: 24.5},
                {sensor: 24, time: '07/07/2021-09:09:30', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:09:30', value: 24.7},
                {sensor: 26, time: '07/07/2021-09:09:30', value: 24.8},
                {sensor: 27, time: '07/07/2021-09:09:30', value: 24.8},
                {sensor: 28, time: '07/07/2021-09:09:30', value: 24.6},
                {sensor: 29, time: '07/07/2021-09:09:30', value: 25.1},
                {sensor: 30, time: '07/07/2021-09:09:30', value: 25.0},

                {sensor: 10, time: '07/07/2021-09:10:00', value: 24.5},
                {sensor: 11, time: '07/07/2021-09:10:00', value: 24.7},
                {sensor: 12, time: '07/07/2021-09:10:00', value: 24.6},
                {sensor: 13, time: '07/07/2021-09:10:00', value: 24.9},
                {sensor: 14, time: '07/07/2021-09:10:00', value: 25.0},
                {sensor: 15, time: '07/07/2021-09:10:00', value: 25.0},
                {sensor: 16, time: '07/07/2021-09:10:00', value: 25.1},
                {sensor: 17, time: '07/07/2021-09:10:00', value: 25.0},
                {sensor: 18, time: '07/07/2021-09:10:00', value: 25.2},
                {sensor: 19, time: '07/07/2021-09:10:00', value: 24.8},
                {sensor: 20, time: '07/07/2021-09:10:00', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:10:00', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:10:00', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:10:00', value: 24.5},
                {sensor: 24, time: '07/07/2021-09:10:00', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:10:00', value: 24.7},
                {sensor: 26, time: '07/07/2021-09:10:00', value: 24.8},
                {sensor: 27, time: '07/07/2021-09:10:00', value: 24.8},
                {sensor: 28, time: '07/07/2021-09:10:00', value: 24.6},
                {sensor: 29, time: '07/07/2021-09:10:00', value: 25.1},
                {sensor: 30, time: '07/07/2021-09:10:00', value: 25.0},



                {sensor: 10, time: '07/07/2021-09:10:30', value: 65.0},
                {sensor: 11, time: '07/07/2021-09:10:30', value: 64.7},
                {sensor: 12, time: '07/07/2021-09:10:30', value: 64.6},
                {sensor: 13, time: '07/07/2021-09:10:30', value: 64.5},
                {sensor: 14, time: '07/07/2021-09:10:30', value: 64.6},
                {sensor: 15, time: '07/07/2021-09:10:30', value: 64.7},
                {sensor: 16, time: '07/07/2021-09:10:30', value: 64.8},
                {sensor: 17, time: '07/07/2021-09:10:30', value: 64.8},
                {sensor: 18, time: '07/07/2021-09:10:30', value: 64.6},
                {sensor: 19, time: '07/07/2021-09:10:30', value: 65.1},
                {sensor: 20, time: '07/07/2021-09:10:30', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:10:30', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:10:30', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:10:30', value: 64.9},
                {sensor: 24, time: '07/07/2021-09:10:30', value: 65.0},
                {sensor: 25, time: '07/07/2021-09:10:30', value: 65.0},
                {sensor: 26, time: '07/07/2021-09:10:30', value: 65.1},
                {sensor: 27, time: '07/07/2021-09:10:30', value: 65.0},
                {sensor: 28, time: '07/07/2021-09:10:30', value: 65.2},
                {sensor: 29, time: '07/07/2021-09:10:30', value: 64.8},
                {sensor: 30, time: '07/07/2021-09:10:30', value: 64.5},

                {sensor: 10, time: '07/07/2021-09:11:00', value: 65.5},
                {sensor: 11, time: '07/07/2021-09:11:00', value: 65.7},
                {sensor: 12, time: '07/07/2021-09:11:00', value: 65.6},
                {sensor: 13, time: '07/07/2021-09:11:00', value: 65.9},
                {sensor: 14, time: '07/07/2021-09:11:00', value: 65.0},
                {sensor: 15, time: '07/07/2021-09:11:00', value: 65.0},
                {sensor: 16, time: '07/07/2021-09:11:00', value: 65.1},
                {sensor: 17, time: '07/07/2021-09:11:00', value: 65.0},
                {sensor: 18, time: '07/07/2021-09:11:00', value: 65.2},
                {sensor: 19, time: '07/07/2021-09:11:00', value: 64.8},
                {sensor: 20, time: '07/07/2021-09:11:00', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:11:00', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:11:00', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:11:00', value: 64.7},
                {sensor: 24, time: '07/07/2021-09:11:00', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:11:00', value: 64.8},
                {sensor: 26, time: '07/07/2021-09:11:00', value: 65.0},
                {sensor: 27, time: '07/07/2021-09:11:00', value: 65.0},
                {sensor: 28, time: '07/07/2021-09:11:00', value: 64.8},
                {sensor: 29, time: '07/07/2021-09:11:00', value: 65.2},
                {sensor: 30, time: '07/07/2021-09:11:00', value: 65.1},

                {sensor: 10, time: '07/07/2021-09:11:30', value: 65.5},
                {sensor: 11, time: '07/07/2021-09:11:30', value: 65.7},
                {sensor: 12, time: '07/07/2021-09:11:30', value: 65.6},
                {sensor: 13, time: '07/07/2021-09:11:30', value: 65.9},
                {sensor: 14, time: '07/07/2021-09:11:30', value: 65.0},
                {sensor: 15, time: '07/07/2021-09:11:30', value: 65.0},
                {sensor: 16, time: '07/07/2021-09:11:30', value: 65.1},
                {sensor: 17, time: '07/07/2021-09:11:30', value: 65.0},
                {sensor: 18, time: '07/07/2021-09:11:30', value: 65.2},
                {sensor: 19, time: '07/07/2021-09:11:30', value: 64.8},
                {sensor: 20, time: '07/07/2021-09:11:30', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:11:30', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:11:30', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:11:30', value: 64.7},
                {sensor: 24, time: '07/07/2021-09:11:30', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:11:30', value: 64.8},
                {sensor: 26, time: '07/07/2021-09:11:30', value: 65.0},
                {sensor: 27, time: '07/07/2021-09:11:30', value: 65.0},
                {sensor: 28, time: '07/07/2021-09:11:30', value: 64.8},
                {sensor: 29, time: '07/07/2021-09:11:30', value: 65.2},
                {sensor: 30, time: '07/07/2021-09:11:30', value: 65.1},

                {sensor: 10, time: '07/07/2021-09:12:00', value: 64.5},
                {sensor: 11, time: '07/07/2021-09:12:00', value: 64.7},
                {sensor: 12, time: '07/07/2021-09:12:00', value: 64.6},
                {sensor: 13, time: '07/07/2021-09:12:00', value: 64.9},
                {sensor: 14, time: '07/07/2021-09:12:00', value: 65.0},
                {sensor: 15, time: '07/07/2021-09:12:00', value: 65.0},
                {sensor: 16, time: '07/07/2021-09:12:00', value: 65.1},
                {sensor: 17, time: '07/07/2021-09:12:00', value: 65.0},
                {sensor: 18, time: '07/07/2021-09:12:00', value: 65.2},
                {sensor: 19, time: '07/07/2021-09:12:00', value: 64.8},
                {sensor: 20, time: '07/07/2021-09:12:00', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:12:00', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:12:00', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:12:00', value: 64.5},
                {sensor: 24, time: '07/07/2021-09:12:00', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:12:00', value: 64.7},
                {sensor: 26, time: '07/07/2021-09:12:00', value: 64.8},
                {sensor: 27, time: '07/07/2021-09:12:00', value: 64.8},
                {sensor: 28, time: '07/07/2021-09:12:00', value: 64.6},
                {sensor: 29, time: '07/07/2021-09:12:00', value: 65.1},
                {sensor: 30, time: '07/07/2021-09:12:00', value: 65.0},

                {sensor: 10, time: '07/07/2021-09:12:30', value: 64.5},
                {sensor: 11, time: '07/07/2021-09:12:30', value: 64.7},
                {sensor: 12, time: '07/07/2021-09:12:30', value: 64.6},
                {sensor: 13, time: '07/07/2021-09:12:30', value: 64.9},
                {sensor: 14, time: '07/07/2021-09:12:30', value: 65.0},
                {sensor: 15, time: '07/07/2021-09:12:30', value: 65.0},
                {sensor: 16, time: '07/07/2021-09:12:30', value: 65.1},
                {sensor: 17, time: '07/07/2021-09:12:30', value: 65.0},
                {sensor: 18, time: '07/07/2021-09:12:30', value: 65.2},
                {sensor: 19, time: '07/07/2021-09:12:30', value: 64.8},
                {sensor: 20, time: '07/07/2021-09:12:30', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:12:30', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:12:30', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:12:30', value: 64.5},
                {sensor: 24, time: '07/07/2021-09:12:30', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:12:30', value: 64.7},
                {sensor: 26, time: '07/07/2021-09:12:30', value: 64.8},
                {sensor: 27, time: '07/07/2021-09:12:30', value: 64.8},
                {sensor: 28, time: '07/07/2021-09:12:30', value: 64.6},
                {sensor: 29, time: '07/07/2021-09:12:30', value: 65.1},
                {sensor: 30, time: '07/07/2021-09:12:30', value: 65.0},

                {sensor: 10, time: '07/07/2021-09:13:00', value: 64.5},
                {sensor: 11, time: '07/07/2021-09:13:00', value: 64.7},
                {sensor: 12, time: '07/07/2021-09:13:00', value: 64.6},
                {sensor: 13, time: '07/07/2021-09:13:00', value: 64.9},
                {sensor: 14, time: '07/07/2021-09:13:00', value: 65.0},
                {sensor: 15, time: '07/07/2021-09:13:00', value: 65.0},
                {sensor: 16, time: '07/07/2021-09:13:00', value: 65.1},
                {sensor: 17, time: '07/07/2021-09:13:00', value: 65.0},
                {sensor: 18, time: '07/07/2021-09:13:00', value: 65.2},
                {sensor: 19, time: '07/07/2021-09:13:00', value: 64.8},
                {sensor: 20, time: '07/07/2021-09:13:00', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:13:00', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:13:00', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:13:00', value: 64.5},
                {sensor: 24, time: '07/07/2021-09:13:00', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:13:00', value: 64.7},
                {sensor: 26, time: '07/07/2021-09:13:00', value: 64.8},
                {sensor: 27, time: '07/07/2021-09:13:00', value: 64.8},
                {sensor: 28, time: '07/07/2021-09:13:00', value: 64.6},
                {sensor: 29, time: '07/07/2021-09:13:00', value: 65.1},
                {sensor: 30, time: '07/07/2021-09:13:00', value: 65.0},

                {sensor: 10, time: '07/07/2021-09:14:00', value: 64.5},
                {sensor: 11, time: '07/07/2021-09:14:00', value: 64.7},
                {sensor: 12, time: '07/07/2021-09:14:00', value: 64.6},
                {sensor: 13, time: '07/07/2021-09:14:00', value: 64.9},
                {sensor: 14, time: '07/07/2021-09:14:00', value: 65.0},
                {sensor: 15, time: '07/07/2021-09:14:00', value: 65.0},
                {sensor: 16, time: '07/07/2021-09:14:00', value: 65.1},
                {sensor: 17, time: '07/07/2021-09:14:00', value: 65.0},
                {sensor: 18, time: '07/07/2021-09:14:00', value: 65.2},
                {sensor: 19, time: '07/07/2021-09:14:00', value: 64.8},
                {sensor: 20, time: '07/07/2021-09:14:00', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:14:00', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:14:00', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:14:00', value: 64.5},
                {sensor: 24, time: '07/07/2021-09:14:00', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:14:00', value: 64.7},
                {sensor: 26, time: '07/07/2021-09:14:00', value: 64.8},
                {sensor: 27, time: '07/07/2021-09:14:00', value: 64.8},
                {sensor: 28, time: '07/07/2021-09:14:00', value: 64.6},
                {sensor: 29, time: '07/07/2021-09:14:00', value: 65.1},
                {sensor: 30, time: '07/07/2021-09:14:00', value: 65.0},

                {sensor: 10, time: '07/07/2021-09:15:00', value: 64.5},
                {sensor: 11, time: '07/07/2021-09:15:00', value: 64.7},
                {sensor: 12, time: '07/07/2021-09:15:00', value: 64.6},
                {sensor: 13, time: '07/07/2021-09:15:00', value: 64.9},
                {sensor: 14, time: '07/07/2021-09:15:00', value: 65.0},
                {sensor: 15, time: '07/07/2021-09:15:00', value: 65.0},
                {sensor: 16, time: '07/07/2021-09:15:00', value: 65.1},
                {sensor: 17, time: '07/07/2021-09:15:00', value: 65.0},
                {sensor: 18, time: '07/07/2021-09:15:00', value: 65.2},
                {sensor: 19, time: '07/07/2021-09:15:00', value: 64.8},
                {sensor: 20, time: '07/07/2021-09:15:00', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:15:00', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:15:00', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:15:00', value: 64.5},
                {sensor: 24, time: '07/07/2021-09:15:00', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:15:00', value: 64.7},
                {sensor: 26, time: '07/07/2021-09:15:00', value: 64.8},
                {sensor: 27, time: '07/07/2021-09:15:00', value: 64.8},
                {sensor: 28, time: '07/07/2021-09:15:00', value: 64.6},
                {sensor: 29, time: '07/07/2021-09:15:00', value: 65.1},
                {sensor: 30, time: '07/07/2021-09:15:00', value: 65.0},

                {sensor: 10, time: '07/07/2021-09:15:30', value: 64.5},
                {sensor: 11, time: '07/07/2021-09:15:30', value: 64.7},
                {sensor: 12, time: '07/07/2021-09:15:30', value: 64.6},
                {sensor: 13, time: '07/07/2021-09:15:30', value: 64.9},
                {sensor: 14, time: '07/07/2021-09:15:30', value: 65.0},
                {sensor: 15, time: '07/07/2021-09:15:30', value: 65.0},
                {sensor: 16, time: '07/07/2021-09:15:30', value: 65.1},
                {sensor: 17, time: '07/07/2021-09:15:30', value: 65.0},
                {sensor: 18, time: '07/07/2021-09:15:30', value: 65.2},
                {sensor: 19, time: '07/07/2021-09:15:30', value: 64.8},
                {sensor: 20, time: '07/07/2021-09:15:30', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:15:30', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:15:30', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:15:30', value: 64.5},
                {sensor: 24, time: '07/07/2021-09:15:30', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:15:30', value: 64.7},
                {sensor: 26, time: '07/07/2021-09:15:30', value: 64.8},
                {sensor: 27, time: '07/07/2021-09:15:30', value: 64.8},
                {sensor: 28, time: '07/07/2021-09:15:30', value: 64.6},
                {sensor: 29, time: '07/07/2021-09:15:30', value: 65.1},
                {sensor: 30, time: '07/07/2021-09:15:30', value: 65.0},

                {sensor: 10, time: '07/07/2021-09:16:00', value: 64.5},
                {sensor: 11, time: '07/07/2021-09:16:00', value: 64.7},
                {sensor: 12, time: '07/07/2021-09:16:00', value: 64.6},
                {sensor: 13, time: '07/07/2021-09:16:00', value: 64.9},
                {sensor: 14, time: '07/07/2021-09:16:00', value: 65.0},
                {sensor: 15, time: '07/07/2021-09:16:00', value: 65.0},
                {sensor: 16, time: '07/07/2021-09:16:00', value: 65.1},
                {sensor: 17, time: '07/07/2021-09:16:00', value: 65.0},
                {sensor: 18, time: '07/07/2021-09:16:00', value: 65.2},
                {sensor: 19, time: '07/07/2021-09:16:00', value: 64.8},
                {sensor: 20, time: '07/07/2021-09:16:00', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:16:00', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:16:00', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:16:00', value: 64.5},
                {sensor: 24, time: '07/07/2021-09:16:00', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:16:00', value: 64.7},
                {sensor: 26, time: '07/07/2021-09:16:00', value: 64.8},
                {sensor: 27, time: '07/07/2021-09:16:00', value: 64.8},
                {sensor: 28, time: '07/07/2021-09:16:00', value: 64.6},
                {sensor: 29, time: '07/07/2021-09:16:00', value: 65.1},
                {sensor: 30, time: '07/07/2021-09:16:00', value: 65.0},

                {sensor: 10, time: '07/07/2021-09:16:30', value: 64.5},
                {sensor: 11, time: '07/07/2021-09:16:30', value: 64.7},
                {sensor: 12, time: '07/07/2021-09:16:30', value: 64.6},
                {sensor: 13, time: '07/07/2021-09:16:30', value: 64.9},
                {sensor: 14, time: '07/07/2021-09:16:30', value: 65.0},
                {sensor: 15, time: '07/07/2021-09:16:30', value: 65.0},
                {sensor: 16, time: '07/07/2021-09:16:30', value: 65.1},
                {sensor: 17, time: '07/07/2021-09:16:30', value: 65.0},
                {sensor: 18, time: '07/07/2021-09:16:30', value: 65.2},
                {sensor: 19, time: '07/07/2021-09:16:30', value: 64.8},
                {sensor: 20, time: '07/07/2021-09:16:30', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:16:30', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:16:30', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:16:30', value: 64.5},
                {sensor: 24, time: '07/07/2021-09:16:30', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:16:30', value: 64.7},
                {sensor: 26, time: '07/07/2021-09:16:30', value: 64.8},
                {sensor: 27, time: '07/07/2021-09:16:30', value: 64.8},
                {sensor: 28, time: '07/07/2021-09:16:30', value: 64.6},
                {sensor: 29, time: '07/07/2021-09:16:30', value: 65.1},
                {sensor: 30, time: '07/07/2021-09:16:30', value: 65.0},

                {sensor: 10, time: '07/07/2021-09:17:00', value: 64.5},
                {sensor: 11, time: '07/07/2021-09:17:00', value: 64.7},
                {sensor: 12, time: '07/07/2021-09:17:00', value: 64.6},
                {sensor: 13, time: '07/07/2021-09:17:00', value: 64.9},
                {sensor: 14, time: '07/07/2021-09:17:00', value: 65.0},
                {sensor: 15, time: '07/07/2021-09:17:00', value: 65.0},
                {sensor: 16, time: '07/07/2021-09:17:00', value: 65.1},
                {sensor: 17, time: '07/07/2021-09:17:00', value: 65.0},
                {sensor: 18, time: '07/07/2021-09:17:00', value: 65.2},
                {sensor: 19, time: '07/07/2021-09:17:00', value: 64.8},
                {sensor: 20, time: '07/07/2021-09:17:00', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:17:00', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:17:00', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:17:00', value: 64.5},
                {sensor: 24, time: '07/07/2021-09:17:00', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:17:00', value: 64.7},
                {sensor: 26, time: '07/07/2021-09:17:00', value: 64.8},
                {sensor: 27, time: '07/07/2021-09:17:00', value: 64.8},
                {sensor: 28, time: '07/07/2021-09:17:00', value: 64.6},
                {sensor: 29, time: '07/07/2021-09:17:00', value: 65.1},
                {sensor: 30, time: '07/07/2021-09:17:00', value: 65.0},

                {sensor: 10, time: '07/07/2021-09:17:30', value: 64.5},
                {sensor: 11, time: '07/07/2021-09:17:30', value: 64.7},
                {sensor: 12, time: '07/07/2021-09:17:30', value: 64.6},
                {sensor: 13, time: '07/07/2021-09:17:30', value: 64.9},
                {sensor: 14, time: '07/07/2021-09:17:30', value: 65.0},
                {sensor: 15, time: '07/07/2021-09:17:30', value: 65.0},
                {sensor: 16, time: '07/07/2021-09:17:30', value: 65.1},
                {sensor: 17, time: '07/07/2021-09:17:30', value: 65.0},
                {sensor: 18, time: '07/07/2021-09:17:30', value: 65.2},
                {sensor: 19, time: '07/07/2021-09:17:30', value: 64.8},
                {sensor: 20, time: '07/07/2021-09:17:30', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:17:30', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:17:30', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:17:30', value: 64.5},
                {sensor: 24, time: '07/07/2021-09:17:30', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:17:30', value: 64.7},
                {sensor: 26, time: '07/07/2021-09:17:30', value: 64.8},
                {sensor: 27, time: '07/07/2021-09:17:30', value: 64.8},
                {sensor: 28, time: '07/07/2021-09:17:30', value: 64.6},
                {sensor: 29, time: '07/07/2021-09:17:30', value: 65.1},
                {sensor: 30, time: '07/07/2021-09:17:30', value: 65.0},

                {sensor: 10, time: '07/07/2021-09:18:00', value: 64.5},
                {sensor: 11, time: '07/07/2021-09:18:00', value: 64.7},
                {sensor: 12, time: '07/07/2021-09:18:00', value: 64.6},
                {sensor: 13, time: '07/07/2021-09:18:00', value: 64.9},
                {sensor: 14, time: '07/07/2021-09:18:00', value: 65.0},
                {sensor: 15, time: '07/07/2021-09:18:00', value: 65.0},
                {sensor: 16, time: '07/07/2021-09:18:00', value: 65.1},
                {sensor: 17, time: '07/07/2021-09:18:00', value: 65.0},
                {sensor: 18, time: '07/07/2021-09:18:00', value: 65.2},
                {sensor: 19, time: '07/07/2021-09:18:00', value: 64.8},
                {sensor: 20, time: '07/07/2021-09:18:00', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:18:00', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:18:00', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:18:00', value: 64.5},
                {sensor: 24, time: '07/07/2021-09:18:00', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:18:00', value: 64.7},
                {sensor: 26, time: '07/07/2021-09:18:00', value: 64.8},
                {sensor: 27, time: '07/07/2021-09:18:00', value: 64.8},
                {sensor: 28, time: '07/07/2021-09:18:00', value: 64.6},
                {sensor: 29, time: '07/07/2021-09:18:00', value: 65.1},
                {sensor: 30, time: '07/07/2021-09:18:00', value: 65.0},

                {sensor: 10, time: '07/07/2021-09:18:30', value: 64.5},
                {sensor: 11, time: '07/07/2021-09:18:30', value: 64.7},
                {sensor: 12, time: '07/07/2021-09:18:30', value: 64.6},
                {sensor: 13, time: '07/07/2021-09:18:30', value: 64.9},
                {sensor: 14, time: '07/07/2021-09:18:30', value: 65.0},
                {sensor: 15, time: '07/07/2021-09:18:30', value: 65.0},
                {sensor: 16, time: '07/07/2021-09:18:30', value: 65.1},
                {sensor: 17, time: '07/07/2021-09:18:30', value: 65.0},
                {sensor: 18, time: '07/07/2021-09:18:30', value: 65.2},
                {sensor: 19, time: '07/07/2021-09:18:30', value: 64.8},
                {sensor: 20, time: '07/07/2021-09:18:30', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:18:30', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:18:30', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:18:30', value: 64.5},
                {sensor: 24, time: '07/07/2021-09:18:30', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:18:30', value: 64.7},
                {sensor: 26, time: '07/07/2021-09:18:30', value: 64.8},
                {sensor: 27, time: '07/07/2021-09:18:30', value: 64.8},
                {sensor: 28, time: '07/07/2021-09:18:30', value: 64.6},
                {sensor: 29, time: '07/07/2021-09:18:30', value: 65.1},
                {sensor: 30, time: '07/07/2021-09:18:30', value: 65.0},

                {sensor: 10, time: '07/07/2021-09:19:00', value: 64.5},
                {sensor: 11, time: '07/07/2021-09:19:00', value: 64.7},
                {sensor: 12, time: '07/07/2021-09:19:00', value: 64.6},
                {sensor: 13, time: '07/07/2021-09:19:00', value: 64.9},
                {sensor: 14, time: '07/07/2021-09:19:00', value: 65.0},
                {sensor: 15, time: '07/07/2021-09:19:00', value: 65.0},
                {sensor: 16, time: '07/07/2021-09:19:00', value: 65.1},
                {sensor: 17, time: '07/07/2021-09:19:00', value: 65.0},
                {sensor: 18, time: '07/07/2021-09:19:00', value: 65.2},
                {sensor: 19, time: '07/07/2021-09:19:00', value: 64.8},
                {sensor: 20, time: '07/07/2021-09:19:00', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:19:00', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:19:00', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:19:00', value: 64.5},
                {sensor: 24, time: '07/07/2021-09:19:00', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:19:00', value: 64.7},
                {sensor: 26, time: '07/07/2021-09:19:00', value: 64.8},
                {sensor: 27, time: '07/07/2021-09:19:00', value: 64.8},
                {sensor: 28, time: '07/07/2021-09:19:00', value: 64.6},
                {sensor: 29, time: '07/07/2021-09:19:00', value: 65.1},
                {sensor: 30, time: '07/07/2021-09:19:00', value: 65.0},

                {sensor: 10, time: '07/07/2021-09:19:30', value: 64.5},
                {sensor: 11, time: '07/07/2021-09:19:30', value: 64.7},
                {sensor: 12, time: '07/07/2021-09:19:30', value: 64.6},
                {sensor: 13, time: '07/07/2021-09:19:30', value: 64.9},
                {sensor: 14, time: '07/07/2021-09:19:30', value: 65.0},
                {sensor: 15, time: '07/07/2021-09:19:30', value: 65.0},
                {sensor: 16, time: '07/07/2021-09:19:30', value: 65.1},
                {sensor: 17, time: '07/07/2021-09:19:30', value: 65.0},
                {sensor: 18, time: '07/07/2021-09:19:30', value: 65.2},
                {sensor: 19, time: '07/07/2021-09:19:30', value: 64.8},
                {sensor: 20, time: '07/07/2021-09:19:30', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:19:30', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:19:30', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:19:30', value: 64.5},
                {sensor: 24, time: '07/07/2021-09:19:30', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:19:30', value: 64.7},
                {sensor: 26, time: '07/07/2021-09:19:30', value: 64.8},
                {sensor: 27, time: '07/07/2021-09:19:30', value: 64.8},
                {sensor: 28, time: '07/07/2021-09:19:30', value: 64.6},
                {sensor: 29, time: '07/07/2021-09:19:30', value: 65.1},
                {sensor: 30, time: '07/07/2021-09:19:30', value: 65.0},

                {sensor: 10, time: '07/07/2021-09:20:00', value: 64.5},
                {sensor: 11, time: '07/07/2021-09:20:00', value: 64.7},
                {sensor: 12, time: '07/07/2021-09:20:00', value: 64.6},
                {sensor: 13, time: '07/07/2021-09:20:00', value: 64.9},
                {sensor: 14, time: '07/07/2021-09:20:00', value: 65.0},
                {sensor: 15, time: '07/07/2021-09:20:00', value: 65.0},
                {sensor: 16, time: '07/07/2021-09:20:00', value: 65.1},
                {sensor: 17, time: '07/07/2021-09:20:00', value: 65.0},
                {sensor: 18, time: '07/07/2021-09:20:00', value: 65.2},
                {sensor: 19, time: '07/07/2021-09:20:00', value: 64.8},
                {sensor: 20, time: '07/07/2021-09:20:00', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:20:00', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:20:00', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:20:00', value: 64.5},
                {sensor: 24, time: '07/07/2021-09:20:00', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:20:00', value: 64.7},
                {sensor: 26, time: '07/07/2021-09:20:00', value: 64.8},
                {sensor: 27, time: '07/07/2021-09:20:00', value: 64.8},
                {sensor: 28, time: '07/07/2021-09:20:00', value: 64.6},
                {sensor: 29, time: '07/07/2021-09:20:00', value: 65.1},
                {sensor: 30, time: '07/07/2021-09:20:00', value: 65.0},



                {sensor: 10, time: '07/07/2021-09:30:30', value: 125.2},
                {sensor: 11, time: '07/07/2021-09:30:30', value: 124.3},
                {sensor: 12, time: '07/07/2021-09:30:30', value: 124.7},
                {sensor: 13, time: '07/07/2021-09:30:30', value: 124.8},
                {sensor: 14, time: '07/07/2021-09:30:30', value: 124.7},
                {sensor: 15, time: '07/07/2021-09:30:30', value: 124.3},
                {sensor: 16, time: '07/07/2021-09:30:30', value: 124.2},
                {sensor: 17, time: '07/07/2021-09:30:30', value: 124.2},
                {sensor: 18, time: '07/07/2021-09:30:30', value: 124.7},
                {sensor: 19, time: '07/07/2021-09:30:30', value: 125.4},
                {sensor: 20, time: '07/07/2021-09:30:30', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:30:30', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:30:30', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:30:30', value: 124.9},
                {sensor: 24, time: '07/07/2021-09:30:30', value: 125.2},
                {sensor: 25, time: '07/07/2021-09:30:30', value: 125.2},
                {sensor: 26, time: '07/07/2021-09:30:30', value: 125.4},
                {sensor: 27, time: '07/07/2021-09:30:30', value: 125.2},
                {sensor: 28, time: '07/07/2021-09:30:30', value: 125.2},
                {sensor: 29, time: '07/07/2021-09:30:30', value: 124.2},
                {sensor: 30, time: '07/07/2021-09:30:30', value: 124.8},

                {sensor: 10, time: '07/07/2021-09:31:00', value: 125.5},
                {sensor: 11, time: '07/07/2021-09:31:00', value: 125.7},
                {sensor: 12, time: '07/07/2021-09:31:00', value: 125.6},
                {sensor: 13, time: '07/07/2021-09:31:00', value: 125.8},
                {sensor: 14, time: '07/07/2021-09:31:00', value: 125.2},
                {sensor: 15, time: '07/07/2021-09:31:00', value: 125.2},
                {sensor: 16, time: '07/07/2021-09:31:00', value: 125.4},
                {sensor: 17, time: '07/07/2021-09:31:00', value: 125.2},
                {sensor: 18, time: '07/07/2021-09:31:00', value: 125.2},
                {sensor: 19, time: '07/07/2021-09:31:00', value: 124.2},
                {sensor: 20, time: '07/07/2021-09:31:00', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:31:00', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:31:00', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:31:00', value: 124.3},
                {sensor: 24, time: '07/07/2021-09:31:00', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:31:00', value: 124.2},
                {sensor: 26, time: '07/07/2021-09:31:00', value: 125.2},
                {sensor: 27, time: '07/07/2021-09:31:00', value: 125.2},
                {sensor: 28, time: '07/07/2021-09:31:00', value: 124.2},
                {sensor: 29, time: '07/07/2021-09:31:00', value: 125.2},
                {sensor: 30, time: '07/07/2021-09:31:00', value: 125.4},

                {sensor: 10, time: '07/07/2021-09:31:30', value: 125.5},
                {sensor: 11, time: '07/07/2021-09:31:30', value: 125.7},
                {sensor: 12, time: '07/07/2021-09:31:30', value: 125.6},
                {sensor: 13, time: '07/07/2021-09:31:30', value: 125.8},
                {sensor: 14, time: '07/07/2021-09:31:30', value: 125.2},
                {sensor: 15, time: '07/07/2021-09:31:30', value: 125.2},
                {sensor: 16, time: '07/07/2021-09:31:30', value: 125.4},
                {sensor: 17, time: '07/07/2021-09:31:30', value: 125.2},
                {sensor: 18, time: '07/07/2021-09:31:30', value: 125.2},
                {sensor: 19, time: '07/07/2021-09:31:30', value: 124.2},
                {sensor: 20, time: '07/07/2021-09:31:30', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:31:30', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:31:30', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:31:30', value: 124.3},
                {sensor: 24, time: '07/07/2021-09:31:30', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:31:30', value: 124.2},
                {sensor: 26, time: '07/07/2021-09:31:30', value: 125.2},
                {sensor: 27, time: '07/07/2021-09:31:30', value: 125.2},
                {sensor: 28, time: '07/07/2021-09:31:30', value: 124.2},
                {sensor: 29, time: '07/07/2021-09:31:30', value: 125.2},
                {sensor: 30, time: '07/07/2021-09:31:30', value: 125.4},

                {sensor: 10, time: '07/07/2021-09:32:00', value: 124.8},
                {sensor: 11, time: '07/07/2021-09:32:00', value: 124.3},
                {sensor: 12, time: '07/07/2021-09:32:00', value: 124.7},
                {sensor: 13, time: '07/07/2021-09:32:00', value: 124.9},
                {sensor: 14, time: '07/07/2021-09:32:00', value: 125.2},
                {sensor: 15, time: '07/07/2021-09:32:00', value: 125.2},
                {sensor: 16, time: '07/07/2021-09:32:00', value: 125.4},
                {sensor: 17, time: '07/07/2021-09:32:00', value: 125.2},
                {sensor: 18, time: '07/07/2021-09:32:00', value: 125.2},
                {sensor: 19, time: '07/07/2021-09:32:00', value: 124.2},
                {sensor: 20, time: '07/07/2021-09:32:00', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:32:00', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:32:00', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:32:00', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:32:00', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:32:00', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:32:00', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:32:00', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:32:00', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:32:00', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:32:00', value: 125.2},

                {sensor: 10, time: '07/07/2021-09:32:30', value: 124.8},
                {sensor: 11, time: '07/07/2021-09:32:30', value: 124.3},
                {sensor: 12, time: '07/07/2021-09:32:30', value: 124.7},
                {sensor: 13, time: '07/07/2021-09:32:30', value: 124.9},
                {sensor: 14, time: '07/07/2021-09:32:30', value: 125.2},
                {sensor: 15, time: '07/07/2021-09:32:30', value: 125.2},
                {sensor: 16, time: '07/07/2021-09:32:30', value: 125.4},
                {sensor: 17, time: '07/07/2021-09:32:30', value: 125.2},
                {sensor: 18, time: '07/07/2021-09:32:30', value: 125.2},
                {sensor: 19, time: '07/07/2021-09:32:30', value: 124.2},
                {sensor: 20, time: '07/07/2021-09:32:30', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:32:30', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:32:30', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:32:30', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:32:30', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:32:30', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:32:30', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:32:30', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:32:30', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:32:30', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:32:30', value: 125.2},

                {sensor: 10, time: '07/07/2021-09:33:00', value: 124.8},
                {sensor: 11, time: '07/07/2021-09:33:00', value: 124.3},
                {sensor: 12, time: '07/07/2021-09:33:00', value: 124.7},
                {sensor: 13, time: '07/07/2021-09:33:00', value: 124.9},
                {sensor: 14, time: '07/07/2021-09:33:00', value: 125.2},
                {sensor: 15, time: '07/07/2021-09:33:00', value: 125.2},
                {sensor: 16, time: '07/07/2021-09:33:00', value: 125.4},
                {sensor: 17, time: '07/07/2021-09:33:00', value: 125.2},
                {sensor: 18, time: '07/07/2021-09:33:00', value: 125.2},
                {sensor: 19, time: '07/07/2021-09:33:00', value: 124.2},
                {sensor: 20, time: '07/07/2021-09:33:00', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:33:00', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:33:00', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:33:00', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:33:00', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:33:00', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:33:00', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:33:00', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:33:00', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:33:00', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:33:00', value: 125.2},

                {sensor: 10, time: '07/07/2021-09:33:30', value: 124.8},
                {sensor: 11, time: '07/07/2021-09:33:30', value: 124.3},
                {sensor: 12, time: '07/07/2021-09:33:30', value: 124.7},
                {sensor: 13, time: '07/07/2021-09:33:30', value: 124.9},
                {sensor: 14, time: '07/07/2021-09:33:30', value: 125.2},
                {sensor: 15, time: '07/07/2021-09:33:30', value: 125.2},
                {sensor: 16, time: '07/07/2021-09:33:30', value: 125.4},
                {sensor: 17, time: '07/07/2021-09:33:30', value: 125.2},
                {sensor: 18, time: '07/07/2021-09:33:30', value: 125.2},
                {sensor: 19, time: '07/07/2021-09:33:30', value: 124.2},
                {sensor: 20, time: '07/07/2021-09:33:30', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:33:30', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:33:30', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:33:30', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:33:30', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:33:30', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:33:30', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:33:30', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:33:30', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:33:30', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:33:30', value: 125.2},

                {sensor: 10, time: '07/07/2021-09:34:00', value: 124.8},
                {sensor: 11, time: '07/07/2021-09:34:00', value: 124.3},
                {sensor: 12, time: '07/07/2021-09:34:00', value: 124.7},
                {sensor: 13, time: '07/07/2021-09:34:00', value: 124.9},
                {sensor: 14, time: '07/07/2021-09:34:00', value: 125.2},
                {sensor: 15, time: '07/07/2021-09:34:00', value: 125.2},
                {sensor: 16, time: '07/07/2021-09:34:00', value: 125.4},
                {sensor: 17, time: '07/07/2021-09:34:00', value: 125.2},
                {sensor: 18, time: '07/07/2021-09:34:00', value: 125.2},
                {sensor: 19, time: '07/07/2021-09:34:00', value: 124.2},
                {sensor: 20, time: '07/07/2021-09:34:00', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:34:00', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:34:00', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:34:00', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:34:00', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:34:00', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:34:00', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:34:00', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:34:00', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:34:00', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:34:00', value: 125.2},

                {sensor: 10, time: '07/07/2021-09:34:30', value: 124.8},
                {sensor: 11, time: '07/07/2021-09:34:30', value: 124.3},
                {sensor: 12, time: '07/07/2021-09:34:30', value: 124.7},
                {sensor: 13, time: '07/07/2021-09:34:30', value: 124.9},
                {sensor: 14, time: '07/07/2021-09:34:30', value: 125.2},
                {sensor: 15, time: '07/07/2021-09:34:30', value: 125.2},
                {sensor: 16, time: '07/07/2021-09:34:30', value: 125.4},
                {sensor: 17, time: '07/07/2021-09:34:30', value: 125.2},
                {sensor: 18, time: '07/07/2021-09:34:30', value: 125.2},
                {sensor: 19, time: '07/07/2021-09:34:30', value: 124.2},
                {sensor: 20, time: '07/07/2021-09:34:30', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:34:30', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:34:30', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:34:30', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:34:30', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:34:30', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:34:30', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:34:30', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:34:30', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:34:30', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:34:30', value: 125.2},

                {sensor: 10, time: '07/07/2021-09:35:00', value: 124.8},
                {sensor: 11, time: '07/07/2021-09:35:00', value: 124.3},
                {sensor: 12, time: '07/07/2021-09:35:00', value: 124.7},
                {sensor: 13, time: '07/07/2021-09:35:00', value: 124.9},
                {sensor: 14, time: '07/07/2021-09:35:00', value: 125.2},
                {sensor: 15, time: '07/07/2021-09:35:00', value: 125.2},
                {sensor: 16, time: '07/07/2021-09:35:00', value: 125.4},
                {sensor: 17, time: '07/07/2021-09:35:00', value: 125.2},
                {sensor: 18, time: '07/07/2021-09:35:00', value: 125.2},
                {sensor: 19, time: '07/07/2021-09:35:00', value: 124.2},
                {sensor: 20, time: '07/07/2021-09:35:00', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:35:00', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:35:00', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:35:00', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:35:00', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:35:00', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:35:00', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:35:00', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:35:00', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:35:00', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:35:00', value: 125.2},

                {sensor: 10, time: '07/07/2021-09:35:30', value: 124.8},
                {sensor: 11, time: '07/07/2021-09:35:30', value: 124.3},
                {sensor: 12, time: '07/07/2021-09:35:30', value: 124.7},
                {sensor: 13, time: '07/07/2021-09:35:30', value: 124.9},
                {sensor: 14, time: '07/07/2021-09:35:30', value: 125.2},
                {sensor: 15, time: '07/07/2021-09:35:30', value: 125.2},
                {sensor: 16, time: '07/07/2021-09:35:30', value: 125.4},
                {sensor: 17, time: '07/07/2021-09:35:30', value: 125.2},
                {sensor: 18, time: '07/07/2021-09:35:30', value: 125.2},
                {sensor: 19, time: '07/07/2021-09:35:30', value: 124.2},
                {sensor: 20, time: '07/07/2021-09:35:30', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:35:30', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:35:30', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:35:30', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:35:30', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:35:30', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:35:30', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:35:30', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:35:30', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:35:30', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:35:30', value: 125.2},

                {sensor: 10, time: '07/07/2021-09:36:00', value: 124.8},
                {sensor: 11, time: '07/07/2021-09:36:00', value: 124.3},
                {sensor: 12, time: '07/07/2021-09:36:00', value: 124.7},
                {sensor: 13, time: '07/07/2021-09:36:00', value: 124.9},
                {sensor: 14, time: '07/07/2021-09:36:00', value: 125.2},
                {sensor: 15, time: '07/07/2021-09:36:00', value: 125.2},
                {sensor: 16, time: '07/07/2021-09:36:00', value: 125.4},
                {sensor: 17, time: '07/07/2021-09:36:00', value: 125.2},
                {sensor: 18, time: '07/07/2021-09:36:00', value: 125.2},
                {sensor: 19, time: '07/07/2021-09:36:00', value: 124.2},
                {sensor: 20, time: '07/07/2021-09:36:00', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:36:00', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:36:00', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:36:00', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:36:00', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:36:00', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:36:00', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:36:00', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:36:00', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:36:00', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:36:00', value: 125.2},

                {sensor: 10, time: '07/07/2021-09:36:30', value: 124.8},
                {sensor: 11, time: '07/07/2021-09:36:30', value: 124.3},
                {sensor: 12, time: '07/07/2021-09:36:30', value: 124.7},
                {sensor: 13, time: '07/07/2021-09:36:30', value: 124.9},
                {sensor: 14, time: '07/07/2021-09:36:30', value: 125.2},
                {sensor: 15, time: '07/07/2021-09:36:30', value: 125.2},
                {sensor: 16, time: '07/07/2021-09:36:30', value: 125.4},
                {sensor: 17, time: '07/07/2021-09:36:30', value: 125.2},
                {sensor: 18, time: '07/07/2021-09:36:30', value: 125.2},
                {sensor: 19, time: '07/07/2021-09:36:30', value: 124.2},
                {sensor: 20, time: '07/07/2021-09:36:30', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:36:30', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:36:30', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:36:30', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:36:30', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:36:30', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:36:30', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:36:30', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:36:30', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:36:30', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:36:30', value: 125.2},

                {sensor: 10, time: '07/07/2021-09:37:00', value: 124.8},
                {sensor: 11, time: '07/07/2021-09:37:00', value: 124.3},
                {sensor: 12, time: '07/07/2021-09:37:00', value: 124.7},
                {sensor: 13, time: '07/07/2021-09:37:00', value: 124.9},
                {sensor: 14, time: '07/07/2021-09:37:00', value: 125.2},
                {sensor: 15, time: '07/07/2021-09:37:00', value: 125.2},
                {sensor: 16, time: '07/07/2021-09:37:00', value: 125.4},
                {sensor: 17, time: '07/07/2021-09:37:00', value: 125.2},
                {sensor: 18, time: '07/07/2021-09:37:00', value: 125.2},
                {sensor: 19, time: '07/07/2021-09:37:00', value: 124.2},
                {sensor: 20, time: '07/07/2021-09:37:00', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:37:00', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:37:00', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:37:00', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:37:00', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:37:00', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:37:00', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:37:00', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:37:00', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:37:00', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:37:00', value: 125.2},

                {sensor: 10, time: '07/07/2021-09:37:30', value: 124.8},
                {sensor: 11, time: '07/07/2021-09:37:30', value: 124.3},
                {sensor: 12, time: '07/07/2021-09:37:30', value: 124.7},
                {sensor: 13, time: '07/07/2021-09:37:30', value: 124.9},
                {sensor: 14, time: '07/07/2021-09:37:30', value: 125.2},
                {sensor: 15, time: '07/07/2021-09:37:30', value: 125.2},
                {sensor: 16, time: '07/07/2021-09:37:30', value: 125.4},
                {sensor: 17, time: '07/07/2021-09:37:30', value: 125.2},
                {sensor: 18, time: '07/07/2021-09:37:30', value: 125.2},
                {sensor: 19, time: '07/07/2021-09:37:30', value: 124.2},
                {sensor: 20, time: '07/07/2021-09:37:30', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:37:30', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:37:30', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:37:30', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:37:30', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:37:30', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:37:30', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:37:30', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:37:30', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:37:30', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:37:30', value: 125.2},

                {sensor: 10, time: '07/07/2021-09:38:00', value: 124.8},
                {sensor: 11, time: '07/07/2021-09:38:00', value: 124.3},
                {sensor: 12, time: '07/07/2021-09:38:00', value: 124.7},
                {sensor: 13, time: '07/07/2021-09:38:00', value: 124.9},
                {sensor: 14, time: '07/07/2021-09:38:00', value: 125.2},
                {sensor: 15, time: '07/07/2021-09:38:00', value: 125.2},
                {sensor: 16, time: '07/07/2021-09:38:00', value: 125.4},
                {sensor: 17, time: '07/07/2021-09:38:00', value: 125.2},
                {sensor: 18, time: '07/07/2021-09:38:00', value: 125.2},
                {sensor: 19, time: '07/07/2021-09:38:00', value: 124.2},
                {sensor: 20, time: '07/07/2021-09:38:00', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:38:00', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:38:00', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:38:00', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:38:00', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:38:00', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:38:00', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:38:00', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:38:00', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:38:00', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:38:00', value: 125.2},

                {sensor: 10, time: '07/07/2021-09:38:30', value: 124.8},
                {sensor: 11, time: '07/07/2021-09:38:30', value: 124.3},
                {sensor: 12, time: '07/07/2021-09:38:30', value: 124.7},
                {sensor: 13, time: '07/07/2021-09:38:30', value: 124.9},
                {sensor: 14, time: '07/07/2021-09:38:30', value: 125.2},
                {sensor: 15, time: '07/07/2021-09:38:30', value: 125.2},
                {sensor: 16, time: '07/07/2021-09:38:30', value: 125.4},
                {sensor: 17, time: '07/07/2021-09:38:30', value: 125.2},
                {sensor: 18, time: '07/07/2021-09:38:30', value: 125.2},
                {sensor: 19, time: '07/07/2021-09:38:30', value: 124.2},
                {sensor: 20, time: '07/07/2021-09:38:30', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:38:30', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:38:30', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:38:30', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:38:30', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:38:30', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:38:30', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:38:30', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:38:30', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:38:30', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:38:30', value: 125.2},
                {sensor: 10, time: '07/07/2021-09:39:00', value: 124.8},
                {sensor: 11, time: '07/07/2021-09:39:00', value: 124.3},
                {sensor: 12, time: '07/07/2021-09:39:00', value: 124.7},
                {sensor: 13, time: '07/07/2021-09:39:00', value: 124.9},
                {sensor: 14, time: '07/07/2021-09:39:00', value: 125.2},
                {sensor: 15, time: '07/07/2021-09:39:00', value: 125.2},
                {sensor: 16, time: '07/07/2021-09:39:00', value: 125.4},
                {sensor: 17, time: '07/07/2021-09:39:00', value: 125.2},
                {sensor: 18, time: '07/07/2021-09:39:00', value: 125.2},
                {sensor: 19, time: '07/07/2021-09:39:00', value: 124.2},
                {sensor: 20, time: '07/07/2021-09:39:00', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:39:00', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:39:00', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:39:00', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:39:00', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:39:00', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:39:00', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:39:00', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:39:00', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:39:00', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:39:00', value: 125.2},
                {sensor: 10, time: '07/07/2021-09:39:30', value: 124.8},
                {sensor: 11, time: '07/07/2021-09:39:30', value: 124.3},
                {sensor: 12, time: '07/07/2021-09:39:30', value: 124.7},
                {sensor: 13, time: '07/07/2021-09:39:30', value: 124.9},
                {sensor: 14, time: '07/07/2021-09:39:30', value: 125.2},
                {sensor: 15, time: '07/07/2021-09:39:30', value: 125.2},
                {sensor: 16, time: '07/07/2021-09:39:30', value: 125.4},
                {sensor: 17, time: '07/07/2021-09:39:30', value: 125.2},
                {sensor: 18, time: '07/07/2021-09:39:30', value: 125.2},
                {sensor: 19, time: '07/07/2021-09:39:30', value: 124.2},
                {sensor: 20, time: '07/07/2021-09:39:30', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:39:30', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:39:30', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:39:30', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:39:30', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:39:30', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:39:30', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:39:30', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:39:30', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:39:30', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:39:30', value: 125.2},
                {sensor: 10, time: '07/07/2021-09:40:00', value: 124.8},
                {sensor: 11, time: '07/07/2021-09:40:00', value: 124.3},
                {sensor: 12, time: '07/07/2021-09:40:00', value: 124.7},
                {sensor: 13, time: '07/07/2021-09:40:00', value: 124.9},
                {sensor: 14, time: '07/07/2021-09:40:00', value: 125.2},
                {sensor: 15, time: '07/07/2021-09:40:00', value: 125.2},
                {sensor: 16, time: '07/07/2021-09:40:00', value: 125.4},
                {sensor: 17, time: '07/07/2021-09:40:00', value: 125.2},
                {sensor: 18, time: '07/07/2021-09:40:00', value: 125.2},
                {sensor: 19, time: '07/07/2021-09:40:00', value: 124.2},
                {sensor: 20, time: '07/07/2021-09:40:00', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:40:00', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:40:00', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:40:00', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:40:00', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:40:00', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:40:00', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:40:00', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:40:00', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:40:00', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:40:00', value: 125.2},
              ],
              createdby: 8},
          ];

let report2data = 
          [
              {id:2, name:'EN285 Autoclave Validation Type 2', generated:'15/08/2021-19:15:00', start:'12/08/2021-09:00:00', stop:'14/08/2021-19:15:00', sensors: [1,2,5,6,7,10,11,12,13,14,15,21,22,23,24,25,26,27,28,29,30], 
              data: [
                {sensor: 1, time: '07/07/2021-09:00:00', value: 24.5},
                {sensor: 2, time: '07/07/2021-09:00:00', value: 24.7},
                {sensor: 5, time: '07/07/2021-09:00:00', value: 24.6},
                {sensor: 6, time: '07/07/2021-09:00:00', value: 24.9},
                {sensor: 7, time: '07/07/2021-09:00:00', value: 25.0},
                {sensor: 10, time: '07/07/2021-09:00:00', value: 25.0},
                {sensor: 11, time: '07/07/2021-09:00:00', value: 25.1},
                {sensor: 12, time: '07/07/2021-09:00:00', value: 25.0},
                {sensor: 13, time: '07/07/2021-09:00:00', value: 25.2},
                {sensor: 14, time: '07/07/2021-09:00:00', value: 24.8},
                {sensor: 15, time: '07/07/2021-09:00:00', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:00:00', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:00:00', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:00:00', value: 24.5},
                {sensor: 24, time: '07/07/2021-09:00:00', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:00:00', value: 24.7},
                {sensor: 26, time: '07/07/2021-09:00:00', value: 24.8},
                {sensor: 27, time: '07/07/2021-09:00:00', value: 24.8},
                {sensor: 28, time: '07/07/2021-09:00:00', value: 24.6},
                {sensor: 29, time: '07/07/2021-09:00:00', value: 25.1},
                {sensor: 30, time: '07/07/2021-09:00:00', value: 25.0},

                {sensor: 1, time: '07/07/2021-09:00:30', value: 25.0},
                {sensor: 2, time: '07/07/2021-09:00:30', value: 24.7},
                {sensor: 5, time: '07/07/2021-09:00:30', value: 24.6},
                {sensor: 6, time: '07/07/2021-09:00:30', value: 24.5},
                {sensor: 7, time: '07/07/2021-09:00:30', value: 24.6},
                {sensor: 10, time: '07/07/2021-09:00:30', value: 24.7},
                {sensor: 11, time: '07/07/2021-09:00:30', value: 24.8},
                {sensor: 12, time: '07/07/2021-09:00:30', value: 24.8},
                {sensor: 13, time: '07/07/2021-09:00:30', value: 24.6},
                {sensor: 14, time: '07/07/2021-09:00:30', value: 25.1},
                {sensor: 15, time: '07/07/2021-09:00:30', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:00:30', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:00:30', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:00:30', value: 24.9},
                {sensor: 24, time: '07/07/2021-09:00:30', value: 25.0},
                {sensor: 25, time: '07/07/2021-09:00:30', value: 25.0},
                {sensor: 26, time: '07/07/2021-09:00:30', value: 25.1},
                {sensor: 27, time: '07/07/2021-09:00:30', value: 25.0},
                {sensor: 28, time: '07/07/2021-09:00:30', value: 25.2},
                {sensor: 29, time: '07/07/2021-09:00:30', value: 24.8},
                {sensor: 30, time: '07/07/2021-09:00:30', value: 24.5},

                {sensor: 1, time: '07/07/2021-09:01:00', value: 25.5},
                {sensor: 2, time: '07/07/2021-09:01:00', value: 25.7},
                {sensor: 5, time: '07/07/2021-09:01:00', value: 25.6},
                {sensor: 6, time: '07/07/2021-09:01:00', value: 25.9},
                {sensor: 7, time: '07/07/2021-09:01:00', value: 25.0},
                {sensor: 10, time: '07/07/2021-09:01:00', value: 25.0},
                {sensor: 11, time: '07/07/2021-09:01:00', value: 25.1},
                {sensor: 12, time: '07/07/2021-09:01:00', value: 25.0},
                {sensor: 13, time: '07/07/2021-09:01:00', value: 25.2},
                {sensor: 14, time: '07/07/2021-09:01:00', value: 24.8},
                {sensor: 15, time: '07/07/2021-09:01:00', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:01:00', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:01:00', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:01:00', value: 24.7},
                {sensor: 24, time: '07/07/2021-09:01:00', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:01:00', value: 24.8},
                {sensor: 26, time: '07/07/2021-09:01:00', value: 25.0},
                {sensor: 27, time: '07/07/2021-09:01:00', value: 25.0},
                {sensor: 28, time: '07/07/2021-09:01:00', value: 24.8},
                {sensor: 29, time: '07/07/2021-09:01:00', value: 25.2},
                {sensor: 30, time: '07/07/2021-09:01:00', value: 25.1},

                {sensor: 1, time: '07/07/2021-09:01:30', value: 25.5},
                {sensor: 2, time: '07/07/2021-09:01:30', value: 25.7},
                {sensor: 5, time: '07/07/2021-09:01:30', value: 25.6},
                {sensor: 6, time: '07/07/2021-09:01:30', value: 25.9},
                {sensor: 7, time: '07/07/2021-09:01:30', value: 25.0},
                {sensor: 10, time: '07/07/2021-09:01:30', value: 25.0},
                {sensor: 11, time: '07/07/2021-09:01:30', value: 25.1},
                {sensor: 12, time: '07/07/2021-09:01:30', value: 25.0},
                {sensor: 13, time: '07/07/2021-09:01:30', value: 25.2},
                {sensor: 14, time: '07/07/2021-09:01:30', value: 24.8},
                {sensor: 15, time: '07/07/2021-09:01:30', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:01:30', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:01:30', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:01:30', value: 24.7},
                {sensor: 24, time: '07/07/2021-09:01:30', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:01:30', value: 24.8},
                {sensor: 26, time: '07/07/2021-09:01:30', value: 25.0},
                {sensor: 27, time: '07/07/2021-09:01:30', value: 25.0},
                {sensor: 28, time: '07/07/2021-09:01:30', value: 24.8},
                {sensor: 29, time: '07/07/2021-09:01:30', value: 25.2},
                {sensor: 30, time: '07/07/2021-09:01:30', value: 25.1},

                {sensor: 1, time: '07/07/2021-09:02:00', value: 24.5},
                {sensor: 2, time: '07/07/2021-09:02:00', value: 24.7},
                {sensor: 5, time: '07/07/2021-09:02:00', value: 24.6},
                {sensor: 6, time: '07/07/2021-09:02:00', value: 24.9},
                {sensor: 7, time: '07/07/2021-09:02:00', value: 25.0},
                {sensor: 10, time: '07/07/2021-09:02:00', value: 25.0},
                {sensor: 11, time: '07/07/2021-09:02:00', value: 25.1},
                {sensor: 12, time: '07/07/2021-09:02:00', value: 25.0},
                {sensor: 13, time: '07/07/2021-09:02:00', value: 25.2},
                {sensor: 14, time: '07/07/2021-09:02:00', value: 24.8},
                {sensor: 15, time: '07/07/2021-09:02:00', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:02:00', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:02:00', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:02:00', value: 24.5},
                {sensor: 24, time: '07/07/2021-09:02:00', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:02:00', value: 24.7},
                {sensor: 26, time: '07/07/2021-09:02:00', value: 24.8},
                {sensor: 27, time: '07/07/2021-09:02:00', value: 24.8},
                {sensor: 28, time: '07/07/2021-09:02:00', value: 24.6},
                {sensor: 29, time: '07/07/2021-09:02:00', value: 25.1},
                {sensor: 30, time: '07/07/2021-09:02:00', value: 25.0},

                {sensor: 1, time: '07/07/2021-09:02:30', value: 24.5},
                {sensor: 2, time: '07/07/2021-09:02:30', value: 24.7},
                {sensor: 5, time: '07/07/2021-09:02:30', value: 24.6},
                {sensor: 6, time: '07/07/2021-09:02:30', value: 24.9},
                {sensor: 7, time: '07/07/2021-09:02:30', value: 25.0},
                {sensor: 10, time: '07/07/2021-09:02:30', value: 25.0},
                {sensor: 11, time: '07/07/2021-09:02:30', value: 25.1},
                {sensor: 12, time: '07/07/2021-09:02:30', value: 25.0},
                {sensor: 13, time: '07/07/2021-09:02:30', value: 25.2},
                {sensor: 14, time: '07/07/2021-09:02:30', value: 24.8},
                {sensor: 15, time: '07/07/2021-09:02:30', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:02:30', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:02:30', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:02:30', value: 24.5},
                {sensor: 24, time: '07/07/2021-09:02:30', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:02:30', value: 24.7},
                {sensor: 26, time: '07/07/2021-09:02:30', value: 24.8},
                {sensor: 27, time: '07/07/2021-09:02:30', value: 24.8},
                {sensor: 28, time: '07/07/2021-09:02:30', value: 24.6},
                {sensor: 29, time: '07/07/2021-09:02:30', value: 25.1},
                {sensor: 30, time: '07/07/2021-09:02:30', value: 25.0},

                {sensor: 1, time: '07/07/2021-09:03:00', value: 24.5},
                {sensor: 2, time: '07/07/2021-09:03:00', value: 24.7},
                {sensor: 5, time: '07/07/2021-09:03:00', value: 24.6},
                {sensor: 6, time: '07/07/2021-09:03:00', value: 24.9},
                {sensor: 7, time: '07/07/2021-09:03:00', value: 25.0},
                {sensor: 10, time: '07/07/2021-09:03:00', value: 25.0},
                {sensor: 11, time: '07/07/2021-09:03:00', value: 25.1},
                {sensor: 12, time: '07/07/2021-09:03:00', value: 25.0},
                {sensor: 13, time: '07/07/2021-09:03:00', value: 25.2},
                {sensor: 14, time: '07/07/2021-09:03:00', value: 24.8},
                {sensor: 15, time: '07/07/2021-09:03:00', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:03:00', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:03:00', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:03:00', value: 24.5},
                {sensor: 24, time: '07/07/2021-09:03:00', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:03:00', value: 24.7},
                {sensor: 26, time: '07/07/2021-09:03:00', value: 24.8},
                {sensor: 27, time: '07/07/2021-09:03:00', value: 24.8},
                {sensor: 28, time: '07/07/2021-09:03:00', value: 24.6},
                {sensor: 29, time: '07/07/2021-09:03:00', value: 25.1},
                {sensor: 30, time: '07/07/2021-09:03:00', value: 25.0},

                {sensor: 1, time: '07/07/2021-09:04:00', value: 24.5},
                {sensor: 2, time: '07/07/2021-09:04:00', value: 24.7},
                {sensor: 5, time: '07/07/2021-09:04:00', value: 24.6},
                {sensor: 6, time: '07/07/2021-09:04:00', value: 24.9},
                {sensor: 7, time: '07/07/2021-09:04:00', value: 25.0},
                {sensor: 10, time: '07/07/2021-09:04:00', value: 25.0},
                {sensor: 11, time: '07/07/2021-09:04:00', value: 25.1},
                {sensor: 12, time: '07/07/2021-09:04:00', value: 25.0},
                {sensor: 13, time: '07/07/2021-09:04:00', value: 25.2},
                {sensor: 14, time: '07/07/2021-09:04:00', value: 24.8},
                {sensor: 15, time: '07/07/2021-09:04:00', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:04:00', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:04:00', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:04:00', value: 24.5},
                {sensor: 24, time: '07/07/2021-09:04:00', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:04:00', value: 24.7},
                {sensor: 26, time: '07/07/2021-09:04:00', value: 24.8},
                {sensor: 27, time: '07/07/2021-09:04:00', value: 24.8},
                {sensor: 28, time: '07/07/2021-09:04:00', value: 24.6},
                {sensor: 29, time: '07/07/2021-09:04:00', value: 25.1},
                {sensor: 30, time: '07/07/2021-09:04:00', value: 25.0},

                {sensor: 1, time: '07/07/2021-09:05:00', value: 24.5},
                {sensor: 2, time: '07/07/2021-09:05:00', value: 24.7},
                {sensor: 5, time: '07/07/2021-09:05:00', value: 24.6},
                {sensor: 6, time: '07/07/2021-09:05:00', value: 24.9},
                {sensor: 7, time: '07/07/2021-09:05:00', value: 25.0},
                {sensor: 10, time: '07/07/2021-09:05:00', value: 25.0},
                {sensor: 11, time: '07/07/2021-09:05:00', value: 25.1},
                {sensor: 12, time: '07/07/2021-09:05:00', value: 25.0},
                {sensor: 13, time: '07/07/2021-09:05:00', value: 25.2},
                {sensor: 14, time: '07/07/2021-09:05:00', value: 24.8},
                {sensor: 15, time: '07/07/2021-09:05:00', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:05:00', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:05:00', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:05:00', value: 24.5},
                {sensor: 24, time: '07/07/2021-09:05:00', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:05:00', value: 24.7},
                {sensor: 26, time: '07/07/2021-09:05:00', value: 24.8},
                {sensor: 27, time: '07/07/2021-09:05:00', value: 24.8},
                {sensor: 28, time: '07/07/2021-09:05:00', value: 24.6},
                {sensor: 29, time: '07/07/2021-09:05:00', value: 25.1},
                {sensor: 30, time: '07/07/2021-09:05:00', value: 25.0},

                {sensor: 1, time: '07/07/2021-09:05:30', value: 24.5},
                {sensor: 2, time: '07/07/2021-09:05:30', value: 24.7},
                {sensor: 5, time: '07/07/2021-09:05:30', value: 24.6},
                {sensor: 6, time: '07/07/2021-09:05:30', value: 24.9},
                {sensor: 7, time: '07/07/2021-09:05:30', value: 25.0},
                {sensor: 10, time: '07/07/2021-09:05:30', value: 25.0},
                {sensor: 11, time: '07/07/2021-09:05:30', value: 25.1},
                {sensor: 12, time: '07/07/2021-09:05:30', value: 25.0},
                {sensor: 13, time: '07/07/2021-09:05:30', value: 25.2},
                {sensor: 14, time: '07/07/2021-09:05:30', value: 24.8},
                {sensor: 15, time: '07/07/2021-09:05:30', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:05:30', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:05:30', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:05:30', value: 24.5},
                {sensor: 24, time: '07/07/2021-09:05:30', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:05:30', value: 24.7},
                {sensor: 26, time: '07/07/2021-09:05:30', value: 24.8},
                {sensor: 27, time: '07/07/2021-09:05:30', value: 24.8},
                {sensor: 28, time: '07/07/2021-09:05:30', value: 24.6},
                {sensor: 29, time: '07/07/2021-09:05:30', value: 25.1},
                {sensor: 30, time: '07/07/2021-09:05:30', value: 25.0},

                {sensor: 1, time: '07/07/2021-09:06:00', value: 24.5},
                {sensor: 2, time: '07/07/2021-09:06:00', value: 24.7},
                {sensor: 5, time: '07/07/2021-09:06:00', value: 24.6},
                {sensor: 6, time: '07/07/2021-09:06:00', value: 24.9},
                {sensor: 7, time: '07/07/2021-09:06:00', value: 25.0},
                {sensor: 10, time: '07/07/2021-09:06:00', value: 25.0},
                {sensor: 11, time: '07/07/2021-09:06:00', value: 25.1},
                {sensor: 12, time: '07/07/2021-09:06:00', value: 25.0},
                {sensor: 13, time: '07/07/2021-09:06:00', value: 25.2},
                {sensor: 14, time: '07/07/2021-09:06:00', value: 24.8},
                {sensor: 15, time: '07/07/2021-09:06:00', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:06:00', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:06:00', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:06:00', value: 24.5},
                {sensor: 24, time: '07/07/2021-09:06:00', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:06:00', value: 24.7},
                {sensor: 26, time: '07/07/2021-09:06:00', value: 24.8},
                {sensor: 27, time: '07/07/2021-09:06:00', value: 24.8},
                {sensor: 28, time: '07/07/2021-09:06:00', value: 24.6},
                {sensor: 29, time: '07/07/2021-09:06:00', value: 25.1},
                {sensor: 30, time: '07/07/2021-09:06:00', value: 25.0},

                {sensor: 1, time: '07/07/2021-09:06:30', value: 24.5},
                {sensor: 2, time: '07/07/2021-09:06:30', value: 24.7},
                {sensor: 5, time: '07/07/2021-09:06:30', value: 24.6},
                {sensor: 6, time: '07/07/2021-09:06:30', value: 24.9},
                {sensor: 7, time: '07/07/2021-09:06:30', value: 25.0},
                {sensor: 10, time: '07/07/2021-09:06:30', value: 25.0},
                {sensor: 11, time: '07/07/2021-09:06:30', value: 25.1},
                {sensor: 12, time: '07/07/2021-09:06:30', value: 25.0},
                {sensor: 13, time: '07/07/2021-09:06:30', value: 25.2},
                {sensor: 14, time: '07/07/2021-09:06:30', value: 24.8},
                {sensor: 15, time: '07/07/2021-09:06:30', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:06:30', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:06:30', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:06:30', value: 24.5},
                {sensor: 24, time: '07/07/2021-09:06:30', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:06:30', value: 24.7},
                {sensor: 26, time: '07/07/2021-09:06:30', value: 24.8},
                {sensor: 27, time: '07/07/2021-09:06:30', value: 24.8},
                {sensor: 28, time: '07/07/2021-09:06:30', value: 24.6},
                {sensor: 29, time: '07/07/2021-09:06:30', value: 25.1},
                {sensor: 30, time: '07/07/2021-09:06:30', value: 25.0},

                {sensor: 1, time: '07/07/2021-09:07:00', value: 24.5},
                {sensor: 2, time: '07/07/2021-09:07:00', value: 24.7},
                {sensor: 5, time: '07/07/2021-09:07:00', value: 24.6},
                {sensor: 6, time: '07/07/2021-09:07:00', value: 24.9},
                {sensor: 7, time: '07/07/2021-09:07:00', value: 25.0},
                {sensor: 10, time: '07/07/2021-09:07:00', value: 25.0},
                {sensor: 11, time: '07/07/2021-09:07:00', value: 25.1},
                {sensor: 12, time: '07/07/2021-09:07:00', value: 25.0},
                {sensor: 13, time: '07/07/2021-09:07:00', value: 25.2},
                {sensor: 14, time: '07/07/2021-09:07:00', value: 24.8},
                {sensor: 15, time: '07/07/2021-09:07:00', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:07:00', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:07:00', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:07:00', value: 24.5},
                {sensor: 24, time: '07/07/2021-09:07:00', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:07:00', value: 24.7},
                {sensor: 26, time: '07/07/2021-09:07:00', value: 24.8},
                {sensor: 27, time: '07/07/2021-09:07:00', value: 24.8},
                {sensor: 28, time: '07/07/2021-09:07:00', value: 24.6},
                {sensor: 29, time: '07/07/2021-09:07:00', value: 25.1},
                {sensor: 30, time: '07/07/2021-09:07:00', value: 25.0},

                {sensor: 1, time: '07/07/2021-09:07:30', value: 24.5},
                {sensor: 2, time: '07/07/2021-09:07:30', value: 24.7},
                {sensor: 5, time: '07/07/2021-09:07:30', value: 24.6},
                {sensor: 6, time: '07/07/2021-09:07:30', value: 24.9},
                {sensor: 7, time: '07/07/2021-09:07:30', value: 25.0},
                {sensor: 10, time: '07/07/2021-09:07:30', value: 25.0},
                {sensor: 11, time: '07/07/2021-09:07:30', value: 25.1},
                {sensor: 12, time: '07/07/2021-09:07:30', value: 25.0},
                {sensor: 13, time: '07/07/2021-09:07:30', value: 25.2},
                {sensor: 14, time: '07/07/2021-09:07:30', value: 24.8},
                {sensor: 15, time: '07/07/2021-09:07:30', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:07:30', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:07:30', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:07:30', value: 24.5},
                {sensor: 24, time: '07/07/2021-09:07:30', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:07:30', value: 24.7},
                {sensor: 26, time: '07/07/2021-09:07:30', value: 24.8},
                {sensor: 27, time: '07/07/2021-09:07:30', value: 24.8},
                {sensor: 28, time: '07/07/2021-09:07:30', value: 24.6},
                {sensor: 29, time: '07/07/2021-09:07:30', value: 25.1},
                {sensor: 30, time: '07/07/2021-09:07:30', value: 25.0},

                {sensor: 1, time: '07/07/2021-09:08:00', value: 24.5},
                {sensor: 2, time: '07/07/2021-09:08:00', value: 24.7},
                {sensor: 5, time: '07/07/2021-09:08:00', value: 24.6},
                {sensor: 6, time: '07/07/2021-09:08:00', value: 24.9},
                {sensor: 7, time: '07/07/2021-09:08:00', value: 25.0},
                {sensor: 10, time: '07/07/2021-09:08:00', value: 25.0},
                {sensor: 11, time: '07/07/2021-09:08:00', value: 25.1},
                {sensor: 12, time: '07/07/2021-09:08:00', value: 25.0},
                {sensor: 13, time: '07/07/2021-09:08:00', value: 25.2},
                {sensor: 14, time: '07/07/2021-09:08:00', value: 24.8},
                {sensor: 15, time: '07/07/2021-09:08:00', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:08:00', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:08:00', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:08:00', value: 24.5},
                {sensor: 24, time: '07/07/2021-09:08:00', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:08:00', value: 24.7},
                {sensor: 26, time: '07/07/2021-09:08:00', value: 24.8},
                {sensor: 27, time: '07/07/2021-09:08:00', value: 24.8},
                {sensor: 28, time: '07/07/2021-09:08:00', value: 24.6},
                {sensor: 29, time: '07/07/2021-09:08:00', value: 25.1},
                {sensor: 30, time: '07/07/2021-09:08:00', value: 25.0},

                {sensor: 1, time: '07/07/2021-09:08:30', value: 24.5},
                {sensor: 2, time: '07/07/2021-09:08:30', value: 24.7},
                {sensor: 5, time: '07/07/2021-09:08:30', value: 24.6},
                {sensor: 6, time: '07/07/2021-09:08:30', value: 24.9},
                {sensor: 7, time: '07/07/2021-09:08:30', value: 25.0},
                {sensor: 10, time: '07/07/2021-09:08:30', value: 25.0},
                {sensor: 11, time: '07/07/2021-09:08:30', value: 25.1},
                {sensor: 12, time: '07/07/2021-09:08:30', value: 25.0},
                {sensor: 13, time: '07/07/2021-09:08:30', value: 25.2},
                {sensor: 14, time: '07/07/2021-09:08:30', value: 24.8},
                {sensor: 15, time: '07/07/2021-09:08:30', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:08:30', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:08:30', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:08:30', value: 24.5},
                {sensor: 24, time: '07/07/2021-09:08:30', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:08:30', value: 24.7},
                {sensor: 26, time: '07/07/2021-09:08:30', value: 24.8},
                {sensor: 27, time: '07/07/2021-09:08:30', value: 24.8},
                {sensor: 28, time: '07/07/2021-09:08:30', value: 24.6},
                {sensor: 29, time: '07/07/2021-09:08:30', value: 25.1},
                {sensor: 30, time: '07/07/2021-09:08:30', value: 25.0},

                {sensor: 1, time: '07/07/2021-09:09:00', value: 24.5},
                {sensor: 2, time: '07/07/2021-09:09:00', value: 24.7},
                {sensor: 5, time: '07/07/2021-09:09:00', value: 24.6},
                {sensor: 6, time: '07/07/2021-09:09:00', value: 24.9},
                {sensor: 7, time: '07/07/2021-09:09:00', value: 25.0},
                {sensor: 10, time: '07/07/2021-09:09:00', value: 25.0},
                {sensor: 11, time: '07/07/2021-09:09:00', value: 25.1},
                {sensor: 12, time: '07/07/2021-09:09:00', value: 25.0},
                {sensor: 13, time: '07/07/2021-09:09:00', value: 25.2},
                {sensor: 14, time: '07/07/2021-09:09:00', value: 24.8},
                {sensor: 15, time: '07/07/2021-09:09:00', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:09:00', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:09:00', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:09:00', value: 24.5},
                {sensor: 24, time: '07/07/2021-09:09:00', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:09:00', value: 24.7},
                {sensor: 26, time: '07/07/2021-09:09:00', value: 24.8},
                {sensor: 27, time: '07/07/2021-09:09:00', value: 24.8},
                {sensor: 28, time: '07/07/2021-09:09:00', value: 24.6},
                {sensor: 29, time: '07/07/2021-09:09:00', value: 25.1},
                {sensor: 30, time: '07/07/2021-09:09:00', value: 25.0},

                {sensor: 1, time: '07/07/2021-09:09:30', value: 24.5},
                {sensor: 2, time: '07/07/2021-09:09:30', value: 24.7},
                {sensor: 5, time: '07/07/2021-09:09:30', value: 24.6},
                {sensor: 6, time: '07/07/2021-09:09:30', value: 24.9},
                {sensor: 7, time: '07/07/2021-09:09:30', value: 25.0},
                {sensor: 10, time: '07/07/2021-09:09:30', value: 25.0},
                {sensor: 11, time: '07/07/2021-09:09:30', value: 25.1},
                {sensor: 12, time: '07/07/2021-09:09:30', value: 25.0},
                {sensor: 13, time: '07/07/2021-09:09:30', value: 25.2},
                {sensor: 14, time: '07/07/2021-09:09:30', value: 24.8},
                {sensor: 15, time: '07/07/2021-09:09:30', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:09:30', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:09:30', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:09:30', value: 24.5},
                {sensor: 24, time: '07/07/2021-09:09:30', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:09:30', value: 24.7},
                {sensor: 26, time: '07/07/2021-09:09:30', value: 24.8},
                {sensor: 27, time: '07/07/2021-09:09:30', value: 24.8},
                {sensor: 28, time: '07/07/2021-09:09:30', value: 24.6},
                {sensor: 29, time: '07/07/2021-09:09:30', value: 25.1},
                {sensor: 30, time: '07/07/2021-09:09:30', value: 25.0},

                {sensor: 1, time: '07/07/2021-09:10:00', value: 24.5},
                {sensor: 2, time: '07/07/2021-09:10:00', value: 24.7},
                {sensor: 5, time: '07/07/2021-09:10:00', value: 24.6},
                {sensor: 6, time: '07/07/2021-09:10:00', value: 24.9},
                {sensor: 7, time: '07/07/2021-09:10:00', value: 25.0},
                {sensor: 10, time: '07/07/2021-09:10:00', value: 25.0},
                {sensor: 11, time: '07/07/2021-09:10:00', value: 25.1},
                {sensor: 12, time: '07/07/2021-09:10:00', value: 25.0},
                {sensor: 13, time: '07/07/2021-09:10:00', value: 25.2},
                {sensor: 14, time: '07/07/2021-09:10:00', value: 24.8},
                {sensor: 15, time: '07/07/2021-09:10:00', value: 24.8},
                {sensor: 21, time: '07/07/2021-09:10:00', value: 24.7},
                {sensor: 22, time: '07/07/2021-09:10:00', value: 24.6},
                {sensor: 23, time: '07/07/2021-09:10:00', value: 24.5},
                {sensor: 24, time: '07/07/2021-09:10:00', value: 24.6},
                {sensor: 25, time: '07/07/2021-09:10:00', value: 24.7},
                {sensor: 26, time: '07/07/2021-09:10:00', value: 24.8},
                {sensor: 27, time: '07/07/2021-09:10:00', value: 24.8},
                {sensor: 28, time: '07/07/2021-09:10:00', value: 24.6},
                {sensor: 29, time: '07/07/2021-09:10:00', value: 25.1},
                {sensor: 30, time: '07/07/2021-09:10:00', value: 25.0},



                {sensor: 1, time: '07/07/2021-09:10:30', value: 65.0},
                {sensor: 2, time: '07/07/2021-09:10:30', value: 64.7},
                {sensor: 5, time: '07/07/2021-09:10:30', value: 64.6},
                {sensor: 6, time: '07/07/2021-09:10:30', value: 64.5},
                {sensor: 7, time: '07/07/2021-09:10:30', value: 64.6},
                {sensor: 10, time: '07/07/2021-09:10:30', value: 64.7},
                {sensor: 11, time: '07/07/2021-09:10:30', value: 64.8},
                {sensor: 12, time: '07/07/2021-09:10:30', value: 64.8},
                {sensor: 13, time: '07/07/2021-09:10:30', value: 64.6},
                {sensor: 14, time: '07/07/2021-09:10:30', value: 65.1},
                {sensor: 15, time: '07/07/2021-09:10:30', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:10:30', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:10:30', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:10:30', value: 64.9},
                {sensor: 24, time: '07/07/2021-09:10:30', value: 65.0},
                {sensor: 25, time: '07/07/2021-09:10:30', value: 65.0},
                {sensor: 26, time: '07/07/2021-09:10:30', value: 65.1},
                {sensor: 27, time: '07/07/2021-09:10:30', value: 65.0},
                {sensor: 28, time: '07/07/2021-09:10:30', value: 65.2},
                {sensor: 29, time: '07/07/2021-09:10:30', value: 64.8},
                {sensor: 30, time: '07/07/2021-09:10:30', value: 64.5},

                {sensor: 1, time: '07/07/2021-09:11:00', value: 65.5},
                {sensor: 2, time: '07/07/2021-09:11:00', value: 65.7},
                {sensor: 5, time: '07/07/2021-09:11:00', value: 65.6},
                {sensor: 6, time: '07/07/2021-09:11:00', value: 65.9},
                {sensor: 7, time: '07/07/2021-09:11:00', value: 65.0},
                {sensor: 10, time: '07/07/2021-09:11:00', value: 65.0},
                {sensor: 11, time: '07/07/2021-09:11:00', value: 65.1},
                {sensor: 12, time: '07/07/2021-09:11:00', value: 65.0},
                {sensor: 13, time: '07/07/2021-09:11:00', value: 65.2},
                {sensor: 14, time: '07/07/2021-09:11:00', value: 64.8},
                {sensor: 15, time: '07/07/2021-09:11:00', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:11:00', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:11:00', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:11:00', value: 64.7},
                {sensor: 24, time: '07/07/2021-09:11:00', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:11:00', value: 64.8},
                {sensor: 26, time: '07/07/2021-09:11:00', value: 65.0},
                {sensor: 27, time: '07/07/2021-09:11:00', value: 65.0},
                {sensor: 28, time: '07/07/2021-09:11:00', value: 64.8},
                {sensor: 29, time: '07/07/2021-09:11:00', value: 65.2},
                {sensor: 30, time: '07/07/2021-09:11:00', value: 65.1},

                {sensor: 1, time: '07/07/2021-09:11:30', value: 65.5},
                {sensor: 2, time: '07/07/2021-09:11:30', value: 65.7},
                {sensor: 5, time: '07/07/2021-09:11:30', value: 65.6},
                {sensor: 6, time: '07/07/2021-09:11:30', value: 65.9},
                {sensor: 7, time: '07/07/2021-09:11:30', value: 65.0},
                {sensor: 10, time: '07/07/2021-09:11:30', value: 65.0},
                {sensor: 11, time: '07/07/2021-09:11:30', value: 65.1},
                {sensor: 12, time: '07/07/2021-09:11:30', value: 65.0},
                {sensor: 13, time: '07/07/2021-09:11:30', value: 65.2},
                {sensor: 14, time: '07/07/2021-09:11:30', value: 64.8},
                {sensor: 15, time: '07/07/2021-09:11:30', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:11:30', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:11:30', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:11:30', value: 64.7},
                {sensor: 24, time: '07/07/2021-09:11:30', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:11:30', value: 64.8},
                {sensor: 26, time: '07/07/2021-09:11:30', value: 65.0},
                {sensor: 27, time: '07/07/2021-09:11:30', value: 65.0},
                {sensor: 28, time: '07/07/2021-09:11:30', value: 64.8},
                {sensor: 29, time: '07/07/2021-09:11:30', value: 65.2},
                {sensor: 30, time: '07/07/2021-09:11:30', value: 65.1},

                {sensor: 1, time: '07/07/2021-09:12:00', value: 64.5},
                {sensor: 2, time: '07/07/2021-09:12:00', value: 64.7},
                {sensor: 5, time: '07/07/2021-09:12:00', value: 64.6},
                {sensor: 6, time: '07/07/2021-09:12:00', value: 64.9},
                {sensor: 7, time: '07/07/2021-09:12:00', value: 65.0},
                {sensor: 10, time: '07/07/2021-09:12:00', value: 65.0},
                {sensor: 11, time: '07/07/2021-09:12:00', value: 65.1},
                {sensor: 12, time: '07/07/2021-09:12:00', value: 65.0},
                {sensor: 13, time: '07/07/2021-09:12:00', value: 65.2},
                {sensor: 14, time: '07/07/2021-09:12:00', value: 64.8},
                {sensor: 15, time: '07/07/2021-09:12:00', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:12:00', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:12:00', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:12:00', value: 64.5},
                {sensor: 24, time: '07/07/2021-09:12:00', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:12:00', value: 64.7},
                {sensor: 26, time: '07/07/2021-09:12:00', value: 64.8},
                {sensor: 27, time: '07/07/2021-09:12:00', value: 64.8},
                {sensor: 28, time: '07/07/2021-09:12:00', value: 64.6},
                {sensor: 29, time: '07/07/2021-09:12:00', value: 65.1},
                {sensor: 30, time: '07/07/2021-09:12:00', value: 65.0},

                {sensor: 1, time: '07/07/2021-09:12:30', value: 64.5},
                {sensor: 2, time: '07/07/2021-09:12:30', value: 64.7},
                {sensor: 5, time: '07/07/2021-09:12:30', value: 64.6},
                {sensor: 6, time: '07/07/2021-09:12:30', value: 64.9},
                {sensor: 7, time: '07/07/2021-09:12:30', value: 65.0},
                {sensor: 10, time: '07/07/2021-09:12:30', value: 65.0},
                {sensor: 11, time: '07/07/2021-09:12:30', value: 65.1},
                {sensor: 12, time: '07/07/2021-09:12:30', value: 65.0},
                {sensor: 13, time: '07/07/2021-09:12:30', value: 65.2},
                {sensor: 14, time: '07/07/2021-09:12:30', value: 64.8},
                {sensor: 15, time: '07/07/2021-09:12:30', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:12:30', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:12:30', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:12:30', value: 64.5},
                {sensor: 24, time: '07/07/2021-09:12:30', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:12:30', value: 64.7},
                {sensor: 26, time: '07/07/2021-09:12:30', value: 64.8},
                {sensor: 27, time: '07/07/2021-09:12:30', value: 64.8},
                {sensor: 28, time: '07/07/2021-09:12:30', value: 64.6},
                {sensor: 29, time: '07/07/2021-09:12:30', value: 65.1},
                {sensor: 30, time: '07/07/2021-09:12:30', value: 65.0},

                {sensor: 1, time: '07/07/2021-09:13:00', value: 64.5},
                {sensor: 2, time: '07/07/2021-09:13:00', value: 64.7},
                {sensor: 5, time: '07/07/2021-09:13:00', value: 64.6},
                {sensor: 6, time: '07/07/2021-09:13:00', value: 64.9},
                {sensor: 7, time: '07/07/2021-09:13:00', value: 65.0},
                {sensor: 10, time: '07/07/2021-09:13:00', value: 65.0},
                {sensor: 11, time: '07/07/2021-09:13:00', value: 65.1},
                {sensor: 12, time: '07/07/2021-09:13:00', value: 65.0},
                {sensor: 13, time: '07/07/2021-09:13:00', value: 65.2},
                {sensor: 14, time: '07/07/2021-09:13:00', value: 64.8},
                {sensor: 15, time: '07/07/2021-09:13:00', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:13:00', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:13:00', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:13:00', value: 64.5},
                {sensor: 24, time: '07/07/2021-09:13:00', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:13:00', value: 64.7},
                {sensor: 26, time: '07/07/2021-09:13:00', value: 64.8},
                {sensor: 27, time: '07/07/2021-09:13:00', value: 64.8},
                {sensor: 28, time: '07/07/2021-09:13:00', value: 64.6},
                {sensor: 29, time: '07/07/2021-09:13:00', value: 65.1},
                {sensor: 30, time: '07/07/2021-09:13:00', value: 65.0},

                {sensor: 1, time: '07/07/2021-09:14:00', value: 64.5},
                {sensor: 2, time: '07/07/2021-09:14:00', value: 64.7},
                {sensor: 5, time: '07/07/2021-09:14:00', value: 64.6},
                {sensor: 6, time: '07/07/2021-09:14:00', value: 64.9},
                {sensor: 7, time: '07/07/2021-09:14:00', value: 65.0},
                {sensor: 10, time: '07/07/2021-09:14:00', value: 65.0},
                {sensor: 11, time: '07/07/2021-09:14:00', value: 65.1},
                {sensor: 12, time: '07/07/2021-09:14:00', value: 65.0},
                {sensor: 13, time: '07/07/2021-09:14:00', value: 65.2},
                {sensor: 14, time: '07/07/2021-09:14:00', value: 64.8},
                {sensor: 15, time: '07/07/2021-09:14:00', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:14:00', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:14:00', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:14:00', value: 64.5},
                {sensor: 24, time: '07/07/2021-09:14:00', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:14:00', value: 64.7},
                {sensor: 26, time: '07/07/2021-09:14:00', value: 64.8},
                {sensor: 27, time: '07/07/2021-09:14:00', value: 64.8},
                {sensor: 28, time: '07/07/2021-09:14:00', value: 64.6},
                {sensor: 29, time: '07/07/2021-09:14:00', value: 65.1},
                {sensor: 30, time: '07/07/2021-09:14:00', value: 65.0},

                {sensor: 1, time: '07/07/2021-09:15:00', value: 64.5},
                {sensor: 2, time: '07/07/2021-09:15:00', value: 64.7},
                {sensor: 5, time: '07/07/2021-09:15:00', value: 64.6},
                {sensor: 6, time: '07/07/2021-09:15:00', value: 64.9},
                {sensor: 7, time: '07/07/2021-09:15:00', value: 65.0},
                {sensor: 10, time: '07/07/2021-09:15:00', value: 65.0},
                {sensor: 11, time: '07/07/2021-09:15:00', value: 65.1},
                {sensor: 12, time: '07/07/2021-09:15:00', value: 65.0},
                {sensor: 13, time: '07/07/2021-09:15:00', value: 65.2},
                {sensor: 14, time: '07/07/2021-09:15:00', value: 64.8},
                {sensor: 15, time: '07/07/2021-09:15:00', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:15:00', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:15:00', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:15:00', value: 64.5},
                {sensor: 24, time: '07/07/2021-09:15:00', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:15:00', value: 64.7},
                {sensor: 26, time: '07/07/2021-09:15:00', value: 64.8},
                {sensor: 27, time: '07/07/2021-09:15:00', value: 64.8},
                {sensor: 28, time: '07/07/2021-09:15:00', value: 64.6},
                {sensor: 29, time: '07/07/2021-09:15:00', value: 65.1},
                {sensor: 30, time: '07/07/2021-09:15:00', value: 65.0},

                {sensor: 1, time: '07/07/2021-09:15:30', value: 64.5},
                {sensor: 2, time: '07/07/2021-09:15:30', value: 64.7},
                {sensor: 5, time: '07/07/2021-09:15:30', value: 64.6},
                {sensor: 6, time: '07/07/2021-09:15:30', value: 64.9},
                {sensor: 7, time: '07/07/2021-09:15:30', value: 65.0},
                {sensor: 10, time: '07/07/2021-09:15:30', value: 65.0},
                {sensor: 11, time: '07/07/2021-09:15:30', value: 65.1},
                {sensor: 12, time: '07/07/2021-09:15:30', value: 65.0},
                {sensor: 13, time: '07/07/2021-09:15:30', value: 65.2},
                {sensor: 14, time: '07/07/2021-09:15:30', value: 64.8},
                {sensor: 15, time: '07/07/2021-09:15:30', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:15:30', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:15:30', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:15:30', value: 64.5},
                {sensor: 24, time: '07/07/2021-09:15:30', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:15:30', value: 64.7},
                {sensor: 26, time: '07/07/2021-09:15:30', value: 64.8},
                {sensor: 27, time: '07/07/2021-09:15:30', value: 64.8},
                {sensor: 28, time: '07/07/2021-09:15:30', value: 64.6},
                {sensor: 29, time: '07/07/2021-09:15:30', value: 65.1},
                {sensor: 30, time: '07/07/2021-09:15:30', value: 65.0},

                {sensor: 1, time: '07/07/2021-09:16:00', value: 64.5},
                {sensor: 2, time: '07/07/2021-09:16:00', value: 64.7},
                {sensor: 5, time: '07/07/2021-09:16:00', value: 64.6},
                {sensor: 6, time: '07/07/2021-09:16:00', value: 64.9},
                {sensor: 7, time: '07/07/2021-09:16:00', value: 65.0},
                {sensor: 10, time: '07/07/2021-09:16:00', value: 65.0},
                {sensor: 11, time: '07/07/2021-09:16:00', value: 65.1},
                {sensor: 12, time: '07/07/2021-09:16:00', value: 65.0},
                {sensor: 13, time: '07/07/2021-09:16:00', value: 65.2},
                {sensor: 14, time: '07/07/2021-09:16:00', value: 64.8},
                {sensor: 15, time: '07/07/2021-09:16:00', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:16:00', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:16:00', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:16:00', value: 64.5},
                {sensor: 24, time: '07/07/2021-09:16:00', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:16:00', value: 64.7},
                {sensor: 26, time: '07/07/2021-09:16:00', value: 64.8},
                {sensor: 27, time: '07/07/2021-09:16:00', value: 64.8},
                {sensor: 28, time: '07/07/2021-09:16:00', value: 64.6},
                {sensor: 29, time: '07/07/2021-09:16:00', value: 65.1},
                {sensor: 30, time: '07/07/2021-09:16:00', value: 65.0},

                {sensor: 1, time: '07/07/2021-09:16:30', value: 64.5},
                {sensor: 2, time: '07/07/2021-09:16:30', value: 64.7},
                {sensor: 5, time: '07/07/2021-09:16:30', value: 64.6},
                {sensor: 6, time: '07/07/2021-09:16:30', value: 64.9},
                {sensor: 7, time: '07/07/2021-09:16:30', value: 65.0},
                {sensor: 10, time: '07/07/2021-09:16:30', value: 65.0},
                {sensor: 11, time: '07/07/2021-09:16:30', value: 65.1},
                {sensor: 12, time: '07/07/2021-09:16:30', value: 65.0},
                {sensor: 13, time: '07/07/2021-09:16:30', value: 65.2},
                {sensor: 14, time: '07/07/2021-09:16:30', value: 64.8},
                {sensor: 15, time: '07/07/2021-09:16:30', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:16:30', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:16:30', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:16:30', value: 64.5},
                {sensor: 24, time: '07/07/2021-09:16:30', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:16:30', value: 64.7},
                {sensor: 26, time: '07/07/2021-09:16:30', value: 64.8},
                {sensor: 27, time: '07/07/2021-09:16:30', value: 64.8},
                {sensor: 28, time: '07/07/2021-09:16:30', value: 64.6},
                {sensor: 29, time: '07/07/2021-09:16:30', value: 65.1},
                {sensor: 30, time: '07/07/2021-09:16:30', value: 65.0},

                {sensor: 1, time: '07/07/2021-09:17:00', value: 64.5},
                {sensor: 2, time: '07/07/2021-09:17:00', value: 64.7},
                {sensor: 5, time: '07/07/2021-09:17:00', value: 64.6},
                {sensor: 6, time: '07/07/2021-09:17:00', value: 64.9},
                {sensor: 7, time: '07/07/2021-09:17:00', value: 65.0},
                {sensor: 10, time: '07/07/2021-09:17:00', value: 65.0},
                {sensor: 11, time: '07/07/2021-09:17:00', value: 65.1},
                {sensor: 12, time: '07/07/2021-09:17:00', value: 65.0},
                {sensor: 13, time: '07/07/2021-09:17:00', value: 65.2},
                {sensor: 14, time: '07/07/2021-09:17:00', value: 64.8},
                {sensor: 15, time: '07/07/2021-09:17:00', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:17:00', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:17:00', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:17:00', value: 64.5},
                {sensor: 24, time: '07/07/2021-09:17:00', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:17:00', value: 64.7},
                {sensor: 26, time: '07/07/2021-09:17:00', value: 64.8},
                {sensor: 27, time: '07/07/2021-09:17:00', value: 64.8},
                {sensor: 28, time: '07/07/2021-09:17:00', value: 64.6},
                {sensor: 29, time: '07/07/2021-09:17:00', value: 65.1},
                {sensor: 30, time: '07/07/2021-09:17:00', value: 65.0},

                {sensor: 1, time: '07/07/2021-09:17:30', value: 64.5},
                {sensor: 2, time: '07/07/2021-09:17:30', value: 64.7},
                {sensor: 5, time: '07/07/2021-09:17:30', value: 64.6},
                {sensor: 6, time: '07/07/2021-09:17:30', value: 64.9},
                {sensor: 7, time: '07/07/2021-09:17:30', value: 65.0},
                {sensor: 10, time: '07/07/2021-09:17:30', value: 65.0},
                {sensor: 11, time: '07/07/2021-09:17:30', value: 65.1},
                {sensor: 12, time: '07/07/2021-09:17:30', value: 65.0},
                {sensor: 13, time: '07/07/2021-09:17:30', value: 65.2},
                {sensor: 14, time: '07/07/2021-09:17:30', value: 64.8},
                {sensor: 15, time: '07/07/2021-09:17:30', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:17:30', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:17:30', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:17:30', value: 64.5},
                {sensor: 24, time: '07/07/2021-09:17:30', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:17:30', value: 64.7},
                {sensor: 26, time: '07/07/2021-09:17:30', value: 64.8},
                {sensor: 27, time: '07/07/2021-09:17:30', value: 64.8},
                {sensor: 28, time: '07/07/2021-09:17:30', value: 64.6},
                {sensor: 29, time: '07/07/2021-09:17:30', value: 65.1},
                {sensor: 30, time: '07/07/2021-09:17:30', value: 65.0},

                {sensor: 1, time: '07/07/2021-09:18:00', value: 64.5},
                {sensor: 2, time: '07/07/2021-09:18:00', value: 64.7},
                {sensor: 5, time: '07/07/2021-09:18:00', value: 64.6},
                {sensor: 6, time: '07/07/2021-09:18:00', value: 64.9},
                {sensor: 7, time: '07/07/2021-09:18:00', value: 65.0},
                {sensor: 10, time: '07/07/2021-09:18:00', value: 65.0},
                {sensor: 11, time: '07/07/2021-09:18:00', value: 65.1},
                {sensor: 12, time: '07/07/2021-09:18:00', value: 65.0},
                {sensor: 13, time: '07/07/2021-09:18:00', value: 65.2},
                {sensor: 14, time: '07/07/2021-09:18:00', value: 64.8},
                {sensor: 15, time: '07/07/2021-09:18:00', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:18:00', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:18:00', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:18:00', value: 64.5},
                {sensor: 24, time: '07/07/2021-09:18:00', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:18:00', value: 64.7},
                {sensor: 26, time: '07/07/2021-09:18:00', value: 64.8},
                {sensor: 27, time: '07/07/2021-09:18:00', value: 64.8},
                {sensor: 28, time: '07/07/2021-09:18:00', value: 64.6},
                {sensor: 29, time: '07/07/2021-09:18:00', value: 65.1},
                {sensor: 30, time: '07/07/2021-09:18:00', value: 65.0},

                {sensor: 1, time: '07/07/2021-09:18:30', value: 64.5},
                {sensor: 2, time: '07/07/2021-09:18:30', value: 64.7},
                {sensor: 5, time: '07/07/2021-09:18:30', value: 64.6},
                {sensor: 6, time: '07/07/2021-09:18:30', value: 64.9},
                {sensor: 7, time: '07/07/2021-09:18:30', value: 65.0},
                {sensor: 10, time: '07/07/2021-09:18:30', value: 65.0},
                {sensor: 11, time: '07/07/2021-09:18:30', value: 65.1},
                {sensor: 12, time: '07/07/2021-09:18:30', value: 65.0},
                {sensor: 13, time: '07/07/2021-09:18:30', value: 65.2},
                {sensor: 14, time: '07/07/2021-09:18:30', value: 64.8},
                {sensor: 15, time: '07/07/2021-09:18:30', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:18:30', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:18:30', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:18:30', value: 64.5},
                {sensor: 24, time: '07/07/2021-09:18:30', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:18:30', value: 64.7},
                {sensor: 26, time: '07/07/2021-09:18:30', value: 64.8},
                {sensor: 27, time: '07/07/2021-09:18:30', value: 64.8},
                {sensor: 28, time: '07/07/2021-09:18:30', value: 64.6},
                {sensor: 29, time: '07/07/2021-09:18:30', value: 65.1},
                {sensor: 30, time: '07/07/2021-09:18:30', value: 65.0},

                {sensor: 1, time: '07/07/2021-09:19:00', value: 64.5},
                {sensor: 2, time: '07/07/2021-09:19:00', value: 64.7},
                {sensor: 5, time: '07/07/2021-09:19:00', value: 64.6},
                {sensor: 6, time: '07/07/2021-09:19:00', value: 64.9},
                {sensor: 7, time: '07/07/2021-09:19:00', value: 65.0},
                {sensor: 10, time: '07/07/2021-09:19:00', value: 65.0},
                {sensor: 11, time: '07/07/2021-09:19:00', value: 65.1},
                {sensor: 12, time: '07/07/2021-09:19:00', value: 65.0},
                {sensor: 13, time: '07/07/2021-09:19:00', value: 65.2},
                {sensor: 14, time: '07/07/2021-09:19:00', value: 64.8},
                {sensor: 15, time: '07/07/2021-09:19:00', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:19:00', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:19:00', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:19:00', value: 64.5},
                {sensor: 24, time: '07/07/2021-09:19:00', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:19:00', value: 64.7},
                {sensor: 26, time: '07/07/2021-09:19:00', value: 64.8},
                {sensor: 27, time: '07/07/2021-09:19:00', value: 64.8},
                {sensor: 28, time: '07/07/2021-09:19:00', value: 64.6},
                {sensor: 29, time: '07/07/2021-09:19:00', value: 65.1},
                {sensor: 30, time: '07/07/2021-09:19:00', value: 65.0},

                {sensor: 1, time: '07/07/2021-09:19:30', value: 64.5},
                {sensor: 2, time: '07/07/2021-09:19:30', value: 64.7},
                {sensor: 5, time: '07/07/2021-09:19:30', value: 64.6},
                {sensor: 6, time: '07/07/2021-09:19:30', value: 64.9},
                {sensor: 7, time: '07/07/2021-09:19:30', value: 65.0},
                {sensor: 10, time: '07/07/2021-09:19:30', value: 65.0},
                {sensor: 11, time: '07/07/2021-09:19:30', value: 65.1},
                {sensor: 12, time: '07/07/2021-09:19:30', value: 65.0},
                {sensor: 13, time: '07/07/2021-09:19:30', value: 65.2},
                {sensor: 14, time: '07/07/2021-09:19:30', value: 64.8},
                {sensor: 15, time: '07/07/2021-09:19:30', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:19:30', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:19:30', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:19:30', value: 64.5},
                {sensor: 24, time: '07/07/2021-09:19:30', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:19:30', value: 64.7},
                {sensor: 26, time: '07/07/2021-09:19:30', value: 64.8},
                {sensor: 27, time: '07/07/2021-09:19:30', value: 64.8},
                {sensor: 28, time: '07/07/2021-09:19:30', value: 64.6},
                {sensor: 29, time: '07/07/2021-09:19:30', value: 65.1},
                {sensor: 30, time: '07/07/2021-09:19:30', value: 65.0},

                {sensor: 1, time: '07/07/2021-09:20:00', value: 64.5},
                {sensor: 2, time: '07/07/2021-09:20:00', value: 64.7},
                {sensor: 5, time: '07/07/2021-09:20:00', value: 64.6},
                {sensor: 6, time: '07/07/2021-09:20:00', value: 64.9},
                {sensor: 7, time: '07/07/2021-09:20:00', value: 65.0},
                {sensor: 10, time: '07/07/2021-09:20:00', value: 65.0},
                {sensor: 11, time: '07/07/2021-09:20:00', value: 65.1},
                {sensor: 12, time: '07/07/2021-09:20:00', value: 65.0},
                {sensor: 13, time: '07/07/2021-09:20:00', value: 65.2},
                {sensor: 14, time: '07/07/2021-09:20:00', value: 64.8},
                {sensor: 15, time: '07/07/2021-09:20:00', value: 64.8},
                {sensor: 21, time: '07/07/2021-09:20:00', value: 64.7},
                {sensor: 22, time: '07/07/2021-09:20:00', value: 64.6},
                {sensor: 23, time: '07/07/2021-09:20:00', value: 64.5},
                {sensor: 24, time: '07/07/2021-09:20:00', value: 64.6},
                {sensor: 25, time: '07/07/2021-09:20:00', value: 64.7},
                {sensor: 26, time: '07/07/2021-09:20:00', value: 64.8},
                {sensor: 27, time: '07/07/2021-09:20:00', value: 64.8},
                {sensor: 28, time: '07/07/2021-09:20:00', value: 64.6},
                {sensor: 29, time: '07/07/2021-09:20:00', value: 65.1},
                {sensor: 30, time: '07/07/2021-09:20:00', value: 65.0},



                {sensor: 1, time: '07/07/2021-09:30:30', value: 125.2},
                {sensor: 2, time: '07/07/2021-09:30:30', value: 124.3},
                {sensor: 5, time: '07/07/2021-09:30:30', value: 124.7},
                {sensor: 6, time: '07/07/2021-09:30:30', value: 124.8},
                {sensor: 7, time: '07/07/2021-09:30:30', value: 124.7},
                {sensor: 10, time: '07/07/2021-09:30:30', value: 124.3},
                {sensor: 11, time: '07/07/2021-09:30:30', value: 124.2},
                {sensor: 12, time: '07/07/2021-09:30:30', value: 124.2},
                {sensor: 13, time: '07/07/2021-09:30:30', value: 124.7},
                {sensor: 14, time: '07/07/2021-09:30:30', value: 125.4},
                {sensor: 15, time: '07/07/2021-09:30:30', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:30:30', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:30:30', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:30:30', value: 124.9},
                {sensor: 24, time: '07/07/2021-09:30:30', value: 125.2},
                {sensor: 25, time: '07/07/2021-09:30:30', value: 125.2},
                {sensor: 26, time: '07/07/2021-09:30:30', value: 125.4},
                {sensor: 27, time: '07/07/2021-09:30:30', value: 125.2},
                {sensor: 28, time: '07/07/2021-09:30:30', value: 125.2},
                {sensor: 29, time: '07/07/2021-09:30:30', value: 124.2},
                {sensor: 30, time: '07/07/2021-09:30:30', value: 124.8},

                {sensor: 1, time: '07/07/2021-09:31:00', value: 125.5},
                {sensor: 2, time: '07/07/2021-09:31:00', value: 125.7},
                {sensor: 5, time: '07/07/2021-09:31:00', value: 125.6},
                {sensor: 6, time: '07/07/2021-09:31:00', value: 125.8},
                {sensor: 7, time: '07/07/2021-09:31:00', value: 125.2},
                {sensor: 10, time: '07/07/2021-09:31:00', value: 125.2},
                {sensor: 11, time: '07/07/2021-09:31:00', value: 125.4},
                {sensor: 12, time: '07/07/2021-09:31:00', value: 125.2},
                {sensor: 13, time: '07/07/2021-09:31:00', value: 125.2},
                {sensor: 14, time: '07/07/2021-09:31:00', value: 124.2},
                {sensor: 15, time: '07/07/2021-09:31:00', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:31:00', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:31:00', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:31:00', value: 124.3},
                {sensor: 24, time: '07/07/2021-09:31:00', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:31:00', value: 124.2},
                {sensor: 26, time: '07/07/2021-09:31:00', value: 125.2},
                {sensor: 27, time: '07/07/2021-09:31:00', value: 125.2},
                {sensor: 28, time: '07/07/2021-09:31:00', value: 124.2},
                {sensor: 29, time: '07/07/2021-09:31:00', value: 125.2},
                {sensor: 30, time: '07/07/2021-09:31:00', value: 125.4},

                {sensor: 1, time: '07/07/2021-09:31:30', value: 125.5},
                {sensor: 2, time: '07/07/2021-09:31:30', value: 125.7},
                {sensor: 5, time: '07/07/2021-09:31:30', value: 125.6},
                {sensor: 6, time: '07/07/2021-09:31:30', value: 125.8},
                {sensor: 7, time: '07/07/2021-09:31:30', value: 125.2},
                {sensor: 10, time: '07/07/2021-09:31:30', value: 125.2},
                {sensor: 11, time: '07/07/2021-09:31:30', value: 125.4},
                {sensor: 12, time: '07/07/2021-09:31:30', value: 125.2},
                {sensor: 13, time: '07/07/2021-09:31:30', value: 125.2},
                {sensor: 14, time: '07/07/2021-09:31:30', value: 124.2},
                {sensor: 15, time: '07/07/2021-09:31:30', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:31:30', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:31:30', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:31:30', value: 124.3},
                {sensor: 24, time: '07/07/2021-09:31:30', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:31:30', value: 124.2},
                {sensor: 26, time: '07/07/2021-09:31:30', value: 125.2},
                {sensor: 27, time: '07/07/2021-09:31:30', value: 125.2},
                {sensor: 28, time: '07/07/2021-09:31:30', value: 124.2},
                {sensor: 29, time: '07/07/2021-09:31:30', value: 125.2},
                {sensor: 30, time: '07/07/2021-09:31:30', value: 125.4},

                {sensor: 1, time: '07/07/2021-09:32:00', value: 124.8},
                {sensor: 2, time: '07/07/2021-09:32:00', value: 124.3},
                {sensor: 5, time: '07/07/2021-09:32:00', value: 124.7},
                {sensor: 6, time: '07/07/2021-09:32:00', value: 124.9},
                {sensor: 7, time: '07/07/2021-09:32:00', value: 125.2},
                {sensor: 10, time: '07/07/2021-09:32:00', value: 125.2},
                {sensor: 11, time: '07/07/2021-09:32:00', value: 125.4},
                {sensor: 12, time: '07/07/2021-09:32:00', value: 125.2},
                {sensor: 13, time: '07/07/2021-09:32:00', value: 125.2},
                {sensor: 14, time: '07/07/2021-09:32:00', value: 124.2},
                {sensor: 15, time: '07/07/2021-09:32:00', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:32:00', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:32:00', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:32:00', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:32:00', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:32:00', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:32:00', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:32:00', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:32:00', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:32:00', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:32:00', value: 125.2},

                {sensor: 1, time: '07/07/2021-09:32:30', value: 124.8},
                {sensor: 2, time: '07/07/2021-09:32:30', value: 124.3},
                {sensor: 5, time: '07/07/2021-09:32:30', value: 124.7},
                {sensor: 6, time: '07/07/2021-09:32:30', value: 124.9},
                {sensor: 7, time: '07/07/2021-09:32:30', value: 125.2},
                {sensor: 10, time: '07/07/2021-09:32:30', value: 125.2},
                {sensor: 11, time: '07/07/2021-09:32:30', value: 125.4},
                {sensor: 12, time: '07/07/2021-09:32:30', value: 125.2},
                {sensor: 13, time: '07/07/2021-09:32:30', value: 125.2},
                {sensor: 14, time: '07/07/2021-09:32:30', value: 124.2},
                {sensor: 15, time: '07/07/2021-09:32:30', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:32:30', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:32:30', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:32:30', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:32:30', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:32:30', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:32:30', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:32:30', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:32:30', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:32:30', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:32:30', value: 125.2},

                {sensor: 1, time: '07/07/2021-09:33:00', value: 124.8},
                {sensor: 2, time: '07/07/2021-09:33:00', value: 124.3},
                {sensor: 5, time: '07/07/2021-09:33:00', value: 124.7},
                {sensor: 6, time: '07/07/2021-09:33:00', value: 124.9},
                {sensor: 7, time: '07/07/2021-09:33:00', value: 125.2},
                {sensor: 10, time: '07/07/2021-09:33:00', value: 125.2},
                {sensor: 11, time: '07/07/2021-09:33:00', value: 125.4},
                {sensor: 12, time: '07/07/2021-09:33:00', value: 125.2},
                {sensor: 13, time: '07/07/2021-09:33:00', value: 125.2},
                {sensor: 14, time: '07/07/2021-09:33:00', value: 124.2},
                {sensor: 15, time: '07/07/2021-09:33:00', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:33:00', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:33:00', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:33:00', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:33:00', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:33:00', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:33:00', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:33:00', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:33:00', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:33:00', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:33:00', value: 125.2},

                {sensor: 1, time: '07/07/2021-09:33:30', value: 124.8},
                {sensor: 2, time: '07/07/2021-09:33:30', value: 124.3},
                {sensor: 5, time: '07/07/2021-09:33:30', value: 124.7},
                {sensor: 6, time: '07/07/2021-09:33:30', value: 124.9},
                {sensor: 7, time: '07/07/2021-09:33:30', value: 125.2},
                {sensor: 10, time: '07/07/2021-09:33:30', value: 125.2},
                {sensor: 11, time: '07/07/2021-09:33:30', value: 125.4},
                {sensor: 12, time: '07/07/2021-09:33:30', value: 125.2},
                {sensor: 13, time: '07/07/2021-09:33:30', value: 125.2},
                {sensor: 14, time: '07/07/2021-09:33:30', value: 124.2},
                {sensor: 15, time: '07/07/2021-09:33:30', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:33:30', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:33:30', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:33:30', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:33:30', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:33:30', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:33:30', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:33:30', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:33:30', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:33:30', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:33:30', value: 125.2},

                {sensor: 1, time: '07/07/2021-09:34:00', value: 124.8},
                {sensor: 2, time: '07/07/2021-09:34:00', value: 124.3},
                {sensor: 5, time: '07/07/2021-09:34:00', value: 124.7},
                {sensor: 6, time: '07/07/2021-09:34:00', value: 124.9},
                {sensor: 7, time: '07/07/2021-09:34:00', value: 125.2},
                {sensor: 10, time: '07/07/2021-09:34:00', value: 125.2},
                {sensor: 11, time: '07/07/2021-09:34:00', value: 125.4},
                {sensor: 12, time: '07/07/2021-09:34:00', value: 125.2},
                {sensor: 13, time: '07/07/2021-09:34:00', value: 125.2},
                {sensor: 14, time: '07/07/2021-09:34:00', value: 124.2},
                {sensor: 15, time: '07/07/2021-09:34:00', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:34:00', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:34:00', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:34:00', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:34:00', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:34:00', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:34:00', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:34:00', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:34:00', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:34:00', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:34:00', value: 125.2},

                {sensor: 1, time: '07/07/2021-09:34:30', value: 124.8},
                {sensor: 2, time: '07/07/2021-09:34:30', value: 124.3},
                {sensor: 5, time: '07/07/2021-09:34:30', value: 124.7},
                {sensor: 6, time: '07/07/2021-09:34:30', value: 124.9},
                {sensor: 7, time: '07/07/2021-09:34:30', value: 125.2},
                {sensor: 10, time: '07/07/2021-09:34:30', value: 125.2},
                {sensor: 11, time: '07/07/2021-09:34:30', value: 125.4},
                {sensor: 12, time: '07/07/2021-09:34:30', value: 125.2},
                {sensor: 13, time: '07/07/2021-09:34:30', value: 125.2},
                {sensor: 14, time: '07/07/2021-09:34:30', value: 124.2},
                {sensor: 15, time: '07/07/2021-09:34:30', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:34:30', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:34:30', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:34:30', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:34:30', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:34:30', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:34:30', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:34:30', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:34:30', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:34:30', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:34:30', value: 125.2},

                {sensor: 1, time: '07/07/2021-09:35:00', value: 124.8},
                {sensor: 2, time: '07/07/2021-09:35:00', value: 124.3},
                {sensor: 5, time: '07/07/2021-09:35:00', value: 124.7},
                {sensor: 6, time: '07/07/2021-09:35:00', value: 124.9},
                {sensor: 7, time: '07/07/2021-09:35:00', value: 125.2},
                {sensor: 10, time: '07/07/2021-09:35:00', value: 125.2},
                {sensor: 11, time: '07/07/2021-09:35:00', value: 125.4},
                {sensor: 12, time: '07/07/2021-09:35:00', value: 125.2},
                {sensor: 13, time: '07/07/2021-09:35:00', value: 125.2},
                {sensor: 14, time: '07/07/2021-09:35:00', value: 124.2},
                {sensor: 15, time: '07/07/2021-09:35:00', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:35:00', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:35:00', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:35:00', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:35:00', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:35:00', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:35:00', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:35:00', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:35:00', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:35:00', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:35:00', value: 125.2},

                {sensor: 1, time: '07/07/2021-09:35:30', value: 124.8},
                {sensor: 2, time: '07/07/2021-09:35:30', value: 124.3},
                {sensor: 5, time: '07/07/2021-09:35:30', value: 124.7},
                {sensor: 6, time: '07/07/2021-09:35:30', value: 124.9},
                {sensor: 7, time: '07/07/2021-09:35:30', value: 125.2},
                {sensor: 10, time: '07/07/2021-09:35:30', value: 125.2},
                {sensor: 11, time: '07/07/2021-09:35:30', value: 125.4},
                {sensor: 12, time: '07/07/2021-09:35:30', value: 125.2},
                {sensor: 13, time: '07/07/2021-09:35:30', value: 125.2},
                {sensor: 14, time: '07/07/2021-09:35:30', value: 124.2},
                {sensor: 15, time: '07/07/2021-09:35:30', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:35:30', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:35:30', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:35:30', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:35:30', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:35:30', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:35:30', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:35:30', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:35:30', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:35:30', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:35:30', value: 125.2},

                {sensor: 1, time: '07/07/2021-09:36:00', value: 124.8},
                {sensor: 2, time: '07/07/2021-09:36:00', value: 124.3},
                {sensor: 5, time: '07/07/2021-09:36:00', value: 124.7},
                {sensor: 6, time: '07/07/2021-09:36:00', value: 124.9},
                {sensor: 7, time: '07/07/2021-09:36:00', value: 125.2},
                {sensor: 10, time: '07/07/2021-09:36:00', value: 125.2},
                {sensor: 11, time: '07/07/2021-09:36:00', value: 125.4},
                {sensor: 12, time: '07/07/2021-09:36:00', value: 125.2},
                {sensor: 13, time: '07/07/2021-09:36:00', value: 125.2},
                {sensor: 14, time: '07/07/2021-09:36:00', value: 124.2},
                {sensor: 15, time: '07/07/2021-09:36:00', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:36:00', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:36:00', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:36:00', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:36:00', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:36:00', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:36:00', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:36:00', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:36:00', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:36:00', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:36:00', value: 125.2},

                {sensor: 1, time: '07/07/2021-09:36:30', value: 124.8},
                {sensor: 2, time: '07/07/2021-09:36:30', value: 124.3},
                {sensor: 5, time: '07/07/2021-09:36:30', value: 124.7},
                {sensor: 6, time: '07/07/2021-09:36:30', value: 124.9},
                {sensor: 7, time: '07/07/2021-09:36:30', value: 125.2},
                {sensor: 10, time: '07/07/2021-09:36:30', value: 125.2},
                {sensor: 11, time: '07/07/2021-09:36:30', value: 125.4},
                {sensor: 12, time: '07/07/2021-09:36:30', value: 125.2},
                {sensor: 13, time: '07/07/2021-09:36:30', value: 125.2},
                {sensor: 14, time: '07/07/2021-09:36:30', value: 124.2},
                {sensor: 15, time: '07/07/2021-09:36:30', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:36:30', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:36:30', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:36:30', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:36:30', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:36:30', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:36:30', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:36:30', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:36:30', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:36:30', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:36:30', value: 125.2},

                {sensor: 1, time: '07/07/2021-09:37:00', value: 124.8},
                {sensor: 2, time: '07/07/2021-09:37:00', value: 124.3},
                {sensor: 5, time: '07/07/2021-09:37:00', value: 124.7},
                {sensor: 6, time: '07/07/2021-09:37:00', value: 124.9},
                {sensor: 7, time: '07/07/2021-09:37:00', value: 125.2},
                {sensor: 10, time: '07/07/2021-09:37:00', value: 125.2},
                {sensor: 11, time: '07/07/2021-09:37:00', value: 125.4},
                {sensor: 12, time: '07/07/2021-09:37:00', value: 125.2},
                {sensor: 13, time: '07/07/2021-09:37:00', value: 125.2},
                {sensor: 14, time: '07/07/2021-09:37:00', value: 124.2},
                {sensor: 15, time: '07/07/2021-09:37:00', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:37:00', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:37:00', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:37:00', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:37:00', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:37:00', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:37:00', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:37:00', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:37:00', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:37:00', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:37:00', value: 125.2},

                {sensor: 1, time: '07/07/2021-09:37:30', value: 124.8},
                {sensor: 2, time: '07/07/2021-09:37:30', value: 124.3},
                {sensor: 5, time: '07/07/2021-09:37:30', value: 124.7},
                {sensor: 6, time: '07/07/2021-09:37:30', value: 124.9},
                {sensor: 7, time: '07/07/2021-09:37:30', value: 125.2},
                {sensor: 10, time: '07/07/2021-09:37:30', value: 125.2},
                {sensor: 11, time: '07/07/2021-09:37:30', value: 125.4},
                {sensor: 12, time: '07/07/2021-09:37:30', value: 125.2},
                {sensor: 13, time: '07/07/2021-09:37:30', value: 125.2},
                {sensor: 14, time: '07/07/2021-09:37:30', value: 124.2},
                {sensor: 15, time: '07/07/2021-09:37:30', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:37:30', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:37:30', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:37:30', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:37:30', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:37:30', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:37:30', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:37:30', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:37:30', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:37:30', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:37:30', value: 125.2},

                {sensor: 1, time: '07/07/2021-09:38:00', value: 124.8},
                {sensor: 2, time: '07/07/2021-09:38:00', value: 124.3},
                {sensor: 5, time: '07/07/2021-09:38:00', value: 124.7},
                {sensor: 6, time: '07/07/2021-09:38:00', value: 124.9},
                {sensor: 7, time: '07/07/2021-09:38:00', value: 125.2},
                {sensor: 10, time: '07/07/2021-09:38:00', value: 125.2},
                {sensor: 11, time: '07/07/2021-09:38:00', value: 125.4},
                {sensor: 12, time: '07/07/2021-09:38:00', value: 125.2},
                {sensor: 13, time: '07/07/2021-09:38:00', value: 125.2},
                {sensor: 14, time: '07/07/2021-09:38:00', value: 124.2},
                {sensor: 15, time: '07/07/2021-09:38:00', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:38:00', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:38:00', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:38:00', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:38:00', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:38:00', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:38:00', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:38:00', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:38:00', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:38:00', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:38:00', value: 125.2},

                {sensor: 1, time: '07/07/2021-09:38:30', value: 124.8},
                {sensor: 2, time: '07/07/2021-09:38:30', value: 124.3},
                {sensor: 5, time: '07/07/2021-09:38:30', value: 124.7},
                {sensor: 6, time: '07/07/2021-09:38:30', value: 124.9},
                {sensor: 7, time: '07/07/2021-09:38:30', value: 125.2},
                {sensor: 10, time: '07/07/2021-09:38:30', value: 125.2},
                {sensor: 11, time: '07/07/2021-09:38:30', value: 125.4},
                {sensor: 12, time: '07/07/2021-09:38:30', value: 125.2},
                {sensor: 13, time: '07/07/2021-09:38:30', value: 125.2},
                {sensor: 14, time: '07/07/2021-09:38:30', value: 124.2},
                {sensor: 15, time: '07/07/2021-09:38:30', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:38:30', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:38:30', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:38:30', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:38:30', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:38:30', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:38:30', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:38:30', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:38:30', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:38:30', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:38:30', value: 125.2},
                {sensor: 1, time: '07/07/2021-09:39:00', value: 124.8},
                {sensor: 2, time: '07/07/2021-09:39:00', value: 124.3},
                {sensor: 5, time: '07/07/2021-09:39:00', value: 124.7},
                {sensor: 6, time: '07/07/2021-09:39:00', value: 124.9},
                {sensor: 7, time: '07/07/2021-09:39:00', value: 125.2},
                {sensor: 10, time: '07/07/2021-09:39:00', value: 125.2},
                {sensor: 11, time: '07/07/2021-09:39:00', value: 125.4},
                {sensor: 12, time: '07/07/2021-09:39:00', value: 125.2},
                {sensor: 13, time: '07/07/2021-09:39:00', value: 125.2},
                {sensor: 14, time: '07/07/2021-09:39:00', value: 124.2},
                {sensor: 15, time: '07/07/2021-09:39:00', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:39:00', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:39:00', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:39:00', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:39:00', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:39:00', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:39:00', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:39:00', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:39:00', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:39:00', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:39:00', value: 125.2},
                {sensor: 1, time: '07/07/2021-09:39:30', value: 124.8},
                {sensor: 2, time: '07/07/2021-09:39:30', value: 124.3},
                {sensor: 5, time: '07/07/2021-09:39:30', value: 124.7},
                {sensor: 6, time: '07/07/2021-09:39:30', value: 124.9},
                {sensor: 7, time: '07/07/2021-09:39:30', value: 125.2},
                {sensor: 10, time: '07/07/2021-09:39:30', value: 125.2},
                {sensor: 11, time: '07/07/2021-09:39:30', value: 125.4},
                {sensor: 12, time: '07/07/2021-09:39:30', value: 125.2},
                {sensor: 13, time: '07/07/2021-09:39:30', value: 125.2},
                {sensor: 14, time: '07/07/2021-09:39:30', value: 124.2},
                {sensor: 15, time: '07/07/2021-09:39:30', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:39:30', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:39:30', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:39:30', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:39:30', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:39:30', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:39:30', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:39:30', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:39:30', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:39:30', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:39:30', value: 125.2},
                {sensor: 1, time: '07/07/2021-09:40:00', value: 124.8},
                {sensor: 2, time: '07/07/2021-09:40:00', value: 124.3},
                {sensor: 5, time: '07/07/2021-09:40:00', value: 124.7},
                {sensor: 6, time: '07/07/2021-09:40:00', value: 124.9},
                {sensor: 7, time: '07/07/2021-09:40:00', value: 125.2},
                {sensor: 10, time: '07/07/2021-09:40:00', value: 125.2},
                {sensor: 11, time: '07/07/2021-09:40:00', value: 125.4},
                {sensor: 12, time: '07/07/2021-09:40:00', value: 125.2},
                {sensor: 13, time: '07/07/2021-09:40:00', value: 125.2},
                {sensor: 14, time: '07/07/2021-09:40:00', value: 124.2},
                {sensor: 15, time: '07/07/2021-09:40:00', value: 124.2},
                {sensor: 21, time: '07/07/2021-09:40:00', value: 124.3},
                {sensor: 22, time: '07/07/2021-09:40:00', value: 124.7},
                {sensor: 23, time: '07/07/2021-09:40:00', value: 124.8},
                {sensor: 24, time: '07/07/2021-09:40:00', value: 124.7},
                {sensor: 25, time: '07/07/2021-09:40:00', value: 124.3},
                {sensor: 26, time: '07/07/2021-09:40:00', value: 124.2},
                {sensor: 27, time: '07/07/2021-09:40:00', value: 124.2},
                {sensor: 28, time: '07/07/2021-09:40:00', value: 124.7},
                {sensor: 29, time: '07/07/2021-09:40:00', value: 125.4},
                {sensor: 30, time: '07/07/2021-09:40:00', value: 125.2},
              ],
              createdby: 3},
          ];

let studieslist = [
    {
      studyid: 1,
      title: 'Ex exercitation culpa sunt officia culpa duis irure fugiat laboris qui laboris.',
      studystart: '2019-04-05 10:19:09',
      studyend: '2017-12-27 07:22:39',
      createdby: 12,
      channels: [
        63,
        4,
        11,
        25
      ],
      alerts: false,
      notify: [
        {
          id: 3,
          contact: 'gregorymurray@bovis.com', phone: '(925) 413-3629'
        },
        {
          id: 19,
          contact: 'genevieveharrison@tellifly.com', phone: '(933) 461-3501'
        },
        {
          id: 29,
          contact: 'delorissykes@imperium.com', phone: '(848) 411-2170'
        }
      ]
    },
    {
      studyid: 2,
      title: 'Duis labore sunt elit excepteur aliquip deserunt sunt pariatur incididunt.',
      studystart: '2015-09-06 02:47:55',
      studyend: '2016-10-19 12:33:05',
      createdby: 16,
      channels: [
        30,
        56,
        48,
        35
      ],
      alerts: false,
      notify: [
        {
          id: 17,
          contact: 'mcknightthomas@ovolo.com', phone: '(988) 579-2070'
        },
        {
          id: 3,
          contact: 'juanitajustice@primordia.com', phone: '(963) 535-3047'
        },
        {
          id: 22,
          contact: 'drakeconley@isodrive.com', phone: '(817) 542-2907'
        }
      ]
    },
    {
      studyid: 3,
      title: 'Consequat voluptate nostrud nisi elit ex esse cupidatat pariatur enim do adipisicing.',
      studystart: '2018-07-01 02:47:51',
      studyend: '2015-02-19 11:53:22',
      createdby: 13,
      channels: [
        64,
        1,
        14,
        39
      ],
      alerts: false,
      notify: [
        {
          id: 10,
          contact: 'grimeswest@musix.com', phone: '(924) 562-2905'
        },
        {
          id: 20,
          contact: 'stephensmunoz@realmo.com', phone: '(866) 408-3067'
        },
        {
          id: 8,
          contact: 'priscillahughes@biflex.com', phone: '(849) 475-2182'
        }
      ]
    },
    {
      studyid: 4,
      title: 'Velit reprehenderit id nisi enim.',
      studystart: '2021-01-22 02:19:32',
      studyend: '2017-06-13 01:58:23',
      createdby: 15,
      channels: [
        55,
        34,
        17,
        20
      ],
      alerts: false,
      notify: [
        {
          id: 2,
          contact: 'sandovalhodges@bedder.com', phone: '(895) 533-3020'
        },
        {
          id: 9,
          contact: 'esteshensley@zillar.com', phone: '(881) 406-2274'
        },
        {
          id: 24,
          contact: 'freidasolomon@sonique.com', phone: '(823) 563-2171'
        }
      ]
    },
    {
      studyid: 5,
      title: 'Reprehenderit magna ex sit elit excepteur aute exercitation ad nulla dolor voluptate quis consectetur.',
      studystart: '2018-12-14 08:12:28',
      studyend: '2015-08-24 09:01:17',
      createdby: 15,
      channels: [
        62,
        6,
        3,
        22
      ],
      alerts: true,
      notify: [
        {
          id: 20,
          contact: 'krisduffy@aquasure.com', phone: '(985) 445-2688'
        },
        {
          id: 10,
          contact: 'vancehansen@ultrimax.com', phone: '(875) 509-3501'
        },
        {
          id: 21,
          contact: 'williamsonbrowning@acusage.com', phone: '(975) 511-3238'
        }
      ]
    },
    {
      studyid: 6,
      title: 'Elit pariatur cillum ex nulla ea.',
      studystart: '2014-03-27 06:26:23',
      studyend: '2016-08-21 03:25:33',
      createdby: 17,
      channels: [
        29,
        47,
        59,
        53
      ],
      alerts: false,
      notify: [
        {
          id: 20,
          contact: 'barbaracurry@frenex.com', phone: '(927) 484-2795'
        },
        {
          id: 30,
          contact: 'changfranklin@momentia.com', phone: '(806) 476-3486'
        },
        {
          id: 30,
          contact: 'christinarosales@geekmosis.com', phone: '(887) 447-2414'
        }
      ]
    },
    {
      studyid: 7,
      title: 'Occaecat eiusmod quis ex veniam et in nulla nulla.',
      studystart: '2019-04-18 06:06:46',
      studyend: '2016-02-26 04:11:11',
      createdby: 12,
      channels: [
        50,
        1,
        52,
        14
      ],
      alerts: false,
      notify: [
        {
          id: 17,
          contact: 'toniakeith@pushcart.com', phone: '(899) 479-2657'
        },
        {
          id: 22,
          contact: 'fultonperez@macronaut.com', phone: '(911) 545-2020'
        },
        {
          id: 30,
          contact: 'mckaybates@insuron.com', phone: '(903) 540-3710'
        }
      ]
    },
    {
      studyid: 8,
      title: 'Reprehenderit sunt cupidatat fugiat qui mollit ea incididunt veniam aute anim esse officia duis.',
      studystart: '2019-08-11 11:59:11',
      studyend: '2021-01-08 04:33:32',
      createdby: 17,
      channels: [
        47,
        3,
        52,
        50
      ],
      alerts: true,
      notify: [
        {
          id: 1,
          contact: 'staceyharrell@rooforia.com', phone: '(807) 452-3551'
        },
        {
          id: 1,
          contact: 'hartjacobson@applideck.com', phone: '(927) 444-2635'
        },
        {
          id: 7,
          contact: 'doylekerr@isoswitch.com', phone: '(847) 484-3551'
        }
      ]
    },
    {
      studyid: 9,
      title: 'Est Lorem voluptate dolor enim.',
      studystart: '2017-03-20 01:29:13',
      studyend: '2020-05-01 10:32:27',
      createdby: 19,
      channels: [
        20,
        50,
        57,
        40
      ],
      alerts: false,
      notify: [
        {
          id: 24,
          contact: 'rosecunningham@gluid.com', phone: '(939) 419-2935'
        },
        {
          id: 1,
          contact: 'allisoncampbell@velity.com', phone: '(826) 594-3529'
        },
        {
          id: 19,
          contact: 'mackrosario@valreda.com', phone: '(935) 408-2483'
        }
      ]
    },
    {
      studyid: 10,
      title: 'Ut enim aliquip excepteur commodo nulla amet consectetur voluptate esse exercitation.',
      studystart: '2015-10-14 07:47:40',
      studyend: '2017-10-13 06:32:18',
      createdby: 15,
      channels: [
        22,
        38,
        43,
        25
      ],
      alerts: false,
      notify: [
        {
          id: 26,
          contact: 'oneilhorn@vitricomp.com', phone: '(871) 589-3902'
        },
        {
          id: 30,
          contact: 'howellstrong@menbrain.com', phone: '(951) 472-3202'
        },
        {
          id: 20,
          contact: 'kentlara@geekfarm.com', phone: '(992) 520-3148'
        }
      ]
    },
    {
      studyid: 11,
      title: 'Ex exercitation culpa sunt officia culpa duis irure fugiat laboris qui laboris.',
      studystart: '2019-04-05 10:19:09',
      studyend: '2017-12-27 07:22:39',
      createdby: 12,
      channels: [
        63,
        4,
        11,
        25
      ],
      alerts: false,
      notify: [
        {
          id: 3,
          contact: 'gregorymurray@bovis.com', phone: '(925) 413-3629'
        },
        {
          id: 19,
          contact: 'genevieveharrison@tellifly.com', phone: '(933) 461-3501'
        },
        {
          id: 29,
          contact: 'delorissykes@imperium.com', phone: '(848) 411-2170'
        }
      ]
    },
    {
      studyid: 12,
      title: 'Duis labore sunt elit excepteur aliquip deserunt sunt pariatur incididunt.',
      studystart: '2015-09-06 02:47:55',
      studyend: '2016-10-19 12:33:05',
      createdby: 16,
      channels: [
        30,
        56,
        48,
        35
      ],
      alerts: false,
      notify: [
        {
          id: 17,
          contact: 'mcknightthomas@ovolo.com', phone: '(988) 579-2070'
        },
        {
          id: 3,
          contact: 'juanitajustice@primordia.com', phone: '(963) 535-3047'
        },
        {
          id: 22,
          contact: 'drakeconley@isodrive.com', phone: '(817) 542-2907'
        }
      ]
    },
    {
      studyid: 13,
      title: 'Consequat voluptate nostrud nisi elit ex esse cupidatat pariatur enim do adipisicing.',
      studystart: '2018-07-01 02:47:51',
      studyend: '2015-02-19 11:53:22',
      createdby: 13,
      channels: [
        64,
        1,
        14,
        39
      ],
      alerts: false,
      notify: [
        {
          id: 10,
          contact: 'grimeswest@musix.com', phone: '(924) 562-2905'
        },
        {
          id: 20,
          contact: 'stephensmunoz@realmo.com', phone: '(866) 408-3067'
        },
        {
          id: 8,
          contact: 'priscillahughes@biflex.com', phone: '(849) 475-2182'
        }
      ]
    },
    {
      studyid: 14,
      title: 'Velit reprehenderit id nisi enim.',
      studystart: '2021-01-22 02:19:32',
      studyend: '2017-06-13 01:58:23',
      createdby: 15,
      channels: [
        55,
        34,
        17,
        20
      ],
      alerts: false,
      notify: [
        {
          id: 2,
          contact: 'sandovalhodges@bedder.com', phone: '(895) 533-3020'
        },
        {
          id: 9,
          contact: 'esteshensley@zillar.com', phone: '(881) 406-2274'
        },
        {
          id: 24,
          contact: 'freidasolomon@sonique.com', phone: '(823) 563-2171'
        }
      ]
    },
    {
      studyid: 15,
      title: 'Reprehenderit magna ex sit elit excepteur aute exercitation ad nulla dolor voluptate quis consectetur.',
      studystart: '2018-12-14 08:12:28',
      studyend: '2015-08-24 09:01:17',
      createdby: 15,
      channels: [
        62,
        6,
        3,
        22
      ],
      alerts: true,
      notify: [
        {
          id: 20,
          contact: 'krisduffy@aquasure.com', phone: '(985) 445-2688'
        },
        {
          id: 10,
          contact: 'vancehansen@ultrimax.com', phone: '(875) 509-3501'
        },
        {
          id: 21,
          contact: 'williamsonbrowning@acusage.com', phone: '(975) 511-3238'
        }
      ]
    },
    {
      studyid: 16,
      title: 'Elit pariatur cillum ex nulla ea.',
      studystart: '2014-03-27 06:26:23',
      studyend: '2016-08-21 03:25:33',
      createdby: 17,
      channels: [
        29,
        47,
        59,
        53
      ],
      alerts: false,
      notify: [
        {
          id: 20,
          contact: 'barbaracurry@frenex.com', phone: '(927) 484-2795'
        },
        {
          id: 30,
          contact: 'changfranklin@momentia.com', phone: '(806) 476-3486'
        },
        {
          id: 30,
          contact: 'christinarosales@geekmosis.com', phone: '(887) 447-2414'
        }
      ]
    },
    {
      studyid: 17,
      title: 'Occaecat eiusmod quis ex veniam et in nulla nulla.',
      studystart: '2019-04-18 06:06:46',
      studyend: '2016-02-26 04:11:11',
      createdby: 12,
      channels: [
        50,
        1,
        52,
        14
      ],
      alerts: false,
      notify: [
        {
          id: 17,
          contact: 'toniakeith@pushcart.com', phone: '(899) 479-2657'
        },
        {
          id: 22,
          contact: 'fultonperez@macronaut.com', phone: '(911) 545-2020'
        },
        {
          id: 30,
          contact: 'mckaybates@insuron.com', phone: '(903) 540-3710'
        }
      ]
    },
    {
      studyid: 18,
      title: 'Reprehenderit sunt cupidatat fugiat qui mollit ea incididunt veniam aute anim esse officia duis.',
      studystart: '2019-08-11 11:59:11',
      studyend: '2021-01-08 04:33:32',
      createdby: 17,
      channels: [
        47,
        3,
        52,
        50
      ],
      alerts: true,
      notify: [
        {
          id: 1,
          contact: 'staceyharrell@rooforia.com', phone: '(807) 452-3551'
        },
        {
          id: 1,
          contact: 'hartjacobson@applideck.com', phone: '(927) 444-2635'
        },
        {
          id: 7,
          contact: 'doylekerr@isoswitch.com', phone: '(847) 484-3551'
        }
      ]
    },
    {
      studyid: 19,
      title: 'Est Lorem voluptate dolor enim.',
      studystart: '2017-03-20 01:29:13',
      studyend: '2020-05-01 10:32:27',
      createdby: 19,
      channels: [
        20,
        50,
        57,
        40
      ],
      alerts: false,
      notify: [
        {
          id: 24,
          contact: 'rosecunningham@gluid.com', phone: '(939) 419-2935'
        },
        {
          id: 1,
          contact: 'allisoncampbell@velity.com', phone: '(826) 594-3529'
        },
        {
          id: 19,
          contact: 'mackrosario@valreda.com', phone: '(935) 408-2483'
        }
      ]
    },
    {
      studyid: 20,
      title: 'Ut enim aliquip excepteur commodo nulla amet consectetur voluptate esse exercitation.',
      studystart: '2015-10-14 07:47:40',
      studyend: '2017-10-13 06:32:18',
      createdby: 15,
      channels: [
        22,
        38,
        43,
        25
      ],
      alerts: false,
      notify: [
        {
          id: 26,
          contact: 'oneilhorn@vitricomp.com', phone: '(871) 589-3902'
        },
        {
          id: 30,
          contact: 'howellstrong@menbrain.com', phone: '(951) 472-3202'
        },
        {
          id: 20,
          contact: 'kentlara@geekfarm.com', phone: '(992) 520-3148'
        }
      ]
    },
    {
      studyid: 21,
      title: 'Ex exercitation culpa sunt officia culpa duis irure fugiat laboris qui laboris.',
      studystart: '2019-04-05 10:19:09',
      studyend: '2017-12-27 07:22:39',
      createdby: 12,
      channels: [
        63,
        4,
        11,
        25
      ],
      alerts: false,
      notify: [
        {
          id: 3,
          contact: 'gregorymurray@bovis.com', phone: '(925) 413-3629'
        },
        {
          id: 19,
          contact: 'genevieveharrison@tellifly.com', phone: '(933) 461-3501'
        },
        {
          id: 29,
          contact: 'delorissykes@imperium.com', phone: '(848) 411-2170'
        }
      ]
    },
    {
      studyid: 22,
      title: 'Duis labore sunt elit excepteur aliquip deserunt sunt pariatur incididunt.',
      studystart: '2015-09-06 02:47:55',
      studyend: '2016-10-19 12:33:05',
      createdby: 16,
      channels: [
        30,
        56,
        48,
        35
      ],
      alerts: false,
      notify: [
        {
          id: 17,
          contact: 'mcknightthomas@ovolo.com', phone: '(988) 579-2070'
        },
        {
          id: 3,
          contact: 'juanitajustice@primordia.com', phone: '(963) 535-3047'
        },
        {
          id: 22,
          contact: 'drakeconley@isodrive.com', phone: '(817) 542-2907'
        }
      ]
    },
    {
      studyid: 23,
      title: 'Consequat voluptate nostrud nisi elit ex esse cupidatat pariatur enim do adipisicing.',
      studystart: '2018-07-01 02:47:51',
      studyend: '2015-02-19 11:53:22',
      createdby: 13,
      channels: [
        64,
        1,
        14,
        39
      ],
      alerts: false,
      notify: [
        {
          id: 10,
          contact: 'grimeswest@musix.com', phone: '(924) 562-2905'
        },
        {
          id: 20,
          contact: 'stephensmunoz@realmo.com', phone: '(866) 408-3067'
        },
        {
          id: 8,
          contact: 'priscillahughes@biflex.com', phone: '(849) 475-2182'
        }
      ]
    },
    {
      studyid: 24,
      title: 'Velit reprehenderit id nisi enim.',
      studystart: '2021-01-22 02:19:32',
      studyend: '2017-06-13 01:58:23',
      createdby: 15,
      channels: [
        55,
        34,
        17,
        20
      ],
      alerts: false,
      notify: [
        {
          id: 2,
          contact: 'sandovalhodges@bedder.com', phone: '(895) 533-3020'
        },
        {
          id: 9,
          contact: 'esteshensley@zillar.com', phone: '(881) 406-2274'
        },
        {
          id: 24,
          contact: 'freidasolomon@sonique.com', phone: '(823) 563-2171'
        }
      ]
    },
    {
      studyid: 25,
      title: 'Reprehenderit magna ex sit elit excepteur aute exercitation ad nulla dolor voluptate quis consectetur.',
      studystart: '2018-12-14 08:12:28',
      studyend: '2015-08-24 09:01:17',
      createdby: 15,
      channels: [
        62,
        6,
        3,
        22
      ],
      alerts: true,
      notify: [
        {
          id: 20,
          contact: 'krisduffy@aquasure.com', phone: '(985) 445-2688'
        },
        {
          id: 10,
          contact: 'vancehansen@ultrimax.com', phone: '(875) 509-3501'
        },
        {
          id: 21,
          contact: 'williamsonbrowning@acusage.com', phone: '(975) 511-3238'
        }
      ]
    },
    {
      studyid: 26,
      title: 'Elit pariatur cillum ex nulla ea.',
      studystart: '2014-03-27 06:26:23',
      studyend: '2016-08-21 03:25:33',
      createdby: 17,
      channels: [
        29,
        47,
        59,
        53
      ],
      alerts: false,
      notify: [
        {
          id: 20,
          contact: 'barbaracurry@frenex.com', phone: '(927) 484-2795'
        },
        {
          id: 30,
          contact: 'changfranklin@momentia.com', phone: '(806) 476-3486'
        },
        {
          id: 30,
          contact: 'christinarosales@geekmosis.com', phone: '(887) 447-2414'
        }
      ]
    },
    {
      studyid: 27,
      title: 'Occaecat eiusmod quis ex veniam et in nulla nulla.',
      studystart: '2019-04-18 06:06:46',
      studyend: '2016-02-26 04:11:11',
      createdby: 12,
      channels: [
        50,
        1,
        52,
        14
      ],
      alerts: false,
      notify: [
        {
          id: 17,
          contact: 'toniakeith@pushcart.com', phone: '(899) 479-2657'
        },
        {
          id: 22,
          contact: 'fultonperez@macronaut.com', phone: '(911) 545-2020'
        },
        {
          id: 30,
          contact: 'mckaybates@insuron.com', phone: '(903) 540-3710'
        }
      ]
    },
    {
      studyid: 28,
      title: 'Reprehenderit sunt cupidatat fugiat qui mollit ea incididunt veniam aute anim esse officia duis.',
      studystart: '2019-08-11 11:59:11',
      studyend: '2021-01-08 04:33:32',
      createdby: 17,
      channels: [
        47,
        3,
        52,
        50
      ],
      alerts: true,
      notify: [
        {
          id: 1,
          contact: 'staceyharrell@rooforia.com', phone: '(807) 452-3551'
        },
        {
          id: 1,
          contact: 'hartjacobson@applideck.com', phone: '(927) 444-2635'
        },
        {
          id: 7,
          contact: 'doylekerr@isoswitch.com', phone: '(847) 484-3551'
        }
      ]
    },
    {
      studyid: 29,
      title: 'Est Lorem voluptate dolor enim.',
      studystart: '2017-03-20 01:29:13',
      studyend: '2020-05-01 10:32:27',
      createdby: 19,
      channels: [
        20,
        50,
        57,
        40
      ],
      alerts: false,
      notify: [
        {
          id: 24,
          contact: 'rosecunningham@gluid.com', phone: '(939) 419-2935'
        },
        {
          id: 1,
          contact: 'allisoncampbell@velity.com', phone: '(826) 594-3529'
        },
        {
          id: 19,
          contact: 'mackrosario@valreda.com', phone: '(935) 408-2483'
        }
      ]
    },
    {
      studyid: 30,
      title: 'Ut enim aliquip excepteur commodo nulla amet consectetur voluptate esse exercitation.',
      studystart: '2015-10-14 07:47:40',
      studyend: '2017-10-13 06:32:18',
      createdby: 15,
      channels: [
        22,
        38,
        43,
        25
      ],
      alerts: false,
      notify: [
        {
          id: 26,
          contact: 'oneilhorn@vitricomp.com', phone: '(871) 589-3902'
        },
        {
          id: 30,
          contact: 'howellstrong@menbrain.com', phone: '(951) 472-3202'
        },
        {
          id: 20,
          contact: 'kentlara@geekfarm.com', phone: '(992) 520-3148'
        }
      ]
    },
    {
      studyid: 31,
      title: 'Ex exercitation culpa sunt officia culpa duis irure fugiat laboris qui laboris.',
      studystart: '2019-04-05 10:19:09',
      studyend: '2017-12-27 07:22:39',
      createdby: 12,
      channels: [
        63,
        4,
        11,
        25
      ],
      alerts: false,
      notify: [
        {
          id: 3,
          contact: 'gregorymurray@bovis.com', phone: '(925) 413-3629'
        },
        {
          id: 19,
          contact: 'genevieveharrison@tellifly.com', phone: '(933) 461-3501'
        },
        {
          id: 29,
          contact: 'delorissykes@imperium.com', phone: '(848) 411-2170'
        }
      ]
    },
    {
      studyid: 32,
      title: 'Duis labore sunt elit excepteur aliquip deserunt sunt pariatur incididunt.',
      studystart: '2015-09-06 02:47:55',
      studyend: '2016-10-19 12:33:05',
      createdby: 16,
      channels: [
        30,
        56,
        48,
        35
      ],
      alerts: false,
      notify: [
        {
          id: 17,
          contact: 'mcknightthomas@ovolo.com', phone: '(988) 579-2070'
        },
        {
          id: 3,
          contact: 'juanitajustice@primordia.com', phone: '(963) 535-3047'
        },
        {
          id: 22,
          contact: 'drakeconley@isodrive.com', phone: '(817) 542-2907'
        }
      ]
    },
    {
      studyid: 33,
      title: 'Consequat voluptate nostrud nisi elit ex esse cupidatat pariatur enim do adipisicing.',
      studystart: '2018-07-01 02:47:51',
      studyend: '2015-02-19 11:53:22',
      createdby: 13,
      channels: [
        64,
        1,
        14,
        39
      ],
      alerts: false,
      notify: [
        {
          id: 10,
          contact: 'grimeswest@musix.com', phone: '(924) 562-2905'
        },
        {
          id: 20,
          contact: 'stephensmunoz@realmo.com', phone: '(866) 408-3067'
        },
        {
          id: 8,
          contact: 'priscillahughes@biflex.com', phone: '(849) 475-2182'
        }
      ]
    },
    {
      studyid: 34,
      title: 'Velit reprehenderit id nisi enim.',
      studystart: '2021-01-22 02:19:32',
      studyend: '2017-06-13 01:58:23',
      createdby: 15,
      channels: [
        55,
        34,
        17,
        20
      ],
      alerts: false,
      notify: [
        {
          id: 2,
          contact: 'sandovalhodges@bedder.com', phone: '(895) 533-3020'
        },
        {
          id: 9,
          contact: 'esteshensley@zillar.com', phone: '(881) 406-2274'
        },
        {
          id: 24,
          contact: 'freidasolomon@sonique.com', phone: '(823) 563-2171'
        }
      ]
    },
    {
      studyid: 35,
      title: 'Reprehenderit magna ex sit elit excepteur aute exercitation ad nulla dolor voluptate quis consectetur.',
      studystart: '2018-12-14 08:12:28',
      studyend: '2015-08-24 09:01:17',
      createdby: 15,
      channels: [
        62,
        6,
        3,
        22
      ],
      alerts: true,
      notify: [
        {
          id: 20,
          contact: 'krisduffy@aquasure.com', phone: '(985) 445-2688'
        },
        {
          id: 10,
          contact: 'vancehansen@ultrimax.com', phone: '(875) 509-3501'
        },
        {
          id: 21,
          contact: 'williamsonbrowning@acusage.com', phone: '(975) 511-3238'
        }
      ]
    },
    {
      studyid: 36,
      title: 'Elit pariatur cillum ex nulla ea.',
      studystart: '2014-03-27 06:26:23',
      studyend: '2016-08-21 03:25:33',
      createdby: 17,
      channels: [
        29,
        47,
        59,
        53
      ],
      alerts: false,
      notify: [
        {
          id: 20,
          contact: 'barbaracurry@frenex.com', phone: '(927) 484-2795'
        },
        {
          id: 30,
          contact: 'changfranklin@momentia.com', phone: '(806) 476-3486'
        },
        {
          id: 30,
          contact: 'christinarosales@geekmosis.com', phone: '(887) 447-2414'
        }
      ]
    },
    {
      studyid: 37,
      title: 'Occaecat eiusmod quis ex veniam et in nulla nulla.',
      studystart: '2019-04-18 06:06:46',
      studyend: '2016-02-26 04:11:11',
      createdby: 12,
      channels: [
        50,
        1,
        52,
        14
      ],
      alerts: false,
      notify: [
        {
          id: 17,
          contact: 'toniakeith@pushcart.com', phone: '(899) 479-2657'
        },
        {
          id: 22,
          contact: 'fultonperez@macronaut.com', phone: '(911) 545-2020'
        },
        {
          id: 30,
          contact: 'mckaybates@insuron.com', phone: '(903) 540-3710'
        }
      ]
    },
    {
      studyid: 38,
      title: 'Reprehenderit sunt cupidatat fugiat qui mollit ea incididunt veniam aute anim esse officia duis.',
      studystart: '2019-08-11 11:59:11',
      studyend: '2021-01-08 04:33:32',
      createdby: 17,
      channels: [
        47,
        3,
        52,
        50
      ],
      alerts: true,
      notify: [
        {
          id: 1,
          contact: 'staceyharrell@rooforia.com', phone: '(807) 452-3551'
        },
        {
          id: 1,
          contact: 'hartjacobson@applideck.com', phone: '(927) 444-2635'
        },
        {
          id: 7,
          contact: 'doylekerr@isoswitch.com', phone: '(847) 484-3551'
        }
      ]
    },
    {
      studyid: 39,
      title: 'Est Lorem voluptate dolor enim.',
      studystart: '2017-03-20 01:29:13',
      studyend: '2020-05-01 10:32:27',
      createdby: 19,
      channels: [
        20,
        50,
        57,
        40
      ],
      alerts: false,
      notify: [
        {
          id: 24,
          contact: 'rosecunningham@gluid.com', phone: '(939) 419-2935'
        },
        {
          id: 1,
          contact: 'allisoncampbell@velity.com', phone: '(826) 594-3529'
        },
        {
          id: 19,
          contact: 'mackrosario@valreda.com', phone: '(935) 408-2483'
        }
      ]
    },
    {
      studyid: 40,
      title: 'Ut enim aliquip excepteur commodo nulla amet consectetur voluptate esse exercitation.',
      studystart: '2015-10-14 07:47:40',
      studyend: '2017-10-13 06:32:18',
      createdby: 15,
      channels: [
        22,
        38,
        43,
        25
      ],
      alerts: false,
      notify: [
        {
          id: 26,
          contact: 'oneilhorn@vitricomp.com', phone: '(871) 589-3902'
        },
        {
          id: 30,
          contact: 'howellstrong@menbrain.com', phone: '(951) 472-3202'
        },
        {
          id: 20,
          contact: 'kentlara@geekfarm.com', phone: '(992) 520-3148'
        }
      ]
    },
    {
      studyid: 41,
      title: 'Ex exercitation culpa sunt officia culpa duis irure fugiat laboris qui laboris.',
      studystart: '2019-04-05 10:19:09',
      studyend: '2017-12-27 07:22:39',
      createdby: 12,
      channels: [
        63,
        4,
        11,
        25
      ],
      alerts: false,
      notify: [
        {
          id: 3,
          contact: 'gregorymurray@bovis.com', phone: '(925) 413-3629'
        },
        {
          id: 19,
          contact: 'genevieveharrison@tellifly.com', phone: '(933) 461-3501'
        },
        {
          id: 29,
          contact: 'delorissykes@imperium.com', phone: '(848) 411-2170'
        }
      ]
    },
    {
      studyid: 42,
      title: 'Duis labore sunt elit excepteur aliquip deserunt sunt pariatur incididunt.',
      studystart: '2015-09-06 02:47:55',
      studyend: '2016-10-19 12:33:05',
      createdby: 16,
      channels: [
        30,
        56,
        48,
        35
      ],
      alerts: false,
      notify: [
        {
          id: 17,
          contact: 'mcknightthomas@ovolo.com', phone: '(988) 579-2070'
        },
        {
          id: 3,
          contact: 'juanitajustice@primordia.com', phone: '(963) 535-3047'
        },
        {
          id: 22,
          contact: 'drakeconley@isodrive.com', phone: '(817) 542-2907'
        }
      ]
    },
    {
      studyid: 43,
      title: 'Consequat voluptate nostrud nisi elit ex esse cupidatat pariatur enim do adipisicing.',
      studystart: '2018-07-01 02:47:51',
      studyend: '2015-02-19 11:53:22',
      createdby: 13,
      channels: [
        64,
        1,
        14,
        39
      ],
      alerts: false,
      notify: [
        {
          id: 10,
          contact: 'grimeswest@musix.com', phone: '(924) 562-2905'
        },
        {
          id: 20,
          contact: 'stephensmunoz@realmo.com', phone: '(866) 408-3067'
        },
        {
          id: 8,
          contact: 'priscillahughes@biflex.com', phone: '(849) 475-2182'
        }
      ]
    },
    {
      studyid: 44,
      title: 'Velit reprehenderit id nisi enim.',
      studystart: '2021-01-22 02:19:32',
      studyend: '2017-06-13 01:58:23',
      createdby: 15,
      channels: [
        55,
        34,
        17,
        20
      ],
      alerts: false,
      notify: [
        {
          id: 2,
          contact: 'sandovalhodges@bedder.com', phone: '(895) 533-3020'
        },
        {
          id: 9,
          contact: 'esteshensley@zillar.com', phone: '(881) 406-2274'
        },
        {
          id: 24,
          contact: 'freidasolomon@sonique.com', phone: '(823) 563-2171'
        }
      ]
    },
    {
      studyid: 45,
      title: 'Reprehenderit magna ex sit elit excepteur aute exercitation ad nulla dolor voluptate quis consectetur.',
      studystart: '2018-12-14 08:12:28',
      studyend: '2015-08-24 09:01:17',
      createdby: 15,
      channels: [
        62,
        6,
        3,
        22
      ],
      alerts: true,
      notify: [
        {
          id: 20,
          contact: 'krisduffy@aquasure.com', phone: '(985) 445-2688'
        },
        {
          id: 10,
          contact: 'vancehansen@ultrimax.com', phone: '(875) 509-3501'
        },
        {
          id: 21,
          contact: 'williamsonbrowning@acusage.com', phone: '(975) 511-3238'
        }
      ]
    },
    {
      studyid: 46,
      title: 'Elit pariatur cillum ex nulla ea.',
      studystart: '2014-03-27 06:26:23',
      studyend: '2016-08-21 03:25:33',
      createdby: 17,
      channels: [
        29,
        47,
        59,
        53
      ],
      alerts: false,
      notify: [
        {
          id: 20,
          contact: 'barbaracurry@frenex.com', phone: '(927) 484-2795'
        },
        {
          id: 30,
          contact: 'changfranklin@momentia.com', phone: '(806) 476-3486'
        },
        {
          id: 30,
          contact: 'christinarosales@geekmosis.com', phone: '(887) 447-2414'
        }
      ]
    },
    {
      studyid: 47,
      title: 'Occaecat eiusmod quis ex veniam et in nulla nulla.',
      studystart: '2019-04-18 06:06:46',
      studyend: '2016-02-26 04:11:11',
      createdby: 12,
      channels: [
        50,
        1,
        52,
        14
      ],
      alerts: false,
      notify: [
        {
          id: 17,
          contact: 'toniakeith@pushcart.com', phone: '(899) 479-2657'
        },
        {
          id: 22,
          contact: 'fultonperez@macronaut.com', phone: '(911) 545-2020'
        },
        {
          id: 30,
          contact: 'mckaybates@insuron.com', phone: '(903) 540-3710'
        }
      ]
    },
    {
      studyid: 48,
      title: 'Reprehenderit sunt cupidatat fugiat qui mollit ea incididunt veniam aute anim esse officia duis.',
      studystart: '2019-08-11 11:59:11',
      studyend: '2021-01-08 04:33:32',
      createdby: 17,
      channels: [
        47,
        3,
        52,
        50
      ],
      alerts: true,
      notify: [
        {
          id: 1,
          contact: 'staceyharrell@rooforia.com', phone: '(807) 452-3551'
        },
        {
          id: 1,
          contact: 'hartjacobson@applideck.com', phone: '(927) 444-2635'
        },
        {
          id: 7,
          contact: 'doylekerr@isoswitch.com', phone: '(847) 484-3551'
        }
      ]
    },
    {
      studyid: 49,
      title: 'Est Lorem voluptate dolor enim.',
      studystart: '2017-03-20 01:29:13',
      studyend: '2020-05-01 10:32:27',
      createdby: 19,
      channels: [
        20,
        50,
        57,
        40
      ],
      alerts: false,
      notify: [
        {
          id: 24,
          contact: 'rosecunningham@gluid.com', phone: '(939) 419-2935'
        },
        {
          id: 1,
          contact: 'allisoncampbell@velity.com', phone: '(826) 594-3529'
        },
        {
          id: 19,
          contact: 'mackrosario@valreda.com', phone: '(935) 408-2483'
        }
      ]
    },
    {
      studyid: 50,
      title: 'Ut enim aliquip excepteur commodo nulla amet consectetur voluptate esse exercitation.',
      studystart: '2015-10-14 07:47:40',
      studyend: '2017-10-13 06:32:18',
      createdby: 15,
      channels: [
        22,
        38,
        43,
        25
      ],
      alerts: false,
      notify: [
        {
          id: 26,
          contact: 'oneilhorn@vitricomp.com', phone: '(871) 589-3902'
        },
        {
          id: 30,
          contact: 'howellstrong@menbrain.com', phone: '(951) 472-3202'
        },
        {
          id: 20,
          contact: 'kentlara@geekfarm.com', phone: '(992) 520-3148'
        }
      ]
    },
    {
      studyid: 51,
      title: 'Ex exercitation culpa sunt officia culpa duis irure fugiat laboris qui laboris.',
      studystart: '2019-04-05 10:19:09',
      studyend: '2017-12-27 07:22:39',
      createdby: 12,
      channels: [
        63,
        4,
        11,
        25
      ],
      alerts: false,
      notify: [
        {
          id: 3,
          contact: 'gregorymurray@bovis.com', phone: '(925) 413-3629'
        },
        {
          id: 19,
          contact: 'genevieveharrison@tellifly.com', phone: '(933) 461-3501'
        },
        {
          id: 29,
          contact: 'delorissykes@imperium.com', phone: '(848) 411-2170'
        }
      ]
    },
    {
      studyid: 52,
      title: 'Duis labore sunt elit excepteur aliquip deserunt sunt pariatur incididunt.',
      studystart: '2015-09-06 02:47:55',
      studyend: '2016-10-19 12:33:05',
      createdby: 16,
      channels: [
        30,
        56,
        48,
        35
      ],
      alerts: false,
      notify: [
        {
          id: 17,
          contact: 'mcknightthomas@ovolo.com', phone: '(988) 579-2070'
        },
        {
          id: 3,
          contact: 'juanitajustice@primordia.com', phone: '(963) 535-3047'
        },
        {
          id: 22,
          contact: 'drakeconley@isodrive.com', phone: '(817) 542-2907'
        }
      ]
    },
    {
      studyid: 53,
      title: 'Consequat voluptate nostrud nisi elit ex esse cupidatat pariatur enim do adipisicing.',
      studystart: '2018-07-01 02:47:51',
      studyend: '2015-02-19 11:53:22',
      createdby: 13,
      channels: [
        64,
        1,
        14,
        39
      ],
      alerts: false,
      notify: [
        {
          id: 10,
          contact: 'grimeswest@musix.com', phone: '(924) 562-2905'
        },
        {
          id: 20,
          contact: 'stephensmunoz@realmo.com', phone: '(866) 408-3067'
        },
        {
          id: 8,
          contact: 'priscillahughes@biflex.com', phone: '(849) 475-2182'
        }
      ]
    },
    {
      studyid: 54,
      title: 'Velit reprehenderit id nisi enim.',
      studystart: '2021-01-22 02:19:32',
      studyend: '2017-06-13 01:58:23',
      createdby: 15,
      channels: [
        55,
        34,
        17,
        20
      ],
      alerts: false,
      notify: [
        {
          id: 2,
          contact: 'sandovalhodges@bedder.com', phone: '(895) 533-3020'
        },
        {
          id: 9,
          contact: 'esteshensley@zillar.com', phone: '(881) 406-2274'
        },
        {
          id: 24,
          contact: 'freidasolomon@sonique.com', phone: '(823) 563-2171'
        }
      ]
    },
    {
      studyid: 55,
      title: 'Reprehenderit magna ex sit elit excepteur aute exercitation ad nulla dolor voluptate quis consectetur.',
      studystart: '2018-12-14 08:12:28',
      studyend: '2015-08-24 09:01:17',
      createdby: 15,
      channels: [
        62,
        6,
        3,
        22
      ],
      alerts: true,
      notify: [
        {
          id: 20,
          contact: 'krisduffy@aquasure.com', phone: '(985) 445-2688'
        },
        {
          id: 10,
          contact: 'vancehansen@ultrimax.com', phone: '(875) 509-3501'
        },
        {
          id: 21,
          contact: 'williamsonbrowning@acusage.com', phone: '(975) 511-3238'
        }
      ]
    },
    {
      studyid: 56,
      title: 'Elit pariatur cillum ex nulla ea.',
      studystart: '2014-03-27 06:26:23',
      studyend: '2016-08-21 03:25:33',
      createdby: 17,
      channels: [
        29,
        47,
        59,
        53
      ],
      alerts: false,
      notify: [
        {
          id: 20,
          contact: 'barbaracurry@frenex.com', phone: '(927) 484-2795'
        },
        {
          id: 30,
          contact: 'changfranklin@momentia.com', phone: '(806) 476-3486'
        },
        {
          id: 30,
          contact: 'christinarosales@geekmosis.com', phone: '(887) 447-2414'
        }
      ]
    },
    {
      studyid: 57,
      title: 'Occaecat eiusmod quis ex veniam et in nulla nulla.',
      studystart: '2019-04-18 06:06:46',
      studyend: '2016-02-26 04:11:11',
      createdby: 12,
      channels: [
        50,
        1,
        52,
        14
      ],
      alerts: false,
      notify: [
        {
          id: 17,
          contact: 'toniakeith@pushcart.com', phone: '(899) 479-2657'
        },
        {
          id: 22,
          contact: 'fultonperez@macronaut.com', phone: '(911) 545-2020'
        },
        {
          id: 30,
          contact: 'mckaybates@insuron.com', phone: '(903) 540-3710'
        }
      ]
    },
    {
      studyid: 58,
      title: 'Reprehenderit sunt cupidatat fugiat qui mollit ea incididunt veniam aute anim esse officia duis.',
      studystart: '2019-08-11 11:59:11',
      studyend: '2021-01-08 04:33:32',
      createdby: 17,
      channels: [
        47,
        3,
        52,
        50
      ],
      alerts: true,
      notify: [
        {
          id: 1,
          contact: 'staceyharrell@rooforia.com', phone: '(807) 452-3551'
        },
        {
          id: 1,
          contact: 'hartjacobson@applideck.com', phone: '(927) 444-2635'
        },
        {
          id: 7,
          contact: 'doylekerr@isoswitch.com', phone: '(847) 484-3551'
        }
      ]
    },
    {
      studyid: 59,
      title: 'Est Lorem voluptate dolor enim.',
      studystart: '2017-03-20 01:29:13',
      studyend: '2020-05-01 10:32:27',
      createdby: 19,
      channels: [
        20,
        50,
        57,
        40
      ],
      alerts: false,
      notify: [
        {
          id: 24,
          contact: 'rosecunningham@gluid.com', phone: '(939) 419-2935'
        },
        {
          id: 1,
          contact: 'allisoncampbell@velity.com', phone: '(826) 594-3529'
        },
        {
          id: 19,
          contact: 'mackrosario@valreda.com', phone: '(935) 408-2483'
        }
      ]
    },
    {
      studyid: 60,
      title: 'Ut enim aliquip excepteur commodo nulla amet consectetur voluptate esse exercitation.',
      studystart: '2015-10-14 07:47:40',
      studyend: '2017-10-13 06:32:18',
      createdby: 15,
      channels: [
        22,
        38,
        43,
        25
      ],
      alerts: false,
      notify: [
        {
          id: 26,
          contact: 'oneilhorn@vitricomp.com', phone: '(871) 589-3902'
        },
        {
          id: 30,
          contact: 'howellstrong@menbrain.com', phone: '(951) 472-3202'
        },
        {
          id: 20,
          contact: 'kentlara@geekfarm.com', phone: '(992) 520-3148'
        }
      ]
    },
    {
      studyid: 61,
      title: 'Ex exercitation culpa sunt officia culpa duis irure fugiat laboris qui laboris.',
      studystart: '2019-04-05 10:19:09',
      studyend: '2017-12-27 07:22:39',
      createdby: 12,
      channels: [
        63,
        4,
        11,
        25
      ],
      alerts: false,
      notify: [
        {
          id: 3,
          contact: 'gregorymurray@bovis.com', phone: '(925) 413-3629'
        },
        {
          id: 19,
          contact: 'genevieveharrison@tellifly.com', phone: '(933) 461-3501'
        },
        {
          id: 29,
          contact: 'delorissykes@imperium.com', phone: '(848) 411-2170'
        }
      ]
    },
    {
      studyid: 62,
      title: 'Duis labore sunt elit excepteur aliquip deserunt sunt pariatur incididunt.',
      studystart: '2015-09-06 02:47:55',
      studyend: '2016-10-19 12:33:05',
      createdby: 16,
      channels: [
        30,
        56,
        48,
        35
      ],
      alerts: false,
      notify: [
        {
          id: 17,
          contact: 'mcknightthomas@ovolo.com', phone: '(988) 579-2070'
        },
        {
          id: 3,
          contact: 'juanitajustice@primordia.com', phone: '(963) 535-3047'
        },
        {
          id: 22,
          contact: 'drakeconley@isodrive.com', phone: '(817) 542-2907'
        }
      ]
    },
    {
      studyid: 63,
      title: 'Consequat voluptate nostrud nisi elit ex esse cupidatat pariatur enim do adipisicing.',
      studystart: '2018-07-01 02:47:51',
      studyend: '2015-02-19 11:53:22',
      createdby: 13,
      channels: [
        64,
        1,
        14,
        39
      ],
      alerts: false,
      notify: [
        {
          id: 10,
          contact: 'grimeswest@musix.com', phone: '(924) 562-2905'
        },
        {
          id: 20,
          contact: 'stephensmunoz@realmo.com', phone: '(866) 408-3067'
        },
        {
          id: 8,
          contact: 'priscillahughes@biflex.com', phone: '(849) 475-2182'
        }
      ]
    },
    {
      studyid: 64,
      title: 'Velit reprehenderit id nisi enim.',
      studystart: '2021-01-22 02:19:32',
      studyend: '2017-06-13 01:58:23',
      createdby: 15,
      channels: [
        55,
        34,
        17,
        20
      ],
      alerts: false,
      notify: [
        {
          id: 2,
          contact: 'sandovalhodges@bedder.com', phone: '(895) 533-3020'
        },
        {
          id: 9,
          contact: 'esteshensley@zillar.com', phone: '(881) 406-2274'
        },
        {
          id: 24,
          contact: 'freidasolomon@sonique.com', phone: '(823) 563-2171'
        }
      ]
    },
    {
      studyid: 65,
      title: 'Reprehenderit magna ex sit elit excepteur aute exercitation ad nulla dolor voluptate quis consectetur.',
      studystart: '2018-12-14 08:12:28',
      studyend: '2015-08-24 09:01:17',
      createdby: 15,
      channels: [
        62,
        6,
        3,
        22
      ],
      alerts: true,
      notify: [
        {
          id: 20,
          contact: 'krisduffy@aquasure.com', phone: '(985) 445-2688'
        },
        {
          id: 10,
          contact: 'vancehansen@ultrimax.com', phone: '(875) 509-3501'
        },
        {
          id: 21,
          contact: 'williamsonbrowning@acusage.com', phone: '(975) 511-3238'
        }
      ]
    },
    {
      studyid: 66,
      title: 'Elit pariatur cillum ex nulla ea.',
      studystart: '2014-03-27 06:26:23',
      studyend: '2016-08-21 03:25:33',
      createdby: 17,
      channels: [
        29,
        47,
        59,
        53
      ],
      alerts: false,
      notify: [
        {
          id: 20,
          contact: 'barbaracurry@frenex.com', phone: '(927) 484-2795'
        },
        {
          id: 30,
          contact: 'changfranklin@momentia.com', phone: '(806) 476-3486'
        },
        {
          id: 30,
          contact: 'christinarosales@geekmosis.com', phone: '(887) 447-2414'
        }
      ]
    },
    {
      studyid: 67,
      title: 'Occaecat eiusmod quis ex veniam et in nulla nulla.',
      studystart: '2019-04-18 06:06:46',
      studyend: '2016-02-26 04:11:11',
      createdby: 12,
      channels: [
        50,
        1,
        52,
        14
      ],
      alerts: false,
      notify: [
        {
          id: 17,
          contact: 'toniakeith@pushcart.com', phone: '(899) 479-2657'
        },
        {
          id: 22,
          contact: 'fultonperez@macronaut.com', phone: '(911) 545-2020'
        },
        {
          id: 30,
          contact: 'mckaybates@insuron.com', phone: '(903) 540-3710'
        }
      ]
    },
    {
      studyid: 68,
      title: 'Reprehenderit sunt cupidatat fugiat qui mollit ea incididunt veniam aute anim esse officia duis.',
      studystart: '2019-08-11 11:59:11',
      studyend: '2021-01-08 04:33:32',
      createdby: 17,
      channels: [
        47,
        3,
        52,
        50
      ],
      alerts: true,
      notify: [
        {
          id: 1,
          contact: 'staceyharrell@rooforia.com', phone: '(807) 452-3551'
        },
        {
          id: 1,
          contact: 'hartjacobson@applideck.com', phone: '(927) 444-2635'
        },
        {
          id: 7,
          contact: 'doylekerr@isoswitch.com', phone: '(847) 484-3551'
        }
      ]
    },
    {
      studyid: 69,
      title: 'Est Lorem voluptate dolor enim.',
      studystart: '2017-03-20 01:29:13',
      studyend: '2020-05-01 10:32:27',
      createdby: 19,
      channels: [
        20,
        50,
        57,
        40
      ],
      alerts: false,
      notify: [
        {
          id: 24,
          contact: 'rosecunningham@gluid.com', phone: '(939) 419-2935'
        },
        {
          id: 1,
          contact: 'allisoncampbell@velity.com', phone: '(826) 594-3529'
        },
        {
          id: 19,
          contact: 'mackrosario@valreda.com', phone: '(935) 408-2483'
        }
      ]
    },
    {
      studyid: 70,
      title: 'Ut enim aliquip excepteur commodo nulla amet consectetur voluptate esse exercitation.',
      studystart: '2015-10-14 07:47:40',
      studyend: '2017-10-13 06:32:18',
      createdby: 15,
      channels: [
        22,
        38,
        43,
        25
      ],
      alerts: false,
      notify: [
        {
          id: 26,
          contact: 'oneilhorn@vitricomp.com', phone: '(871) 589-3902'
        },
        {
          id: 30,
          contact: 'howellstrong@menbrain.com', phone: '(951) 472-3202'
        },
        {
          id: 20,
          contact: 'kentlara@geekfarm.com', phone: '(992) 520-3148'
        }
      ]
    },
    {
      studyid: 71,
      title: 'Ex exercitation culpa sunt officia culpa duis irure fugiat laboris qui laboris.',
      studystart: '2019-04-05 10:19:09',
      studyend: '2017-12-27 07:22:39',
      createdby: 12,
      channels: [
        63,
        4,
        11,
        25
      ],
      alerts: false,
      notify: [
        {
          id: 3,
          contact: 'gregorymurray@bovis.com', phone: '(925) 413-3629'
        },
        {
          id: 19,
          contact: 'genevieveharrison@tellifly.com', phone: '(933) 461-3501'
        },
        {
          id: 29,
          contact: 'delorissykes@imperium.com', phone: '(848) 411-2170'
        }
      ]
    },
    {
      studyid: 72,
      title: 'Duis labore sunt elit excepteur aliquip deserunt sunt pariatur incididunt.',
      studystart: '2015-09-06 02:47:55',
      studyend: '2016-10-19 12:33:05',
      createdby: 16,
      channels: [
        30,
        56,
        48,
        35
      ],
      alerts: false,
      notify: [
        {
          id: 17,
          contact: 'mcknightthomas@ovolo.com', phone: '(988) 579-2070'
        },
        {
          id: 3,
          contact: 'juanitajustice@primordia.com', phone: '(963) 535-3047'
        },
        {
          id: 22,
          contact: 'drakeconley@isodrive.com', phone: '(817) 542-2907'
        }
      ]
    },
    {
      studyid: 73,
      title: 'Consequat voluptate nostrud nisi elit ex esse cupidatat pariatur enim do adipisicing.',
      studystart: '2018-07-01 02:47:51',
      studyend: '2015-02-19 11:53:22',
      createdby: 13,
      channels: [
        64,
        1,
        14,
        39
      ],
      alerts: false,
      notify: [
        {
          id: 10,
          contact: 'grimeswest@musix.com', phone: '(924) 562-2905'
        },
        {
          id: 20,
          contact: 'stephensmunoz@realmo.com', phone: '(866) 408-3067'
        },
        {
          id: 8,
          contact: 'priscillahughes@biflex.com', phone: '(849) 475-2182'
        }
      ]
    },
    {
      studyid: 74,
      title: 'Velit reprehenderit id nisi enim.',
      studystart: '2021-01-22 02:19:32',
      studyend: '2017-06-13 01:58:23',
      createdby: 15,
      channels: [
        55,
        34,
        17,
        20
      ],
      alerts: false,
      notify: [
        {
          id: 2,
          contact: 'sandovalhodges@bedder.com', phone: '(895) 533-3020'
        },
        {
          id: 9,
          contact: 'esteshensley@zillar.com', phone: '(881) 406-2274'
        },
        {
          id: 24,
          contact: 'freidasolomon@sonique.com', phone: '(823) 563-2171'
        }
      ]
    },
    {
      studyid: 75,
      title: 'Reprehenderit magna ex sit elit excepteur aute exercitation ad nulla dolor voluptate quis consectetur.',
      studystart: '2018-12-14 08:12:28',
      studyend: '2015-08-24 09:01:17',
      createdby: 15,
      channels: [
        62,
        6,
        3,
        22
      ],
      alerts: true,
      notify: [
        {
          id: 20,
          contact: 'krisduffy@aquasure.com', phone: '(985) 445-2688'
        },
        {
          id: 10,
          contact: 'vancehansen@ultrimax.com', phone: '(875) 509-3501'
        },
        {
          id: 21,
          contact: 'williamsonbrowning@acusage.com', phone: '(975) 511-3238'
        }
      ]
    },
    {
      studyid: 76,
      title: 'Elit pariatur cillum ex nulla ea.',
      studystart: '2014-03-27 06:26:23',
      studyend: '2016-08-21 03:25:33',
      createdby: 17,
      channels: [
        29,
        47,
        59,
        53
      ],
      alerts: false,
      notify: [
        {
          id: 20,
          contact: 'barbaracurry@frenex.com', phone: '(927) 484-2795'
        },
        {
          id: 30,
          contact: 'changfranklin@momentia.com', phone: '(806) 476-3486'
        },
        {
          id: 30,
          contact: 'christinarosales@geekmosis.com', phone: '(887) 447-2414'
        }
      ]
    },
    {
      studyid: 77,
      title: 'Occaecat eiusmod quis ex veniam et in nulla nulla.',
      studystart: '2019-04-18 06:06:46',
      studyend: '2016-02-26 04:11:11',
      createdby: 12,
      channels: [
        50,
        1,
        52,
        14
      ],
      alerts: false,
      notify: [
        {
          id: 17,
          contact: 'toniakeith@pushcart.com', phone: '(899) 479-2657'
        },
        {
          id: 22,
          contact: 'fultonperez@macronaut.com', phone: '(911) 545-2020'
        },
        {
          id: 30,
          contact: 'mckaybates@insuron.com', phone: '(903) 540-3710'
        }
      ]
    },
    {
      studyid: 78,
      title: 'Reprehenderit sunt cupidatat fugiat qui mollit ea incididunt veniam aute anim esse officia duis.',
      studystart: '2019-08-11 11:59:11',
      studyend: '2021-01-08 04:33:32',
      createdby: 17,
      channels: [
        47,
        3,
        52,
        50
      ],
      alerts: true,
      notify: [
        {
          id: 1,
          contact: 'staceyharrell@rooforia.com', phone: '(807) 452-3551'
        },
        {
          id: 1,
          contact: 'hartjacobson@applideck.com', phone: '(927) 444-2635'
        },
        {
          id: 7,
          contact: 'doylekerr@isoswitch.com', phone: '(847) 484-3551'
        }
      ]
    },
    {
      studyid: 79,
      title: 'Est Lorem voluptate dolor enim.',
      studystart: '2017-03-20 01:29:13',
      studyend: '2020-05-01 10:32:27',
      createdby: 19,
      channels: [
        20,
        50,
        57,
        40
      ],
      alerts: false,
      notify: [
        {
          id: 24,
          contact: 'rosecunningham@gluid.com', phone: '(939) 419-2935'
        },
        {
          id: 1,
          contact: 'allisoncampbell@velity.com', phone: '(826) 594-3529'
        },
        {
          id: 19,
          contact: 'mackrosario@valreda.com', phone: '(935) 408-2483'
        }
      ]
    },
    {
      studyid: 80,
      title: 'Ut enim aliquip excepteur commodo nulla amet consectetur voluptate esse exercitation.',
      studystart: '2015-10-14 07:47:40',
      studyend: '2017-10-13 06:32:18',
      createdby: 15,
      channels: [
        22,
        38,
        43,
        25
      ],
      alerts: false,
      notify: [
        {
          id: 26,
          contact: 'oneilhorn@vitricomp.com', phone: '(871) 589-3902'
        },
        {
          id: 30,
          contact: 'howellstrong@menbrain.com', phone: '(951) 472-3202'
        },
        {
          id: 20,
          contact: 'kentlara@geekfarm.com', phone: '(992) 520-3148'
        }
      ]
    },
    {
      studyid: 81,
      title: 'Ex exercitation culpa sunt officia culpa duis irure fugiat laboris qui laboris.',
      studystart: '2019-04-05 10:19:09',
      studyend: '2017-12-27 07:22:39',
      createdby: 12,
      channels: [
        63,
        4,
        11,
        25
      ],
      alerts: false,
      notify: [
        {
          id: 3,
          contact: 'gregorymurray@bovis.com', phone: '(925) 413-3629'
        },
        {
          id: 19,
          contact: 'genevieveharrison@tellifly.com', phone: '(933) 461-3501'
        },
        {
          id: 29,
          contact: 'delorissykes@imperium.com', phone: '(848) 411-2170'
        }
      ]
    },
    {
      studyid: 82,
      title: 'Duis labore sunt elit excepteur aliquip deserunt sunt pariatur incididunt.',
      studystart: '2015-09-06 02:47:55',
      studyend: '2016-10-19 12:33:05',
      createdby: 16,
      channels: [
        30,
        56,
        48,
        35
      ],
      alerts: false,
      notify: [
        {
          id: 17,
          contact: 'mcknightthomas@ovolo.com', phone: '(988) 579-2070'
        },
        {
          id: 3,
          contact: 'juanitajustice@primordia.com', phone: '(963) 535-3047'
        },
        {
          id: 22,
          contact: 'drakeconley@isodrive.com', phone: '(817) 542-2907'
        }
      ]
    },
    {
      studyid: 83,
      title: 'Consequat voluptate nostrud nisi elit ex esse cupidatat pariatur enim do adipisicing.',
      studystart: '2018-07-01 02:47:51',
      studyend: '2015-02-19 11:53:22',
      createdby: 13,
      channels: [
        64,
        1,
        14,
        39
      ],
      alerts: false,
      notify: [
        {
          id: 10,
          contact: 'grimeswest@musix.com', phone: '(924) 562-2905'
        },
        {
          id: 20,
          contact: 'stephensmunoz@realmo.com', phone: '(866) 408-3067'
        },
        {
          id: 8,
          contact: 'priscillahughes@biflex.com', phone: '(849) 475-2182'
        }
      ]
    },
    {
      studyid: 84,
      title: 'Velit reprehenderit id nisi enim.',
      studystart: '2021-01-22 02:19:32',
      studyend: '2017-06-13 01:58:23',
      createdby: 15,
      channels: [
        55,
        34,
        17,
        20
      ],
      alerts: false,
      notify: [
        {
          id: 2,
          contact: 'sandovalhodges@bedder.com', phone: '(895) 533-3020'
        },
        {
          id: 9,
          contact: 'esteshensley@zillar.com', phone: '(881) 406-2274'
        },
        {
          id: 24,
          contact: 'freidasolomon@sonique.com', phone: '(823) 563-2171'
        }
      ]
    },
    {
      studyid: 85,
      title: 'Reprehenderit magna ex sit elit excepteur aute exercitation ad nulla dolor voluptate quis consectetur.',
      studystart: '2018-12-14 08:12:28',
      studyend: '2015-08-24 09:01:17',
      createdby: 15,
      channels: [
        62,
        6,
        3,
        22
      ],
      alerts: true,
      notify: [
        {
          id: 20,
          contact: 'krisduffy@aquasure.com', phone: '(985) 445-2688'
        },
        {
          id: 10,
          contact: 'vancehansen@ultrimax.com', phone: '(875) 509-3501'
        },
        {
          id: 21,
          contact: 'williamsonbrowning@acusage.com', phone: '(975) 511-3238'
        }
      ]
    },
    {
      studyid: 86,
      title: 'Elit pariatur cillum ex nulla ea.',
      studystart: '2014-03-27 06:26:23',
      studyend: '2016-08-21 03:25:33',
      createdby: 17,
      channels: [
        29,
        47,
        59,
        53
      ],
      alerts: false,
      notify: [
        {
          id: 20,
          contact: 'barbaracurry@frenex.com', phone: '(927) 484-2795'
        },
        {
          id: 30,
          contact: 'changfranklin@momentia.com', phone: '(806) 476-3486'
        },
        {
          id: 30,
          contact: 'christinarosales@geekmosis.com', phone: '(887) 447-2414'
        }
      ]
    },
    {
      studyid: 87,
      title: 'Occaecat eiusmod quis ex veniam et in nulla nulla.',
      studystart: '2019-04-18 06:06:46',
      studyend: '2016-02-26 04:11:11',
      createdby: 12,
      channels: [
        50,
        1,
        52,
        14
      ],
      alerts: false,
      notify: [
        {
          id: 17,
          contact: 'toniakeith@pushcart.com', phone: '(899) 479-2657'
        },
        {
          id: 22,
          contact: 'fultonperez@macronaut.com', phone: '(911) 545-2020'
        },
        {
          id: 30,
          contact: 'mckaybates@insuron.com', phone: '(903) 540-3710'
        }
      ]
    },
    {
      studyid: 88,
      title: 'Reprehenderit sunt cupidatat fugiat qui mollit ea incididunt veniam aute anim esse officia duis.',
      studystart: '2019-08-11 11:59:11',
      studyend: '2021-01-08 04:33:32',
      createdby: 17,
      channels: [
        47,
        3,
        52,
        50
      ],
      alerts: true,
      notify: [
        {
          id: 1,
          contact: 'staceyharrell@rooforia.com', phone: '(807) 452-3551'
        },
        {
          id: 1,
          contact: 'hartjacobson@applideck.com', phone: '(927) 444-2635'
        },
        {
          id: 7,
          contact: 'doylekerr@isoswitch.com', phone: '(847) 484-3551'
        }
      ]
    },
    {
      studyid: 89,
      title: 'Est Lorem voluptate dolor enim.',
      studystart: '2017-03-20 01:29:13',
      studyend: '2020-05-01 10:32:27',
      createdby: 19,
      channels: [
        20,
        50,
        57,
        40
      ],
      alerts: false,
      notify: [
        {
          id: 24,
          contact: 'rosecunningham@gluid.com', phone: '(939) 419-2935'
        },
        {
          id: 1,
          contact: 'allisoncampbell@velity.com', phone: '(826) 594-3529'
        },
        {
          id: 19,
          contact: 'mackrosario@valreda.com', phone: '(935) 408-2483'
        }
      ]
    },
    {
      studyid: 90,
      title: 'Ut enim aliquip excepteur commodo nulla amet consectetur voluptate esse exercitation.',
      studystart: '2015-10-14 07:47:40',
      studyend: '2017-10-13 06:32:18',
      createdby: 15,
      channels: [
        22,
        38,
        43,
        25
      ],
      alerts: false,
      notify: [
        {
          id: 26,
          contact: 'oneilhorn@vitricomp.com', phone: '(871) 589-3902'
        },
        {
          id: 30,
          contact: 'howellstrong@menbrain.com', phone: '(951) 472-3202'
        },
        {
          id: 20,
          contact: 'kentlara@geekfarm.com', phone: '(992) 520-3148'
        }
      ]
    },
    {
      studyid: 91,
      title: 'Ex exercitation culpa sunt officia culpa duis irure fugiat laboris qui laboris.',
      studystart: '2019-04-05 10:19:09',
      studyend: '2017-12-27 07:22:39',
      createdby: 12,
      channels: [
        63,
        4,
        11,
        25
      ],
      alerts: false,
      notify: [
        {
          id: 3,
          contact: 'gregorymurray@bovis.com', phone: '(925) 413-3629'
        },
        {
          id: 19,
          contact: 'genevieveharrison@tellifly.com', phone: '(933) 461-3501'
        },
        {
          id: 29,
          contact: 'delorissykes@imperium.com', phone: '(848) 411-2170'
        }
      ]
    },
    {
      studyid: 92,
      title: 'Duis labore sunt elit excepteur aliquip deserunt sunt pariatur incididunt.',
      studystart: '2015-09-06 02:47:55',
      studyend: '2016-10-19 12:33:05',
      createdby: 16,
      channels: [
        30,
        56,
        48,
        35
      ],
      alerts: false,
      notify: [
        {
          id: 17,
          contact: 'mcknightthomas@ovolo.com', phone: '(988) 579-2070'
        },
        {
          id: 3,
          contact: 'juanitajustice@primordia.com', phone: '(963) 535-3047'
        },
        {
          id: 22,
          contact: 'drakeconley@isodrive.com', phone: '(817) 542-2907'
        }
      ]
    },
    {
      studyid: 93,
      title: 'Consequat voluptate nostrud nisi elit ex esse cupidatat pariatur enim do adipisicing.',
      studystart: '2018-07-01 02:47:51',
      studyend: '2015-02-19 11:53:22',
      createdby: 13,
      channels: [
        64,
        1,
        14,
        39
      ],
      alerts: false,
      notify: [
        {
          id: 10,
          contact: 'grimeswest@musix.com', phone: '(924) 562-2905'
        },
        {
          id: 20,
          contact: 'stephensmunoz@realmo.com', phone: '(866) 408-3067'
        },
        {
          id: 8,
          contact: 'priscillahughes@biflex.com', phone: '(849) 475-2182'
        }
      ]
    },
    {
      studyid: 94,
      title: 'Velit reprehenderit id nisi enim.',
      studystart: '2021-01-22 02:19:32',
      studyend: '2017-06-13 01:58:23',
      createdby: 15,
      channels: [
        55,
        34,
        17,
        20
      ],
      alerts: false,
      notify: [
        {
          id: 2,
          contact: 'sandovalhodges@bedder.com', phone: '(895) 533-3020'
        },
        {
          id: 9,
          contact: 'esteshensley@zillar.com', phone: '(881) 406-2274'
        },
        {
          id: 24,
          contact: 'freidasolomon@sonique.com', phone: '(823) 563-2171'
        }
      ]
    },
    {
      studyid: 95,
      title: 'Reprehenderit magna ex sit elit excepteur aute exercitation ad nulla dolor voluptate quis consectetur.',
      studystart: '2018-12-14 08:12:28',
      studyend: '2015-08-24 09:01:17',
      createdby: 15,
      channels: [
        62,
        6,
        3,
        22
      ],
      alerts: true,
      notify: [
        {
          id: 20,
          contact: 'krisduffy@aquasure.com', phone: '(985) 445-2688'
        },
        {
          id: 10,
          contact: 'vancehansen@ultrimax.com', phone: '(875) 509-3501'
        },
        {
          id: 21,
          contact: 'williamsonbrowning@acusage.com', phone: '(975) 511-3238'
        }
      ]
    },
    {
      studyid: 96,
      title: 'Elit pariatur cillum ex nulla ea.',
      studystart: '2014-03-27 06:26:23',
      studyend: '2016-08-21 03:25:33',
      createdby: 17,
      channels: [
        29,
        47,
        59,
        53
      ],
      alerts: false,
      notify: [
        {
          id: 20,
          contact: 'barbaracurry@frenex.com', phone: '(927) 484-2795'
        },
        {
          id: 30,
          contact: 'changfranklin@momentia.com', phone: '(806) 476-3486'
        },
        {
          id: 30,
          contact: 'christinarosales@geekmosis.com', phone: '(887) 447-2414'
        }
      ]
    },
    {
      studyid: 97,
      title: 'Occaecat eiusmod quis ex veniam et in nulla nulla.',
      studystart: '2019-04-18 06:06:46',
      studyend: '2016-02-26 04:11:11',
      createdby: 12,
      channels: [
        50,
        1,
        52,
        14
      ],
      alerts: false,
      notify: [
        {
          id: 17,
          contact: 'toniakeith@pushcart.com', phone: '(899) 479-2657'
        },
        {
          id: 22,
          contact: 'fultonperez@macronaut.com', phone: '(911) 545-2020'
        },
        {
          id: 30,
          contact: 'mckaybates@insuron.com', phone: '(903) 540-3710'
        }
      ]
    },
    {
      studyid: 98,
      title: 'Reprehenderit sunt cupidatat fugiat qui mollit ea incididunt veniam aute anim esse officia duis.',
      studystart: '2019-08-11 11:59:11',
      studyend: '2021-01-08 04:33:32',
      createdby: 17,
      channels: [
        47,
        3,
        52,
        50
      ],
      alerts: true,
      notify: [
        {
          id: 1,
          contact: 'staceyharrell@rooforia.com', phone: '(807) 452-3551'
        },
        {
          id: 1,
          contact: 'hartjacobson@applideck.com', phone: '(927) 444-2635'
        },
        {
          id: 7,
          contact: 'doylekerr@isoswitch.com', phone: '(847) 484-3551'
        }
      ]
    },
    {
      studyid: 99,
      title: 'Est Lorem voluptate dolor enim.',
      studystart: '2017-03-20 01:29:13',
      studyend: '2020-05-01 10:32:27',
      createdby: 19,
      channels: [
        20,
        50,
        57,
        40
      ],
      alerts: false,
      notify: [
        {
          id: 24,
          contact: 'rosecunningham@gluid.com', phone: '(939) 419-2935'
        },
        {
          id: 1,
          contact: 'allisoncampbell@velity.com', phone: '(826) 594-3529'
        },
        {
          id: 19,
          contact: 'mackrosario@valreda.com', phone: '(935) 408-2483'
        }
      ]
    },
    {
      studyid: 100,
      title: 'Ut enim aliquip excepteur commodo nulla amet consectetur voluptate esse exercitation.',
      studystart: '2015-10-14 07:47:40',
      studyend: '2017-10-13 06:32:18',
      createdby: 15,
      channels: [
        22,
        38,
        43,
        25
      ],
      alerts: false,
      notify: [
        {
          id: 26,
          contact: 'oneilhorn@vitricomp.com', phone: '(871) 589-3902'
        },
        {
          id: 30,
          contact: 'howellstrong@menbrain.com', phone: '(951) 472-3202'
        },
        {
          id: 20,
          contact: 'kentlara@geekfarm.com', phone: '(992) 520-3148'
        }
      ]
    },
    {
      studyid: 101,
      title: 'Ex exercitation culpa sunt officia culpa duis irure fugiat laboris qui laboris.',
      studystart: '2019-04-05 10:19:09',
      studyend: '2017-12-27 07:22:39',
      createdby: 12,
      channels: [
        63,
        4,
        11,
        25
      ],
      alerts: false,
      notify: [
        {
          id: 3,
          contact: 'gregorymurray@bovis.com', phone: '(925) 413-3629'
        },
        {
          id: 19,
          contact: 'genevieveharrison@tellifly.com', phone: '(933) 461-3501'
        },
        {
          id: 29,
          contact: 'delorissykes@imperium.com', phone: '(848) 411-2170'
        }
      ]
    },
    {
      studyid: 102,
      title: 'Duis labore sunt elit excepteur aliquip deserunt sunt pariatur incididunt.',
      studystart: '2015-09-06 02:47:55',
      studyend: '2016-10-19 12:33:05',
      createdby: 16,
      channels: [
        30,
        56,
        48,
        35
      ],
      alerts: false,
      notify: [
        {
          id: 17,
          contact: 'mcknightthomas@ovolo.com', phone: '(988) 579-2070'
        },
        {
          id: 3,
          contact: 'juanitajustice@primordia.com', phone: '(963) 535-3047'
        },
        {
          id: 22,
          contact: 'drakeconley@isodrive.com', phone: '(817) 542-2907'
        }
      ]
    },
    {
      studyid: 103,
      title: 'Consequat voluptate nostrud nisi elit ex esse cupidatat pariatur enim do adipisicing.',
      studystart: '2018-07-01 02:47:51',
      studyend: '2015-02-19 11:53:22',
      createdby: 13,
      channels: [
        64,
        1,
        14,
        39
      ],
      alerts: false,
      notify: [
        {
          id: 10,
          contact: 'grimeswest@musix.com', phone: '(924) 562-2905'
        },
        {
          id: 20,
          contact: 'stephensmunoz@realmo.com', phone: '(866) 408-3067'
        },
        {
          id: 8,
          contact: 'priscillahughes@biflex.com', phone: '(849) 475-2182'
        }
      ]
    },
    {
      studyid: 104,
      title: 'Velit reprehenderit id nisi enim.',
      studystart: '2021-01-22 02:19:32',
      studyend: '2017-06-13 01:58:23',
      createdby: 15,
      channels: [
        55,
        34,
        17,
        20
      ],
      alerts: false,
      notify: [
        {
          id: 2,
          contact: 'sandovalhodges@bedder.com', phone: '(895) 533-3020'
        },
        {
          id: 9,
          contact: 'esteshensley@zillar.com', phone: '(881) 406-2274'
        },
        {
          id: 24,
          contact: 'freidasolomon@sonique.com', phone: '(823) 563-2171'
        }
      ]
    },
    {
      studyid: 105,
      title: 'Reprehenderit magna ex sit elit excepteur aute exercitation ad nulla dolor voluptate quis consectetur.',
      studystart: '2018-12-14 08:12:28',
      studyend: '2015-08-24 09:01:17',
      createdby: 15,
      channels: [
        62,
        6,
        3,
        22
      ],
      alerts: true,
      notify: [
        {
          id: 20,
          contact: 'krisduffy@aquasure.com', phone: '(985) 445-2688'
        },
        {
          id: 10,
          contact: 'vancehansen@ultrimax.com', phone: '(875) 509-3501'
        },
        {
          id: 21,
          contact: 'williamsonbrowning@acusage.com', phone: '(975) 511-3238'
        }
      ]
    },
    {
      studyid: 106,
      title: 'Elit pariatur cillum ex nulla ea.',
      studystart: '2014-03-27 06:26:23',
      studyend: '2016-08-21 03:25:33',
      createdby: 17,
      channels: [
        29,
        47,
        59,
        53
      ],
      alerts: false,
      notify: [
        {
          id: 20,
          contact: 'barbaracurry@frenex.com', phone: '(927) 484-2795'
        },
        {
          id: 30,
          contact: 'changfranklin@momentia.com', phone: '(806) 476-3486'
        },
        {
          id: 30,
          contact: 'christinarosales@geekmosis.com', phone: '(887) 447-2414'
        }
      ]
    },
    {
      studyid: 107,
      title: 'Occaecat eiusmod quis ex veniam et in nulla nulla.',
      studystart: '2019-04-18 06:06:46',
      studyend: '2016-02-26 04:11:11',
      createdby: 12,
      channels: [
        50,
        1,
        52,
        14
      ],
      alerts: false,
      notify: [
        {
          id: 17,
          contact: 'toniakeith@pushcart.com', phone: '(899) 479-2657'
        },
        {
          id: 22,
          contact: 'fultonperez@macronaut.com', phone: '(911) 545-2020'
        },
        {
          id: 30,
          contact: 'mckaybates@insuron.com', phone: '(903) 540-3710'
        }
      ]
    },
    {
      studyid: 108,
      title: 'Reprehenderit sunt cupidatat fugiat qui mollit ea incididunt veniam aute anim esse officia duis.',
      studystart: '2019-08-11 11:59:11',
      studyend: '2021-01-08 04:33:32',
      createdby: 17,
      channels: [
        47,
        3,
        52,
        50
      ],
      alerts: true,
      notify: [
        {
          id: 1,
          contact: 'staceyharrell@rooforia.com', phone: '(807) 452-3551'
        },
        {
          id: 1,
          contact: 'hartjacobson@applideck.com', phone: '(927) 444-2635'
        },
        {
          id: 7,
          contact: 'doylekerr@isoswitch.com', phone: '(847) 484-3551'
        }
      ]
    },
    {
      studyid: 109,
      title: 'Est Lorem voluptate dolor enim.',
      studystart: '2017-03-20 01:29:13',
      studyend: '2020-05-01 10:32:27',
      createdby: 19,
      channels: [
        20,
        50,
        57,
        40
      ],
      alerts: false,
      notify: [
        {
          id: 24,
          contact: 'rosecunningham@gluid.com', phone: '(939) 419-2935'
        },
        {
          id: 1,
          contact: 'allisoncampbell@velity.com', phone: '(826) 594-3529'
        },
        {
          id: 19,
          contact: 'mackrosario@valreda.com', phone: '(935) 408-2483'
        }
      ]
    },
    {
      studyid: 110,
      title: 'Ut enim aliquip excepteur commodo nulla amet consectetur voluptate esse exercitation.',
      studystart: '2015-10-14 07:47:40',
      studyend: '2017-10-13 06:32:18',
      createdby: 15,
      channels: [
        22,
        38,
        43,
        25
      ],
      alerts: false,
      notify: [
        {
          id: 26,
          contact: 'oneilhorn@vitricomp.com', phone: '(871) 589-3902'
        },
        {
          id: 30,
          contact: 'howellstrong@menbrain.com', phone: '(951) 472-3202'
        },
        {
          id: 20,
          contact: 'kentlara@geekfarm.com', phone: '(992) 520-3148'
        }
      ]
    }
  ];

let templateslist = [
  {
    templateid: 1,
    title: 'Autoclave validation',
    studystart: '2014-03-27 06:26:23',
    studyend: '2016-08-21 03:25:33',
    createdby: 1,
    channels: [
      19,
      44,
      8,
      39
    ],
    alerts: false,
    notify: [
      {
          id: 26,
          contact: 'oneilhorn@vitricomp.com', phone: '(871) 589-3902'
        },
        {
          id: 30,
          contact: 'howellstrong@menbrain.com', phone: '(951) 472-3202'
        },
        {
          id: 20,
          contact: 'kentlara@geekfarm.com', phone: '(992) 520-3148'
        }
      ]
  },
  {
    templateid: 2,
    title: 'Freeze-dryer shelf mapping',
    studystart: '2014-03-27 06:26:23',
    studyend: '2016-08-21 03:25:33',
    createdby: 2,
    channels: [
      38,
      43,
      42,
      19
    ],
    alerts: true,
    notify: [
      {
          id: 26,
          contact: 'oneilhorn@vitricomp.com', phone: '(871) 589-3902'
        },
        {
          id: 30,
          contact: 'howellstrong@menbrain.com', phone: '(951) 472-3202'
        },
        {
          id: 20,
          contact: 'kentlara@geekfarm.com', phone: '(992) 520-3148'
        }
      ]
  },
  {
    templateid: 3,
    title: 'Freeze-dryer validation',
    studystart: '2014-03-27 06:26:23',
    studyend: '2016-08-21 03:25:33',
    createdby: 12,
    channels: [
      30,
      1,
      36,
      2
    ],
    alerts: false,
    notify: [
      {
          id: 26,
          contact: 'oneilhorn@vitricomp.com', phone: '(871) 589-3902'
        },
        {
          id: 30,
          contact: 'howellstrong@menbrain.com', phone: '(951) 472-3202'
        },
        {
          id: 20,
          contact: 'kentlara@geekfarm.com', phone: '(992) 520-3148'
        }
      ]
  },
  {
    templateid: 4,
    title: 'Freeze-dryer SIP',
    studystart: '2014-03-27 06:26:23',
    studyend: '2016-08-21 03:25:33',
    createdby: 3,
    channels: [
      23,
      51,
      59,
      2
    ],
    alerts: true,
    notify: [
      {
          id: 26,
          contact: 'oneilhorn@vitricomp.com', phone: '(871) 589-3902'
        },
        {
          id: 30,
          contact: 'howellstrong@menbrain.com', phone: '(951) 472-3202'
        },
        {
          id: 20,
          contact: 'kentlara@geekfarm.com', phone: '(992) 520-3148'
        }
      ]
  },
  {
    templateid: 5,
    title: 'Oven validation test',
    studystart: '2014-03-27 06:26:23',
    studyend: '2016-08-21 03:25:33',
    createdby: 6,
    channels: [
      61,
      5,
      21,
      11
    ],
    alerts: false,
    notify: [
      {
          id: 26,
          contact: 'oneilhorn@vitricomp.com', phone: '(871) 589-3902'
        },
        {
          id: 30,
          contact: 'howellstrong@menbrain.com', phone: '(951) 472-3202'
        },
        {
          id: 20,
          contact: 'kentlara@geekfarm.com', phone: '(992) 520-3148'
        }
      ]
  },
  {
    templateid: 6,
    title: 'Deep freezing test',
    studystart: '2014-03-27 06:26:23',
    studyend: '2016-08-21 03:25:33',
    createdby: 12,
    channels: [
      34,
      50,
      15,
      54
    ],
    alerts: true,
    notify: [
      {
          id: 26,
          contact: 'oneilhorn@vitricomp.com', phone: '(871) 589-3902'
        },
        {
          id: 30,
          contact: 'howellstrong@menbrain.com', phone: '(951) 472-3202'
        },
        {
          id: 20,
          contact: 'kentlara@geekfarm.com', phone: '(992) 520-3148'
        }
      ]
  },
  {
    templateid: 7,
    title: 'Warehouse validation',
    studystart: '2014-03-27 06:26:23',
    studyend: '2016-08-21 03:25:33',
    createdby: 11,
    channels: [
      12,
      27,
      57,
      23
    ],
    alerts: false,
    notify: [
      {
          id: 26,
          contact: 'oneilhorn@vitricomp.com', phone: '(871) 589-3902'
        },
        {
          id: 30,
          contact: 'howellstrong@menbrain.com', phone: '(951) 472-3202'
        },
        {
          id: 20,
          contact: 'kentlara@geekfarm.com', phone: '(992) 520-3148'
        }
      ]
  },
  {
    templateid: 8,
    title: 'Refrigerator validation',
    studystart: '2014-03-27 06:26:23',
    studyend: '2016-08-21 03:25:33',
    createdby: 6,
    channels: [
      56,
      14,
      45,
      15
    ],
    alerts: false,
    notify: [
      {
          id: 26,
          contact: 'oneilhorn@vitricomp.com', phone: '(871) 589-3902'
        },
        {
          id: 30,
          contact: 'howellstrong@menbrain.com', phone: '(951) 472-3202'
        },
        {
          id: 20,
          contact: 'kentlara@geekfarm.com', phone: '(992) 520-3148'
        }
      ]
  }
];



let memberslist = [
       {      
              userid: 1,
              username: 'alexapopovici',
              firstname: 'Alexandra',
              lastname: 'Popovici',
              position: 'Validation Engineer',
              email: 'alexa.popovici@lives-international.com',
              phone: '+40723456578',
              avatar: 'media/avatars/alexapopovici.jpg',
              permissions: 1,
       },
       {      
              userid: 2,
              username: 'cornelstanoevici',
              firstname: 'Cornel',
              lastname: 'Stanoevici',
              position: 'Validation Engineer',
              email: 'cornel.stanoevici@lives-international.com',
              phone: '+40723456579',
              avatar: 'media/avatars/cornelstanoevici.jpg',
              permissions: 1,
       },
       {      
              userid: 3,
              username: 'marcelpopescu',
              firstname: 'Marcel',
              lastname: 'Popescu',
              position: 'Validation Engineer',
              email: 'marcel.popescu@lives-international.com',
              phone: '+40723456580',
              avatar: 'media/avatars/marcelpopescu.jpg',
              permissions: 1,
       },
       {      
              userid: 4,
              username: 'zoebuti',
              firstname: 'Zoe',
              lastname: 'Buţi',
              position: 'Validation Engineer',
              email: 'zoe.buti@lives-international.com',
              phone: '+40723456580',
              avatar: 'media/avatars/zoebuti.jpg',
              permissions: 1,
       },
       {      
              userid: 5,
              username: 'madalinasonda',
              firstname: 'Mădălina',
              lastname: 'Şonda ',
              position: 'Validation Engineer',
              email: 'madalina.sonda@lives-international.com',
              phone: '+40723456580',
              avatar: 'media/avatars/madalinasonda.jpg',
              permissions: 1,
       },
       {      
              userid: 6,
              username: 'gloriamhada',
              firstname: 'Gloria',
              lastname: 'Mhădă',
              position: 'Validation Engineer',
              email: 'gloria.mhada@lives-international.com',
              phone: '+40723456581',
              avatar: 'media/avatars/gloriamhada.jpg',
              permissions: 1,
       },
       {      
              userid: 7,
              username: 'sofiaan ',
              firstname: 'Sofia ',
              lastname: 'Ciocîrlan',
              position: 'Validation Engineer',
              email: 'sofiaan @lives-international.com',
              phone: '+40723456582',
              avatar: 'media/avatars/sofiaciocirlan.jpg',
              permissions: 1,
       },
       {      
              userid: 8,
              username: 'victobu',
              firstname: 'Victor',
              lastname: 'Barbu',
              position: 'Validation Engineer',
              email: 'dima.barbu@lives-international.com',
              phone: '+40723456583',
              avatar: 'media/avatars/victorbarbu.jpg',
              permissions: 1,
       },
       {      
              userid: 9,
              username: 'mirelagherghe',
              firstname: 'Mirela',
              lastname: 'Gherghe',
              position: 'Validation Engineer',
              email: 'mirela.gherghe@lives-international.com',
              phone: '+40723456584',
              avatar: 'media/avatars/mirelagherghe.jpg',
              permissions: 1,
       },
       {      
              userid: 10,
              username: 'vladconstantinescu',
              firstname: 'Vlad',
              lastname: 'Constantinescu',
              position: 'Validation Engineer',
              email: 'vlad.constantinescu@lives-international.com',
              phone: '+40723456585',
              avatar: 'media/avatars/vladconstantinescu.jpg',
              permissions: 1,
       },
       {      
              userid: 11,
              username: 'carlachirita',
              firstname: 'Carla',
              lastname: 'Chiriţă',
              position: 'Validation Engineer',
              email: 'carla chirita@lives-international.com',
              phone: '+40723456586',
              avatar: 'media/avatars/carlachirita.jpg',
              permissions: 1,
       },
       {      
              userid: 12,
              username: 'brandusavasilica',
              firstname: 'Brândușa',
              lastname: 'Vasilică',
              position: 'Validation Engineer',
              email: 'brandusa.vasilica@lives-international.com',
              phone: '+40723456587',
              avatar: 'media/avatars/brandusavasilica.jpg',
              permissions: 1,
       },
];
let archivedstudieslist = [];
let archivedmemberslist = [];
let archivedtemplateslist = [];
let faultslist = [
    {
    faultid: 1,
    title: 'Sensor out of range',
    datetime: '2014-03-27 06:26:23',
    studyid: 117,
    value: 25.5,
    event: 1,
    acknowledge: 0,
    channels: [
      34,
      50,
      15,
      54
    ],    
  },
  {
    faultid: 2,
    title: 'Close to superior limit',
    datetime: '2014-03-27 06:26:23',
    studyid: 118,
    event: 1,
    value: 36.23,
    acknowledge: 0,
    channels: [
      34,
      50,
      15,
      54
    ],    
  },
  {
    faultid: 3,
    title: 'Close to inferior limit',
    datetime: '2014-03-27 06:26:23',
    studyid: 123,
    event: 2,
    value: 36.23,
    acknowledge: 0,
    channels: [
      34,
      50,
      15,
      54
    ],    
  },
];
// Put the objects into storage
if (localStorage.getItem("channels") === null) {
    localStorage.setItem('channels', JSON.stringify(channelslist));
  }
if (localStorage.getItem("reports") === null) {
    localStorage.setItem('reports', JSON.stringify(reportslist));
  }
if (localStorage.getItem("report1data") === null) {
    localStorage.setItem('report1data', JSON.stringify(report1data));
  }
if (localStorage.getItem("report2data") === null) {
    localStorage.setItem('report2data', JSON.stringify(report2data));
  }
if (localStorage.getItem("studies") === null) {
    localStorage.setItem('studies', JSON.stringify(studieslist));
  }
if (localStorage.getItem("members") === null) {
    localStorage.setItem('members', JSON.stringify(memberslist));
  }
if (localStorage.getItem("templates") === null) {
  localStorage.setItem('templates', JSON.stringify(templateslist));
  }
if (localStorage.getItem("archivedstudies") === null) {
    localStorage.setItem('archivedstudies', JSON.stringify(archivedstudieslist));
  }
if (localStorage.getItem("archivedmembers") === null) {
    localStorage.setItem('archivedmembers', JSON.stringify(archivedmemberslist));
  }
if (localStorage.getItem("archivedtemplates") === null) {
  localStorage.setItem('archivedtemplates', JSON.stringify(archivedtemplateslist));
  }
if (localStorage.getItem("faults") === null) {
    localStorage.setItem('faults', JSON.stringify(faultslist));
}
if (localStorage.getItem("language_en_gb") === null) {
    localStorage.setItem('language_en_gb', JSON.stringify(language_en_gb));
  }
if (localStorage.getItem("language") === null) {
    localStorage.setItem('language', JSON.stringify(language));
  }

