import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Menu from './components/Menu';
import CheckIn from './pages/CheckIn';

function AppRouter() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/checkin' element={<CheckIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
