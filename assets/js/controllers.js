/* Summary:         Controller definitions
*
* Descriptions:     This program provides the controller functionality for AngularJS Application
*
* Programmer:       185SE14THST
*
* Date:             2016-09-19
*/

project.controller('mainController', ['$scope', '$filter', '$http', '$log', '$timeout', '$routeParams','projectApp1', function ($scope, $filter, $http, $log, $timeout, $routeParams, projectApp1) {
    
    // Define template routes
    $scope.templates = [
        { name: 'dashboard.html', url: 'assets/html/dashboard.html'},
        { name: 'profile', url: 'assets/html/profile.html'},
        { name: 'messages', url: 'assets/html/messages.html'},
        { name: 'calendar', url: 'assets/html/calendar.html'},
        { name: 'appointments', url: 'assets/html/appointments.html'},
        { name: 'sendinfo', url: 'template2.html'},
        { name: 'settings', url: 'assets/html/settings.html'}
    ];
    $scope.template = $scope.templates[0];              // ?
    $scope.clientId = $routeParams.client;              // Set client ID from route parameter
    $scope.clientelle = projectApp1.clientelle;         // Get list of clients for side bar
    
    
    $scope.companyDetails =
    {
        'appName': 'Answer Service',
        'appYear': '2012',
        'companyName': 'Acme Widget',
        'companyAddress': '5 Brickell Ave',
        'companyCity': 'Miami-Brickell',
        'companyState': 'FL',
        'companyZip': '33131',
        'companyPhone': '305-555-5555',
        'companyEmail': 'acme@amce.com'
    };

}]);

// About Page
project.controller('aboutCOntroller', ['$scope', '$filter', '$http', '$log', '$timeout', '$location', '$routeParams', function ($scope, $filter, $http, $log, $timeout, $location, $routeParams) {

    $scope.name = 'About Page';
	$scope.title = $routeParams.title;
}]);

// Contact Page
project.controller('contactController', ['$scope', '$filter', '$http', '$log', '$timeout', '$location', function ($scope, $filter, $http, $log, $timeout, $location) {

    $scope.name = 'Contact Page';
}]);


// Application1
project.controller('applicationController1', ['$scope', '$filter', '$http', '$log', '$timeout', '$resource', '$location','$routeParams','$interval', 'projectApp1', function ($scope, $filter, $http, $log, $timeout, $resource, $location, $routeParams, $interval, projectApp1) {
    
    $scope.miami = 'Yeah boi! I make $10K a month!!!';
    
    $scope.clientProfile = projectApp1.clientelle[$routeParams.client - 1]; // Pull client profile w/ Index offset
    $scope.messages = projectApp1.messages.sort(function(a, b){return a-b});
/*    $scope.clientMessages = function() { // Pull client messages
        var msgArray = projectApp1.messages;
        var msgArrayByClientId = [];
            for (i = 0; i < msgArray.length; i++) {
                if ( (msgArray[i]['client']) == ($routeParams.client ) ) {
                    msgArrayByClientId = msgArray[i];
                    //console.log('IN!'+($routeParams.client));
                    //console.log(msgArrayByClientId);
                }
            }
        return msgArrayByClientId;
    }
    console.log('OUT!');
    console.log($scope.clientMessages());*/
    

}]); // Dont forget to wrap in big if rParam > 0
