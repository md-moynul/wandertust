import { getDestinations } from "@/lib/data";
import { Button } from "@heroui/react";
import Link from "next/link";
import DestinationCard from "./DestinationCard";

const FeaturedDestinations = async() => {
     const destinations = await getDestinations()
     const featuredDestinations = destinations.slice(0,3)
     console.log(featuredDestinations);
     
    return (
        <div className="py-10 ">
            <div className="flex justify-between">
                <div className="space-y-4">
                    <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold">Featured Destinations</h2>
                    <p>Handpicked travel experiences for the adventure seekers</p>
                </div>
                <Button variant="outline" className={'text-accent rounded-none border-accent'}><Link href={'/destinations'}>All Destination</Link></Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {featuredDestinations.map(destination => <DestinationCard key={destination._id} destination={destination} />)}
            </div>
        </div>
    );
};

export default FeaturedDestinations;