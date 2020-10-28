export const collectionService = {
    // getCollection,
    getAllCollections,
    createOne
    // deleteCollection
};

// function getCollection(username, password) {
//     const requestParams = {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify({ username, password })
//     };

//     return fetch("/api/users/login", requestParams)
//         .then(handleResponse)
//         .then(user => {
//             localStorage.setItem('user', JSON.stringify(user));

//             return user;
//         });
// }
function createOne(userId, collection_name, categoryId) {
        const requestParams = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ collection_name, categoryId })
    };
    return fetch(`/api/collection/${userId}/new-collection`, requestParams)
        .then(handleResponse)
        .then(collections => {
            return collections
        })
}

function getAllCollections(userId) {
    return fetch(`/api/collection/${userId}/all`)
        .then(handleResponse)
        .then(collections => {
            return collections
        })
}

// function deleteCollection() {
//     const requestParams = {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify({ user })
//     };

//     return fetch("/api/users/register", requestParams)
//     .then(handleResponse);
// }

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
