import { ReactNode } from 'react';
import Link from 'next/link';
import { WalletButton } from '../solana/solana-provider';

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '6px 12px',
        }}
      >
        <div>
          <Link href="/">
            <div className="navbar">
              <img
                src="/jupiter_icon.png"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  padding: '6px',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
                height={24}
                alt="Jupiter Swap"
              />
            </div>
          </Link>
        </div>
        <div>
          <WalletButton />
        </div>
      </div>
      <div style={{ flexGrow: 1, padding: '6px' }}>{children}</div>
      <footer
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6px 10px',
          background: 'black',
        }}
      >
        <aside>
          <p>
            Made with 💖 by{' '}
            <a
              href="https://github.com/cosminmarian53"
              target="_blank"
              rel="noopener noreferrer"
            >
              cosminmarian53
            </a>
          </p>
        </aside>
      </footer>
    </div>
  );
}
