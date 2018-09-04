(function () {
    'use strict';

    function AmurProofsController() {
        var ctrl = this;

        ctrl.$onInit = function () {
        };
    }

    angular
        .module('web')
        .component('amurProofs', {
            controller: AmurProofsController,
            bindings: {
                proofs: '<'
            },
            template: '{{$ctrl.proofs.join(", ")}}'
        });
})();