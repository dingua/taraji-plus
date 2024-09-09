import React, { useState } from 'react';
import { signIn } from 'next-auth/react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implement email/password login logic here
    // You may want to use your authentication service or API
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      
      <button onClick={() => signIn('apple')}>Sign in with Apple</button>
      <button onClick={() => signIn('facebook')}>Sign in with Facebook</button>
      
      <form onSubmit={handleEmailLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Sign in with Email</button>
      </form>
    </div>
  );
}

export default Login;