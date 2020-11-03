export const itemService = {
    getItem,
    getUserItems,
    getAllItems,
    createItem
}

function getItem(itemId) {
    return fetch(`/api/collection/item/${itemId}`)
        .then(handleResponse)
        .then(item => {
            return item
        });
}

function getUserItems(userId) {
    return fetch(`/api/collection/item/user/${userId}`)
        .then(handleResponse)
        .then(items => {
            return items
        });
}

function getAllItems() {
    return fetch(`/api/collection/item/all`)
        .then(handleResponse)
        .then(items => {
            return items
        })
}

function createItem(name, collectionId, description, condition, year, image) {
    const requestParams = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ name, description, condition, year, image })
    };
    return fetch(`/api/collection/${collectionId}/new-item`, requestParams)
        .then(handleResponse)
        .then(items => {
            return items
        })
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
