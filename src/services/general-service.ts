const getFetch = async (url: string) => {
    const response = await fetch(url);
    return await response.json();
}

const deleteFetch = async (url: string) => {
    return await fetch(url, {
        method: "DELETE"
    });

}

const methods = {
    getFetch: getFetch,
    deleteFetch: deleteFetch
}

export default methods;
