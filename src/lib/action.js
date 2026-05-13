
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export const updateDestination = async(destination,_id) => {
    
    console.log(destination);
    
    const res = await fetch(`http://localhost:5000/destination/${_id} ` ,{
        method: "PATCH" ,
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify(destination)
    } )
    const data = await res.json()

    console.log("after update" ,data);
    if(data.modifiedCount > 0 ){
        toast.warning(`${destination.destinationName} is Updated`)
        // redirect('/destinations')
        
    }
}
export const deleteDestination = async(destination) => {
    console.log(destination);
    
    const res = await fetch(`http://localhost:5000/destination/${destination._id} ` ,{
        method: "DELETE" ,
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify(destination)
    } )
    const data = await res.json()

    console.log("after delete" ,data);
    if(data.deletedCount > 0 ){
        toast.warning(`${destination.destinationName} is Deleted`)
        redirect('/destinations')
    }
    return data
}