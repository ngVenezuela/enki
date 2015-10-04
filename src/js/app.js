angular.module('enki', ['ui.router'])

.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

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

    $urlRouterProvider.otherwise('/');
}])

.controller('demoCtrl', ['$scope', '$state', function ($scope, $state) {
    $scope.numero = $state.params.id;
    $scope.proyectos = [
        {
            id: 1,
            etiqueta: 'flag1',
            nombre: 'Telegram Bot para normas',
            autor: 'code-andres',
            votos: 40
        },
        {
            id: 2,
            etiqueta: 'flag2',
            nombre: 'Analytics para Instagram',
            autor: 'jobsamuel',
            votos: 22
        },
        {
            id: 3,
            etiqueta: 'flag1',
            nombre: 'Administrador de hoteles para LatAm',
            autor: 'abr4xas',
            votos: 38
        },
        {
            id: 4,
            etiqueta: 'flag3',
            nombre: 'Curso de NodeJS básico',
            autor: 'villanuevand',
            votos: 52
        },
        {
            id: 5,
            etiqueta: 'flag',
            nombre: 'Booking de bienes raices en Dubai',
            autor: 'alexandersalas',
            votos: 31
        },
    ];
}]);