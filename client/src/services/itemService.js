export const itemService = {
    getItem
}

function getItem(itemId) {
    return fetch(`/api/collection/item/${itemId}`)
        .then(handleResponse)
        .then(item => {
            return item
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // logout();
            }

            const error = (data && data.msg) || response.statusText;
            return Promise.reject(error)
        }
        return data;
    })
}
