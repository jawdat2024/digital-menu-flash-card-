import React, { useState } from 'react';

const AdminGate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    if (password === 'Cartelteam469') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect Password, Access Denied.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-didone font-bold text-white tracking-widest uppercase mb-8">Cartel</h1>
        <h2 className="text-[#c5a059] text-xl font-light tracking-widest mb-6 uppercase">Admin Access</h2>
        <input 
          type="password" 
          placeholder="Enter Access Code"
          className="bg-transparent border border-[#333] text-white p-4 rounded-lg w-full max-w-xs text-center focus:border-[#c5a059] outline-none transition-all"
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleLogin();
          }}
        />
        <button 
          onClick={handleLogin}
          className="mt-6 bg-[#c5a059] text-black font-bold py-3 px-10 rounded-full hover:bg-white transition-all duration-300"
        >
          ENTER DASHBOARD
        </button>
      </div>
    );
  }

  return <>{children}</>;
};

export default AdminGate;
