require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia : {
      url: 'https://eth-sepolia.g.alchemy.com/v2/XyCV-xBmDwGSiZ1sO9_5bwUDC4hTvahv',
      accounts: ['cb8bf66cf37a1a87a61d2b8b3c8f3210ca8d96231df0bde58f4e0f5ee3b8240a'],
    },
  },
};