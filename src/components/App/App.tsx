import { Outlet } from 'react-router-dom';

import { StyledApp } from '@components/App/App.styled';
import Header from '@components/Header/Header';

const App = () => {
  return (
    <StyledApp>
      <Header />
      <main>
        <Outlet />
      </main>
    </StyledApp>
  );
};

export default App;
