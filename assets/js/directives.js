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
		replace: true, // removes the searchResult/search-result HTML element but still populates the data
		scope: { 
			clientObject: "=", // name it whatever, refer to it in HTML tag onject-name / objectName
			formattedAddressFunction: "&" 
		}, 
	};
});
