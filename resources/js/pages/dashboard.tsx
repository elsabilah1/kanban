import Button from '@/components/button';
import { Dialog, DialogDescription, DialogPopUp, DialogTitle, DialogTrigger } from '@/components/dialog';
import Layout from '@/components/layout';
import { Board, Subtask, Task } from '@/types';
import { Checkbox, Dialog as DialogPrimitive } from '@base-ui-components/react';
import { ScrollArea } from '@base-ui-components/react/scroll-area';
import { ReactNode, useState } from 'react';
import dummyData from '../../assets/data.json';
import iconMoreOption from '../../assets/icon-vertical-ellipsis.svg';

export default function Dashboard() {
    const boards = dummyData.boards;
    const [selectedBoard, setSelectedBoard] = useState<Board>(boards[0]);
    const detailTaskDialog = DialogPrimitive.createHandle<Task>();

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
                                        <DialogTrigger
                                            key={task.title}
                                            handle={detailTaskDialog}
                                            payload={task}
                                            className="w-full cursor-pointer rounded-lg bg-white px-4 py-6 text-start drop-shadow-lg drop-shadow-main-purple/10 dark:bg-dark-grey"
                                        >
                                            <h3 className="mb-2 text-sm font-bold">{task.title}</h3>
                                            <p className="text-xs font-bold text-medium-grey">
                                                {task.subtasks.filter((subtask) => subtask.isCompleted).length} of {task.subtasks.length} substasks
                                            </p>
                                        </DialogTrigger>
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
            {/* Detail Task Dialog */}
            <Dialog handle={detailTaskDialog}>{({ payload }) => <TaskDetailDialogContent task={payload as Task} />}</Dialog>
        </Layout>
    );
}

function EmptyBoardColumn() {
    return (
        <div className="absolute inset-0 grid place-items-center">
            <div className="text-center text-balance md:min-w-md md:px-18 md:text-pretty">
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

function TaskDetailDialogContent({ task }: { task: Task }) {
    return (
        <DialogPopUp className="w-[480px]">
            {task !== undefined && (
                <div className="grid gap-6">
                    <div className="grid grid-cols-[1fr_1.5rem] items-center gap-6">
                        <DialogTitle>{task.title}</DialogTitle>
                        {/* cursor-pointer px-4 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-main-purple-hover md:mr-2 md:px-6 */}
                        <button className="grid h-fit cursor-pointer place-items-center rounded-xs py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-purple-hover">
                            <img src={iconMoreOption} alt="Icon more option" />
                        </button>
                    </div>
                    <DialogDescription>{task.description}</DialogDescription>
                    <div>
                        <p className="mb-4 text-xs font-bold">
                            Subtasks ({task.subtasks.filter((subtask) => subtask.isCompleted).length} of {task.subtasks.length})
                        </p>
                        <div className="space-y-2">
                            {task.subtasks.map((subtask) => (
                                <SubtaskItem key={subtask.title} data={subtask} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="mb-4 text-xs font-bold">Current Status</p>
                    </div>
                </div>
            )}
        </DialogPopUp>
    );
}

function SubtaskItem({ data }: { data: Subtask }) {
    return (
        <label className="grid cursor-pointer grid-cols-[1rem_1fr] items-center gap-4 rounded-sm bg-light-grey p-3 transition hover:bg-main-purple/25 has-[input:checked]:line-through has-[input:checked]:opacity-50 dark:bg-very-dark-grey">
            <Checkbox.Root
                defaultChecked={data.isCompleted}
                className="grid size-4 place-items-center rounded-xs border border-[#828FA3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-purple-hover data-[checked]:border-none data-[checked]:bg-main-purple"
            >
                <Checkbox.Indicator>
                    <svg width="10" height="8" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="#FFF" strokeWidth="2" fill="none" d="m1.276 3.066 2.756 2.756 5-5" />
                    </svg>
                </Checkbox.Indicator>
            </Checkbox.Root>
            <span className="text-xs font-bold">{data.title}</span>
        </label>
    );
}
