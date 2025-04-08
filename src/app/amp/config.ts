import { Amplify } from "aws-amplify";

Amplify.configure({
    Auth: {
      region: 'ap-southeast-2',
      userPoolId: 'ap-southeast-2_ozLg75mMm',
      userPoolWebClientId: '6otrennd80004vsmj6i03e2r6g',
    },
  });
  
