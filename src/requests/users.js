import instance from '../services/api';

export async function getAllUsers() {
  try {
    const users = await instance.get('users');
    console.log(users);
  } catch (error) {
    console.error(error);
  }
}

// export default {
//   getAllUsers,
// };

export async function addNewUser() {
  try {
    const res = await instance.post('users/add', {
      firstName: 'Muhammad',
      lastName: 'Ovi',
      age: 250,
    });
    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
}
