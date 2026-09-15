import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';

import '../css/app.css';

const appName = import.meta.env.VITE_APP_NAME || 'CartForge';

const pages = import.meta.glob('./Pages/**/*.jsx');

void createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),

    resolve: async (name) => {
        const path = `./Pages/${name}.jsx`;
        const page = pages[path];

        if (!page) {
            throw new Error(`Page not found: ${name}`);
        }

        const module = await page();
        return module.default;
    },

    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },

    progress: {
        color: '#4B5563',
    },
});
