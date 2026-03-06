import React, { useState } from "react";

export default function MultipleFields() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });
  //   formData={
  //      name: "",
  //     email: "",
  //     age: "",
  //   }
  const handleChange = (e) => {
    const {name,value}=e.target;
    setFormData({
        ...formData,
        [name]:value
    })
  };
  return (
    <div>
      <input
        name="name"
        type="text"
        value={formData.name}
        placeholder="Enter a name"
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        placeholder="Enter a name"
        onChange={handleChange}
      />
      <input
        name="age"
        type="number"
        value={formData.age}
        placeholder="Enter a name"
        onChange={handleChange}
      />
    </div>
  );
}
