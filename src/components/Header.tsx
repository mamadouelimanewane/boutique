"use client";

import { Bell, Search, User, Menu } from 'lucide-react';
import { useUI } from '@/context/UIContext';

export default function Header({ title }: { title: string }) {
    const { toggleSidebar } = useUI();

    return (
        <header className="glass" style={{
            height: 'var(--header-height)',
            position: 'sticky',
            top: 0,
            zIndex: 90,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 1rem',
            borderBottom: '1px solid var(--card-border)',
            backgroundColor: 'var(--glass-bg)'
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
                    <Search size={18} style={{ position: 'absolute', left: '12px', color: '#64748b' }} />
                    <input
                        type="text"
                        placeholder="Rechercher..."
                        style={{
                            padding: '0.6rem 1rem 0.6rem 2.5rem',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--card-border)',
                            backgroundColor: 'white',
                            width: '200px',
                            outline: 'none',
                            fontSize: '0.875rem'
                        }}
                    />
                </div>

                <button className="flex-center" style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--card-border)',
                    background: 'white',
                    cursor: 'pointer',
                    position: 'relative'
                }}>
                    <Bell size={18} />
                    <span style={{
                        position: 'absolute',
                        top: '6px',
                        right: '6px',
                        width: '6px',
                        height: '6px',
                        backgroundColor: 'var(--danger)',
                        borderRadius: '50%',
                        border: '1px solid white'
                    }}></span>
                </button>

                <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <div className="flex-center" style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: '#e2e8f0',
                        border: '1px solid var(--card-border)'
                    }}>
                        <User size={18} />
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
