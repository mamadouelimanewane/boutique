import Header from "@/components/Header";
import { Users, Search, Plus, CreditCard, Phone, MapPin, MoreHorizontal, History } from 'lucide-react';

const clients = [
    { id: 1, name: 'Moussa Diop', phone: '77 123 45 67', credit: 45000, lastVisit: '15/02/2026', totalOrders: 12 },
    { id: 2, name: 'Aminata Sow', phone: '78 987 65 43', credit: 0, lastVisit: '16/02/2026', totalOrders: 24 },
    { id: 3, name: 'Ibrahima Fall', phone: '70 555 44 33', credit: 12500, lastVisit: '10/02/2026', totalOrders: 8 },
    { id: 4, name: 'Fatou Ndiaye', phone: '76 444 33 22', credit: 0, lastVisit: '17/02/2026', totalOrders: 45 },
];

export default function Clients() {
    return (
        <main style={{ minHeight: '100vh', backgroundColor: '#f1f5f9', transition: 'margin-left 0.3s' }}>
            <Header title="Clients & Crédits" />

            <div style={{ padding: '2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                    <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                        <div className="flex-center" style={{ width: '56px', height: '56px', borderRadius: '1rem', backgroundColor: '#ecfdf5', color: 'var(--primary)' }}>
                            <Users size={28} />
                        </div>
                        <div>
                            <p style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: '700' }}>Total Clients</p>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#0f172a' }}>156</h3>
                        </div>
                    </div>
                    <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                        <div className="flex-center" style={{ width: '56px', height: '56px', borderRadius: '1rem', backgroundColor: '#fff7ed', color: '#f59e0b' }}>
                            <CreditCard size={28} />
                        </div>
                        <div>
                            <p style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: '700' }}>Crédits Totaux</p>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#ef4444' }}>312 000 FCFA</h3>
                        </div>
                    </div>
                    <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                        <div className="flex-center" style={{ width: '56px', height: '56px', borderRadius: '1rem', backgroundColor: '#eff6ff', color: '#3b82f6' }}>
                            <History size={28} />
                        </div>
                        <div>
                            <p style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: '700' }}>Ventes à Crédit (Mois)</p>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#0f172a' }}>45</h3>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div style={{ position: 'relative', flex: 1, maxWidth: '400px' }}>
                        <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                        <input
                            type="text"
                            placeholder="Rechercher un client..."
                            style={{ padding: '0.875rem 1rem 0.875rem 3.25rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', width: '100%', outline: 'none', backgroundColor: 'white', fontWeight: '500' }}
                        />
                    </div>
                    <button className="btn btn-primary">
                        <Plus size={20} /> Nouveau Client
                    </button>
                </div>

                <div className="card" style={{ padding: 0, overflowX: 'auto', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '1000px' }}>
                        <thead style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #f1f5f9' }}>
                            <tr>
                                <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', fontWeight: '800', color: '#475569', textTransform: 'uppercase' }}>Client</th>
                                <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', fontWeight: '800', color: '#475569', textTransform: 'uppercase' }}>Téléphone</th>
                                <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', fontWeight: '800', color: '#475569', textTransform: 'uppercase' }}>Commandes</th>
                                <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', fontWeight: '800', color: '#475569', textTransform: 'uppercase' }}>Crédit Actuel</th>
                                <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', fontWeight: '800', color: '#475569', textTransform: 'uppercase' }}>Dernière Visite</th>
                                <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', fontWeight: '800', color: '#475569', textTransform: 'uppercase' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map((client) => (
                                <tr key={client.id} style={{ borderBottom: '1px solid #f1f5f9' }} className="hover:bg-slate-50/50 transition-colors">
                                    <td style={{ padding: '1.25rem 1.5rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <div className="flex-center" style={{ width: '44px', height: '44px', backgroundColor: '#f1f5f9', borderRadius: '50%', fontWeight: '800', color: '#0f172a', border: '2px solid white', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                                                {client.name.charAt(0)}
                                            </div>
                                            <span style={{ fontWeight: '700', color: '#1e293b' }}>{client.name}</span>
                                        </div>
                                    </td>
                                    <td style={{ padding: '1.25rem 1.5rem', color: '#64748b', fontWeight: '600' }}>{client.phone}</td>
                                    <td style={{ padding: '1.25rem 1.5rem', fontWeight: '600', color: '#475569' }}>{client.totalOrders} achats</td>
                                    <td style={{ padding: '1.25rem 1.5rem' }}>
                                        <span style={{
                                            padding: '0.4rem 0.8rem',
                                            borderRadius: '2rem',
                                            fontSize: '0.875rem',
                                            fontWeight: '800',
                                            backgroundColor: client.credit > 0 ? '#fef2f2' : '#ecfdf5',
                                            color: client.credit > 0 ? '#ef4444' : '#10b981'
                                        }}>
                                            {client.credit > 0 ? `${client.credit.toLocaleString()} FCFA` : 'Sain'}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1.25rem 1.5rem', color: '#64748b', fontWeight: '500' }}>{client.lastVisit}</td>
                                    <td style={{ padding: '1.25rem 1.5rem' }}>
                                        <button className="flex-center" style={{ width: '36px', height: '36px', borderRadius: '0.5rem', backgroundColor: '#f1f5f9', border: 'none', cursor: 'pointer', color: '#64748b' }}>
                                            <MoreHorizontal size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}
