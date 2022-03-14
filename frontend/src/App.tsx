import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { PrivateRoute } from './components/common/PrivateRoute';
import Layout from './components/Layout/Layout';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import CounterPage from './features/counter/CounterPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>Home Page</h1>} />
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
        </Route>
      </Routes>
    </>
  );
}

export default App;
