/**
 * Created by phuud on 2016/10/22.
 */

angular.module('demositeApp')
    .controller('GReCaptchaCtrl', function ($scope) {
        console.log("GReCaptchaCtrl");

        $scope.flag={
            isNotOK: false
        }
        var logCount = 0;

        function showReCaptcha() {
            if(grecaptcha){
                $scope.widgetId = grecaptcha.render('html_element', {
                    'sitekey' : '6LetLgcUAAAAALxNUA2P1CzDv59g3PfCLJQuZar1',
                    'callback' : verifyCallback
                });
            }else{
                $scope.flag.isNotOK = false;
            }
        };

        var verifyCallback = function(res){
            if(res){
                var _response = grecaptcha.getResponse($scope.widgetId);
                console.log("Check res",_response);
                $scope.flag.isNotOK = false;
                $scope.$apply();
                var resdata = {
                    secret:'6LetLgcUAAAAAKGkYLuwN-RGqF9xximr4TOP1Wds',
                    response:_response
                }
                $.ajax({
                    type:'get',
                    dataType: 'jsonp',
                    data:resdata,
                    url: 'https://www.google.com/recaptcha/api/siteverify',
                    success: function(res){
                        //处理data数据
                        console.log(res);
                    }
                });

//                LoginService.gReCaptchaPost(data)
//                .then(function(res){
//                    console.log(res);
//                })
            }else{
                console.log("wrong check!");
                grecaptcha.reset($scope.widgetId);
            }
        }

        $scope.login = function () {
            logCount++;
            if(logCount>3){
                $scope.flag.isNotOK = true;
                showReCaptcha();
            }
        };
    });
