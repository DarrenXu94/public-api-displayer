const BASE_URL = "https://api.publicapis.org";
export const getAllEntires = async () => {
  const url = `${BASE_URL}/entries`;
  const resp = await fetch(url);
  if (resp.status !== 200) {
    throw new Error(resp.statusText);
  }
  const body = await resp.json();

  return body;
};

export const getAllCategories = async () => {
  const url = `${BASE_URL}/categories`;
  const resp = await fetch(url);
  if (resp.status !== 200) {
    throw new Error(resp.statusText);
  }
  const body = await resp.json();
  return body;
};
