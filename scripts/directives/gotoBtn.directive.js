/* globals $ */
'use strict';

angular.module('demositeApp')
    .directive('gotoBtn', function () {
        return {
            replace: true,
            restrict: 'ACE',
            templateUrl:'views/assets/goto-btn.html',
            link: function ($scope, iElement, attr) {
                $scope.flag = {
                    hideTop:true,
                    hideBottom:true
                }
                let setBtn = (top,bottom) => {$scope.flag.hideTop = top;$scope.flag.hideBottom = bottom;$scope.$apply();};
                window.onscroll = () => {let _body = angular.element('body')[0];setBtn(_body.scrollTop === 0,_body.scrollTop === _body.scrollHeight- $(window).height());};
                $scope.goTop = () => $("html, body").animate({ scrollTop: 0 }, 500);
                $scope.goBottom = () => $("html, body").animate({ scrollTop: angular.element('body')[0].scrollHeight }, 500);
            }
        };
    });
