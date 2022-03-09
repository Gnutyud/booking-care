import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { PrivateRoute } from './components/common/PrivateRoute';
import Login from './features/counter/auth/Login';
import CounterPage from './features/counter/CounterPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/counter"
          element={
            <PrivateRoute>
              <CounterPage />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default App;
