import AppLayout from "@/layouts/app-layout";
import {Head, useForm} from "@inertiajs/react";
import type {BreadcrumbItem} from "@/types";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {useState} from "react";

//titre sider bar header
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Chatbot',
        href: '/chatbot',
    },

];
export default function Chat(){
    const {data, setData, post, errors} = useForm ({
        message: ''
    })
    const [message, setMessage] = useState()
    const sendMessage = (e) => {
        e.preventDefault()
        console.log(data)
        post(route('handleMessage'))
        console.log(data)
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Chatbot"/>
            <div className="flex-col w-3/4 mx-auto">
                <div className="flex items-center justify-center">
                    <div className={"w-3/4 flex justify-center"}>
                        <Textarea placeholder="Ask a question"
                                  onChange={(e) => setData('message', e.target.value)}
                        />
                        <Button className={"relative right-20 top-4"} onClick={sendMessage}>send</Button>
                    </div>
                </div>
                <div className="border-2 bg-[#52525b] text-[#d1d5db]">
                    <div>

                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
