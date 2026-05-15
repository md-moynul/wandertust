export const getDestinations = async() =>{
    const res = await fetch('http://localhost:5000/destination')
    const data = await res.json()
    return data
}
export const getDestinationById = async(id) =>{
    const res = await fetch(`http://localhost:5000/destination/${id} `)
    const data = await res.json()
    return data
}
export const getBookingByUserId = async(userId) => {
    console.log(userId);
    
    const res = await fetch(`http://localhost:5000/bookings/${userId}`)
    const data = await res.json()
    console.log(data);
    
    return data
}