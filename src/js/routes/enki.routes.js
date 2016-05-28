/**
 * Rutas de la aplicación.
 */

(function () {
    'use strict';
    angular
        .module('enki')
        .config(routes);

    // Dependencias
    /* @ngInject */
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
                templateUrl: './src/templates/inicio.html',
                controller: 'demoCtrl',
                controllerAs: 'ctrl'
            })
            .state('detalles', {
                url: '/proyecto/:id',
                templateUrl: './src/templates/detalles.html',
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