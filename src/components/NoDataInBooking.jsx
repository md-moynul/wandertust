import Link from 'next/link';
import { PlaneTakeoff } from 'lucide-react'; // Or any icon library you use

export default function NoDataInBooking() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      {/* Icon Container */}
      <div className="bg-gray-100 p-6 rounded-full mb-6 dark:bg-zinc-800">
        <PlaneTakeoff size={48} className="text-gray-400" />
      </div>

      {/* Text Content */}
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
        No adventures planned yet
      </h2>
      <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-8">
        It looks like you have not booked any destinations. Your next great story is just a click away.
      </p>

      {/* Call to Action */}
      <Link 
        href="/destinations" 
        className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
      >
        Explore Destinations
      </Link>
    </div>
  );
}