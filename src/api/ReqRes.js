import { REQRES_BASE_API_URL } from '../config/config';

export async function getUsers() {
  try {
    const response = await fetch(`${REQRES_BASE_API_URL}/users`);

    const data = await response.json();

    return data.data;
  } catch (error) {
    console.log(error);
  }
}
