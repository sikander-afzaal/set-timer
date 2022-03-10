import { ethers } from 'ethers';
import styles from "pages/MintPage/MintPage.module.css";
console.log(styles.inActive)

let ethereumProvider = null;

const supportedNetworks = {
    mainnet: { name: 'Ethereum Mainnet', chainId: 1, etherScanUrl: 'https://etherscan.io/tx/', openSeaUrl: 'https://opensea.io/account?search[sortBy]=CREATED_DATE&search[sortAscending]=false' },
    rinkeby: { name: 'Rinkeby', chainId: 4, etherScanUrl: 'https://rinkeby.etherscan.io/tx/', openSeaUrl: 'https://testnets.opensea.io/account?search[sortBy]=CREATED_DATE&search[sortAscending]=false' },
}

const currentNetwork = supportedNetworks.mainnet;

const config = {
    contractAddress: '0xcc914d2de70db97e26ac29a44216e731095b2c66',
    networkName: currentNetwork.name,
    etherScanUrl: currentNetwork.etherScanUrl,
    openSeaUrl: currentNetwork.openSeaUrl,
    networkParams: {
        chainId: ethers.utils.hexValue(currentNetwork.chainId)
    },
    contractABI: [
        "function tokenPrice(uint256 amount) public view returns (uint256)",
        "function mint(uint256 amount) external payable",
        "function hasPresaleStarted() public view returns (bool)",
        "function hasPublicSaleStarted() public view returns (bool)",
        "function boughtAmount() public view returns (uint256)",
        "function BUY_AMOUNT() public view returns (uint256)",
        "function presaleWhitelist(address target) public view returns (bool)",
        "function presaleWhitelistPurchased(address target) public view returns (uint256)",
        "function maxTokensPerWhitelistedAddress() public view returns (uint256)",
        "function maxTokensPerMint() public view returns (uint256)"
    ]
}


let infoBox = null;
const loadingString = `
<svg height="32" width="32">
<circle cx="16" cy="16" fill="none" r="14" stroke="#34C77B" stroke-dasharray="87.96459430051421" stroke-dashoffset="74.76990515543707" stroke-width="4" class="nft-modal-stage-loading"></circle>
</svg>
`;

function setInfoBox(htmlText) {
    // infoBox.classList.remove("Nft-Error")
    document.querySelector('#nft-info-box').innerHTML = htmlText;
    // infoBox.style.display = htmlText == '' ? 'none' : 'block';
    // document.querySelector('#mintBundles').style.display = 'none';
    // document.querySelector('#connectWalletBtn').style.display = 'none';
}

function alertUser(message) {
    console.log(message);
    alert(message);
    // setInfoBox(message);
}

function displayError(error) {
    alertUser(error);
    // setInfoBox(error);
    // infoBox.classList.add("Nft-Error");
    return false;
};

const gridRows = 5;
const startColumns = 1;
let contractStateInitialized = false;
let maxColumns = 0;
let maxValue = 0;
let presalePurchased = 0;

function activateRow(startRow){
    maxColumns = 0;
    [...document.getElementsByClassName('bundleButton')].map(el => {
        let amount = +el.dataset.amount;
        if(maxValue.gte(amount)) {
            maxColumns++;
        }
    });
    // console.log(maxColumns, maxValue);
    let grid = document.querySelector("#gridHolder");
    if(grid && grid.children) {
        [...grid.children].map((el, idx) => {
            let column = idx % gridRows;
            let row = (idx / gridRows) >> 0;
            if( column >= startColumns && row === startRow) {
                if(column <= maxColumns){
                    el.className = "";
                }else if(el.className == ""){
                    console.log(styles);
                    el.className = styles.inActive;
                }
            }
        });
    }
}
let presaleOn = false;
let saleOn = false;
let contract = null;

async function setupMintPage(noAlert) {
    presaleOn = await contract.hasPresaleStarted();
    saleOn = await contract.hasPublicSaleStarted();


    contractStateInitialized = true;
    if (!presaleOn) {
        noAlert || displayError('Sorry, the NFTs are not for sale yet.');
        return;
    }

    if (!saleOn) {
        if (!(await contract.presaleWhitelist(ethereumProvider.selectedAddress))) {
            noAlert || displayError('Sorry, you are not whitelisted. Please wait for the public sale.');
            return;
        }
    }

    if (saleOn) {
        maxValue = (await contract.maxTokensPerMint());
        activateRow(3);
    } else {
        const maxPerWhitelistedAddress = await contract.maxTokensPerWhitelistedAddress();
        presalePurchased = await contract.presaleWhitelistPurchased(ethereumProvider.selectedAddress);
        maxValue = maxPerWhitelistedAddress.sub(presalePurchased);
        activateRow(2);
        if (maxValue.lte(0)) {
            noAlert || displayError(`Sorry, you have already minted ${maxPerWhitelistedAddress} NFTs. Please wait for the public sale to mint more.`);
            return;
        }
    }

    contractStateInitialized = true;

    return true;
}

