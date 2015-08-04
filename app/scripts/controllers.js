/**
 * @author Admin
 */
 var myAppControllers = angular.module('myAppControllers',[]);
myAppControllers.controller('formCtrl',function($scope,$window){
	$scope.usedLogins=["gigi",'john', 'maki','stacy'];
	$scope.loginExist=false;
	$scope.loginChecked=false;
	$scope.password="";

	$scope.aviableLogin=function(login){
		if($scope.login.length > 3){
			if(!$scope.usedLogins.indexOf($scope.login)){
				$scope.loginExist=true;
				$window.alert("This user name already exists");
				
			}else{
				$scope.loginExist=false;
				$scope.loginChecked=true;
			}
		}
	};
	$scope.passGood=false;
	if($scope.password.length > 3){
		$scope.passGood=true;

	}
	$scope.comparePassword=function(){
		if($scope.password !== $scope.again){
			$scope.passGood=true;
		}else{
			$scope.passGood=false;
		}
	};
});

myAppControllers.controller('menuCtrl',function($scope){
	
});

myAppControllers.controller('phoneListCtrl',function($scope,$http,$window){
	$http.get('phones/phones.json').success(function(data){
		$scope.phones=data;
	});
});

myAppControllers.controller('phoneDetailCtrl',function($scope,$http,$routeParams){
	$http.get('phones/'+$routeParams.phoneId+'.json').success(function(data){
		$scope.phone=data;
		$scope.mainImg=data.images[0];
	});

	$scope.setImage=function(image){
		$scope.mainImg=image;
	}


});