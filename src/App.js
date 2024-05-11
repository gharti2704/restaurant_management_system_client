import './index.css';
import React, { useState } from 'react';
import RegistrationForm from './component/RegistrationForm';
import LoginForm from './component/LoginForm';

function App() {
  const [formToShow, setFormToShow] = useState('register'); // default to 'register'

  const showLoginForm = () => setFormToShow('login');
  const showRegistrationForm = () => setFormToShow('register');
  return (
    <div>
      {formToShow === 'register' ? (
        <RegistrationForm showLoginForm={showLoginForm} />
      ) : (
        <LoginForm showRegistrationForm={showRegistrationForm} />
      )}
    </div>
  );
}

export default App;
