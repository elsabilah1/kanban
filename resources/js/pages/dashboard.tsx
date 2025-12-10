import Button from '@/components/button';
import Layout from '@/components/layout';
import { Board } from '@/types';
import { ScrollArea } from '@base-ui-components/react/scroll-area';
import { ReactNode, useState } from 'react';
import dummyData from '../../assets/data.json';

export default function Dashboard() {
    const boards = dummyData.boards;
    const [selectedBoard, setSelectedBoard] = useState<Board>(boards[0]);

    return (
        <Layout boards={boards} selectedBoard={selectedBoard} setSelectedBoard={setSelectedBoard}>
            <BoardColumnsContainer>
                {selectedBoard.columns.length === 0 ? (
                    <EmptyBoardColumn />
                ) : (
                    <div className="flex gap-6">
                        {selectedBoard.columns.map((column) => (
                            <div key={column.name} className="w-2xs">
                                <h2 className="mb-6 text-xs font-bold tracking-widest text-medium-grey uppercase">
                                    {column.name} ({column.tasks.length})
                                </h2>
                                <div className="space-y-5">
                                    {column.tasks.map((task) => (
                                        <div className="rounded-lg bg-white px-4 py-6 drop-shadow-lg drop-shadow-main-purple/10 dark:bg-dark-grey">
                                            <h3 className="mb-2 text-sm font-bold">{task.title}</h3>
                                            <p className="text-xs font-bold text-medium-grey">
                                                {task.subtasks.filter((subtask) => subtask.isCompleted).length} of {task.subtasks.length} substasks
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <button className="mt-10 w-2xs cursor-pointer rounded-md bg-gradient-to-b from-[#E9EFFA] to-[#E9EFFA]/50 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-main-purple-hover dark:from-[#2B2C37] dark:to-[#2B2C37]/50">
                            <span className="text-2xl font-bold text-medium-grey capitalize">+ new column</span>
                        </button>
                    </div>
                )}
            </BoardColumnsContainer>
        </Layout>
    );
}

function EmptyBoardColumn() {
    return (
        <div className="grid place-items-center p-6">
            <div className="text-center text-pretty md:min-w-md md:px-18">
                <p className="mb-6 text-lg font-bold text-medium-grey">This board is empty. Create a new column to get started.</p>
                <Button>
                    <span className="capitalize">+ add new column</span>
                </Button>
            </div>
        </div>
    );
}

function BoardColumnsContainer({ children }: { children: ReactNode }) {
    return (
        <ScrollArea.Root className="h-[calc(100vh-4rem)] max-w-screen md:h-[calc(100vh-5rem)] md:max-w-[calc(100vw-16rem)]">
            <ScrollArea.Viewport className="h-full overscroll-contain focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-main-purple-hover">
                <ScrollArea.Content className="p-4 md:p-6">{children}</ScrollArea.Content>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar className="pointer-events-none relative flex rounded bg-lines-light opacity-0 transition-opacity before:absolute before:content-[''] data-[hovering]:pointer-events-auto data-[hovering]:opacity-100 data-[hovering]:delay-0 data-[orientation=horizontal]:m-2 data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:before:right-0 data-[orientation=horizontal]:before:-bottom-2 data-[orientation=horizontal]:before:left-0 data-[orientation=horizontal]:before:h-5 data-[orientation=horizontal]:before:w-full data-[orientation=vertical]:m-2 data-[orientation=vertical]:w-1 data-[orientation=vertical]:before:left-1/2 data-[orientation=vertical]:before:h-full data-[orientation=vertical]:before:w-5 data-[orientation=vertical]:before:-translate-x-1/2 data-[scrolling]:pointer-events-auto data-[scrolling]:opacity-100 data-[scrolling]:duration-0 dark:bg-lines-dark">
                <ScrollArea.Thumb className="w-full rounded bg-lines-dark dark:bg-lines-light" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Scrollbar
                className="pointer-events-none relative flex rounded bg-lines-light opacity-0 transition-opacity before:absolute before:content-[''] data-[hovering]:pointer-events-auto data-[hovering]:opacity-100 data-[hovering]:delay-0 data-[orientation=horizontal]:m-2 data-[orientation=horizontal]:h-1 data-[orientation=horizontal]:before:right-0 data-[orientation=horizontal]:before:-bottom-2 data-[orientation=horizontal]:before:left-0 data-[orientation=horizontal]:before:h-5 data-[orientation=horizontal]:before:w-full data-[orientation=vertical]:m-2 data-[orientation=vertical]:w-1 data-[orientation=vertical]:before:left-1/2 data-[orientation=vertical]:before:h-full data-[orientation=vertical]:before:w-5 data-[orientation=vertical]:before:-translate-x-1/2 data-[scrolling]:pointer-events-auto data-[scrolling]:opacity-100 data-[scrolling]:duration-0 dark:bg-lines-dark"
                orientation="horizontal"
            >
                <ScrollArea.Thumb className="w-full rounded bg-lines-dark dark:bg-lines-light" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner />
        </ScrollArea.Root>
    );
}
