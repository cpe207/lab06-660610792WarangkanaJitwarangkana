import axios from "axios";

/* assign interface/type to the function definition properly */
const getUser = async (userId: number) => {
  try{
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = res.data.name;
    return user;
  }
    catch(err){
      return "INVALID USER ID";
    }
};

const input1 = 1;
const input2 = 100;

getUser(input1).then((result) => console.log(result));
getUser(input2).then((result) => console.log(result));

export default getUser;

//warangkana jitwarangkana 660610792