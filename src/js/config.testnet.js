(function () {
    'use strict';

    angular.module('web').constant('appConfig', {
        apiDomain: 'https://pool.testnet.amur.host',
        dataServiceBaseUrl: 'https://api.testnet.amur.host/v0',
        title: 'Amur Testnet Explorer',
        blockchainName: 'Testnet',
        nodes: [
            {url: 'https://testnode1.amur.host', maintainer: 'Amur', showAsLink: true},
            {url: 'https://testnode2.amur.host', maintainer: 'Amur', showAsLink: true},
            {url: 'https://testnode3.amur.host', maintainer: 'Amur', showAsLink: true},
            {url: 'https://testnode4.amur.host', maintainer: 'Amur', showAsLink: true}
        ],
        faucet: {
            url: 'https://testnode1.amur.host/faucet',
            captchaKey: '6Le9hSgUAAAAAAtIe04SrgDy23PsBZOazfb-li66'
        },
        peerExplorer: {
            url: 'https://amur.host',
            title: 'MAINNET Explorer'
        },
        wallet: {
            url: 'https://testnet.amurwallet.io',
            title: 'Wallet'
        }
    });

    angular.module('web').constant('constants.network', {
        NETWORK_NAME: 'devel', // 'devnet', 'testnet', 'mainnet'
        ADDRESS_VERSION: 1,
        NETWORK_CODE: 'T',
        INITIAL_NONCE: 0
    });
})();
