require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inner knife flush space street dash misery common include civil army gift'; 
let testAccounts = [
"0x16fdd8874585383523a02864ff4c61b1f2c68acf11169ebdc44f009b6476db9c",
"0xa91162aa0c3e115da624a1b2e610227a2b64fcf6304b6e5b91183f2add4a2e7a",
"0xdffdb85f4c35f6635348c5472359ee35289066719e2d8ca08f98fbaf8dfb8c47",
"0xfc990c05619a6e85406662c725c69a21487437c06a864cd93c6663131571d9d1",
"0xf80f8f461e8df7b548c4c87b78c0a917f66924575fe76b5377a068f205cd6bd0",
"0xc717aa653830d0afbb87e3600cf6e917af5ca9547806338a66f3df1943d3ccea",
"0x30de913a21aa2870444373eca21457f45c409a675daafb09870755d6d4bd7951",
"0x094bc052c2512dd3edf9c9d2bcce5e57d4fd09e7d21e6c3ca89ff6f078c0ab1b",
"0x3131c7daa08422ae191160cf2d5699e03168ed443027137bc9e1ed1899a8e23c",
"0xc8fa912ca2bd6947608501d6e1fd799a7b608da2b662c04e479d203e677c9cea"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


