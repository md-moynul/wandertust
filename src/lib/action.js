"use client"
// import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export const updateDestination = async (destination, _id) => {
    const res = await fetch(`http://localhost:5000/destination/${_id} `, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(destination)
    })
    const data = await res.json()
    console.log("after update", data);
    if (data.modifiedCount > 0) {
        toast.warning(`${destination.destinationName} is Updated`)
        redirect(`/destinations/${_id}`)
    }
}
export const deleteDestination = async (destination) => {
    const res = await fetch(`http://localhost:5000/destination/${destination._id} `, {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(destination)
    })
    const data = await res.json()
    console.log("after delete", data);
    if (data.deletedCount > 0) {
        toast.warning(`${destination.destinationName} is Deleted`)
        redirect('/destinations')
    }
    return data
}
export const addBooking = async (bookingData) => {
    const res = await fetch('http://localhost:5000/bookings', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(bookingData)
    })
    const data = await res.json();
    return data;
}
export const addDestination = async (NewTravel) => {
    const res = await fetch('http://localhost:5000/destination', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(NewTravel)
    })
    const data = await res.json();
    return data;
}
export const cancelBooking = async (booking) => {
    const res = await fetch(`http://localhost:5000/bookings/${booking._id}`, {
        method: "DELETE",
        headers: { 'content-type': "application/json" }
    })
    const data =await res.json()
    if (data.deletedCount > 0) {
        toast.warning(`${booking.destinationName} is Deleted`)
        window.location.reload()
    }
    return data;
}