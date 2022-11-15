import React from 'react';

import { Navbar } from '&components/navbar/navbar.component';
import { About } from '&components/about/about.component';

const App = () => {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
    </main>
  );
};

export default App;
