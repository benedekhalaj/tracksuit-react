const getFetch = async (url: string) => {
    const response = await fetch(url);
    return await response.json();
}

const postFetch = async (url: string, data: any) => {
    const response = await fetch(url, {
        method: "Post",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response.json();
}

const deleteFetch = async (url: string) => {
    return await fetch(url, {
        method: "DELETE"
    });

}

const methods = {
    getFetch: getFetch,
    postFetch: postFetch,
    deleteFetch: deleteFetch
}

export default methods;
