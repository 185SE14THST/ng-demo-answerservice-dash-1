/* Summary:         Router definitions
*
* Descriptions:     This program provides the Router functionality for AngularJS Application
*
* Programmer:       185SE14THST
*
* Date:             2016-09-19
*/

project.config(function ($routeProvider) {
	$routeProvider
		.when ('/', {
			templateUrl: 'assets/html/main.html',
			controller: 'mainController'
			})
        .when ('/:client', { // Display dash
			templateUrl: 'assets/html/home.html',
			controller: 'mainController'
			})
        .when ('/client/:number', { // Activate client profile
			templateUrl: 'assets/html/home.html',
			controller: 'mainController'
			})    
		.when ('/about', {
			templateUrl: 'assets/html/about.html',
			controller: 'aboutCOntroller'
			})
		.when ('/contact', {
			templateUrl: 'assets/html/contact.html',
			controller: 'contactController'
			})
        .when ('/home', {
			templateUrl: 'assets/html/home.html',
			controller: 'mainController'
			})
        .when ('/profile', {
			templateUrl: 'assets/html/home.html',
			controller: 'mainController'
			})
        .when ('/messages', {
			templateUrl: 'assets/html/home.html',
			controller: 'mainController'
			})
        .when ('/calendar', {
			templateUrl: 'assets/html/home.html',
			controller: 'mainController'
			})
            .when ('/appointments', {
			templateUrl: 'assets/html/home.html',
			controller: 'mainController'
			})
        .when ('/sendinfo', {
			templateUrl: 'assets/html/home.html',
			controller: 'mainController'
			})
        .when ('/settings', {
			templateUrl: 'assets/html/home.html',
			controller: 'mainController'
			})
});
