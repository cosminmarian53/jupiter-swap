import './global.css';
import { AppLayout } from '@/components/ui/app-layout';
import { ClusterProvider } from '@/components/cluster/cluster-data-access';
import { SolanaProvider } from '@/components/solana/solana-provider';
import Head from 'next/head';

export const metadata = {
  title: 'Jupiter-Solana-Swap',
  description: 'Made with ❤️ by cosminmarian53',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <script src="https://terminal.jup.ag/main-v2.js" data-preload></script>
        <link rel="icon" href="/jupiter_icon.ico" />
      </Head>
      <body>
        <ClusterProvider>
          <SolanaProvider>
            {/* bruh moment */}
            <AppLayout>{children}</AppLayout>
          </SolanaProvider>
        </ClusterProvider>
      </body>
    </html>
  );
}
