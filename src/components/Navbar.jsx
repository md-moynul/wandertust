import Image from "next/image";
import Link from "next/link";
import {Person} from '@gravity-ui/icons';
const Navbar = () => {
    return (
        <div className="flex justify-between py-5 px-10 text-lg font-medium ">
            <ul className="flex gap-3">
                <li><Link href={'/'} >Home</Link></li>
                <li><Link href={'/destinations'} >Destinations</Link></li>
                {/* <li><Link href={'/my-bookings'} >My Bookings</Link></li>
                <li><Link href={'/admin'} >Admin</Link></li> */}
                <li><Link href={'/Add-new-travel'} >Add-Travel</Link></li>
            </ul>
            <Image 
            src={'/assets/Wanderlast.png'}
            alt="Wanderlast.png"
            width={160}
            height={50}
            />
            <ul className="flex gap-3">
                <li><Link href={'/profile'} className="flex gap-2 items-center"><Person/> Profile</Link></li>
                <li><Link href={'/login'} >Login</Link></li>
                <li><Link href={'/Signup'} >Sign Up</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;