import useMediaQuery from "hooks/useMediaQuery";
import Navbar from "layouts/Navbar/Navbar";
import React, { useEffect } from "react";
import styles from "./MintPage.module.css";
import walletIntegration from "components/walletIntegration";

function MintPage() {
  const isBellow650px = useMediaQuery("(max-width : 650px)");
  const isBellow500px = useMediaQuery("(max-width : 500px)");
  useEffect(() => {
    walletIntegration.initialize();
  });
  return (
    <div className={`${styles.wrapper}`}>
      <Navbar />
      <div className={`${styles.content} container-wrapper`}>
        <div id="mintBundles">
          <h1
            className={`${styles.title} ${
              isBellow500px ? "fs-22px" : "fs-30px"
            } weight-5 yellow uppercase mb-50px`}
          >
            Mint Bundles
          </h1>

          <div className={styles.grid} id="gridHolder">
            <div></div>
            <div>
              {" "}
              <button
                className={`${styles.mintBtn} ${styles.silver} pointer ${
                  isBellow650px ? "fs-12px" : "fs-18px"
                } text-center  black weight-4 bundleButton`}
                data-amount="1"
              >
                Silver
              </button>
            </div>
            <div>
              {" "}
              <button
                className={`${styles.mintBtn} ${styles.gold} pointer ${
                  isBellow650px ? "fs-12px" : "fs-18px"
                } text-center  black weight-4 bundleButton`}
                data-amount="2"
              >
                Gold
              </button>
            </div>
            <div>
              {" "}
              <button
                className={`${styles.mintBtn} ${styles.platinum} pointer ${
                  isBellow650px ? "fs-12px" : "fs-18px"
                } text-center  black weight-4 bundleButton`}
                data-amount="3"
              >
                Platinum
              </button>
            </div>
            <div>
              {" "}
              <button
                className={`${styles.mintBtn} ${styles.daimond} pointer ${
                  isBellow650px ? "fs-12px" : "fs-18px"
                } text-center  black weight-4 bundleButton`}
                data-amount="5"
              >
                Diamond
              </button>
            </div>

            {/* 2ND ROW */}

            <div></div>
            <div>
              <p
                className={`${
                  isBellow650px ? "fs-12px" : "fs-18px"
                } text-center  white weight-4`}
              >
                1 NFT
              </p>
            </div>
            <div>
              <p
                className={`${
                  isBellow650px ? "fs-12px" : "fs-18px"
                } text-center  white weight-4`}
              >
                2 NFT
              </p>
            </div>
            <div>
              <p
                className={`${
                  isBellow650px ? "fs-12px" : "fs-18px"
                } text-center  white weight-4`}
              >
                3 NFT
              </p>
            </div>
            <div>
              <p
                className={`${
                  isBellow650px ? "fs-12px" : "fs-18px"
                } text-center  white weight-4`}
              >
                5 NFT
              </p>
            </div>

            {/* 3RD ROW */}
            <div>
              <div
                className={`${styles.mintBtn} ${styles.platinum} text-center  black weight-4`}
              >
                Whitelist
              </div>
            </div>
            <div className={`${styles.inActive}`}>
              <p
                className={`${
                  isBellow650px ? "fs-12px" : "fs-18px"
                } text-center  white weight-4`}
              >
                0.05 {isBellow500px ? <br /> : ""} ETH
              </p>
            </div>
            <div className={`${styles.inActive}`}>
              <p
                className={`${
                  isBellow650px ? "fs-12px" : "fs-18px"
                } text-center  white weight-4`}
              >
                0.09 {isBellow500px ? <br /> : ""} ETH
              </p>
            </div>
            <div className={`${styles.inActive}`}>
              <p
                className={`${
                  isBellow650px ? "fs-12px" : "fs-18px"
                } text-center  white weight-4`}
              >
                0.13 {isBellow500px ? <br /> : ""} ETH
              </p>
            </div>
            <div className={`${styles.inActive}`}>
              <p
                className={`${
                  isBellow650px ? "fs-12px" : "fs-18px"
                } text-center  white weight-4`}
              >
                0.22 {isBellow500px ? <br /> : ""} ETH
              </p>
            </div>

            {/* 4TH ROW */}
            <div>
              <div
                className={`${styles.mintBtn} ${styles.gold} text-center  black weight-4`}
              >
                Public Sale
              </div>
            </div>
            <div className={`${styles.inActive}`}>
              <p
                className={`${
                  isBellow650px ? "fs-12px" : "fs-18px"
                } text-center  white weight-4`}
              >
                0.07 {isBellow500px ? <br /> : ""} ETH
              </p>
            </div>
            <div className={`${styles.inActive}`}>
              <p
                className={`${
                  isBellow650px ? "fs-12px" : "fs-18px"
                } text-center  white weight-4`}
              >
                0.12 {isBellow500px ? <br /> : ""} ETH
              </p>
            </div>
            <div className={`${styles.inActive}`}>
              <p
                className={`${
                  isBellow650px ? "fs-12px" : "fs-18px"
                } text-center  white weight-4`}
              >
                0.18 {isBellow500px ? <br /> : ""} ETH
              </p>
            </div>
            <div className={`${styles.inActive}`}>
              <p
                className={`${
                  isBellow650px ? "fs-12px" : "fs-18px"
                } text-center  white weight-4`}
              >
                0.28 {isBellow500px ? <br /> : ""} ETH
              </p>
            </div>
          </div>
        </div>
        <div
          to="/mint"
          className="yellow-btn white uppercase weight-7 text-center fs-16px pointer"
          id="connectWalletBtn"
          onClick={walletIntegration.connectButtonOnClick}
        >
          Connect Wallet
          {/* {isBellow700px ? <FaBabyCarriage size={20} /> : "Mint Now"} */}
        </div>
        <div style={{ marginTop: 1 + "vw" }} id="nft-info-box"></div>
      </div>
    </div>
  );
}

export default MintPage;
