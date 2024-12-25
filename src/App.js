import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import { cognitoUserPoolsTokenProvider } from '@aws-amplify/auth';
import InstanceManagement from './components/InstanceManagement';

import amplifyConfig from "./aws-config";

// Amplify設定を適用
Amplify.configure(amplifyConfig);

function App({ signOut, user }) {
  return (
    <div>
      <div style={{
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid #dee2e6'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1>AWS Instance Manager</h1>
          {user && (
            <div>
              <span style={{ marginRight: '10px' }}>
                {user.username}としてログイン中
              </span>
              <button
                onClick={signOut}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                サインアウト
              </button>
            </div>
          )}
        </div>
      </div>
      <div style={{ padding: '20px' }}>
        <InstanceManagement />
      </div>
    </div>
  );
}

// 認証設定をカスタマイズする場合
const authConfig = {
  loginMechanisms: ['username', 'email'],
  signUpAttributes: ['email'],
  socialProviders: [],
  hideSignUp: false
};

export default withAuthenticator(App, authConfig);