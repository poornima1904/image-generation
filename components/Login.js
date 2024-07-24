// components/Login.js
import React from 'react';
import { signInWithGoogle, signOut } from '../src/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../src/firebaseConfig';

const Login = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="flex justify-center mt-10">
      {user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          <button
            onClick={signOut}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <button
          onClick={signInWithGoogle}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Sign In with Google
        </button>
      )}
    </div>
  );
};

export default Login;
