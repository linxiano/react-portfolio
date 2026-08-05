import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Root } from './Root';
import { DesignPreview } from './designs/DesignPreview';

/* /design/* previews the alternate directions; everything else is the site. */
const isDesignPreview = window.location.pathname.startsWith('/design');

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<React.StrictMode>{isDesignPreview ? <DesignPreview /> : <Root />}</React.StrictMode>);
