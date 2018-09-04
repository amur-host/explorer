(function () {
    'use strict';

    function AmurCopyButtonController() {
        var ctrl = this;

        ctrl.$onInit = function () {
        };
    }

    angular
        .module('web')
        .component('amurCopyButton', {
            controller: AmurCopyButtonController,
            bindings: {
                text: '<?'
            },
            template: '<button class="btn btn-info btn-white btn-xs pull-right no-border" title="Copy to clipboard" ' +
                        'ngclipboard data-clipboard-text="{{$ctrl.text}}">' +
                    '<i class="icon-only glyphicon glyphicon-copy bigger-150"></i>' +
                '</button>'
        });
})();