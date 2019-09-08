const API_KEY = 'API key';

const api = (API_URL = 'https://api.tvmaze.com/') => {
    const SEARCH_API_URL = `${API_URL}search/shows?q=`;
    const SHOWS_URL = `${API_URL}shows`;
    return {
        createQuote: async (id, text) => {
            try {
                const response = await fetch(`${API_URL}/quote/${id}`, {
                    method: 'POST',
                    body: JSON.stringify({
                        quote: text,
                    }),
                    headers: {
                        'Content-type': 'application/json',
                        'X-API-KEY': API_KEY,
                    },
                });
                console.log(response);
                if (!response.ok) {
                    throw 'Error';
                }
                const quote = await response.json();
                return quote;
            } catch (e) {
                console.error(e);
                throw e;
            }
        },
        getQuotes: async id => {
            try {
                const response = await fetch(`${API_URL}/quote/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                        'X-API-KEY': API_KEY,
                    },
                });
                if (!response.ok) {
                    throw 'Error';
                }
                const quotes = await response.json();
                return quotes;
            } catch (e) {
                console.error(e);
                throw e;
            }
        },
        getShows: async (query) => {
            try {
                const requestUrl = query ?
                    `${SEARCH_API_URL}${query}` :
                    SHOWS_URL;
                const response = await fetch(requestUrl);
                const datos = await response.json();
                const mapDatos = datos.map((dato) => {
                    if (dato.show) {
                        return dato.show;
                    }
                    return dato;
                });
                return mapDatos;
            } catch (e) {
                console.error(e);
                throw e;
            }
        },
        getShowsDetail: async (id) => {
            try {
                const response = await fetch(`${SHOWS_URL}/${id}`);
                const show = await response.json();
                return show;
            } catch (e) {
                console.error(e);
            }
        },
    };
};

export default api;