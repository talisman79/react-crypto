import { Layout, Spin } from 'antd';
import AppHeader from './AppHeader';
import AppContent from './AppContent';
import AppSider from './AppSider';
import CryptoContext, { useCrypto } from '../../context/crypto-context';

export default function AppLayout()
{
  const { loading } = useCrypto(CryptoContext);

  if (loading)
  {
    return <Spin fullscreen />
  }

  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContent />
      </Layout>
    </Layout>
  );
}