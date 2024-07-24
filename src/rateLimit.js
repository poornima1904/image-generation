// src/rateLimit.js
import { getFromKV, setInKV } from './kvConfig';

export const canGenerateImage = async (userId) => {
  const currentHour = new Date().getHours();
  const userKey = `user:${userId}:hour:${currentHour}`;
  const count = (await getFromKV(userKey)) || 0;

  return count < 3;
};

export const recordImageGeneration = async (userId) => {
  const currentHour = new Date().getHours();
  const userKey = `user:${userId}:hour:${currentHour}`;
  const count = (await getFromKV(userKey)) || 0;

  await setInKV(userKey, count + 1, 3600); // Set TTL to 3600 seconds (1 hour)
};
