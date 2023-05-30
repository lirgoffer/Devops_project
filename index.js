const app = require('./server');

const port = process.env.PORT || 3000;
app.listen(port, () => (
  console.log('Server started!')
));


document.addEventListener('DOMContentLoaded', () => {
    // Sample data
    const students = [
      { name: 'John Doe', exam1: 90, exam2: 85, exam3: 95 },
      { name: 'Jane Smith', exam1: 80, exam2: 92, exam3: 88 },
      { name: 'Mike Johnson', exam1: 95, exam2: 88, exam3: 93 },
    ];
  
    // Get the table body
    const tableBody = document.querySelector('#gradesTable tbody');
  
    // Populate the table rows with data
    students.forEach((student) => {
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
        <td>${student.name}</td>
        <td>${student.exam1}</td>
        <td>${student.exam2}</td>
        <td>${student.exam3}</td>
      `;
      tableBody.appendChild(tableRow);
    });
  });
  