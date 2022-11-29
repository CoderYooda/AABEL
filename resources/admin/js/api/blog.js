import { convertToFormData } from "../use/functions";

export async function loadBlogs(url) {
    return await axios({
        method: 'GET',
        url: url ?? '/blog/get?page=1',
        params: {
            per_page: 5,
            // page: 1
        }
    });
}

export async function addBlog(token, data) {
    const formData = convertToFormData(data);
    
    return await axios({
        method: 'POST',
        url: '/blog/store',
        headers: {
            'Authorization': `Bearer ${ token }`,
            'Accept': 'application/json',
        },  
        data: formData
    });
}

export async function removeBlog(token, data) {
    const formData = convertToFormData(data);

    return await axios({
        method: 'POST',
        url: '/blog/delete',
        headers: {
            'Authorization': `Bearer ${ token }`,
            'Accept': 'application/json'
        },
        data: formData
    });
}

export async function editBlog(token, data) {
    const formData = convertToFormData(data);

    return await axios({
        method: 'POST',
        url: '/blog/update',
        headers: {
            'Authorization': `Bearer ${ token }`,
            'Accept': 'application/json'
        },
        data: formData
    });
}
