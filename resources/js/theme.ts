// Apply theme before UI renders (avoids FOUC)
export function applyTheme() {
    const stored = localStorage.getItem('theme'); // "light", "dark", or null

    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Automatic: follow system if user hasn’t chosen
    const theme = stored ?? (systemPrefersDark ? 'dark' : 'light');

    document.documentElement.classList.toggle('dark', theme === 'dark');
}
