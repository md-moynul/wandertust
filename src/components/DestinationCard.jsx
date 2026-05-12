import { MapPin } from "@gravity-ui/icons";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";

const DestinationCard = ({ destination }) => {
    const {_id, destinationName, country, category, price, duration, imageUrl } = destination;
    return (
        <Card>
            <div className="relative w-full aspect-square">

                <Image src={imageUrl} alt={destinationName} fill
                    className="object-center rounded-xl w-full" />
            </div>
            <p className="font-medium flex gap-1 items-center"><MapPin />{country}</p>
            <div className="flex justify-between items-center">
                <p className="text-2xl font-bold">{destinationName}</p>
                <p className="text-2xl">${price}</p>
            </div>
            <p className="flex gap-3 items-center "><FaRegCalendarAlt /> {duration}</p>
            <Link href={`/destination/${_id}`}><Button variant="outline">See Details</Button></Link>
        </Card>
    );
};

export default DestinationCard;