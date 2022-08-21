import { useState } from 'react';
import Header from '../components/Header';
import TempleContext from '../context/TempleContext';

function Layout({ children }: { children: React.ReactNode }) {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [userId, setUserId] = useState<number>(9);

  return (
    <TempleContext.Provider value={{ userId, setUserId }}>
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      {children}
    </TempleContext.Provider>
  );
}

export default Layout;
