const {Blockchain, transaction} = require('./blockchain');
const EC = require ('elliptic').ec;
const ec = new EC('secp256k1');

const mykey = ec.keyFromPrivate('c4c9d0ed285fe327061d6b183a5e1852ebbbcdc52225d107c0a401e402b87aa8');
const mywalletAddress= mykey.getPublic('hex'); 

let BitConnect= new Blockchain();

const tx1= new transaction(mywalletAddress, 'Public key goes here', 10);
tx1.signTransaction(mykey);

console.log('\nStarting miner.. ');

BitConnect.minePendingTransactions(mywalletAddress)

console.log('\nBalance is',BitConnect.getBalanceofAddress(mywalletAddress));

BitConnect.chain[1].transaction[0].amount=1;

console.log('is chain valid?',BitConnect.isChainValid());