export const addTodo = async (title) => {
  try {
    const response = await axios.post(`${BASE_URL}/todo/addtodo`, {
      title,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message);
  }
};
