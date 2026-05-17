import EditUser from "@/components/EditUser";
import { auth } from "@/lib/auth";
import { Button, Card, Separator } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import { BiEdit } from "react-icons/bi";

const ProfilePage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const user = session?.user;
    // console.log(session);


    return (
        <div className="space-y-6 py-10 md:py-20 text-center">
            <div className="space-y-4">
                <h1 className="text-5xl font-medium">My Profile</h1>
                <p>Manage your account settings and travel preferences</p>
            </div>
            <div className=" ">
                <Card className="p-5 rounded-none w-xl mx-auto text-center">
                    <Image src={user?.image} alt={user?.name} width={200} height={200} className="mx-auto rounded-full" />
                    <p className="text-center text-xl font-bold">{user?.name}</p>
                    <p>Email : {user.email}</p>
                    <Separator />
                    <div>
                        
                    </div>
                   <EditUser user={user} />
                </Card>
            </div>
        </div>
    );
};

export default ProfilePage;