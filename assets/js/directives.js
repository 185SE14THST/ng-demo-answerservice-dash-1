/* Summary:         Directive definitions
*
* Descriptions:     This program provides the Directive functionality for AngularJS Application
*
* Programmer:       185SE14THST
*
* Date:             2016-09-19
*/

project.directive('clientList', function() {
	return {
		restrict: 'AECM',
		templateUrl: 'assets/dir/clientlist.html',
		replace: true, 
		scope: { 
			clientObject: "=", 
			
		}, 
	};
});

project.directive('userDashboard', function() {
	return {
		restrict: 'AECM',
		templateUrl: 'assets/dir/clientdash.html',
		replace: true, 
		scope: { 
			clientObject: "=", 
			
		}, 
	};
});

project.directive('userProfile', function() {
	return {
		restrict: 'AECM',
		templateUrl: 'assets/dir/clientprofile.html',
		replace: true, 
		scope: { 
			clientObject: "=", 
			
		}, 
	};
});

project.directive('userMessages', function() {
	return {
		restrict: 'AECM',
		templateUrl: 'assets/dir/clientmessages.html',
		replace: true, 
		scope: { 
			messagesObject: "=", 
			
		}, 
	};
});

project.directive('test', function() {
	return {
		restrict: 'AECM',
		templateUrl: 'assets/dir/clientmessages.html',
		replace: true, 
		scope: { 
			testObject: "=", 
			
		}, 
	};
});

project.directive('userCalendar', function() {
	return {
		restrict: 'AECM',
		templateUrl: 'assets/dir/clientcalendar.html',
		replace: true, 
		scope: { 
			clientObject: "=", 
			formattedAddressFunction: "&" 
		}, 
	};
});

project.directive('userAppointments', function() {
	return {
		restrict: 'AECM',
		templateUrl: 'assets/dir/clientapp.html',
		replace: true, 
		scope: { 
			clientObject: "=", 
			
		}, 
	};
});

project.directive('userSendInfo', function() {
	return {
		restrict: 'AECM',
		templateUrl: 'assets/dir/clientsendinfo.html',
		replace: true, 
		scope: { 
			clientObject: "=", 
			
		}, 
	};
});

project.directive('userSettings', function() {
	return {
		restrict: 'AECM',
		templateUrl: 'assets/dir/clientsettings.html',
		replace: true, 
		scope: { 
			clientObject: "=", 
			
		}, 
	};
});