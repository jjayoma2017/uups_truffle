const { upgradeProxy } = require('@openzeppelin/truffle-upgrades')

const MarsV4 = artifacts.require('MarsV4')
const MarsV5 = artifacts.require('MarsV5')

module.exports = async function (deployer) {
  const existing = await MarsV4.deployed()
  const instance = await upgradeProxy(existing.address, MarsV5, { deployer })
  console.log('Upgraded', instance.address)
}
