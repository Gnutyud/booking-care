import jwtDecode, { JwtPayload } from 'jwt-decode';
import appApi from '../services/appApi';

const JWTManager = () => {
  let refreshTokenTimeoutId: number | null = null;

  const getToken = () => localStorage.getItem('token');

  const setToken = (accessToken: string) => {
    localStorage.setItem('token', accessToken);

    // Decode and set countdown to refresh
    const decoded = jwtDecode<JwtPayload & { email: string }>(accessToken);
    getRefreshTokenTimeout((decoded.exp as number) - (decoded.iat as number));
  };

  const abortRefreshToken = () => {
    if (refreshTokenTimeoutId) window.clearTimeout(refreshTokenTimeoutId);
  };

  const deleteToken = () => {
    localStorage.clear();
    abortRefreshToken();
  };

  const getRefreshTokenTimeout = (delay: number) => {
    // 5s before token expires
    refreshTokenTimeoutId = window.setTimeout(async () => {
      try {
        let refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
          const response = await appApi.refreshToken({ refreshToken: refreshToken });
          setToken(response.token);
        }
      } catch (error) {
        console.log('UNAUTHENTICATED', error);
        deleteToken();
      }
    }, delay * 1000 - 5000);
  };

  return { setToken, getToken, deleteToken };
};

export default JWTManager();
