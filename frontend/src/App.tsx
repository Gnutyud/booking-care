import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './features/counter/auth/Login';
import CounterPage from './features/counter/CounterPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="counter" element={<CounterPage />} />
        <Route path="login" element={<h1>Login Page</h1>} />
      </Routes>
    </>
  );
}

export default App;
