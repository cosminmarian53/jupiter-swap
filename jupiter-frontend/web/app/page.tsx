'use client';

import { useEffect } from 'react';
import styles from './page.module.css';

function Page() {
  useEffect(() => {
    // Dynamically load the Jupiter script
    const script = document.createElement('script');
    script.src = 'https://terminal.jup.ag/main-v2.js';
    script.onload = () => launchJupiter(); // Initialize Jupiter after the script loads
    document.head.appendChild(script);
  }, []);

  function launchJupiter() {
    if (window.Jupiter) {
      window.Jupiter.init({
        displayMode: 'integrated',
        integratedTargetId: 'integrated-terminal',
        endpoint:
          'https://mainnet.helius-rpc.com/?api-key=c40259bd-4eed-4f21-bf80-d4d08af5a019',
        strictTokenList: false,
        defaultExplorer: 'SolanaFM',
        formProps: {
          initialAmount: '0',
          initialInputMint: 'So11111111111111111111111111111111111111112',
          initialOutputMint: '7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs',
        },
      });
    } else {
      console.error('Jupiter script not loaded yet');
    }
  }
  return (
    <div className={styles.body}>
      <div id="integrated-terminal"></div>
    </div>
  );
}

export default Page;
