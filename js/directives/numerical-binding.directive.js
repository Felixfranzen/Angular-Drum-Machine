/*	This directive makes sure that the tempo slider supplies an Int
	instead of the default String to the ng-model
	
	Credit to Tim and AJ Richardson
	http://stackoverflow.com/questions/19404969/angular-data-binding-input-type-number
*/


angular.module("numericalBinding", [])
.directive("numericalbinding", numericalBinding)

function numericalBinding(){
	return {
        restrict: 'A',
        require: 'ngModel',
        scope: {
            model: '=ngModel',
        },                
       link: function (scope, element, attrs, ngModelCtrl) {
           if (scope.model && typeof scope.model == 'string') {
               scope.model = parseInt(scope.model);
           } 
           scope.$watch('model', function(val, old) {
               if (typeof val == 'string') {
                   scope.model = parseInt(val);
               }
           });                 
        }
    };
}