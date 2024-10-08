//deprecated

'use client'
import { createContext, useContext, useEffect, useState } from 'react';

const VCSContext = createContext<any>(null);

export const VCSProvider = ({ children }: {
  children: React.ReactNode
}) => {
  const [vcs, setVCS] = useState(null);

  useEffect(() => {
    async function init() {
      const res = await fetch('/api/vcs');
      const { vcs } = await res.json();

      setVCS(vcs);
    }
    init();
  }, []);

  if (vcs === null) {
    return <div>Loading...</div>;
  }
  
  return (
    <VCSContext.Provider value={vcs}>
      {children}
    </VCSContext.Provider>
  );
};

export const useVCS = () => {
  const context = useContext(VCSContext);
  if (context === undefined) {
    throw new Error('useVCS must be used within a VCSProvider');
  }
  return context;
}