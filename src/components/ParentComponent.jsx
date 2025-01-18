import ChildComponent from "./ChildComponent"

function ParentComponent(){
    const user={
        name:"John",
        age:25
    }
    const myName="Saddam"
    return(
       <div>
         <h1 className="bg-red-600 text-black p-4 text-4xl rounded-md">Parent</h1>
            <ChildComponent user={user} myName={myName}/>
       </div>
    )
}

export default ParentComponent