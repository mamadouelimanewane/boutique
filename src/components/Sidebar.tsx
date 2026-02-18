"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Store, Package, ShoppingCart, Users, FileText, Settings, LogOut, X } from 'lucide-react';
import { useUI } from '@/context/UIContext';

const menuItems = [
    { icon: LayoutDashboard, label: 'Tableau de bord', href: '/' },
    { icon: ShoppingCart, label: 'Ventes', href: '/ventes' },
    { icon: Package, label: 'Stocks', href: '/stocks' },
    { icon: Users, label: 'Clients & Crédits', href: '/clients' },
    { icon: Store, label: 'Fournisseurs', href: '/fournisseurs' },
    { icon: FileText, label: 'Rapports', href: '/rapports' },
];

export default function Sidebar() {
    const { isSidebarOpen, setSidebarOpen } = useUI();
    const pathname = usePathname();

    return (
        <>
            {/* Mobile Overlay */}
            {isSidebarOpen && (
                <div
                    className="mobile-overlay active"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <div className={`sidebar-container ${isSidebarOpen ? 'mobile-open' : ''}`} style={{
                width: 'var(--sidebar-width)',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                display: 'flex',
                flexDirection: 'column',
                padding: '1.5rem',
                zIndex: 100,
                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                backgroundColor: 'var(--sidebar-bg)',
                borderRight: '1px solid rgba(255, 255, 255, 0.05)'
            }}>
                <div style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div className="flex-center" style={{
                            width: '40px',
                            height: '40px',
                            backgroundColor: 'white',
                            borderRadius: 'var(--radius-md)',
                            color: 'var(--sidebar-bg)'
                        }}>
                            <Store size={24} />
                        </div>
                        <h1 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'white' }}>DiaraBi</h1>
                    </div>

                    <button
                        className="mobile-only-flex"
                        onClick={() => setSidebarOpen(false)}
                        style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '0.5rem' }}
                    >
                        <X size={24} />
                    </button>
                </div>

                <nav style={{ flex: 1, overflowY: 'auto' }}>
                    <ul style={{ listStyle: 'none' }}>
                        {menuItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={item.label} style={{ marginBottom: '0.25rem' }}>
                                    <Link href={item.href} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        padding: '0.875rem 1rem',
                                        borderRadius: 'var(--radius-md)',
                                        color: 'var(--sidebar-text)',
                                        textDecoration: 'none',
                                        fontWeight: '500',
                                        transition: 'all 0.2s'
                                    }} className={`sidebar-link ${isActive ? 'active' : ''}`}>
                                        <item.icon size={20} />
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1rem', marginTop: '1rem' }}>
                    <Link href="/settings" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '0.875rem 1rem',
                        color: 'var(--sidebar-text)',
                        textDecoration: 'none',
                        marginBottom: '0.25rem',
                        borderRadius: 'var(--radius-md)'
                    }} className="sidebar-link">
                        <Settings size={20} />
                        Paramètres
                    </Link>
                    <button
                        onClick={() => alert("Déconnexion en cours...")}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.875rem 1rem',
                            color: 'var(--danger)',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            width: '100%',
                            textAlign: 'left',
                            borderRadius: 'var(--radius-md)'
                        }} className="sidebar-link hover-danger">
                        <LogOut size={20} />
                        Déconnexion
                    </button>
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 1024px) {
                    .sidebar-container {
                        transform: translateX(-100%);
                    }
                    .sidebar-container.mobile-open {
                        transform: translateX(0);
                        width: 280px !important;
                    }
                }
                .mobile-only-flex {
                    display: none;
                }
                @media (max-width: 1024px) {
                    .mobile-only-flex {
                        display: flex;
                    }
                }
            `}</style>
        </>
    );
}
