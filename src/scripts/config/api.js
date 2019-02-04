const SAFE_CORS_URL = 'https://cors-anywhere.herokuapp.com/';
const BASE_URL = 'https://kodilla.com/pl/bootcamp-api/';

export const API = {
  BOARD_URL: `${SAFE_CORS_URL}${BASE_URL}board/`,
  COLUMN_URL: `${SAFE_CORS_URL}${BASE_URL}column/`,
  CARD_URL: `${SAFE_CORS_URL}${BASE_URL}card/`,
  HEADERS: {
    'X-Client-Id': '3382',
    'X-Auth-Token': 'b08d91c72e2a4aa1168ad0e8fd3b8b03'
  }
};
