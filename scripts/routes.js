/**
 * Created by phuud on 2016/10/22.
 */


angular
    .module('demositeApp')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/testCase', {
                templateUrl: 'views/testCase.html',
                controller: 'TestCaseCtrl',
                controllerAs: 'testCase'
            })
            .when('/gReCaptcha', {
                templateUrl: 'views/gReCaptcha.html',
                controller: 'GReCaptchaCtrl',
                controllerAs: 'gReCaptcha'
            })
            .when('/ipApi', {
                templateUrl: 'views/ipApi.html',
                controller: 'IpApiCtrl',
                controllerAs: 'ipApi'
            })
            .when('/gotoBtn', {
                templateUrl: 'views/gotoBtn.html',
                controller: 'GotoBtnCtrl',
                controllerAs: 'gotoBtn'
            })
            .otherwise({
                redirectTo: '/'
            });
    });