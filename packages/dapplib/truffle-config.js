require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remain upgrade give argue off stuff'; 
let testAccounts = [
"0x40a6d425c67ad6980a2945ce893e3133395cdd49a9e00be8ec98219af05406b8",
"0x7af3f68dae6c84c7fe5efe775530157b228c88169d4ad4cf8828c4f600e4829e",
"0xe8ef0c5c23bb5a42e996d3b390e767e553ce1740b3b574a5e7e35d123d8cd6ce",
"0xb69edb6dd3a9f00fe05212b8c32a3c0d241e47f096e20f27f4d87144b76c1efa",
"0xabd9bca7bad3581ba38d5907a631daee7ad0f0425843795610dbbde6e4a311ab",
"0x458ab3bd1746b886b9a8166a9000e0919d00b96f1994849ca2ad5fb97d71cb46",
"0xfac67891ec6cd712338286492ab4d6402031da3e54b084c5ded3e3734bf8f327",
"0xa11a69be76b670108f7413c7f3b359dd6842adccd532a898ca9140eb204dd290",
"0x4023f05ded08b3a5a35c9ac57061138f0b749383d97692a715f858096910c311",
"0xa46f2f9df56ace150a3e8334ed54bb58770e1388de52e4a11bd212df79e2a16a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


