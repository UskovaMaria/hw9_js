const students = [
  {
    name: 'Ivan',
    phone: '0992223322'
  },
  {
    name: 'Ivan',
    phone: '0992223344'
  },
  {
    name: 'Kolya',
    phone: '0992223311'
  }
];
const action = prompt('1. Del, 2. Add');


for (let i = 0; i < students.length; i++) {
  let str = students[i];
  let userName = str.name;
  let userPhone = str.phone;  
  
  area = searchElement(userName, userPhone);
}  

if (action == '1') {
  const studentAct = prompt('Enter a name(A..) or phone number(0..)');
  
  if (area == studentAct) {
    
    students.splece();
  } else {
    console.log('This name is not in the list.')
  } 
 

}  else if (action == '2') {
  const studentName = prompt('Enter a name(A..)');
  const studentPhone = prompt('Enter a phone number(0..)');
  const name = studentName;
  const phone = studentPhone;
  

  if (area !== studentName || area !== studentPhone) {
    students.push({name,  phone});
  } else {
    console.log('This name is alredy in the list')
  }
}

console.log(students);

function searchElement(name, phone) {
  let area = name + phone;
  console.log('name:', name, 'phone:', phone);
  return area;
}
 
