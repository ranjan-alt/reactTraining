import { useState } from "react";

const Task = () => {
  const [formData, setFormData] = useState({ task: "", completed: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
