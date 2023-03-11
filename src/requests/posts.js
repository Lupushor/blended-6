import instance from '../services/api';
const parametr = {
  url: '/posts',
  method: 'get',
  params: {
    limit: 5,
    skip: 10,
    select: 'title,body',
  },
};

export async function getLimetedPosts() {
  try {
    const response = await instance(parametr);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
