// StudentForm.jsx
import React, { useState, useEffect } from "react";

function StudentForm({ onAdd ,onUpdate, editingStudent }) {
  const [formData, setFormData] = useState({
    name: "",
    percentage: "",
    branch: "",
  });

  useEffect(() => {
    if (editingStudent) {
      setFormData({
        name: editingStudent.name,
        percentage: editingStudent.percentage,
        branch: editingStudent.branch,
       
      });
    } else {
      // If not editing, reset form
      setFormData({
        name: "",
        percentage: "",
        branch: "",
      });
    }
  }, [editingStudent]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      ...formData,
      percentage: parseFloat(formData.percentage),
    };

     if (editingStudent) {
      onUpdate(newStudent); // call update
    } else {
      onAdd(newStudent); // call add
    }

    setFormData({ name: "", percentage: "", branch: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-5">
      <div className="row mb-3">
        <div className="col">
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="col">
          <input
            type="number"
            name="percentage"
            step="0.1"
            value={formData.percentage}
            placeholder="Percentage"
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="col">
          <input
            type="text"
            name="branch"
            value={formData.branch}
            placeholder="Branch"
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="col">
           <button type="submit" className={`btn ${editingStudent ? "btn-warning" : "btn-success"} w-100`}>
            {editingStudent ? "Update Student" : "Add Student"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default StudentForm;
