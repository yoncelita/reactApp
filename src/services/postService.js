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
