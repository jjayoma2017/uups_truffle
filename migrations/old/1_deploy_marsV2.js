const { upgradeProxy } = require('@openzeppelin/truffle-upgrades')

const Mars = artifacts.require('Mars')
const MarsV2 = artifacts.require('MarsV2')

module.exports = async function (deployer) {
  const existing = await Mars.deployed()
  const instance = await upgradeProxy(existing.address, MarsV2, { deployer })
  console.log('Upgraded', instance.address)
}
