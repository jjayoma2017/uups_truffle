const { upgradeProxy } = require('@openzeppelin/truffle-upgrades')

const MarsV2 = artifacts.require('MarsV2')
const MarsV3 = artifacts.require('MarsV3')

module.exports = async function (deployer) {
  const existing = await MarsV2.deployed()
  const instance = await upgradeProxy(existing.address, MarsV3, { deployer })
  console.log('Upgraded', instance.address)
}
