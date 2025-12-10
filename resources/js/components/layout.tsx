import { Board } from '@/types';
import { Head } from '@inertiajs/react';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import Header from './header';
import Sidebar from './sidebar';

interface LayoutProps {
    boards: Board[];
    selectedBoard: Board;
    setSelectedBoard: Dispatch<SetStateAction<Board>>;
    children: ReactNode;
}

export default function Layout({ boards, selectedBoard, setSelectedBoard, children }: LayoutProps) {
    return (
        <>
            <Head title="Dashboard" />
            <div className="flex min-h-screen bg-light-grey text-black dark:bg-very-dark-grey dark:text-white">
                <Sidebar boards={boards} selectedBoard={selectedBoard} setSelectedBoard={setSelectedBoard} />
                <div className="flex flex-1 flex-col">
                    <Header boards={boards} selectedBoard={selectedBoard} setSelectedBoard={setSelectedBoard} />
                    {children}
                </div>
            </div>
        </>
    );
}
