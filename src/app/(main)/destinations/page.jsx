import DestinationCard from "@/components/DestinationCard";
import { getDestinations } from "@/lib/data";

const DestinationsPage = async () => {
    const destinations = await getDestinations()
    // console.log(destinations);

    return (
        <div className="py-10 space-y-6 ">
            <div className="space-y-4">
                <h2 className="text-3xl md:text-6xl   font-bold">Explore All Destinations</h2>
                <p className="text-xl font-stretch-95%">Find your perfect travel experience from our curated collection</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {destinations.map(destination => <DestinationCard key={destination._id} destination={destination} />)}
            </div>
        </div>
    );
};

export default DestinationsPage;