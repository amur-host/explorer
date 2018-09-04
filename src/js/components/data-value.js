(function () {
    'use strict';

    var DEFAULT_MAX_LENGTH = 100;

    function AmurDataValueController() {
        var ctrl = this;

        ctrl.$onInit = function () {
            ctrl.maxLength = ctrl.maxLength | DEFAULT_MAX_LENGTH;
        };
    }

    angular
        .module('web')
        .component('amurDataValue', {
            controller: AmurDataValueController,
            bindings: {
                maxLength: '<?',
                text: '<?'
            },
            template: '<span style="line-height: 30px">{{$ctrl.text|limitTo:$ctrl.maxLength}}{{$ctrl.text.length > $ctrl.maxLength ? "&hellip;" : ""}}</span>' +
                '<amur-copy-button text="$ctrl.text"></amur-copy-button>'
        });
})();