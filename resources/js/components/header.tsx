import { Board } from '@/types';
import { Dispatch, SetStateAction } from 'react';
import iconChevronDown from '../../assets/icon-chevron-down.svg';
import iconMoreOption from '../../assets/icon-vertical-ellipsis.svg';
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
            <h1 className="ml-6 hidden flex-1 text-xl font-bold md:block">{selectedBoard.name}</h1>
            <Button>
                <span className="capitalize">+ add new task</span>
            </Button>
            <button className="mr-2 cursor-pointer px-6">
                <img src={iconMoreOption} alt="Icon more option" />
            </button>
        </div>
    );
}
