import { applyTheme } from '@/theme';
import { useEffect, useState } from 'react';

export default function useTheme() {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    );
    useEffect(() => {
        if (theme === 'dark') {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
        applyTheme();
    }, [theme]);
    return { theme, setTheme };
}
