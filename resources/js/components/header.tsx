import iconChevronDown from '../../assets/icon-chevron-down.svg';
import logoMobile from '../../assets/logo-mobile.svg';
import Button from './button';

export default function Header() {
    return (
        <div className="flex h-16 items-center border-b border-lines-light bg-white md:h-20 dark:border-lines-dark dark:bg-dark-grey">
            <div className="flex flex-1 items-center gap-4 px-4 md:hidden">
                <img src={logoMobile} alt="Logo mobile" />
                <div className="flex items-center gap-2">
                    <h1 className="line-clamp-1 text-lg font-bold" title="Platform Launch">
                        Platform Launch
                    </h1>
                    <img src={iconChevronDown} alt="Icon chevron down" />
                </div>
            </div>
            <h1 className="ml-6 hidden flex-1 text-xl font-bold md:block">Platform Launch</h1>
            <Button></Button>
            <Button></Button>
        </div>
    );
}
