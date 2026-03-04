export const API_BASE_DOMAIN = import.meta.env.VITE_API_BASE_URL ?? ''
export const API_BASE_PATH = '/api/v1'

/** Method Type */
export const HTTP_METHOD = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
}

export const API = {
    Auth: {
        Login: `${API_BASE_PATH}/auth/login`,
        Logout: `${API_BASE_PATH}/auth/logout`,
        Refresh: `${API_BASE_PATH}/auth/refresh`,
    },
}
