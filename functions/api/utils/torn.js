import { decrypt } from "./utils/crypto";

export async function getRandomKey(env) {
  const users = await env.DB.prepare(
    `SELECT encrypted_api_key, encryption_iv
     FROM users
     WHERE is_active = 1`
  ).all();

  const random = users.results[
    Math.floor(Math.random() * users.results.length)
  ];

  return await decrypt(
    {
      data: random.encrypted_api_key,
      iv: random.encryption_iv
    },
    env.OCCULTUS_SECRET
  );
}