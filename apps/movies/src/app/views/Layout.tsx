import { useState } from 'react';
import Header from '../components/Header';

function Layout({ children }: { children: React.ReactNode }) {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <>
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      <div>{children}</div>
    </>
  );
}

export default Layout;
