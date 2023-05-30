const app = require('./server');

const port = process.env.PORT || 3000;
app.listen(port, () => (
  console.log('Server started!')
));

// Sample student data
const students = [
    { name: 'John Doe', exam1: 85, exam2: 92, exam3: 78 },
    { name: 'Jane Smith', exam1: 76, exam2: 88, exam3: 95 },
    { name: 'Alice Johnson', exam1: 91, exam2: 84, exam3: 89 }
  ];
  
  // Function to populate the table with student grades
  function populateTable() {
    const gradeTable = document.getElementById('grade-table');
  
    students.forEach((student) => {
      const row = document.createElement('tr');
  
      const nameCell = document.createElement('td');
      nameCell.textContent = student.name;
      row.appendChild(nameCell);
  
      const exam1Cell = document.createElement('td');
      exam1Cell.textContent = student.exam1;
      row.appendChild(exam1Cell);
  
      const exam2Cell = document.createElement('td');
      exam2Cell.textContent = student.exam2;
      row.appendChild(exam2Cell);
  
      const exam3Cell = document.createElement('td');
      exam3Cell.textContent = student.exam3;
      row.appendChild(exam3Cell);
  
      gradeTable.appendChild(row);
    });
  }
  
  // Call the populateTable function when the DOM content is loaded
  module.exports = populateTable;
  

