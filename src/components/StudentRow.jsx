import React from 'react';

function StudentRow({ student, onEdit, onDelete }) {
  return (
    <tr>
      <td>{student.rollNo}</td>
      <td>{student.name}</td>
      <td>{student.percentage}</td>
      <td>{student.branch}</td>
       <td>
        <button
          className="btn btn-sm btn-warning me-2"
          onClick={() => onEdit(student)}
        >
          Edit
        </button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => onDelete(student.rollNo)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;
