// src/kvConfig.js
import fetch from 'node-fetch';

const KV_API_URL = 'YOUR_VERCEL_KV_API_URL'; // Replace with your Vercel KV API URL
const KV_API_KEY = 'YOUR_VERCEL_KV_API_KEY'; // Replace with your Vercel KV API Key

export const getFromKV = async (key) => {
  const response = await fetch(`${KV_API_URL}/get/${key}`, {
    headers: {
      'Authorization': `Bearer ${KV_API_KEY}`
    }
  });
  const data = await response.json();
  return data.value;
};

export const setInKV = async (key, value, ttl) => {
  await fetch(`${KV_API_URL}/set/${key}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${KV_API_KEY}`
    },
    body: JSON.stringify({ value, ttl })
  });
};
