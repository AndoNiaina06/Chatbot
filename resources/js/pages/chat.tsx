import {PlaceholderPattern} from "@/components/ui/placeholder-pattern";
import AppLayout from "@/layouts/app-layout";
import {Head} from "@inertiajs/react";
import type {BreadcrumbItem} from "@/types";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Chatbot',
        href: '/chatbot',
    },

];
export default function Chat(){
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Chatbot"/>

        </AppLayout>
    )
}
