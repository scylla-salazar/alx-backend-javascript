export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  const departments = Object.keys(allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  const iterator = {
    next() {
      if (currentEmployeeIndex >= allEmployees[departments[currentDepartmentIndex]].length) {
        currentEmployeeIndex = 0;
        currentDepartmentIndex++;
      }
      
      if (currentDepartmentIndex >= departments.length) {
        return { done: true };
      }
      
      const department = departments[currentDepartmentIndex];
      const employee = allEmployees[department][currentEmployeeIndex];
      currentEmployeeIndex++;
      
      return { value: employee, done: false };
    }
  };

  return iterator;
}
