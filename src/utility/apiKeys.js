const apiKeys = [
  import.meta.env.VITE_RAPIDAPI_KEY_1,
  import.meta.env.VITE_RAPIDAPI_KEY_2,
  import.meta.env.VITE_RAPIDAPI_KEY_3,
];

let currentKeyIndex = 0;

export const getApiKey = () => apiKeys[currentKeyIndex];

export const rotateKey = () => {
  currentKeyIndex = (currentKeyIndex + 1) % apiKeys.length;
  console.warn(`🔑 Switched to API key index: ${currentKeyIndex}`);
};

export const totalKeys = apiKeys.length;
