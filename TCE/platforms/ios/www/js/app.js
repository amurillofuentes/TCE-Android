// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

/*

APPID: 146ea6b0
messagingSenderId: "781703763498"
   
testPush token
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0ZDVmNDBjYS05YWRmLTQ3MTktOTMwYy1hZjE3MDkyMDU2MjMifQ.8J-mIWGru1bJSh96KxluceMC899rs3q0Wh5Fe5cuds0

Public Key
9e798e8a7cafe4a7431b13202a8d30cac56f7cbfeba3e92a

Secret Key
a6d325a0aa5895aff19fdbf9b73a3b834323caa6cd0a057a


*/
angular.module('starter', ['ionic','ionic.cloud', 'starter.controllers', 'starter.services', 'ngCordova', 'jett.ionic.filter.bar'])
.config(function($ionicCloudProvider) {
  $ionicCloudProvider.init({
    "core": {
      "app_id": "146ea6b0"
    },
    "push": {
      "sender_id": "781703763498",
      "pluginConfig": {
        "ios": {
          "badge": "true",
          "sound": "true",
          "clearBadge": "true"

        },
        "android": {
          "iconColor": "#343434"
        }
      }
    }
  });
})
.run(function($ionicPlatform, $ionicPush) {
    $ionicPlatform.ready(function () {
      $ionicPush.register().then(function(t) {
      return $ionicPush.saveToken(t);
      }).then(function(t) {
      console.log('initialising push cloud ionic system Token saved:', t.token);
      window.localStorage.setItem("token", t.token);
      //alert("inicio"+t.token+"fin");
    });


    /*
        console.log('initialising GCM/APNS app registration for notifications token');      
        var push = PushNotification.init({
            android: {
                senderID: "781703763498"
            },
            ios: {
                alert: true,
                badge: true,
                sound: true
            },
            windows: {}
        });

        push.on('registration', function (data) {
            console.log('GCM/APNS app registration EVENT');
            console.log('GCM/APNS app registration for notifications token data received: ' + JSON.stringify(data));
            var token = data.registrationId;

        });

        push.on('error', function (data) {
            console.log("GCM/APNS error event: "+JSON.stringify(data));
        });

        push.on('notification', function(data) {
            console.log('notification event');
            navigator.notification.alert(
                    data.message,         // message
                    null,                 // callback
                    data.title,           // title
                    'Ok'                  // buttonName
            );
    });

    $scope.$on('cloud:push:notification', function(event, data) {
  var msg = data.message;
  alert(msg.title + ': ' + msg.text);
});
*/
    });
})



.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

$stateProvider
.state('menu.addMyPets', {
    url: '/addPet',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addMyPets.html',
        controller: 'addMyPetsCtrl'
      }
    }
  })

  .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })
  .state('menu.detailTreatment', {
    url: '/detailTreatment',
    views: {
      'side-menu21': {
        templateUrl: 'templates/detailTreatment.html',
        controller: 'detailTreatmentCtrl'
      }
    }
  })

  .state('menu.addTreatment', {
    url: '/addActuacion',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addTreatment.html',
        controller: 'addTreatmentCtrl'
      }
    }
  })

.state('menu.myPets', {
    url: '/addActuacion',
    views: {
      'side-menu21': {
        templateUrl: 'templates/myPets.html',
        controller: 'myPetsCtrl'
      }
    }
  })
   .state('menu.detailPet', {
    url: '/detailPet',
    views: {
      'side-menu21': {
        templateUrl: 'templates/detailPet.html',
        controller: 'detailPetCtrl'
      }
    }
  })

.state('menu.versions', {
    url: '/detailPet',
    views: {
      'side-menu21': {
        templateUrl: 'templates/versions.html',
        controller: 'versionsCtrl',
      }
    }
  })
  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl',
    abstract:true
  })  
  ;

  $urlRouterProvider.otherwise('/side-menu21/home');

$ionicConfigProvider.navBar.alignTitle('left');

});
