
/**
 * Rutas de la aplicación.
 */

(function () {
    'use strict';
    angular
        .module('enki')
        .config(routes);

    // Dependencias
    routes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    /**
    * @description gestiona las rutas de la aplicación.
    * @param $stateProvider
    * @param $urlRouterProvider
    * @bool $locationProvider
    */
    function routes($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('inicio', {
                url: '/',
                templateUrl: '../templates/inicio.html',
                controller: 'demoCtrl'
            })
            .state('detalles', {
                url: '/proyecto/:id',
                templateUrl: '../templates/detalles.html',
                controller: 'demoCtrl'
            });
        $locationProvider.html5Mode(false);
    }
    
    // Eliminar el cache cuando se detecte cambios en las rutas
    
})();