// src/components/NavBar.js

import React from "react";
import { useAuth0 } from '../react-auth0-spa';
import {Button} from 'react-bootstrap'

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <Button
          onClick={() =>
            loginWithRedirect({})
          }
        >
          Log in
        </Button>
      )}

      {isAuthenticated && <Button onClick={() => logout()}>Log out</Button>}
    </div>
  );
};

export default NavBar;