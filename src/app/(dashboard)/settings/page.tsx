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
        const cardHeaderStyle = { fontSize: '1.25rem', fontWeight: '800' as const, color: '#0f172a', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '2px solid #f1f5f9' };
        const labelStyle = { fontSize: '0.875rem', fontWeight: '700' as const, color: '#64748b', marginBottom: '0.5rem' };
        const inputStyle = { padding: '0.875rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', outline: 'none', backgroundColor: '#f8fafc', fontSize: '1rem', transition: 'all 0.2s' };

        switch (activeSection) {
            case 'profile':
                return (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div className="card" style={{ border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                <h2 style={cardHeaderStyle}>Informations Personnelles</h2>
                                <button className="btn btn-primary" onClick={handleSave} disabled={loading}>
                                    {saved ? <><Check size={18} /> Enregistré</> : <><Save size={18} /> {loading ? 'En cours...' : 'Sauvegarder'}</>}
                                </button>
                            </div>
                            <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                                    <div className="flex-center" style={{ width: '120px', height: '120px', borderRadius: '2rem', backgroundColor: '#f1f5f9', border: '3px solid white', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
                                        <User size={64} style={{ color: 'var(--primary)' }} />
                                    </div>
                                    <button style={{ fontSize: '0.875rem', color: 'var(--primary)', border: 'none', background: 'none', cursor: 'pointer', fontWeight: '800' }}>Modifier la photo</button>
                                </div>
                                <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <label style={labelStyle}>Prénom</label>
                                        <input type="text" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} style={inputStyle} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <label style={labelStyle}>Nom</label>
                                        <input type="text" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} style={inputStyle} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gridColumn: 'span 2' }}>
                                        <label style={labelStyle}>Adresse Email</label>
                                        <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={inputStyle} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ border: '2px dashed #fee2e2', backgroundColor: '#fffafb' }}>
                            <h2 style={{ fontSize: '1.125rem', fontWeight: '800', color: '#ef4444', marginBottom: '0.5rem' }}>Zone de danger</h2>
                            <p style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '1.5rem', fontWeight: '500' }}>Une fois votre compte supprimé, toutes vos données seront définitivement effacées.</p>
                            <button className="btn" style={{ padding: '0.75rem', backgroundColor: '#ef4444', color: 'white', border: 'none', fontSize: '0.9rem', fontWeight: '700', width: 'fit-content' }}>Supprimer mon compte</button>
                        </div>
                    </div>
                );

            case 'security':
                return (
                    <div className="card" style={{ border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
                        <h2 style={cardHeaderStyle}>Sécurité du Compte</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                            <div style={{ maxWidth: '500px' }}>
                                <h4 style={{ fontSize: '1rem', fontWeight: '800', color: '#1e293b', marginBottom: '1.25rem' }}>Modifier le mot de passe</h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <input type="password" placeholder="Mot de passe actuel" style={inputStyle} />
                                    <input type="password" placeholder="Nouveau mot de passe" style={inputStyle} />
                                    <input type="password" placeholder="Confirmer le nouveau mot de passe" style={inputStyle} />
                                    <button className="btn btn-primary" style={{ padding: '0.875rem', marginTop: '0.5rem' }}>Mettre à jour le mot de passe</button>
                                </div>
                            </div>
                            <div style={{ padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '1rem', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
                                <div style={{ width: '48px', height: '48px', backgroundColor: '#ecfdf5', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Shield size={24} style={{ color: 'var(--primary)' }} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <p style={{ fontWeight: '800', fontSize: '1rem', color: '#0f172a' }}>Double Authentification (2FA)</p>
                                    <p style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: '500' }}>Ajoutez une couche de sécurité supplémentaire à votre compte.</p>
                                </div>
                                <button
                                    onClick={() => handleToggle('twoFactor')}
                                    style={{
                                        padding: '0.6rem 1.25rem',
                                        fontSize: '0.875rem',
                                        borderRadius: '0.75rem',
                                        border: 'none',
                                        backgroundColor: toggles.twoFactor ? 'var(--primary)' : '#e2e8f0',
                                        color: toggles.twoFactor ? 'white' : '#475569',
                                        fontWeight: '800',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    {toggles.twoFactor ? 'ACTIVÉ' : 'DÉSACTIVÉ'}
                                </button>
                            </div>
                        </div>
                    </div>
                );

            case 'notifications':
                return (
                    <div className="card" style={{ border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
                        <h2 style={cardHeaderStyle}>Préférences de Notification</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {[
                                { id: 'emailNotifs', label: 'Rapports journaliers par email', desc: 'Recevez un résumé de vos ventes chaque soir.' },
                                { id: 'stockAlerts', label: 'Alertes de stock critique', desc: 'Soyez notifié dès qu\'un produit atteint son seuil minimal.' },
                                { id: 'autoBackup', label: 'Sauvegarde automatique', desc: 'Sauvegarder vos données sur le cloud chaque semaine.' }
                            ].map((item) => (
                                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', borderRadius: '0.75rem', backgroundColor: '#f8fafc', border: '1px solid #f1f5f9' }}>
                                    <div>
                                        <p style={{ fontSize: '1rem', fontWeight: '800', color: '#1e293b' }}>{item.label}</p>
                                        <p style={{ fontSize: '0.875rem', color: '#94a3b8', fontWeight: '500' }}>{item.desc}</p>
                                    </div>
                                    <div onClick={() => handleToggle(item.id as keyof typeof toggles)} style={{ width: '50px', height: '26px', backgroundColor: toggles[item.id as keyof typeof toggles] ? 'var(--primary)' : '#cbd5e1', borderRadius: '13px', position: 'relative', cursor: 'pointer', transition: '0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                                        <div style={{ width: '20px', height: '20px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', top: '3px', left: toggles[item.id as keyof typeof toggles] ? '27px' : '3px', transition: '0.3s cubic-bezier(0.4, 0, 0.2, 1)', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'store':
                return (
                    <div className="card" style={{ border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                            <h2 style={cardHeaderStyle}>Configuration de la Boutique</h2>
                            <button className="btn btn-primary" onClick={handleSave}>Mettre à jour</button>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <label style={labelStyle}>Nom de l'Enseigne</label>
                                    <input type="text" value={formData.shopName} onChange={(e) => setFormData({ ...formData, shopName: e.target.value })} style={inputStyle} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <label style={labelStyle}>Numéro de téléphone</label>
                                    <input type="text" value={formData.shopPhone} onChange={(e) => setFormData({ ...formData, shopPhone: e.target.value })} style={inputStyle} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <label style={labelStyle}>NINEA / Registre du Commerce</label>
                                <input type="text" value={formData.shopNinea} onChange={(e) => setFormData({ ...formData, shopNinea: e.target.value })} style={inputStyle} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <label style={labelStyle}>Adresse de la Boutique</label>
                                <textarea value={formData.shopAddress} onChange={(e) => setFormData({ ...formData, shopAddress: e.target.value })} style={{ ...inputStyle, height: '100px', resize: 'none' }} />
                            </div>
                        </div>
                    </div>
                );

            case 'language':
                return (
                    <div className="card" style={{ border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
                        <h2 style={cardHeaderStyle}>Langue de l'Interface</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
                            {[
                                { code: 'FR', label: 'Français', sub: 'Langue par défaut' },
                                { code: 'WO', label: 'Wolof', sub: 'Pataas' },
                                { code: 'EN', label: 'English', sub: 'International' }
                            ].map(lang => (
                                <button key={lang.code} style={{
                                    padding: '1.5rem',
                                    borderRadius: '1rem',
                                    border: lang.code === 'FR' ? '2px solid var(--primary)' : '1px solid #e2e8f0',
                                    backgroundColor: lang.code === 'FR' ? '#ecfdf5' : 'white',
                                    color: lang.code === 'FR' ? 'var(--primary)' : '#475569',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    textAlign: 'center'
                                }}>
                                    <p style={{ fontSize: '1.25rem', fontWeight: '900', marginBottom: '0.25rem' }}>{lang.code}</p>
                                    <p style={{ fontSize: '0.85rem', fontWeight: '700' }}>{lang.label}</p>
                                    <p style={{ fontSize: '0.7rem', opacity: 0.7 }}>{lang.sub}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                );

            case 'appearance':
                return (
                    <div className="card" style={{ border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
                        <h2 style={cardHeaderStyle}>Personnalisation Visuelle</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem', backgroundColor: '#f8fafc', borderRadius: '1rem' }}>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <div className="flex-center" style={{ width: '40px', height: '40px', backgroundColor: '#0f172a', borderRadius: '0.75rem', color: 'white' }}>
                                        <Moon size={20} />
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '1rem', fontWeight: '800', color: '#0f172a' }}>Mode Sombre automatique</p>
                                        <p style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: '500' }}>Passer l'interface en mode nuit.</p>
                                    </div>
                                </div>
                                <div onClick={() => setDarkMode(!darkMode)} style={{ width: '50px', height: '26px', backgroundColor: darkMode ? '#0f172a' : '#cbd5e1', borderRadius: '13px', position: 'relative', cursor: 'pointer', transition: '0.2s' }}>
                                    <div style={{ width: '20px', height: '20px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', top: '3px', left: darkMode ? '27px' : '3px', transition: '0.2s' }}></div>
                                </div>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1rem', fontWeight: '800', color: '#1e293b', marginBottom: '1.25rem' }}>Couleur Thème</h4>
                                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', padding: '1.25rem', backgroundColor: '#f8fafc', borderRadius: '1rem' }}>
                                    {['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444'].map(color => (
                                        <div
                                            key={color}
                                            onClick={() => setPrimaryColor(color)}
                                            style={{
                                                width: '44px',
                                                height: '44px',
                                                borderRadius: '1rem',
                                                backgroundColor: color,
                                                cursor: 'pointer',
                                                border: primaryColor === color ? '4px solid white' : 'none',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                boxShadow: primaryColor === color ? `0 0 0 2px ${color}` : 'none',
                                                transition: 'all 0.2s'
                                            }}
                                        >
                                            {primaryColor === color && <Check size={20} color="white" />}
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
    <main style={{ minHeight: '100vh', backgroundColor: '#f1f5f9', transition: 'margin-left 0.3s' }}>
        <Header title="Paramètres" />
        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div className="settings-layout">
                <div className="card settings-nav" style={{ padding: '1rem', height: 'fit-content', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ fontSize: '0.75rem', fontWeight: '900', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '1rem', paddingLeft: '0.75rem', letterSpacing: '0.1em' }}>Compte</h3>
                    <ul style={{ listStyle: 'none', marginBottom: '1.5rem' }}>
                        <NavItem id="profile" icon={User} label="Profil Utilisateur" />
                        <NavItem id="security" icon={Lock} label="Sécurité & Accès" />
                        <NavItem id="notifications" icon={Bell} label="Notifications" />
                    </ul>
                    <h3 style={{ fontSize: '0.75rem', fontWeight: '900', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '1rem', paddingLeft: '0.75rem', letterSpacing: '0.1em' }}>Application</h3>
                    <ul style={{ listStyle: 'none' }}>
                        <NavItem id="store" icon={Store} label="Ma Boutique" />
                        <NavItem id="language" icon={Globe} label="Langue & Région" />
                        <NavItem id="appearance" icon={Moon} label="Apparence" />
                    </ul>
                </div>
                <div style={{ transition: 'all 0.3s ease' }}>{renderContent()}</div>
            </div>
        </div>

        <style jsx>{`
        .settings-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 2rem;
        }
        @media (max-width: 1024px) {
          .settings-layout {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
    </main>
);
}
