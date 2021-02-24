import { useEffect } from 'react';
import { SaveButton } from '../components/Buttons/SaveButton/SaveButton';
import { appTitle } from '../config';

export const App = () => {
  useEffect(() => {
    document.title = appTitle;
  }, []);

  return (
    <div>
      Start prototype
      <SaveButton />
    </div>
  );
};
