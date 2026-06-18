import React from 'react';
import DigitalMenu from './components/DigitalMenu';
import { LanguageProvider } from './components/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <DigitalMenu />
    </LanguageProvider>
  );
};

export default App;
;