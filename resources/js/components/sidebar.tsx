import iconDarkTheme from '../../assets/icon-dark-theme.svg';
import iconHideSidebar from '../../assets/icon-hide-sidebar.svg';
import iconLightTheme from '../../assets/icon-light-theme.svg';
import logoDark from '../../assets/logo-dark.svg';
import logoLight from '../../assets/logo-light.svg';

export default function Sidebar() {
    const boards = [{}];

    return (
        <div className="hidden min-h-screen min-w-max flex-col border-r border-lines-light bg-white md:flex dark:border-lines-dark dark:bg-dark-grey">
            <div className="mb-8 flex h-20 items-center px-6">
                <picture>
                    <source srcSet={logoLight} media="(prefers-color-scheme: dark)" />
                    <source srcSet={logoDark} media="(prefers-color-scheme: light)" />
                    <img src={logoLight} alt="Kanban logo" />
                </picture>
            </div>
            <div className="mb-4 flex-1">
                <p className="px-6 text-xs font-bold tracking-widest text-medium-grey uppercase">all boards ({boards.length})</p>
                <div className="pr-5"></div>
            </div>
            <div className="mx-3 mb-4 flex h-12 items-center justify-center gap-6 rounded-md bg-light-grey dark:bg-very-dark-grey">
                <img src={iconLightTheme} alt="Icon light theme" />
                <span>toggle</span>
                <img src={iconDarkTheme} alt="Icon dark theme" />
            </div>
            <button className="mb-8 flex h-12 items-center gap-2.5 px-6">
                <img src={iconHideSidebar} alt="Icon hide sidebar" />
                <span className="text-sm text-medium-grey capitalize">hide sidebar</span>
            </button>
        </div>
    );
}
