import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StudentForm from './components/StudentForm';
import StudentTable from './components/StudentTable';

function App() {
  const [students, setStudents] = useState([]);
   const [editingStudent, setEditingStudent] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    axios.get('http://localhost:8080/student')
      .then(res => setStudents(res.data))
      .catch(err => console.error("Error fetching students:", err));
  };

  const addStudent = (newStudent) => {
    axios.post('http://localhost:8080/student/add', newStudent)
      .then(() => fetchStudents())
      .catch(err => console.error("Error adding student:", err));
  };

    // Update an existing student
  const updateStudent = (updatedStudent) => {
    axios.put(`http://localhost:8080/student/update/${editingStudent.rollNo}`, updatedStudent)
      .then(() => {
        setEditingStudent(null);
        fetchStudents();
      })
      .catch(err => console.error("Error updating student:", err));
  };

  // Delete a student
  const deleteStudent = (rollNo) => {
    axios.delete(`http://localhost:8080/student/delete/${rollNo}`)
      .then(() => fetchStudents())
      .catch(err => console.error("Error deleting student:", err));
  };

  // Select student for editing
  const editStudent = (student) => {
    setEditingStudent(student);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Student Management System</h2>
      <StudentForm onAdd={addStudent}   onUpdate={updateStudent} 
        editingStudent={editingStudent} />
      <StudentTable students={students}  onEdit={editStudent} 
        onDelete={deleteStudent} />
    </div>
  );
}

export default App;
