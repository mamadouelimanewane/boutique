import Header from "@/components/Header";
import { Store, Search, Plus, Phone, Mail, Package, MoreHorizontal, ExternalLink } from 'lucide-react';

const suppliers = [
    { id: 1, name: 'SUNEOR Sénégal', contact: 'M. Faye', phone: '33 800 00 00', category: 'Huile & Savon', orders: 15 },
    { id: 2, name: 'Grands Moulins de Dakar', contact: 'Mme. Sow', phone: '33 839 00 00', category: 'Farine & Céréales', orders: 8 },
    { id: 3, name: 'CSS (Compagnie Sucrière)', contact: 'M. Ndiaye', phone: '33 967 00 00', category: 'Sucre', orders: 22 },
    { id: 4, name: 'SODEFITEX', contact: 'M. Cissé', phone: '33 981 00 00', category: 'Semences', orders: 4 },
];

export default function Fournisseurs() {
    return (
        <main style={{ marginLeft: 'var(--sidebar-width)', minHeight: '100vh', backgroundColor: 'var(--background)' }}>
            <Header title="Gestion Fournisseurs" />

            <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <div style={{ position: 'relative' }}>
                        <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
                        <input
                            type="text"
                            placeholder="Rechercher un fournisseur..."
                            style={{ padding: '0.6rem 1rem 0.6rem 2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--card-border)', width: '350px', outline: 'none' }}
                        />
                    </div>
                    <button className="btn btn-primary">
                        <Plus size={20} /> Nouveau Fournisseur
                    </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    {suppliers.map((supplier) => (
                        <div key={supplier.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div className="flex-center" style={{ width: '48px', height: '48px', backgroundColor: 'var(--primary)', borderRadius: 'var(--radius-md)', color: 'white' }}>
                                    <Store size={24} />
                                </div>
                                <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}>
                                    <MoreHorizontal size={20} />
                                </button>
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.25rem' }}>{supplier.name}</h3>
                                <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '600', textTransform: 'uppercase' }}>{supplier.category}</span>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: '#475569' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Phone size={14} style={{ opacity: 0.6 }} /> {supplier.phone}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Package size={14} style={{ opacity: 0.6 }} /> {supplier.orders} commandes passées
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Mail size={14} style={{ opacity: 0.6 }} /> contact@{supplier.name.toLowerCase().replace(/ /g, '')}.sn
                                </div>
                            </div>

                            <div style={{ marginTop: '0.5rem', paddingTop: '1rem', borderTop: '1px solid var(--card-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontWeight: '600', color: 'var(--primary)', fontSize: '0.875rem' }}>Contact : {supplier.contact}</span>
                                <button style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem', fontWeight: '600' }}>
                                    Détails <ExternalLink size={14} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
