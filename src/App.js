import logo from './logo.svg';
import './App.css';
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import CustomAuthentiator from './CustomAuthenticator';
import Database from './Database'
import { useState } from 'react';

/* src/App.js */
const formFields = {
  signIn: {
    username: {
      labelHidden: false,
      placeholder: 'Enter your username here',
      isRequired: true,
      label: 'Username:'
    },
  },
}
function App({ signOut, user }) {
  // Todo logic here

  return (
    <>



      {/* Add Todo JSX here  */}
     <CustomAuthentiator>

     </CustomAuthentiator>

      <Database />
    </>
  );
}

export default App;
