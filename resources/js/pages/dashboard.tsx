import Button from '@/components/button';
import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import { Board } from '@/types';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import dummyData from '../../assets/data.json';

export default function Dashboard() {
    const boards = dummyData.boards;
    const [selectedBoard, setSelectedBoard] = useState<Board>(boards[0]);

    return (
        <>
            <Head title="Dashboard" />
            <div className="flex min-h-screen bg-light-grey text-black dark:bg-very-dark-grey dark:text-white">
                <Sidebar boards={boards} selectedBoard={selectedBoard} setSelectedBoard={setSelectedBoard} />
                <div className="flex flex-1 flex-col">
                    <Header boards={boards} selectedBoard={selectedBoard} setSelectedBoard={setSelectedBoard} />
                    <main className="grid flex-1 place-items-center p-6">
                        {selectedBoard.columns.length === 0 && (
                            <div className="text-center text-pretty md:min-w-md md:px-18">
                                <p className="mb-6 text-lg font-bold text-medium-grey">This board is empty. Create a new column to get started.</p>
                                <Button>
                                    <span className="capitalize">+ add new column</span>
                                </Button>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </>
    );
}
