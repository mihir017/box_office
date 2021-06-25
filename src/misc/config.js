const BASE_API_URL = "https://api.tvmaze.com";

export async function getApi(query_url) {
    const res = await fetch(`${BASE_API_URL}${query_url}`).then(res => res.json());
    // throw new Error('ohhh');
    return res;
} 