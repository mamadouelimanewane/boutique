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
        <main style={{ minHeight: '100vh', backgroundColor: '#f1f5f9', transition: 'margin-left 0.3s' }}>
            <Header title="Gestion Fournisseurs" />

            <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div style={{ position: 'relative', flex: 1, maxWidth: '450px' }}>
                        <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                        <input
                            type="text"
                            placeholder="Rechercher un fournisseur..."
                            style={{ padding: '0.875rem 1rem 0.875rem 3.25rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', width: '100%', outline: 'none', backgroundColor: 'white', fontWeight: '500' }}
                        />
                    </div>
                    <button className="btn btn-primary">
                        <Plus size={20} /> Nouveau Fournisseur
                    </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
                    {suppliers.map((supplier) => (
                        <div key={supplier.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', transition: 'transform 0.2s' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div className="flex-center" style={{ width: '56px', height: '56px', backgroundColor: '#ecfdf5', borderRadius: '1rem', color: 'var(--primary)', boxShadow: '0 4px 6px -1px rgba(16, 185, 129, 0.1)' }}>
                                    <Store size={28} />
                                </div>
                                <button className="flex-center" style={{ width: '36px', height: '36px', background: '#f1f5f9', border: 'none', borderRadius: '0.5rem', cursor: 'pointer', color: '#64748b' }}>
                                    <MoreHorizontal size={20} />
                                </button>
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.375rem', fontWeight: '800', color: '#0f172a', marginBottom: '0.25rem' }}>{supplier.name}</h3>
                                <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', borderRadius: '2rem', backgroundColor: '#f1f5f9', fontSize: '0.75rem', color: '#475569', fontWeight: '700' }}>
                                    {supplier.category}
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem', color: '#1e293b' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div className="flex-center" style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#f8fafc' }}>
                                        <Phone size={14} style={{ color: '#3b82f6' }} />
                                    </div>
                                    <span style={{ fontWeight: '600' }}>{supplier.phone}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div className="flex-center" style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#f8fafc' }}>
                                        <Package size={14} style={{ color: 'var(--primary)' }} />
                                    </div>
                                    <span style={{ fontWeight: '600' }}>{supplier.orders} commandes passées</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div className="flex-center" style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#f8fafc' }}>
                                        <Mail size={14} style={{ color: '#f59e0b' }} />
                                    </div>
                                    <span style={{ fontWeight: '500', color: '#64748b' }}>contact@{supplier.name.toLowerCase().replace(/ /g, '')}.sn</span>
                                </div>
                            </div>

                            <div style={{ marginTop: '0.5rem', paddingTop: '1.25rem', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: '600' }}>REPONSABLE</span>
                                    <span style={{ fontWeight: '800', color: '#0f172a', fontSize: '0.95rem' }}>{supplier.contact}</span>
                                </div>
                                <button style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', backgroundColor: 'white', border: '1px solid #e2e8f0', color: 'var(--primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: '700', transition: 'all 0.2s' }}>
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
