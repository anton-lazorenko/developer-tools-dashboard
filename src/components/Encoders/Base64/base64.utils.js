export function encodeBase64(text) {
  try {
    return btoa(unescape(encodeURIComponent(text)));
  } catch (e) {
    return "Encoding error";
  }
}

export function decodeBase64(text) {
  try {
    return decodeURIComponent(escape(atob(text)));
  } catch (e) {
    return "Decoding error";
  }
}
