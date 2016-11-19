app.controller("mainAppCtrl", function($scope) {
    $scope.view = {};
    $scope.view.portfolio = [
        {
            "title": "GnarCar",
            "description": "Carpool app for skiers and snowboarders",
            "appUrl": "https://gnarcar.herokuapp.com/"
        },
        {
            "title": "Captain's Log",
            "description": "Blog with posts and comments using social auth",
            "appUrl": "https://captainslog-1.herokuapp.com/"
        },
        {
            "title": "GigList",
            "description": "Live music search app based on favorite artists",
            "appUrl": "https://giglist-q1-f4495.firebaseapp.com"
        },
        {
            "title": "Reddit Clone",
            "description": "Angular front end app with posts and comments",
            "appUrl": "https://redditclone-ad941.firebaseapp.com/"
        },
        {
            "title": "Tea Shop",
            "description": "Angular front end store with shopping cart",
            "appUrl": "https://teashopping-5fe05.firebaseapp.com/"
        },
    ]
});
