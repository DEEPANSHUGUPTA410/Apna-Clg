// const express = require('express');
// const port = 4000;
// const app = express();
// app.use(express.json());
// app.listen(port,()=>{
//     console.log("listening...",port);
// });

// // async function fetchDataUsingFs() {
// //     try {
// //     const data = fs.readFileSync(filePath, 'utf8');
// //     console.log(data);
// //     } catch (error) {
// //     console.error('Error fetching data:', error.message);
// //     }
// // }

// app.post('/api/user', async (req, res) => {
// //const data = await fetchDataUsingFs();
// console.log(req.body);
// const data=req.body;
// const sum=data.num1+data.num2;
// console.log(sum);
//  return res.json(req.body);
// //res.json(JSON.parse(data).users);
// });
// // console.log("testing...")
// // app.listen(port, () => {
// // console.log("listening...", port);

// // });


// async function fetchDataUsingFs(){
//     try{
//         const data = fs.readFileSync( filePath, 'utf8');
//         //const propertyValues = Object.values(data);
//         console.log(data);
//         return data;
//     }
//     catch(error){
//         console.error('errer fetching data :' ,error.message)
//     }
// }

// fetchDataUsingFs();


// app.post('/api/user', async(req ,res)=>{

//     console.log(req.body);
//     const data=req.body;
//     const m=data.num1* data.num2;
//     console.log(m);
//     return res.json(m);

// });

// app.post('/api/getuser', async(req ,res)=>{
//     const userReq = req.body;
//     const data = await fetchDataUsingFs();
//     const userdata = JSON.parse(data).users;
//     console.log(userReq.hasOwnProperty('name'));
//     if(userReq.hasOwnProperty('name')){
//         const filteredData = userdata.filter((user)=> user.name === userReq.name)
//         return res.json(filteredData);
//     }else if (userReq.hasOwnProperty('email')){
//         const filteredData = userdata.filter((user)=> user.name === userReq.name)
//         return res.json(filteredData); 
//     } else {
//         console.log("Not found keys");
//     }
// });

const express = require('express');
const port = 3000;
const app = express();
// const axios = require('axios');
const cors =require('cors');
app.use(express.json());

app.listen(port, ()=>{
    console.log("listening..",port);
});

app.use(cors());
app.post('/api/login',async(req, res)=>{
    
    const data = req.body;
    console.log(data);
    // const data = await fetchDataUsingFs();
    //const userData = JSON.parse(data).users;
   // console.log(data);
    return res.json(data);
   
});