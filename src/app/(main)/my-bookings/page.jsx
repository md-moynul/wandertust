import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { getBookingByUserId } from "@/lib/data";
import BookingCardUser from "@/components/BookingCardUser";

const BookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const user = session?.user;
    const Bookings = await getBookingByUserId(user?.id)
    // console.log(Bookings);



    return (
        <div className="py-10 md:py-20 space-y-10">
            <div className="space-y-4">
                <h2 className="text-2xl md:text-5xl font-bold">My Booking</h2>
                <p>Manage and view your upcoming travel plans</p>
            </div>
            <div className="grid gap-6">
                {Bookings.map(booking => <BookingCardUser booking={booking} key={booking._id}/>)}
            </div>
        </div>
    );
};

export default BookingPage;