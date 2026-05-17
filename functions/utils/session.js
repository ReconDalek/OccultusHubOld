export function generateToken() {
  return crypto.randomUUID() + crypto.randomUUID();
}

export function sessionExpiry(stayLoggedIn) {
  const now = Date.now();

  // 30 days OR 12 hours
  return new Date(
    now + (stayLoggedIn ? 30 : 0.5) * 24 * 60 * 60 * 1000
  ).toISOString();
}