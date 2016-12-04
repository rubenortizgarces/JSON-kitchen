angular.module('myApp')
.controller('homeController', function($scope, foodService, $location, $rootScope){
    var random = Math.floor(Math.random() * (30 - 1) + 1);
    var recipeID= "";
    foodService.getRandom()
    .then(function(response){
        $scope.recipeTitle = response.data[random].title;
        recipeID += response.data[random].url_details;
        $scope.getRandID();
    });

    $scope.getID = function() { 
        foodService.getDescription(recipeID)
        .then(function(response){
            // console.log(response);
            $scope.recipeDescription=response.data.recipe.description_text;
        });
    }
    $scope.getRandID = function() {
        foodService.getRandDescription(recipeID)
        .then(function(response){
            $rootScope.randRecip= response.data.recipe;
            console.log(response.data.recipe);
            $rootScope.randIngred= response.data.recipe.ingredients;
        });
    }

})
.controller('searchController', function($scope,$rootScope,foodService, $location){
    $scope.getRecipe=function(e){
        e.preventDefault();
        foodService.getNavSearch($scope.foodQuery)
        .then(function (response){
            console.log(response);
            $rootScope.recipes=response.data;
                // console.log(response);
            })
        $location.path("/search")
    }
})
.controller('searchResults', function($scope,$rootScope,foodService,$location){
    $scope.url_details = function( recipeUrl ){
        foodService.getDescription(recipeUrl)
        .then(function (response){
            /*console.log(response);*/

            $rootScope.recipe=response.data;
            /*console.log($rootScope.recipe.description_text);*/
            $rootScope.ingredients= response.data.ingredientLines;
            /*console.log($rootScope.ingredients);*/

        })
        $location.path("/detail")
    }
})