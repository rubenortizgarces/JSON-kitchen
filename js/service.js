angular.module('myApp')
	.factory('foodService', function($http)	{
		
		function getRandom(){
			return $http.get("https://powerful-inlet-75906.herokuapp.com/food2fork/recipe");
		}
		function getRandDescription(recipeID){
			return $http.get("https://powerful-inlet-75906.herokuapp.com/food2fork" + recipeID);
		}
		
		function getDescription(recipeID){
			var url = "https://powerful-inlet-75906.herokuapp.com" + recipeID;
			return $http.get(url);
		}

		function getNavSearch(foodQuery){
			return $http.get("https://powerful-inlet-75906.herokuapp.com/edamam/recipes?q=" + foodQuery )
		}

		return {
			getRandom: getRandom,
			getDescription: getDescription,
			getNavSearch: getNavSearch,
			getRandDescription: getRandDescription
		}

	})
