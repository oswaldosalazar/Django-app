app.controller("mainAppCtrl", function($scope) {
    $scope.view = {};
    $scope.view.portfolio = [
        {
            "title": "CBA Parents Guide",
            "description": "Schedule of Colorado Ballet Academy students performing in The Nutcracker",
            "appUrl": "https://cba-app.firebaseapp.com/"
        },
        {
            "title": "GnarCar",
            "description": "Carpool app for skiers and snowboarders",
            "appUrl": "https://gnarcar.herokuapp.com/"
        },
        {
            "title": "Fooder",
            "description": "Tinder + Food = Fooder! Select nearby restaurants on the go.",
            "appUrl": "https://fooder2-fcfb7.firebaseapp.com/"
        },
        {
            "title": "WeatherApp with React Redux",
            "description": "Five-day weather forecast for multiple cities.",
            "appUrl": "https://redux-open-weather.herokuapp.com/"
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
        }
    ]
});
