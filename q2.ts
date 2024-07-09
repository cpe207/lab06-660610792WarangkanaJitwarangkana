import axios from "axios";

const getTodo = async (todoId: number) => {
  try{
    const todoRes = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const todo = todoRes.data;
    const userId = todoRes.data.userId;

    const userRes = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userName = userRes.data;
    
    const out = {
          owner: userName.name,
          title: todo.title,
          completed: todo.completed
    }
    return out;
  }
    catch(err){
      return "INVALID TODO ID";
    }
};

const input1 = 15;
const input2 = 60;
const input3 = 250;

getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;

//warangkana jitwarangkana 660610792