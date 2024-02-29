let arr = [
    { name: "hari", age: 30, department: "Marketing", email: "harii12@gmail.com", admissiondate:  "2021-10-01"},
    { name: "rajeev", age: 25, department: "HR",email: "rajeevv2@gmail.com", admissiondate:  "2022-10-13" },
    { name: "deepu", age: 35, department: "HR",email: "deepu890@gmail.com", admissiondate:  "2023-11-24" },
    { name: "rohan", age: 28, department: "Operations",email: "rohan145@gmail.com", admissiondate:  "2020-12-12" },
    { name: "sky", age: 32, department: "Operations" ,email: "sky134@gmail.com", admissiondate:  "2021-12-21"},
    
];
//synchronus
arr.sort((a, b) => a.age - b.age);
//for descending
//arr.sort((a, b) => b.age - a.age);
console.log(arr);
//asynchronus
// setTimeout(() => {
//     arr.sort((a, b) => a.age - b.age);
//     console.log(arr);
// }, 0);
arr.forEach(arr1=>{
    console.log(arr1.department)
});
//synchronus
// const departmentcount=[];

// arr.forEach(arr1=>{
//     const department=arr1.department;

// if(departmentcount[department]){
//      departmentcount[department]++;
//  }
//  else{
//      departmentcount[department]=1;
//  }});

//  console.log(departmentcount)

//asynchonus
const departmentcount = [];

setTimeout(() => {
    arr.forEach(arr1 => {
        const department = arr1.department;

        if (departmentcount[department]) {
            departmentcount[department]++;
        } else {
            departmentcount[department] = 1;
        }
    });

    console.log(departmentcount);
}, 3000);