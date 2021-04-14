const cache = {};

async function fetchJSON(url) {
  let data = cache[url];
  if (data) {
    return data;
  }
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} - ${res.statusText}`);
  }
  data = await res.json();
  cache[url] = data;
  return data;
}

export default fetchJSON;
