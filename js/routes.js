angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
    .state('menu', {
      url: '/side-menu21',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })
      
    
      
        
    .state('orangAwam', {
      url: '/page2',
      templateUrl: 'templates/orangAwam.html',
      controller: 'orangAwamCtrl'
    })
        
      
    
      
        
    .state('menu.hOME', {
      url: '/page3',
      views: {
        'side-menu21': {
          templateUrl: 'templates/hOME.html',
          controller: 'hOMECtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.pKNS', {
      url: '/page4',
      views: {
        'side-menu21': {
          templateUrl: 'templates/pKNS.html',
          controller: 'pKNSCtrl'
        }
      }
    })
        
      
    
      
        
    .state('usahawan', {
      url: '/page5',
      templateUrl: 'templates/usahawan.html',
      controller: 'usahawanCtrl'
    })
        
      
    
      
        
    .state('wargaPKNS', {
      url: '/page6',
      templateUrl: 'templates/wargaPKNS.html',
      controller: 'wargaPKNSCtrl'
    })
        
      
    
      
        
    .state('menu.perkhidmatan', {
      url: '/page7',
      views: {
        'side-menu21': {
          templateUrl: 'templates/perkhidmatan.html',
          controller: 'perkhidmatanCtrl'
        }
      }
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/side-menu21/page3');

});