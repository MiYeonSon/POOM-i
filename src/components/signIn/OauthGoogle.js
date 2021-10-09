const CLIENT_ID = '12514042527-pm3r9q9804rtlfumt8ino77hmcpsjhcu.apps.googleusercontent.com';
const REDIRECT_URI = 'http://localhost:3000/signup/oauth/google';

export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=openid%20profile%20email`;