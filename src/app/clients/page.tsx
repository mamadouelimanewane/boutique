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
        <main style={{ marginLeft: 'var(--sidebar-width)', minHeight: '100vh', backgroundColor: 'var(--background)' }}>
            <Header title="Clients & Crédits" />

            <div style={{ padding: '2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
                    <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                        <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--primary)' }}>
                            <Users size={24} />
                        </div>
                        <div>
                            <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Total Clients</p>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '800' }}>156</h3>
                        </div>
                    </div>
                    <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                        <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(245, 158, 11, 0.1)', color: 'var(--accent)' }}>
                            <CreditCard size={24} />
                        </div>
                        <div>
                            <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Crédits Totaux</p>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '800' }}>312 000 FCFA</h3>
                        </div>
                    </div>
                    <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                        <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
                            <History size={24} />
                        </div>
                        <div>
                            <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Ventes à Crédit (Mois)</p>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '800' }}>45</h3>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <div style={{ position: 'relative' }}>
                        <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
                        <input
                            type="text"
                            placeholder="Rechercher un client..."
                            style={{ padding: '0.6rem 1rem 0.6rem 2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--card-border)', width: '350px', outline: 'none' }}
                        />
                    </div>
                    <button className="btn btn-primary">
                        <Plus size={20} /> Nouveau Client
                    </button>
                </div>

                <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid var(--card-border)' }}>
                            <tr>
                                <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', fontWeight: '600', color: '#64748b' }}>Client</th>
                                <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', fontWeight: '600', color: '#64748b' }}>Téléphone</th>
                                <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', fontWeight: '600', color: '#64748b' }}>Commandes</th>
                                <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', fontWeight: '600', color: '#64748b' }}>Crédit Actuel</th>
                                <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', fontWeight: '600', color: '#64748b' }}>Dernière Visite</th>
                                <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', fontWeight: '600', color: '#64748b' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map((client) => (
                                <tr key={client.id} style={{ borderBottom: '1px solid var(--card-border)', transition: 'background-color 0.2s' }}>
                                    <td style={{ padding: '1.25rem 1.5rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                            <div className="flex-center" style={{ width: '40px', height: '40px', backgroundColor: '#e2e8f0', borderRadius: '50%', fontWeight: '700', color: '#475569' }}>
                                                {client.name.charAt(0)}
                                            </div>
                                            <span style={{ fontWeight: '600' }}>{client.name}</span>
                                        </div>
                                    </td>
                                    <td style={{ padding: '1.25rem 1.5rem', color: '#64748b' }}>{client.phone}</td>
                                    <td style={{ padding: '1.25rem 1.5rem' }}>{client.totalOrders} achats</td>
                                    <td style={{ padding: '1.25rem 1.5rem' }}>
                                        <span style={{ fontWeight: '700', color: client.credit > 0 ? 'var(--danger)' : 'var(--primary)' }}>
                                            {client.credit > 0 ? `${client.credit.toLocaleString()} FCFA` : 'Aucun crédit'}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1.25rem 1.5rem', color: '#64748b' }}>{client.lastVisit}</td>
                                    <td style={{ padding: '1.25rem 1.5rem' }}>
                                        <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}>
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
