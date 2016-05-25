/**
 * Rutas de la aplicación.
 */

(function () {
    'use strict';
    angular
        .module('enki')
        .config(routes);

    // Dependencias
    routes.$injector = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

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
                controller: 'demoCtrl',
                controllerAs: 'ctrl'
            })
            .state('detalles', {
                url: '/proyecto/:id',
                templateUrl: '../templates/detalles.html',
                controller: 'demoCtrl',
                controllerAs: 'ctrl'
            });
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false
        });
    }

    // TODO: Eliminar el cache cuando se detecte cambios en las rutas

})();