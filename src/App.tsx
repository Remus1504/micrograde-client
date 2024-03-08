import { FC, ReactElement } from 'react'; // Make sure to import React when using JSX
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRoutes';

const App: FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <div className="w-screen min-h-screen flex-col relative">
        <AppRouter />
      </div>
    </BrowserRouter>
  );
};

export default App;
