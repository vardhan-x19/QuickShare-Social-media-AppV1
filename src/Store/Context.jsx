import { createContext, useReducer } from "react";


export const ContextItems=createContext([]);

const defValues=[{
    id:1,
    title:"Iam going to hyd",
    body:"Iam very much intersted and its good to go after completing my semister exams I hope i can enjoy a Lot",
    tags:["#happy","#enjoy","#pandagow"],
    likes:0
},
{
    id:2,
    title:"Pass Hogaya BenStokes",
    body:"After wasting 4 years of enginneing stiil I passed .I Can't Believ it that i really pass the exam?",
    tags:["#proud","#unbelevable","#emotional"],
    likes:0
},
{
    id:5,
    title:"To day is my birthday wish me",
    body:"Today I turned 19 years iam so Excited and iam meeting my brother today so iam super excited",
    tags:["#birthday","#gifts","#happy"],
    likes:0
},
{
    id:5,
    title:"To day is my birthday wish me",
    body:"Today I turned 19 years iam so Excited and iam meeting my brother today so iam super excited",
    tags:["#birthday","#gifts","#happy"],
    likes:0
},
{
    id:5,
    title:"To day is my birthday wish me",
    body:"Today I turned 19 years iam so Excited and iam meeting my brother today so iam super excited",
    tags:["#birthday","#gifts","#happy"],
    likes:0
},
{
    id:5,
    title:"To day is my birthday wish me",
    body:"Today I turned 19 years iam so Excited and iam meeting my brother today so iam super excited",
    tags:["#birthday","#gifts","#happy"],
    likes:0
},
{
    id:5,
    title:"To day is my birthday wish me",
    body:"Today I turned 19 years iam so Excited and iam meeting my brother today so iam super excited",
    tags:["#birthday","#gifts","#happy"],
    likes:0
}
]

function reduceFunc(curValue,action) {
   let updatedValues=curValue;
   if(action.type==="DELETE_ITEM")
   {
    updatedValues=curValue.filter((item)=>item.id!==action.payload.id);
   }
   else if(action.type==="Liked")
   {
    updatedValues=curValue.map((item)=>item.id===action.payload.id?{...item,likes:action.payload.likes++}:item)
   }
   else if(action.type==="addListItems")
   {
    updatedValues=[
        ...curValue,{
            id:action.payload.id,
            title:action.payload.title,
            body:action.payload.desc,
            tags:[action.payload.tags],
            likes:0
        }
    ]
   }
   return updatedValues;
}
function ContextProvider({children}) {
    
    const[provideItems,dispachItems]=useReducer(reduceFunc,defValues);
    
    const addListItems=(id,title,desc,tags)=>{
        const changeItems={
            type:"addListItems",
            payload:{
                id,
                title,
                desc,
                tags
            }
        }
        dispachItems(changeItems);
    }

    const delListItems=(id)=>{
        const changeItems={
            type:"DELETE_ITEM",
            payload:{id}
        }
        dispachItems(changeItems);
    }

    const liked=(id,likes)=>{
        console.log(id,likes);
        
        const changeItems={
            type:"Liked",
            payload:{id,likes}
        }
        dispachItems(changeItems);
    }
   
    return (
        <ContextItems.Provider 
        value={{provideItems, addListItems,
        delListItems,liked}}>
        {children}
        </ContextItems.Provider>
    ) 
}


export default ContextProvider;