let mintPressed = false, transactionStarted = false;
async function mintClick(mintAmount) {
    if(mintPressed){
        if (transactionStarted) {
            alertUser('Please wait for the transaction to complete.');
        } else {
            alertUser('Please continue in MetaMask.');
        }
        return;
    }
    mintPressed = true;

    const iface = new ethers.utils.Interface(config.contractABI);
    const params = iface.encodeFunctionData('mint', [ethers.utils.hexlify(mintAmount)]);

    try {
        if (!(await verifyWalletConnection())) {
            mintPressed = false;
            return;
        }

        const requiredAmount = (await contract.tokenPrice(mintAmount));

        const hbal = await ethereumProvider.request({
            method: 'eth_getBalance',
            params: [ethereumProvider.selectedAddress, 'latest'],
        });
        if (requiredAmount.gt(ethers.BigNumber.from(hbal))) {
            alertUser(
                `Not enough balance. You need ${ethers.utils.formatEther(
            requiredAmount
          )} ETH to mint ${mintAmount} NFT${mintAmount > 1 ? 's' : ''}.`
            );
            mintPressed = false;
            throw Error('ignore');
        }

        const txHash = await ethereumProvider.request({
            method: 'eth_sendTransaction',
            params: [{
                from: ethereumProvider.selectedAddress,
                to: config.contractAddress,
                value: requiredAmount.toHexString().replace(/^0x0+(?=\d)/, '0x'),
                data: params
            }, ],
        });

        transactionStarted = true;

        setInfoBox(`
        Transaction submitted. Please wait for confirmation.
        <br>
        Transaction hash: ${txHash}
        <br>
        <a target="_blank" href="${config.etherScanUrl}${txHash}">View on EtherScan</a>
        <br>
        <svg height="32" width="32">
          <circle cx="16" cy="16" fill="none" r="14" stroke="#34C77B" stroke-dasharray="87.96459430051421" stroke-dashoffset="74.76990515543707" stroke-width="4" class="nft-modal-stage-loading"></circle>
        </svg>
      `);

        try {
            const tx = await (new ethers.providers.Web3Provider(ethereumProvider)).getTransaction(txHash);
            const txReceipt = await tx.wait();
            console.log(txReceipt);
            setInfoBox(`
          NFTs succesfully minted!
          <br>
          Transaction hash: ${txHash}
          <br>
          <a target="_blank" href="${config.etherScanUrl}${txHash}">View on EtherScan</a>
          <br>
          <a target="_blank" href="${config.openSeaUrl}">
            View your NFTs on OpenSea
          </a>
        `);
        } catch (err) {
            console.log(err);
            return displayError('There was an error with your transaction. Please refresh and try again.');
        }
    } catch (err) {
        if (err.code == 4001) {
            alertUser('Transaction rejected by user');
        }
    }
    mintPressed = false;
    transactionStarted = false;
}

async function verifyWalletConnection({ noAlert } = {}) {
    if (!window.ethereum) {
        alertUser('Please install MetaMask to interact with this feature');
        return;
    }

    ethereumProvider = window.ethereum.providers ? window.ethereum.providers.find((provider) => provider.isMetaMask) : window.ethereum

    // localStorage.setItem('verifyWalletRequested', '1');
    let accounts;
    try {
        if (ethereumProvider.chainId !== config.networkParams.chainId) {
            await ethereumProvider.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: config.networkParams.chainId }], // chainId must be in hexadecimal numbers
            });
            await new Promise((resolve) => setTimeout(resolve, 1000));
            if (ethereumProvider.chainId !== config.networkParams.chainId) {
                alertUser(`Please switch MetaMask network to ${config.networkName}`);
                return false;
            }
        }
        accounts = await ethereumProvider.request({ method: 'eth_requestAccounts' });
    } catch (error) {
        if (error.code === -32002) {
            alertUser('Please open your MetaMask and select an account');
            return;
        } else if (error.code === 4001) {
            alertUser('Please connect with MetaMask');
            return;
        } else {
            throw error;
        }
    }

    contract = new ethers.Contract(config.contractAddress, config.contractABI, new ethers.providers.Web3Provider(ethereumProvider));
    document.querySelector('#connectWalletBtn').style.display = 'none';
    return accounts[0];
}

let setupDone = false;
export default {
    async initialize() {
        // document.querySelector('#connectWalletBtn').style.display = 'none';
        // document.querySelector('#mintBundles').style.display = 'none';
        document.querySelector('#mintBundles').style.display = 'block';
        [...document.getElementsByClassName('bundleButton')].map(el => {
            let amount = +el.dataset.amount;
            if(amount) {
                el.addEventListener('click', async () => {
                    try {
                        if (await verifyWalletConnection()) {
                            await setupMintPage();
                            if (contractStateInitialized) {
                                if(amount <= maxValue){
                                    await mintClick(amount);
                                } else {
                                    if (maxValue != 0) {
                                        displayError(`You can mint maximum ${maxValue} more NFTs.`)
                                    }
                                    return;
                                }
                            } else {
                                alertUser('Please connect your wallet first');
                            }
                        }
                    } catch (err) {
                        // alertUser(`${err.stack}`);
                    }
                });
            } 
        });
    },
    async connectButtonOnClick() {
        try {
            setInfoBox(loadingString);
            
            if (await verifyWalletConnection()) {
                if (await setupMintPage(true)) {

                } else {
                    // alertUser('Setup mint failed');
                }
            } else {
                document.querySelector('#connectWalletBtn').style.display = 'block';
            }
            setInfoBox('');
        } catch (err) {
            // alertUser(`${err.stack}`);
        }
    },
    verifyWalletConnection
}