(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController);
    
    
    CategoriesController.$inject = [ 'data'];
    function CategoriesController( data) {
      var ctrl = this;
      ctrl.data = data;
    }
    
    })();