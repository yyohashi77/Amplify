// src/aws-exports.js
const awsmobile = {
    "aws_project_region": process.env.REACT_APP_AWS_PROJECT_REGION || "",
    "aws_cognito_identity_pool_id": process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID || "",
    "aws_cognito_region": process.env.REACT_APP_AWS_COGNITO_REGION || "",
    "aws_user_pools_id": process.env.REACT_APP_AWS_USER_POOLS_ID || "",
    "aws_user_pools_web_client_id": process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID || "",
    "oauth": {},
    "aws_cognito_username_attributes": [],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ]
};

export default awsmobile;