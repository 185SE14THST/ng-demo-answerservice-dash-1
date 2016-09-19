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
    
    // Pull Client list service
    $scope.template = $scope.templates[0];
    
    // Pull client profile
    $scope.clientProfile = projectApp1.clientelle[$routeParams.client - 1]; // Index offset
    
   // Debug: $scope.clientId = $routeParams.client;
    $scope.clientelle = projectApp1.clientelle;

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
project.controller('applicationController1', ['$scope', '$filter', '$http', '$log', '$timeout', '$resource', '$location','$routeParams','$interval', 'projectApp1', 'metrics', function ($scope, $filter, $http, $log, $timeout, $resource, $location, $routeParams, $interval, projectApp1, metrics) {

    //applicationController1

}]);
