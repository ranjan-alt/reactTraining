import { useState } from "react";
import axios from "axios";
import BASE_URL from "../../config";

const Task = () => {
  const [formData, setFormData] = useState({ task: "", completed: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitting form....");
    try {
      const response = await axios.post(
        `${BASE_URL}/api/task/addtask`,
        formData
      );
      console.log(response.data, typeof response);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  return (
    <>
      <h1>TASK</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          id=""
          onChange={handleChange}
          value={formData.task}
        />
        <input
          type="checkbox"
          name="completed"
          onChange={handleChange}
          checked={formData.completed}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Task;
