import React from 'react';
import Header1 from './header1/page';
import Header2 from './header2/page';
import Header3 from './header3/Header3';
import Header4 from './header4/Header4';
import Header5 from './header5/Header5';
import Header6 from './header6/Header6';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header1 />
      <Header2 />
      <Header3 />
      <Header4 />
      <Header5 />
      <Header6 />
      <main className="pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif">Bienvenue chez L'Atelier</h1>
          {/* Add your main content here */}
        </div>
      </main>
    </div>
  );
}

export default App;