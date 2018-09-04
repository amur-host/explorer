(function () {
    'use strict';

    function AmurScriptController() {
        var ctrl = this;

        ctrl.$onInit = function () {
        };
    }

    angular
        .module('web')
        .component('amurScript', {
            controller: AmurScriptController,
            bindings: {
                maxLength: '<?',
                text: '<?'
            },
            template: '<span style="word-break: break-word">{{$ctrl.text}}</span>'
        });
})();