import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../../firebaseConfig';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';

interface SiteData {
    logo: string;
    navigation: { name: string; path: string }[];
    theme: {
        primaryColor: string;
        secondaryColor: string;
        fontFamily: string;
        fontSizeBase: string;
        headingFontSize: string;
    };
    contents: Record<string, string>;
}

interface SiteContextType {
    siteData: SiteData;
    updateSiteData: (newData: Partial<SiteData>) => Promise<void>;
    loading: boolean;
}

const defaultData: SiteData = {
    logo: "/assets/logo.svg",
    navigation: [
        { name: "The Planter", path: "/planter" },
        { name: "Collection", path: "/collection" },
        { name: "Sustainability", path: "/sustainability" },
        { name: "Brew Guide", path: "/brew-guide" },
        { name: "Traceability", path: "/traceability" },
        { name: "Contact", path: "/contact" },
    ],
    theme: {
        primaryColor: "#000000",
        secondaryColor: "#ffffff",
        fontFamily: "Inter, sans-serif",
        fontSizeBase: "16px",
        headingFontSize: "2.5rem",
    },
    contents: {},
};

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [siteData, setSiteData] = useState<SiteData>(defaultData);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsub = onSnapshot(doc(db, 'site', 'settings'), (doc) => {
            if (doc.exists()) {
                setSiteData(doc.data() as SiteData);
            } else {
                // Initialize with default data if not exists
                setDoc(doc.ref, defaultData);
            }
            setLoading(false);
        });
        return unsub;
    }, []);

    const updateSiteData = async (newData: Partial<SiteData>) => {
        const updated = { ...siteData, ...newData };
        await setDoc(doc(db, 'site', 'settings'), updated);
    };

    return (
        <SiteContext.Provider value={{ siteData, updateSiteData, loading }}>
            {!loading && children}
        </SiteContext.Provider>
    );
};

export const useSite = () => {
    const context = useContext(SiteContext);
    if (!context) throw new Error('useSite must be used within SiteProvider');
    return context;
};
