export const API = "http://13.209.17.252:8000";
export const LOGIN = `${API}/user/signin`;
export const SEND_AUTH_NUMBER = `${API}/user/signup/sms_request`;
export const CHECK_AUTH_NUMBER = `${API}/user/signup/sms_authentication`;
export const USER_SIGNUP = `${API}/user/signup`;
export const GET_SUFING_DATA = `${API}/product/list?order=-price&category=8&offset=0&limit=10`;
export const GET_MAIN_DATA = (order, category, offset, limit) => {
  return `${API}/product/list?order=${order}&category=${category}&offset=${offset}&limit=${limit}`;
};
