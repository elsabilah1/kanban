import Button from '@/components/button';
import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <div className="flex min-h-screen bg-light-grey text-black dark:bg-very-dark-grey dark:text-white">
                <Sidebar />
                <div className="flex flex-1 flex-col">
                    <Header />
                    <main className="grid flex-1 place-items-center p-6">
                        <div className="text-center text-pretty md:min-w-md md:px-18">
                            <p className="mb-6 text-lg font-bold text-medium-grey">This board is empty. Create a new column to get started.</p>
                            <Button></Button>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
