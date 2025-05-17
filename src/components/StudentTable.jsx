import React from 'react';
import StudentRow from './StudentRow';

function StudentTable({ students, onEdit, onDelete }) {
  return (
    <table className="table table-bordered">
      <thead className="table-dark">
        <tr>
          <th>Roll No</th>
          <th>Name</th>
          <th>Percentage</th>
          <th>Branch</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <StudentRow key={student.rollNo} student={student} onEdit={onEdit}
            onDelete={onDelete}/>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;
