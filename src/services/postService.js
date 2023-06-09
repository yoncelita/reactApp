import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/posts';


// Get all service
export const getAll = async () => {
    const result = await request.get(baseUrl);
    const posts = Object.values(result);

    return posts;
};


// Create post service
export const create = async (postData, accessToken) => {
    const result = await request.post(baseUrl, postData, accessToken);

    console.log(result);

    return result;
};


// Details service
export const getOne = async (postId) => {
    const result = await request.get(`${baseUrl}/${postId}`);

    return result;
};

// Edit Post service
export const edit = async (postId, data, accessToken) => {
    const result = await request.put(`${baseUrl}/${postId}`, data, accessToken);

    return result;
};


// Delete service
export const deletePost = async (postId, accessToken) => await request.del(`${baseUrl}/${postId}`, null, accessToken);


