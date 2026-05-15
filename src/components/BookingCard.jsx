"use client"
import { addBooking } from '@/lib/action';
import { authClient } from '@/lib/auth-client';
import { Button, Card, FieldError, Form, Input, TextField } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { toast } from 'react-toastify';

const BookingCard = ({ destination }) => {
    const { _id, destinationName, price ,imageUrl,country} = destination;
    const {
        data: session,
        isPending,
    } = authClient.useSession()
    const user = session?.user;
    const onSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const { bookingDate } = Object.fromEntries(formData.entries())
        const bookingData = {
            destinationId: _id,
            userId: user.id,
            userName: user.name,
            destinationName,
            destinationImage : imageUrl,
            price,
            departureDate : new Date(bookingDate),
            country
        }
        const data = await addBooking(bookingData);
        console.log(data);
        if(data.insertedId ){
            toast.success(`${destinationName} is booking successful`)
        }
        

    }
    return (
        <Card className="p-5 rounded-none w-md space-y-3 my-5">
            <div className="space-y-2">
                <p className="text-4xl text-accent font-semibold">${price}</p>
                <p>Par Parson</p>
            </div>
            <Form onSubmit={onSubmit} className='space-y-4'>

                <TextField name="bookingDate" type="date" isRequired>
                    <Input type="date" className="rounded-2xl" />
                    <FieldError />
                </TextField>
                <Button type="submit" className={'w-full rounded-none'} >Book Now <FaArrowRight /></Button>
            </Form>
            <ul>
                <li className="flex gap-2 items-center"><Image src={'/assets/Check.png'} alt="click" width={20} height={20} /> Free cancellation up to 7 days</li>
                <li className="flex gap-2 items-center"><Image src={'/assets/Check.png'} alt="click" width={20} height={20} />Travel insurance included</li>
                <li className="flex gap-2 items-center"><Image src={'/assets/Check.png'} alt="click" width={20} height={20} />24/7 customer support</li>
            </ul>

        </Card>
    );
};

export default BookingCard;