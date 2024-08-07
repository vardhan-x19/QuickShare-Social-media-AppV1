import { CiCircleRemove } from "react-icons/ci";
import { ContextItems } from "../Store/Context";
import { SlLike } from "react-icons/sl";
import { FaRegCircleUser } from "react-icons/fa6";
import { useContext } from "react";
function Card({item}) {
    const {delListItems,liked}=useContext(ContextItems);
    return <>
    <div class="card" style={{width: "18rem"}}>
    <div class="card-body">
        <h5>  <CiCircleRemove  onClick={()=>{delListItems(item.id)}}></CiCircleRemove> <FaRegCircleUser /> {item.id} </h5>
        <h5 class="card-title"> {item.title}</h5>
        <p class="card-text"> {item.body} </p>
        <button type="button" class="btn btn-primary" onClick={()=>{liked(item.id,item.likes)}}>
        <SlLike /> <span class="badge text-bg-secondary">{item.likes} </span>
        </button>
        <br/>
        {item.tags.map((item)=><span class="badge text-bg-secondary">{item}</span>)}
    </div>
    </div>
    </>
}
export default Card;