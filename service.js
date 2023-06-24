angular.module('appMaps')
.service('queryService', ['$http','$q', function($http,$q){
	var x2js = new X2JS();

	//Function to fetch data from the backend
	this.getResources = function(httpURL,postData){
		var deferred = $q.defer();
		$http.post(httpURL,postData).then(function(response){
			var data = '<Data>' + response.data + '</Data>';
			data = x2js.xml_str2json(data);
			deferred.resolve(data);
		})
		return deferred.promise;
	}
	
}])
