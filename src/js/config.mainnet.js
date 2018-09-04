(function() {
    'use strict';

    angular.module('web').constant('appConfig', {
        apiDomain: 'https://nodes.amur.host',
        dataServiceBaseUrl: 'https://api.amur.host/v0',
        blockchainName: 'Mainnet',
        title: 'Amur Explorer',
        nodes: [{
            url: 'https://nodes.amur.host',
            maintainer: 'Amur'
        }],
        peerExplorer: {
            url: 'https://testnet.amur.host',
            title: 'TESTNET Explorer'
        },
        wallet: {
            url: 'http://amur.host/client',
            title: 'Wallet'
        }
    });

    angular.module('web').constant('constants.network', {
        NETWORK_NAME: 'mainnet', // 'devnet', 'testnet', 'mainnet'
        ADDRESS_VERSION: 1,
        NETWORK_CODE: 'Q',
        INITIAL_NONCE: 0
    });
})();
