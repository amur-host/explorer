(function () {
    'use strict';

    function AmurAssetRefController() {
        var ctrl = this;

        ctrl.$onInit = function () {
        };

        ctrl.$onChanges = function (changesObj) {
            if (changesObj.assetId) {
                if (!ctrl.text)
                    ctrl.text = changesObj.assetId.currentValue;
            }
        }
    }

    angular
        .module('web')
        .component('amurAssetRef', {
            controller: AmurAssetRefController,
            bindings: {
                assetId: '<',
                maxLength: '<?',
                text: '<?'
            },
            template: '<span ng-if="$ctrl.assetId === null">AMUR</span>' +
                '<amur-transaction-ref ng-if="$ctrl.assetId !== null" tx-id="$ctrl.assetId" text="$ctrl.text"></amur-transaction-ref>'
        });
})();