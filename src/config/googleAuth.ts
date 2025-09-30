// Конфигурация Google OAuth
// Замени на свой Client ID из Google Cloud Console
export const GOOGLE_CLIENT_ID = '433982373189-7cg8cs51uud8figq0av3hjgrlt34p32q.apps.googleusercontent.com';

// Базовый URL для redirect URI
export const getRedirectUri = () => {
  if (window.location.hostname === 'localhost') {
    return 'http://localhost:5173/google-callback';
  }
  return `${window.location.origin}/google-callback`;
};

// Список разрешений (scopes) для доступа к данным пользователя
export const GOOGLE_SCOPES = [
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email'
];
