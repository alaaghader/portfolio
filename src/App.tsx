import React from 'react';

import { Navbar } from '&components/navbar/navbar.component';
import { About } from '&components/about/about.component';
import { Skills } from '&components/skills/skills.component';
import { ContactMe } from '&components/contactMe/contactMe.component';

const App = () => {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Skills />
      <ContactMe />
    </main>
  );
};

export default App;
