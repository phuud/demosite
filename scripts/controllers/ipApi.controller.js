/**
 * Created by phuud on 2016/10/24.
 */


angular.module('demositeApp')
    .controller('IpApiCtrl', function ($scope) {
        console.log("IpApiCtrl");

        $scope.flag = {
            showResult:false,
            pending:false
        }
        $scope.ipDetail = {};
        $scope.submit = function(){
            $scope.flag.pending = true;
            var ip = $scope.ipaddress;
            $.ajax({
                type:'get',
                url: 'http://ip-api.com/json/'+ip,
                success: function(res){
                    $scope.ipDetail = res;
                    $scope.flag.showResult = true;
                    console.log(res);
                },
                complete:function(){
                    $scope.flag.pending = false;
                    $scope.$apply();
                }
            });
        }
    });