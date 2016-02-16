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
        
      
    
      
        
    .state('perkhidmatan', {
      url: '/page9',
      templateUrl: 'templates/perkhidmatan.html',
      controller: 'perkhidmatanCtrl'
    })
        
      
    
      
        
    .state('menu.beritaTerkini', {
      url: '/page10',
      views: {
        'side-menu21': {
          templateUrl: 'templates/beritaTerkini.html',
          controller: 'beritaTerkiniCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.lamanWeb', {
      url: '/page11',
      views: {
        'side-menu21': {
          templateUrl: 'templates/lamanWeb.html',
          controller: 'lamanWebCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.lainLain', {
      url: '/page12',
      views: {
        'side-menu21': {
          templateUrl: 'templates/lainLain.html',
          controller: 'lainLainCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.petaLokasi', {
      url: '/page13',
      views: {
        'side-menu21': {
          templateUrl: 'templates/petaLokasi.html',
          controller: 'petaLokasiCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.sosialMedia', {
      url: '/page14',
      views: {
        'side-menu21': {
          templateUrl: 'templates/sosialMedia.html',
          controller: 'sosialMediaCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.hubungiKami', {
      url: '/page15',
      views: {
        'side-menu21': {
          templateUrl: 'templates/hubungiKami.html',
          controller: 'hubungiKamiCtrl'
        }
      }
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/side-menu21/page3');

});