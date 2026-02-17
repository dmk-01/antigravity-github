import React, { useEffect } from 'react';
import { useSite } from '../context/SiteContext';

export const ThemeManager: React.FC = () => {
    const { siteData } = useSite();

    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--site-primary-color', siteData.theme.primaryColor);
        root.style.setProperty('--site-secondary-color', siteData.theme.secondaryColor);
        root.style.setProperty('--site-font-family', siteData.theme.fontFamily);
        root.style.setProperty('--site-font-size-base', siteData.theme.fontSizeBase);
        root.style.setProperty('--site-heading-font-size', siteData.theme.headingFontSize);

        // Apply body font
        document.body.style.fontFamily = siteData.theme.fontFamily;
        document.body.style.fontSize = siteData.theme.fontSizeBase;
    }, [siteData.theme]);

    return null;
};
