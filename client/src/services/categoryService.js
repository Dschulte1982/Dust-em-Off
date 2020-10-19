export const categoryService = {
    getCategory,
    getAllCategories,
};

function getCategory(categoryId) {
    return fetch(`${categoryId}`)
        .then(handleResponse)
        // .then(category => { return category });
}

function getAllCategories(user) {
    const requestParams = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ user })
    };

    return fetch("/api/users/register", requestParams)
        .then(handleResponse);
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
        console.log(data)
        return data;
    })
}
