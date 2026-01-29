const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const fetchApi = async (endpoint: string, options?: RequestInit) => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    cache: 'no-store', // Para tener datos siempre frescos (SSR)
    ...options,
  });
  if (!res.ok) throw new Error('Error en la petición');
  return res.json();
};