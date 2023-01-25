import { Route, Routes, BrowserRouter } from 'react-router-dom';
import CheckIn from './pages/CheckIn';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/checkin' element={<CheckIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
