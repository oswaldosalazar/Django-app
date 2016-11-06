app.controller("mainAppCtrl", function($scope) {
    $scope.view = {};
    $scope.view.portfolio = [
        {
            "title": "GnarCars",
            "description": "Carpool app for skiers and snowboarders",
            "appUrl": "https://gnarcar.herokuapp.com/"
        },
        {
            "title": "Captain's Log",
            "description": "Blog with posts and comments",
            "appUrl": "https://captainslog-1.herokuapp.com/"
        },
        {
            "title": "GigList",
            "description": "Live music search app based on favorite artists",
            "appUrl": "https://giglist-q1-f4495.firebaseapp.com"
        },
    ]
});
