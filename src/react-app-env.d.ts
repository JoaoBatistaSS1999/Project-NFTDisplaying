/// <reference types="react-scripts" />

import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

// npm install @metamask/providers
