import React from 'react';
import PropTypes from 'prop-types';

const LoginContext = React.createContext(false);

export default LoginContext;

export function LoginContextProvider({ children }) {
  return (
    <LoginContext.Provider value={memoizedValue}>
      {children}
    </LoginContext.Provider>
  );
}

LoginContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};
