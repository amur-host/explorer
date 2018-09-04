(function () {
    'use strict';

    angular.module('web').constant('appConfig', {
        apiDomain: 'http://34.251.200.245:6869',
        dataServiceBaseUrl: 'https://api.amur.host/v0',
        title: 'Amur Devnet Explorer',
        blockchainName: 'Devnet',
        nodes: [
            {url: 'http://34.251.200.245:6869', maintainer: 'Amur', showAsLink: true},
            {url: 'http://34.237.49.199:6869', maintainer: 'Amur', showAsLink: true},
            {url: 'http://35.157.212.173:6869', maintainer: 'Amur', showAsLink: true},
            {url: 'http://52.28.115.7:6869', maintainer: 'Amur', showAsLink: true},
            {url: 'http://13.229.61.140:6869', maintainer: 'Amur', showAsLink: true},
            {url: 'http://52.192.190.54:6869', maintainer: 'Amur', showAsLink: true}
        ],
        peerExplorer: {
            url: 'http://devnet.amur.host',
            title: 'Devnet Explorer'
        },
        wallet: {
            url: 'http://testnet.amur.host/client',
            title: 'Wallet'
        }
    });


    angular.module('web').constant('constants.network', {
        NETWORK_NAME: 'devnet', // 'devnet', 'testnet', 'mainnet'
        ADDRESS_VERSION: 1,
        NETWORK_CODE: 'D',
        INITIAL_NONCE: 0
    });
})();
