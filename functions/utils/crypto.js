const enc = new TextEncoder();
const dec = new TextDecoder();

async function getKey(secret) {
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "PBKDF2" },
    false,
    ["deriveKey"]
  );

  return crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: enc.encode("occultus-salt-v1"),
      iterations: 100000,
      hash: "SHA-256"
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}

export async function encrypt(text, secret) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await getKey(secret);

  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    enc.encode(text)
  );

  return {
    iv: Array.from(iv).join(","),
    data: btoa(String.fromCharCode(...new Uint8Array(encrypted)))
  };
}

export async function decrypt(payload, secret) {
  const iv = new Uint8Array(payload.iv.split(",").map(Number));
  const key = await getKey(secret);

  const data = Uint8Array.from(atob(payload.data), c => c.charCodeAt(0));

  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv },
    key,
    data
  );

  return dec.decode(decrypted);
}