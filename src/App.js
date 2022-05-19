import { useState } from 'react';
import { Switch } from '@headlessui/react';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <header className="py-16">
        <h1 className="text-center text-darkGrayishBlue"> Our Pricing</h1>
        <div className="mx-auto flex w-[275px] items-center justify-between gap-3 pt-10 text-lightGrayishBlue">
          <span>Annually</span>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
              enabled
                ? 'bg-gradient-to-r from-gradientFrom to-gradientTo p-1 hover:opacity-60'
                : 'bg-gradient-to-r from-gradientFrom to-gradientTo p-1 hover:opacity-60'
            }
          relative inline-flex h-[45px] w-[80px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[32px] w-[32px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
          <span>Monthly</span>
        </div>
      </header>
      <Cards toggle={enabled} />

      <Footer />
    </>
  );
}

export default App;
