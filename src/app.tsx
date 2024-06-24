import type { Component } from 'solid-js';
import { PasswordGenerator } from './components/PasswordGenerator';
import "overlayscrollbars/overlayscrollbars.css";


const App: Component = () => {

  return (
    <main class="flex flex-col items-center justify-center h-full w-full gap-4">
      <h1 class="heading-medium">Password Generator</h1>
      <PasswordGenerator />
    </main>
  );
};

export default App;
