import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Amplify } from "aws-amplify";
// import { withAuthenticator } from "@aws-amplify/ui-react";
// import "@aws-amplify/ui-react/styles.css";

//import awsExports from "./aws-exports";
import awsExports from "./aws-config";

import InstanceManagement from './components/InstanceManagement';

//console.log('Amplify Configuration:', awsExports); // 設定内容を確認
//console.log(process.env.REACT_APP_AWS_PROJECT_REGION );

Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <InstanceManagement />
    </div>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <h2>Hello React app with AWS</h2>
  //       {user ? (
  //         <>
  //           <h3>私は権限を持っています：{user.username}</h3>
  //           <button onClick={signOut}>サインアウト</button>
  //         </>
  //       ) : (
  //         <h3>権限がありません</h3>
  //       )}
  //     </header>
  //   </div>
  // );
}

export default App;
