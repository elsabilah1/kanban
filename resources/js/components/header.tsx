import { Board } from '@/types';
import { Dispatch, SetStateAction } from 'react';
import iconAdd from '../../assets/icon-add-task-mobile.svg';
import iconChevronDown from '../../assets/icon-chevron-down.svg';
import iconMoreOption from '../../assets/icon-vertical-ellipsis.svg';
import logoDark from '../../assets/logo-dark.svg';
import logoLight from '../../assets/logo-light.svg';
import logoMobile from '../../assets/logo-mobile.svg';
import Button from './button';

interface HeaderProps {
    boards: Board[];
    selectedBoard: Board;
    setSelectedBoard: Dispatch<SetStateAction<Board>>;
}

export default function Header({ boards, selectedBoard, setSelectedBoard }: HeaderProps) {
    return (
        <div className="flex h-16 items-center border-b border-lines-light bg-white md:h-20 dark:border-lines-dark dark:bg-dark-grey">
            <div className="flex flex-1 items-center gap-4 px-4 md:hidden">
                <img src={logoMobile} alt="Logo mobile" />
                <div className="flex items-center gap-2">
                    <h1 className="line-clamp-1 text-lg font-bold" title="Platform Launch">
                        {selectedBoard.name}
                    </h1>
                    <img src={iconChevronDown} alt="Icon chevron down" />
                </div>
            </div>
            <div className="hidden h-full flex-1 divide-x divide-lines-light md:flex dark:divide-lines-dark">
                {/* flex */}
                <div className="hidden items-center pr-7 pl-6">
                    <img src={logoLight} className="hidden dark:block" alt="Logo" />
                    <img src={logoDark} className="block dark:hidden" alt="Logo" />
                </div>
                <h1 className="my-auto ml-6 text-xl font-bold">{selectedBoard.name}</h1>
            </div>
            <Button className="h-8 px-4 md:h-12 md:px-6" disabled={selectedBoard.columns.length === 0}>
                <img className="md:hidden" src={iconAdd} alt="Icon add" />
                <span className="hidden capitalize md:block">+ add new task</span>
            </Button>
            <button className="cursor-pointer px-4 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-main-purple-hover md:mr-2 md:px-6">
                <img src={iconMoreOption} alt="Icon more option" />
            </button>
        </div>
    );
}
