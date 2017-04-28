angular.module('plgn.ionic-segment',[]).directive('ionSegment', function() {
    return {
      restrict: 'E',
      require: "ngModel",
      transclude: true,
      replace: true,
      scope: {
        full: '@full'
      },
      template: '<ul id="ion-segment" ng-transclude></ul>',
      link: function($scope, $element, $attr, ngModelCtrl) {
        console.log("ion-segment link")
        if ($scope.full == "true") {
          $element.find("li").addClass("full");
        }
        var segment = $element.find("li").eq(0).attr("value");
        $element.find("li").eq(0).addClass("active");

        ngModelCtrl.$setViewValue(segment);

      }
    }
  })
  .directive('ionSegmentButton', function() {
    return {
      restrict: 'E',
      require: "^ngModel",
      transclude: true,
      replace: true,
      template: '<li ng-transclude></li>',
      link: function($scope, $element, $attr, ngModelCtrl) {
        var value;
        function onChange(){
          if(value === ngModelCtrl.$modelValue){
            $element.parent().find("li").removeClass("active");
            $element.addClass("active");
          }
        }
        $scope.$watch(function(){
          return ngModelCtrl.$modelValue;
        }, onChange);
        $attr.$observe("value", function(_value){
          value = _value;
          onChange();
        });

        var clickingCallback = function() {
          ngModelCtrl.$setViewValue(value);
        };

        $element.bind('click', clickingCallback);

      }
    }
  })
