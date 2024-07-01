import { useState } from "react";


function CreateTodo () {

    const[title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [data, setData] = useState();

    const postData = async () => {
       try{
        const data = await fetch("http://localhost:3000/todo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
        },
            body: JSON.stringify( {
                title,
                description
            })
        })
        console.log(data);
        // setData(data);

       }catch(error){
        console.log("Some error occured in posting the todo data");
       }
    }

    return <div>
        <input type="text" onChange={(event)=> setTitle(event.target.value)} className="title" placeholder="Add a todo"></input> <br></br>
        <input onChange={(event) => setDescription(event.target.value)} type="text" className="desc" placeholder="Add description"></input> <br></br>
        <button onClick={postData}>Add a Todo</button>
        {/* <div>{}</div> */}
     
    </div>
}

export default CreateTodo;