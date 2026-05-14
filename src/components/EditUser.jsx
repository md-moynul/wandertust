"use client";
import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { BiEdit } from "react-icons/bi";
import { toast } from "react-toastify";

const EditUser = ({ user }) => {
    const router = useRouter()
    const onSubmit = async (e) => {
        e.preventDefault()
        const fromData = new FormData(e.currentTarget);
        const Updatadata = Object.fromEntries(fromData.entries())
        console.log(Updatadata);
        const { data, error } = await authClient.updateUser({
            image: Updatadata.image,
            name: Updatadata.name
        })
        if (data) {
            toast.done('Updated Successful')
            router.push('/profile')
        }
    }
    return (
        <Modal>
            <Button className={'bg-accent w-full rounded-none py-4 text-xl'} ><BiEdit /> Edit profile</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Edit profile</Modal.Heading>

                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                                    <TextField className="w-full" name="name" type="text" defaultValue={user?.name}>
                                        <Label>Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField className="w-full" name="image" type="url" defaultValue={user?.image}>
                                        <Label>Image url</Label>
                                        <Input placeholder="Enter your image url" />
                                    </TextField>
                                    <div className="space-x-3 flex">

                                        <Button className={'w-full rounded-none'} slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button className={'w-full rounded-none'} type="submit" slot="close">Update</Button>
                                    </div>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default EditUser;