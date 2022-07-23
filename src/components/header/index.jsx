import React, { useEffect } from "react";
import { HeaaderContainer, ConnectButton, ButtonContainer } from "./styles";
import metamask from "../../assets/metamask.png";
import testWallet from "../../assets/wallet.png";
import { AppContext } from "../../context/appContext";

const Header = () => {
  const {
    isConnected,
    setIsConnected,
    nftsArray,
    setNftsArray,
    walletAddress,
    setWalletAddress,
  } = React.useContext(AppContext);

  const connectTestWallet = () => {
    setIsConnected(true);
    setWalletAddress("0x4765273c477c2dc484da4f1984639e943adccfeb");
  };

  const connectWallet = async () => {
    if (!window.ethereum) {
      console.log("metamask not installed!");
      return;
    }
    // if (isConnected) return;

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setWalletAddress(accounts[0]);
    setIsConnected(true);

    console.log(typeof accounts[0]);
  };

  const getNFTData = async () => {
    if (!walletAddress) return;

    const response = await fetch(
      `https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0x4765273c477c2dc484da4f1984639e943adccfeb`
    );
    const data = await response.json();
    console.log(data);
    setNftsArray(data.items);
  };

  useEffect(() => {
    getNFTData();
  }, [walletAddress]);

  // const shortAddress = typeof walletAddress.slice(0, 3);

  const wellcomeTitle = <h2>Connect your wallet to display your NFTs!</h2>;
  const connectedTitle = <h2>RaribleAPI</h2>;
  const connectedButton = <ConnectButton>{walletAddress}</ConnectButton>;
  const notConnected = (
    <React.Fragment>
      <ConnectButton onClick={connectWallet}>
        <div>
          Connect <img src={metamask} alt='wallet' />
        </div>
      </ConnectButton>
      <ConnectButton onClick={connectTestWallet}>
        Test Wallet
        <img src={testWallet} alt='wallet' />
      </ConnectButton>
    </React.Fragment>
  );

  return (
    <HeaaderContainer>
      {isConnected ? connectedTitle : wellcomeTitle}

      <ButtonContainer>
        {isConnected ? connectedButton : notConnected}
      </ButtonContainer>
    </HeaaderContainer>
  );
};
export default Header;
