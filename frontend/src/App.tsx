import HomePage from 'features/home/HomePage';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { PrivateRoute } from './components/common/PrivateRoute';
import Layout from './components/Layout/Layout';
import ManageUser from './features/admin/ManageUser';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import CounterPage from './features/counter/CounterPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <ManageUser />
            </PrivateRoute>
          }
        />
        <Route path="admin/register" element={<Register />} />
        <Route path="admin/edit/:userId" element={<Register />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>} />
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
