"use client";

import { Bell, Search, User, Menu } from 'lucide-react';
import { useUI } from '@/context/UIContext';

export default function Header({ title }: { title: string }) {
    const { toggleSidebar } = useUI();

    return (
        <header style={{
            height: 'var(--header-height)',
            position: 'sticky',
            top: 0,
            zIndex: 90,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 2rem',
            borderBottom: '1px solid #e2e8f0',
            backgroundColor: '#ffffff',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button
                    onClick={toggleSidebar}
                    className="mobile-burger"
                    style={{ background: 'none', border: 'none', color: 'var(--foreground)', cursor: 'pointer', display: 'none' }}
                >
                    <Menu size={24} />
                </button>
                <h2 style={{ fontSize: '1.125rem', fontWeight: '700' }}>{title}</h2>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div className="header-search" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <Search size={18} style={{ position: 'absolute', left: '12px', color: '#94a3b8' }} />
                    <input
                        type="text"
                        placeholder="Rechercher..."
                        style={{
                            padding: '0.75rem 1rem 0.75rem 2.75rem',
                            borderRadius: '0.75rem',
                            border: '1px solid #f1f5f9',
                            backgroundColor: '#f1f5f9',
                            width: '240px',
                            outline: 'none',
                            fontSize: '0.875rem',
                            fontWeight: '500',
                            transition: 'all 0.2s',
                            color: '#0f172a'
                        }}
                    />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button className="flex-center" style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '0.75rem',
                        border: '1px solid #f1f5f9',
                        background: '#f8fafc',
                        cursor: 'pointer',
                        position: 'relative',
                        color: '#64748b'
                    }}>
                        <Bell size={20} />
                        <span style={{
                            position: 'absolute',
                            top: '8px',
                            right: '8px',
                            width: '8px',
                            height: '8px',
                            backgroundColor: '#ef4444',
                            borderRadius: '50%',
                            border: '2px solid white'
                        }}></span>
                    </button>

                    <div className="flex-center" style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: '#10b981',
                        border: '2px solid #ffffff',
                        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                        cursor: 'pointer',
                        color: 'white'
                    }}>
                        <User size={20} />
                    </div>
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 1024px) {
                    .mobile-burger {
                        display: flex !important;
                    }
                }
                @media (max-width: 640px) {
                    .header-search {
                        display: none !important;
                    }
                }
            `}</style>
        </header>
    );
}
