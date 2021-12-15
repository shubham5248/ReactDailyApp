import { useEffect, useState } from "react";
import axios from "axios";

export default ()=>{
    const [postList, setPostList]= useState([]);
    // const [title, setTitle] = useState("");
    // const [titleEditMode, setTitleEditMode] = useState("");
    const [editObject, setEditObject] = useState({});
    // const [body, setBody] = useState("");
    const [postObject, setPostObject] =useState({
        title:"",
        body:"",
    });
    const [bodyEditMode, setBodyEditMode] = useState("");
    const [isEditMode, setIsEditMode] = useState(false);
    const [id, setId] = useState(0);
    const [selectedPostId, setSelectedPostId] =useState(-1);


    useEffect(()=>{
      fetchData();
       
    },[]);

    const fetchData =()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            console.log(response.data);
            if(response && response.data){
                setPostList(response.data);
            }
        })
    };
    // const onTitleChange =(event)=>{
    //     setTitle(event.target.value);
    // }
    // const onTitleEditModeChange =(event)=>{
    //     setTitleEditMode(event.target.value);
    // }
    // const onBodyChange =(event)=>{
    //     setBody(event.target.value);
    // }
    // const onBodyEditModeChange =(event)=>{
    //     setBodyEditMode(event.target.value);
    // }
    const onPostObjectChangeHandler=(event)=>{
        if(event){
            const {name, value}=event.target;
            setPostObject({
                ...postObject,
                [name]:value,
            });
        }

    }
    const onEditObjectChangeHandler=(event)=>{
        // const titleOld={
        //     title:"a",
        //     body:"b",
        // }
        // const titleNew={
        //     title:titleOld.title,
        //     body:titleOld.body,
        //     ...titleOld,
        //     title:"c",
        // }
        if(event){
            const {name, value}=event.target;
            setEditObject({
                ...editObject,
                [name]:value,
            });
        }
    } 
    const onFormSubmit=(event)=>{
        event.preventDefault();
        // console.log(title, body);

        if(!isEditMode){
            axios.post("https://jsonplaceholder.typicode.com/posts",{...postObject, userId:1,}).then((response)=>{
                console.log(response);
                alert("Post Added");
                //fetch data again
                fetchData();
                //reset form
                // setTitle("");
                // setBody("");
                setPostObject({
                    title:"",
                    body:"",
                })
            })
        }
        // else{
        //     if(id>0){
        //         axios.put("https://jsonplaceholder.typicode.com/posts/"+ id, {title, body,id:1 }).then((response)=>{
        //         if(response){
        //             console.log(response);
        //             fetchData();
        //             alert("Post Updated");
        //             onResetClickHandler();
        //         }
        //     })
        //     }
        // }

       
    }
    const onDeleteClickHandler=(id)=>{
        axios.delete("https://jsonplaceholder.typicode.com/posts/"+id).then((response)=>{
            console.log(response);
            fetchData();
            alert("Post Deleted")
        })
    }
    const onEditClickHandler=(postObject)=>{
        // setIsEditMode(true);
        // setTitle(postObject.title);
        // setTitleEditMode(postObject.title);
        // setBody(postObject.body);
       
        setEditObject({
            title:postObject.title,
            body:postObject.body, 
        });
        setId(postObject.id);
        setSelectedPostId(postObject.id)
    }
    const onResetEditHandler=()=>{
        setSelectedPostId(-1);
        setPostObject({
            title:"",
            body:"",
        })
    }
    const onUpdateRowHandler=()=>{
            if(id>0){
                axios.put("https://jsonplaceholder.typicode.com/posts/"+ id, {...editObject,id:1 }).then((response)=>{
                if(response){
                    console.log(response);
                    fetchData();
                    alert("Post Updated");
                    // reset state again
                    onResetEditHandler();                        
                    
                }
            })
            }

    }
    const onResetClickHandler=(event)=>{
        if(event){
            event.preventDefault();
        }
        setIsEditMode(false);
        setPostObject({
            title:"",
            body:"",
        })
        // setTitle("");
        // setBody("");

    }

    return(
        <>
        <h1>Data From Post</h1> 
        <h2>Post Form</h2>
        <form onSubmit={onFormSubmit}>
            <label>Title</label>
            <input name="title" value={postObject.title} onChange={onPostObjectChangeHandler}></input>
            <label>Body</label>
            <input name="body" value={postObject.body} onChange={onPostObjectChangeHandler}></input>
            <button type="submit">{isEditMode? "Update":"Submit"}</button>
            {isEditMode && <button onClick={onResetClickHandler}>Cancel</button>}
        </form>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Option</th>
                </tr>
            </thead>
            <tbody>
                {postList.map((post, index)=>{
                   return(
                    <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{selectedPostId===post.id? <input name="title" value={editObject.title} onChange={onPostObjectChangeHandler}/>:post.title}</td>
                    <td>{selectedPostId===post.id? <input name="body" value={editObject.body} onChange={onPostObjectChangeHandler}/>:post.body}</td>

                    <td>{selectedPostId===post.id ?(<button onClick={onUpdateRowHandler}>Update</button>
                    ):(<><button onClick={()=>{onDeleteClickHandler(post.id)}}>Delete</button></>
                    )}</td>

                    <td>{selectedPostId===post.id ?(<button onClick={onResetEditHandler}>Reset</button>
                    ):(<><button onClick={()=>{onEditClickHandler(post)}}>Edit</button></>)}</td>
                    </tr>
                   )
               })}
            </tbody>
        </table>
        </>
    )
}
