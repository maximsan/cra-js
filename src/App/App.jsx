import { useEffect } from 'react';
import { appTitle } from '../config';

export const App = () => {
  useEffect(() => {
    document.title = appTitle;
  }, []);

  return <div>Start prototype</div>;
};
