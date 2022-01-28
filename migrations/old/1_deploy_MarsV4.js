const { upgradeProxy } = require('@openzeppelin/truffle-upgrades')

const MarsV3 = artifacts.require('MarsV3')
const MarsV4 = artifacts.require('MarsV4')

module.exports = async function (deployer) {
  const existing = await MarsV3.deployed()
  const instance = await upgradeProxy(existing.address, MarsV4, { deployer })
  console.log('Upgraded', instance.address)
}
