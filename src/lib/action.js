"use client"

import { redirect } from "next/navigation";
import { toast } from "react-toastify";
import { authClient } from "./auth-client";

export const updateDestination = async (destination, _id) => {
    const {data:tokenData} = await authClient.token()
    const res = await fetch(`http://localhost:5000/destination/${_id} `, {
        method: "PATCH",
        headers: {
            "content-type": "application/json",
            authorization : `Bearer ${tokenData?.token}`
        },
        body: JSON.stringify(destination)
    })
    const data = await res.json()
    // console.log("after update", data);
    if (data.modifiedCount > 0) {
        toast.warning(`${destination.destinationName} is Updated`)
        redirect(`/destinations/${_id}`)
    }
}
export const deleteDestination = async (destination) => {
    const {data:tokenData} =await authClient.token()
    // console.log(tokenData);
    
    const res = await fetch(`http://localhost:5000/destination/${destination._id} `, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
            authorization :  `Bearer ${tokenData?.token}`
        },
        body: JSON.stringify(destination)
    })
    const data = await res.json()
    // console.log("after delete", data);
    if (data.deletedCount > 0) {
        toast.warning(`${destination.destinationName} is Deleted`)
        redirect('/destinations')
    }
    return data
}
export const addBooking = async (bookingData) => {
    const {data:tokenData} = await authClient.token()
    console.log(tokenData);
    
    const res = await fetch('http://localhost:5000/bookings', {
        method: "POST",
        headers: {
            "content-type": "application/json",
            authorization : `Bearer ${tokenData?.token}`

        },
        body: JSON.stringify(bookingData)
    })
    const data = await res.json();
    return data;
}
export const addDestination = async (NewTravel) => {
    const {data:tokenData} = await authClient.token()
    
    const res = await fetch('http://localhost:5000/destination', {
        method: "POST",
        headers: {
            "content-type": "application/json",
            authorization : `Bearer ${tokenData?.token}`
        },
        body: JSON.stringify(NewTravel)
    })
    const data = await res.json();
    return data;
}
export const cancelBooking = async (booking) => {
    const {data:tokenData} = await authClient.token()
    const res = await fetch(`http://localhost:5000/bookings/${booking._id}`, {
        method: "DELETE",
        headers: { 
            'content-type': "application/json" ,
            authorization :`Bearer ${tokenData?.token}`
        }
    })
    const data =await res.json()
    if (data.deletedCount > 0) {
        toast.warning(`${booking.destinationName} is Deleted`)
        window.location.reload()
    }
    return data;
}