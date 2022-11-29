export async function login(data) {
    return await axios({
        method: 'POST',
        url: '/auth/login',
        data
    });
}

export async function logout(token) {
    return await axios({
        method: 'POST',
        url: '/auth/logout',
        headers: {
            'Authorization': `Bearer ${ token }`,
            'Accept': 'application/json'
        },
    });
}

export async function me(token) {
    return await axios({
        method: 'POST',
        url: '/auth/me',
        headers: {
            'Authorization': `Bearer ${ token }`,
            'Accept': 'application/json'
        },
    });
}

export async function refresh(token) {
    return await axios({
        method: 'POST',
        url: '/auth/refresh',
        headers: {
            'Authorization': `Bearer ${ token }`,
            'Accept': 'application/json'
        },
    });
}
