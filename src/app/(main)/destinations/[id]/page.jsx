
import DeleteModal from "@/components/DeleteModal";
import EditModal from "@/components/EditModal";
import { getDestinationById } from "@/lib/data";
import { MapPin } from "@gravity-ui/icons";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";

const DetailsPage = async ({ params }) => {
    const { id } = await params;
    const destination = await getDestinationById(id)
    const { _id, destinationName, country, category, price, duration, imageUrl, description } = destination;

    return (
        <div className="py-10 space-y-3">
            <div className="flex justify-between">
                <Link href={'/destinations'}><Button className={'rounded-none text-xl'} variant="outline"><IoMdArrowBack /> Back to Destinations</Button></Link>

                <div className="space-x-5">
                    <EditModal destination={destination} />
                    <DeleteModal destination={destination} />
                </div>
            </div>

            <Card className=" mx-auto">
                <div className="relative max-h-150 mx-auto w-full aspect-square">

                    <Image src={imageUrl} alt={destinationName} fill
                        className="object-center w-full" />
                </div>
                <div className="flex justify-between items-center">

                    <div className=" space-y-4">
                        <p className="font-medium flex gap-1 items-center"><MapPin />{country}</p>
                        <p className="text-2xl font-bold">{destinationName}</p>
                        <p className="flex gap-3 items-center "><FaRegCalendarAlt /> {duration}</p>
                        <p className="text-4xl">Overview </p>
                        <p>{description}</p>
                    </div>
                    <Card className="p-5">
                    <p className="text-2xl">${price}</p>
                    </Card>
                </div>
            </Card>
        </div>
    );
};

export default DetailsPage;