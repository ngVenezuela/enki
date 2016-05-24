/**
* Controlador de la aplicación
*/


(function () {
    'use strict';

    angular
        .module('enki')
        .controller('demoCtrl', demoCtrl);

    function demoCtrl($scope, $state) {
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
    };
     
     
})();