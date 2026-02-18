import Header from "@/components/Header";
import { FileText, TrendingUp, DollarSign, Calendar, Download, Filter, BarChart3, PieChart } from 'lucide-react';

export default function Rapports() {
    return (
        <main style={{ minHeight: '100vh', backgroundColor: '#f1f5f9', transition: 'margin-left 0.3s' }}>
            <Header title="Rapports & Statistiques" />

            <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button className="btn" style={{ backgroundColor: 'white', border: 'none', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', gap: '0.5rem', fontWeight: '700', color: '#1e293b' }}>
                            <Calendar size={18} style={{ color: 'var(--primary)' }} /> Ce Mois-ci
                        </button>
                        <button className="btn" style={{ backgroundColor: 'white', border: 'none', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', gap: '0.5rem', fontWeight: '700', color: '#1e293b' }}>
                            <Filter size={18} style={{ color: '#3b82f6' }} /> Catégories
                        </button>
                    </div>
                    <button className="btn btn-primary" style={{ gap: '0.75rem', boxShadow: '0 4px 6px -1px rgba(16, 185, 129, 0.4)' }}>
                        <Download size={20} /> Exporter PDF
                    </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                    <div className="card" style={{ border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{ width: '8px', height: '24px', backgroundColor: 'var(--primary)', borderRadius: '4px' }}></div>
                                Évolution Chiffre d'Affaires
                            </h3>
                            <BarChart3 size={24} style={{ color: '#94a3b8' }} />
                        </div>
                        <div style={{ height: '280px', backgroundColor: '#f8fafc', borderRadius: '1.25rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', padding: '1.5rem', border: '1px solid #f1f5f9' }}>
                            {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                                <div key={i} style={{
                                    width: '35px',
                                    height: `${h}%`,
                                    background: 'linear-gradient(to top, var(--primary), #34d399)',
                                    borderRadius: '6px 6px 4px 4px',
                                    boxShadow: '0 4px 6px -1px rgba(16, 185, 129, 0.2)'
                                }}></div>
                            ))}
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1.5rem', fontSize: '0.875rem', color: '#64748b', fontWeight: '700' }}>
                            <span>Lun</span><span>Mar</span><span>Mer</span><span>Jeu</span><span>Ven</span><span>Sam</span><span>Dim</span>
                        </div>
                    </div>

                    <div className="card" style={{ border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{ width: '8px', height: '24px', backgroundColor: '#3b82f6', borderRadius: '4px' }}></div>
                                Ventes par Catégorie
                            </h3>
                            <PieChart size={24} style={{ color: '#94a3b8' }} />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3rem', padding: '1rem' }}>
                            <div style={{ position: 'relative', width: '200px', height: '200px', borderRadius: '50%', border: '40px solid var(--primary)', borderRightColor: '#3b82f6', borderBottomColor: '#f59e0b', borderTopColor: '#ef4444', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' }}>
                                <div style={{ position: 'absolute', inset: -40, borderRadius: '50%', border: '40px solid rgba(255,255,255,0.1)' }}></div>
                            </div>
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    { label: 'Alimentation', val: '45%', color: 'var(--primary)' },
                                    { label: 'Boissons', val: '25%', color: '#3b82f6' },
                                    { label: 'Entretien', val: '20%', color: '#f59e0b' },
                                    { label: 'Autres', val: '10%', color: '#ef4444' }
                                ].map((cat) => (
                                    <div key={cat.label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                                        <div style={{ width: '14px', height: '14px', borderRadius: '4px', backgroundColor: cat.color }}></div>
                                        <span style={{ flex: 1, fontWeight: '600', color: '#475569' }}>{cat.label}</span>
                                        <span style={{ fontWeight: '800', color: '#0f172a' }}>{cat.val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card" style={{ border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)', padding: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                        <div style={{ width: '8px', height: '24px', backgroundColor: '#f1f5f9', borderRadius: '4px' }}></div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0f172a' }}>Indicateurs Clés de Performance (KPI)</h3>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                        {[
                            { label: 'Panier Moyen', val: '3 850 FCFA', trend: '+12%', up: true },
                            { label: 'Taux de Marge', val: '28.5%', trend: 'Stable', up: true },
                            { label: 'Rotation Stock', val: '1.8 fois', trend: '-5%', up: false },
                            { label: 'Clients Actifs', val: '892', trend: '+24', up: true }
                        ].map((kpi) => (
                            <div key={kpi.label} style={{ padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '1.25rem', border: '1px solid #f1f5f9' }}>
                                <p style={{ color: '#64748b', fontSize: '0.875rem', fontWeight: '700', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{kpi.label}</p>
                                <h4 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#0f172a', marginBottom: '0.5rem' }}>{kpi.val}</h4>
                                <span style={{
                                    fontSize: '0.75rem',
                                    fontWeight: '800',
                                    color: kpi.up ? '#10b981' : '#ef4444',
                                    backgroundColor: kpi.up ? '#ecfdf5' : '#fef2f2',
                                    padding: '0.25rem 0.6rem',
                                    borderRadius: '2rem'
                                }}>
                                    {kpi.trend} {kpi.label === 'Clients Actifs' ? '' : 'vs mois dernier'}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
