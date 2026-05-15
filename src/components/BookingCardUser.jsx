import { Calendar, Eye, MapPin, TrashBin } from '@gravity-ui/icons';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import CancelBooking from './CancelBooking';
import Link from 'next/link';

const BookingCardUser = ({ booking }) => {
    const { _id, destinationImage, destinationName, price, departureDate } = booking;
    const date = new Date(departureDate).toLocaleDateString()


    return (
        <Card className='p-6 rounded-none grid grid-cols-12  gap-4'>
            <div className='relative  aspect-square col-span-3'>
                <Image
                    src={destinationImage}
                    alt={destinationName}
                    fill
                    className="object-center rounded" />
            </div>
            <div className=' col-span-6 flex items-center '>
                <div className='space-y-4'>


                    <p className='text-4xl font-semibold text-accent'>{destinationName}</p>
                    <p className="flex gap-3 items-center"><Calendar /><span className='col-span-2'>Departure Date : {date}</span></p>
                    <p className="flex gap-3 items-center"><Calendar /><span className='col-span-2'>Departure Date : {date}</span></p>
                    <p className='text-4xl font-semibold text-accent'>${price}</p>
                </div>
            </div>
            <div className='col-span-3 flex items-end justify-end'>
                <div className='space-x-4'>
                    <CancelBooking />
                    <Link href={`/my-bookings/${_id}`}><Button variant='primary' className={'rounded-none bg-accent'}><Eye />View</Button></Link>

                </div>
            </div>
        </Card>
    );
};

export default BookingCardUser;