export function encodeURL(text) {
  try {
    return encodeURIComponent(text);
  } catch {
    return "Encoding error";
  }
}

export function decodeURL(text) {
  try {
    return decodeURIComponent(text);
  } catch {
    return "Decoding error";
  }
}
