"use client";

import Header from "@/components/Header";
import { User, Lock, Bell, Store, Globe, Moon, Save, LogOut, Check, Shield, Smartphone, QrCode, X } from 'lucide-react';
import { useState } from 'react';

export default function Settings() {
    const [activeSection, setActiveSection] = useState('profile');
    const [loading, setLoading] = useState(false);
    const [saved, setSaved] = useState(false);

    // State for form data
    const [formData, setFormData] = useState({
        firstName: 'Amadou',
        lastName: 'Diallo',
        email: 'amadou.diallo@boutique.sn',
        shopName: 'DiaraBi Market - Médina',
        shopAddress: 'Rue 22 x Avenue Blaise Diagne, Dakar',
        shopPhone: '+221 33 821 00 00',
        shopNinea: '0012345/2B3'
    });

    // State for appearance
    const [darkMode, setDarkMode] = useState(false);
    const [primaryColor, setPrimaryColor] = useState('#10b981');

    // State for toggles
    const [toggles, setToggles] = useState({
        emailNotifs: true,
        stockAlerts: true,
        twoFactor: false,
        autoBackup: true
    });

    const handleSave = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
        }, 800);
    };

    const handleToggle = (key: keyof typeof toggles) => {
        setToggles(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const renderContent = () => {
        switch (activeSection) {
            case 'profile':
                return (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div className="card">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--card-border)' }}>
                                <h2 style={{ fontSize: '1.125rem', fontWeight: '700' }}>Profil</h2>
                                <button className="btn btn-primary" onClick={handleSave} disabled={loading} style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>
                                    {saved ? <><Check size={14} /> Fait</> : <><Save size={14} /> {loading ? '...' : 'Sauver'}</>}
                                </button>
                            </div>
                            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                                    <div className="flex-center" style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#f1f5f9', border: '2px solid var(--primary)' }}>
                                        <User size={40} color="var(--primary)" />
                                    </div>
                                    <button style={{ fontSize: '0.75rem', color: 'var(--primary)', border: 'none', background: 'none', cursor: 'pointer', fontWeight: '600' }}>Photo</button>
                                </div>
                                <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', width: '100%' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                        <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#64748b' }}>Prénom</label>
                                        <input type="text" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} style={{ padding: '0.6rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--card-border)', outline: 'none' }} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                        <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#64748b' }}>Nom</label>
                                        <input type="text" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} style={{ padding: '0.6rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--card-border)', outline: 'none' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ border: '1px solid #fecaca' }}>
                            <h2 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--danger)', marginBottom: '0.5rem' }}>Danger</h2>
                            <button className="btn" style={{ padding: '0.5rem', backgroundColor: '#fee2e2', color: 'var(--danger)', border: '1px solid #fecaca', fontSize: '0.8rem', width: '100%' }}>Supprimer compte</button>
                        </div>
                    </div>
                );

            case 'security':
                return (
                    <div className="card">
                        <h2 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--card-border)' }}>Sécurité</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <h4 style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.75rem' }}>Mot de passe</h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    <input type="password" placeholder="Actuel" style={{ padding: '0.6rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--card-border)', outline: 'none' }} />
                                    <input type="password" placeholder="Nouveau" style={{ padding: '0.6rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--card-border)', outline: 'none' }} />
                                    <button className="btn btn-primary" style={{ padding: '0.6rem', fontSize: '0.8rem' }}>Modifier</button>
                                </div>
                            </div>
                            <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                                <Shield size={20} color="var(--primary)" />
                                <div style={{ flex: 1 }}>
                                    <p style={{ fontWeight: '600', fontSize: '0.85rem' }}>2FA</p>
                                    <p style={{ fontSize: '0.75rem', color: '#64748b' }}>Double authentification</p>
                                </div>
                                <button
                                    onClick={() => handleToggle('twoFactor')}
                                    style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--card-border)', backgroundColor: toggles.twoFactor ? 'var(--primary)' : 'white', color: toggles.twoFactor ? 'white' : 'inherit', fontWeight: '600', cursor: 'pointer' }}
                                >
                                    {toggles.twoFactor ? 'ON' : 'OFF'}
                                </button>
                            </div>
                        </div>
                    </div>
                );

            case 'notifications':
                return (
                    <div className="card">
                        <h2 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--card-border)' }}>Notifications</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <p style={{ fontSize: '0.9rem', fontWeight: '600' }}>Résumé par Email</p>
                                <div onClick={() => handleToggle('emailNotifs')} style={{ width: '40px', height: '20px', backgroundColor: toggles.emailNotifs ? 'var(--primary)' : '#cbd5e1', borderRadius: '10px', position: 'relative', cursor: 'pointer', transition: '0.2s' }}>
                                    <div style={{ width: '16px', height: '16px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', top: '2px', left: toggles.emailNotifs ? '22px' : '2px', transition: '0.2s' }}></div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <p style={{ fontSize: '0.9rem', fontWeight: '600' }}>Alertes Stock</p>
                                <div onClick={() => handleToggle('stockAlerts')} style={{ width: '40px', height: '20px', backgroundColor: toggles.stockAlerts ? 'var(--primary)' : '#cbd5e1', borderRadius: '10px', position: 'relative', cursor: 'pointer', transition: '0.2s' }}>
                                    <div style={{ width: '16px', height: '16px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', top: '2px', left: toggles.stockAlerts ? '22px' : '2px', transition: '0.2s' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'store':
                return (
                    <div className="card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--card-border)' }}>
                            <h2 style={{ fontSize: '1.125rem', fontWeight: '700' }}>Ma Boutique</h2>
                            <button className="btn btn-primary" onClick={handleSave} style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}>OK</button>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                                <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#64748b' }}>Nom Enseigne</label>
                                <input type="text" value={formData.shopName} onChange={(e) => setFormData({ ...formData, shopName: e.target.value })} style={{ padding: '0.6rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--card-border)', outline: 'none' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                                <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#64748b' }}>Téléphone</label>
                                <input type="text" value={formData.shopPhone} onChange={(e) => setFormData({ ...formData, shopPhone: e.target.value })} style={{ padding: '0.6rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--card-border)', outline: 'none' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                                <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#64748b' }}>Adresse</label>
                                <textarea value={formData.shopAddress} onChange={(e) => setFormData({ ...formData, shopAddress: e.target.value })} style={{ padding: '0.6rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--card-border)', outline: 'none', height: '60px', resize: 'none' }} />
                            </div>
                        </div>
                    </div>
                );

            case 'language':
                return (
                    <div className="card">
                        <h2 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--card-border)' }}>Langue</h2>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {['FR', 'WO', 'EN'].map(lang => (
                                <button key={lang} style={{ flex: 1, minWidth: '60px', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--card-border)', backgroundColor: lang === 'FR' ? 'rgba(16, 185, 129, 0.1)' : 'white', color: lang === 'FR' ? 'var(--primary)' : 'inherit', fontWeight: '700', cursor: 'pointer' }}>{lang}</button>
                            ))}
                        </div>
                    </div>
                );

            case 'appearance':
                return (
                    <div className="card">
                        <h2 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--card-border)' }}>Apparence</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                    <Moon size={20} />
                                    <p style={{ fontSize: '0.9rem', fontWeight: '600' }}>Mode Sombre</p>
                                </div>
                                <div onClick={() => setDarkMode(!darkMode)} style={{ width: '40px', height: '20px', backgroundColor: darkMode ? '#0f172a' : '#cbd5e1', borderRadius: '10px', position: 'relative', cursor: 'pointer', transition: '0.2s' }}>
                                    <div style={{ width: '16px', height: '16px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', top: '2px', left: darkMode ? '22px' : '2px', transition: '0.2s' }}></div>
                                </div>
                            </div>
                            <div>
                                <p style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.75rem' }}>Couleur de Marque</p>
                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                    {['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444'].map(color => (
                                        <div
                                            key={color}
                                            onClick={() => setPrimaryColor(color)}
                                            style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: color, cursor: 'pointer', border: primaryColor === color ? '3px solid #cbd5e1' : 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                        >
                                            {primaryColor === color && <Check size={14} color="white" />}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    const NavItem = ({ id, icon: Icon, label }: { id: string, icon: any, label: string }) => {
        const isActive = activeSection === id;
        return (
            <li style={{ marginBottom: '0.3rem' }}>
                <button onClick={() => setActiveSection(id)} style={{ width: '100%', textAlign: 'left', padding: '0.6rem 0.75rem', borderRadius: 'var(--radius-md)', backgroundColor: isActive ? 'var(--primary)' : 'transparent', color: isActive ? 'white' : 'var(--foreground)', border: 'none', fontWeight: isActive ? '600' : '500', display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', fontSize: '0.85rem' }}>
                    <Icon size={16} /> {label}
                </button>
            </li>
        );
    };

    return (
        <main style={{ marginLeft: 'var(--sidebar-width)', minHeight: '100vh', backgroundColor: 'var(--background)', transition: 'margin-left 0.3s' }}>
            <Header title="Paramètres" />
            <div style={{ padding: '1rem', maxWidth: '1100px', margin: '0 auto' }}>
                <div className="settings-layout">
                    <div className="card settings-nav" style={{ padding: '0.75rem', height: 'fit-content' }}>
                        <h3 style={{ fontSize: '0.65rem', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', marginBottom: '0.75rem', paddingLeft: '0.5rem', letterSpacing: '0.05em' }}>Compte</h3>
                        <ul style={{ listStyle: 'none', marginBottom: '1rem' }}>
                            <NavItem id="profile" icon={User} label="Profil" />
                            <NavItem id="security" icon={Lock} label="Sécurité" />
                            <NavItem id="notifications" icon={Bell} label="Notifs" />
                        </ul>
                        <h3 style={{ fontSize: '0.65rem', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', marginBottom: '0.75rem', paddingLeft: '0.5rem', letterSpacing: '0.05em' }}>App</h3>
                        <ul style={{ listStyle: 'none' }}>
                            <NavItem id="store" icon={Store} label="Boutique" />
                            <NavItem id="language" icon={Globe} label="Langue" />
                            <NavItem id="appearance" icon={Moon} label="Apparence" />
                        </ul>
                    </div>
                    <div style={{ transition: 'all 0.3s ease' }}>{renderContent()}</div>
                </div>
            </div>

            <style jsx>{`
        .settings-layout {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 1.5rem;
        }
        @media (max-width: 1024px) {
          main { margin-left: 0 !important; }
          .settings-layout {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `}</style>
        </main>
    );
}
