"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface UIContextType {
    isSidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
    toggleSidebar: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();

    // Close sidebar on route change on mobile
    useEffect(() => {
        setSidebarOpen(false);
    }, [pathname]);

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

    return (
        <UIContext.Provider value={{ isSidebarOpen, setSidebarOpen, toggleSidebar }}>
            {children}
        </UIContext.Provider>
    );
}

export function useUI() {
    const context = useContext(UIContext);
    if (context === undefined) {
        throw new Error('useUI must be used within a UIProvider');
    }
    return context;
}
