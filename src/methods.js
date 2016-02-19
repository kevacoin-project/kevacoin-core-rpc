/* eslint-disable no-inline-comments */

/**
 * Export available rpc methods.
 */

export default {
  abandonTransaction: '>=0.12.0',
  addMultiSigAddress: '>=0.1.0',
  addNode: '>=0.8.0',
  backupWallet: '>=0.3.12',
  clearBanned: '>=0.12.0',
  createMultiSig: '>=0.1.0',
  createRawTransaction: '>=0.7.0',
  decodeRawTransaction: '>=0.7.0',
  decodeScript: '>=0.9.0',
  disconnectNode: '>=0.12.0',
  dumpPrivKey: '>=0.6.0',
  dumpWallet: '>=0.9.0',
  encryptWallet: '>=0.1.0',
  estimateFee: '>=0.10.0',
  estimatePriority: '>=0.10.0',
  estimateSmartFee: '>=0.12.0',
  estimateSmartPriority: '>=0.12.0',
  fundRawTransaction: '>=0.12.0',
  generate: '>=0.11.0',
  getAccount: '>=0.1.0',
  getAccountAddress: '>=0.3.18',
  getAddedNodeInfo: '>=0.8.0',
  getAddressesByAccount: '>=0.1.0',
  getBalance: '>=0.3.18',
  getBestBlockHash: '>=0.9.0',
  getBlock: '>=0.6.0',
  getBlockCount: '>=0.1.0',
  getBlockHash: '>=0.6.0',
  getBlockHeader: '>=0.12.0',
  getBlockTemplate: '>=0.7.0',
  getBlockchainInfo: '>=0.9.2',
  getChainTips: '>=0.10.0',
  getConnectionCount: '>=0.1.0',
  getDifficulty: '>=0.1.0',
  getGenerate: '>=0.1.0',
  getHashesPerSec: '<0.10.0',
  getInfo: '>=0.1.0',
  getMempoolInfo: '>=0.10.0',
  getMiningInfo: '>=0.6.0',
  getNetTotals: '>=0.1.0',
  getNetworkHashPs: '>=0.9.0',
  getNetworkInfo: '>=0.9.2',
  getNewAddress: '>=0.1.0',
  getPeerInfo: '>=0.7.0',
  getRawChangeAddress: '>=0.9.0',
  getRawMemPool: '>=0.7.0',
  getRawTransaction: '>=0.7.0',
  getReceivedByAccount: '>=0.1.0',
  getReceivedByAddress: '>=0.1.0',
  getTransaction: '>=0.1.0',
  getTxOut: '>=0.7.0',
  getTxOutProof: '>=0.11.0',
  getTxOutSetInfo: '>=0.7.0',
  getUnconfirmedBalance: '>=0.9.0',
  getWalletInfo: '>=0.9.2',
  getWork: '<0.10.0',
  help: '>=0.1.0',
  importAddress: '>=0.10.0',
  importPrivKey: '>=0.6.0',
  importPubKey: '>=0.12.0',
  importWallet: '>=0.9.0',
  keypoolRefill: '>=0.1.0',
  listAccounts: '>=0.1.0',
  listAddressGroupings: '>=0.7.0',
  listBanned: '>=0.12.0',
  listLockUnspent: '>=0.8.0',
  listReceivedByAccount: '>=0.1.0',
  listReceivedByAddress: '>=0.1.0',
  listSinceBlock: '>=0.5.0',
  listTransactions: '>=0.3.18',
  listUnspent: '>=0.7.0',
  lockUnspent: '>=0.8.0',
  move: '>=0.3.18',
  ping: '>=0.9.0',
  prioritiseTransaction: '>=0.10.0',
  sendFrom: '>=0.3.18',
  sendMany: '>=0.3.21',
  sendRawTransaction: '>=0.7.0',
  sendToAddress: '>=0.1.0',
  setAccount: '>=0.1.0',
  setBan: '>=0.12.0',
  setGenerate: '>=0.1.0',
  setTxFee: '>=0.3.22',
  signMessage: '>=0.5.0',
  signRawTransaction: '>=0.7.0',
  stop: '>=0.1.0',
  submitBlock: '>=0.7.0',
  validateAddress: '>=0.3.14',
  verifyChain: '>=0.9.0',
  verifyMessage: '>=0.5.0',
  verifyTxOutProof: '>0.11.0',
  walletLock: '>=0.1.0',
  walletPassphrase: '>=0.1.0',
  walletPassphraseChange: '>=0.1.0'
};