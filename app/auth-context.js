import { createContext, useCallback, useEffect, useState } from 'react';
import { getAthlete } from './api/athlete';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(null);
  const [user, setUser] = useState(null);

  // see if we're auth'd
  const checkLoginState = useCallback(async () => {
    try {
      const user = await getAthlete();
      console.debug('checkLoginState', user);
      if (user && user.id) {
        setLoggedIn(true);
        setUser(user);
      } else {
        setLoggedIn(false);
        setUser(null);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  // run every time app initially renders
  useEffect(() => {
    checkLoginState();
  }, [checkLoginState]);

  return (
    <AuthContext.Provider value={{ loggedIn, checkLoginState, user }}>
      {children}
    </AuthContext.Provider>
  );
};
