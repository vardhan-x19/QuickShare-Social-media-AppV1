import styles from "./Post.module.css";
import { ContextItems } from "../Store/Context";
import { useContext, useRef } from "react";
function Post() {
    const {addListItems}=useContext(ContextItems);
    const id=useRef();
    const title=useRef();
    const desc=useRef();
    const tags=useRef();
    const btnFunc=()=>{
        addListItems(id.current.value,title.current.value,desc.current.value,tags.current.value);
        id.current.value=" ";
        title.current.value=" ";
        desc.current.value=" ";
        tags.current.value=" ";
    }
    return <>
        <form className={styles.post}>
            {onsubmit=(e)=>{
                e.preventDefault;
            }}
    <div class="mb-3">
        <label for="exampleInputProfileId" class="form-label">Your Profile Id</label>
        <input type="text" ref={id} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <div id="emailHelp" class="form-text">Enter your official Unique Id</div>
    </div>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Enter Your Title</label>
        <input type="text" ref={title} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Description Of the post</label>
        <input type="text" ref={desc} class="form-control" id="exampleInputPassword1"/>
    </div>
    <div class="mb-3">
        <label for="exampleInputTags" class="form-label">Enter Mentions/Tags</label>
        <input type="text" ref={tags} class="form-control" id="exampleInputPassword1"/>
    </div>
    <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button  class="btn btn-primary" onClick={btnFunc} >Submit</button>
    </form>
    </>
}
export default Post;