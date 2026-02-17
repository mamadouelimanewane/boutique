import Header from "@/components/Header";
import { FileText, TrendingUp, DollarSign, Calendar, Download, Filter, BarChart3, PieChart } from 'lucide-react';

export default function Rapports() {
    return (
        <main style={{ marginLeft: 'var(--sidebar-width)', minHeight: '100vh', backgroundColor: 'var(--background)' }}>
            <Header title="Rapports & Statistiques" />

            <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button className="btn" style={{ backgroundColor: 'white', border: '1px solid var(--card-border)', gap: '0.5rem' }}>
                            <Calendar size={18} /> Ce Mois-ci
                        </button>
                        <button className="btn" style={{ backgroundColor: 'white', border: '1px solid var(--card-border)', gap: '0.5rem' }}>
                            <Filter size={18} /> Filtrer par Catégorie
                        </button>
                    </div>
                    <button className="btn btn-primary" style={{ gap: '0.5rem' }}>
                        <Download size={18} /> Exporter en PDF
                    </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div className="card">
                        <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <BarChart3 size={20} color="var(--primary)" /> Évolution du Chiffre d'Affaires
                        </h3>
                        <div style={{ height: '250px', backgroundColor: '#f8fafc', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', paddingBottom: '1rem' }}>
                            {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                                <div key={i} style={{ width: '30px', height: `${h}%`, backgroundColor: 'var(--primary)', borderRadius: '4px 4px 0 0', opacity: 0.8 }}></div>
                            ))}
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '1rem', fontSize: '0.75rem', color: '#64748b', fontWeight: '600' }}>
                            <span>Lun</span><span>Mar</span><span>Mer</span><span>Jeu</span><span>Ven</span><span>Sam</span><span>Dim</span>
                        </div>
                    </div>

                    <div className="card">
                        <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <PieChart size={20} color="#3b82f6" /> Ventes par Catégorie
                        </h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                            <div style={{ width: '150px', height: '150px', borderRadius: '50%', border: '25px solid var(--primary)', borderRightColor: '#3b82f6', borderBottomColor: 'var(--accent)', borderTopColor: '#ef4444' }}></div>
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                                    <div style={{ width: '12px', height: '12px', borderRadius: '2px', backgroundColor: 'var(--primary)' }}></div>
                                    <span style={{ flex: 1 }}>Alimentation</span>
                                    <span style={{ fontWeight: '700' }}>45%</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                                    <div style={{ width: '12px', height: '12px', borderRadius: '2px', backgroundColor: '#3b82f6' }}></div>
                                    <span style={{ flex: 1 }}>Boissons</span>
                                    <span style={{ fontWeight: '700' }}>25%</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                                    <div style={{ width: '12px', height: '12px', borderRadius: '2px', backgroundColor: 'var(--accent)' }}></div>
                                    <span style={{ flex: 1 }}>Entretien</span>
                                    <span style={{ fontWeight: '700' }}>20%</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                                    <div style={{ width: '12px', height: '12px', borderRadius: '2px', backgroundColor: '#ef4444' }}></div>
                                    <span style={{ flex: 1 }}>Autres</span>
                                    <span style={{ fontWeight: '700' }}>10%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '1.5rem' }}>Indicateurs de Performance (KPI)</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Panier Moyen</p>
                            <h4 style={{ fontSize: '1.25rem', fontWeight: '800' }}>3 850 FCFA</h4>
                            <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '600' }}>+12% vs mois dernier</span>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Taux de Marge</p>
                            <h4 style={{ fontSize: '1.25rem', fontWeight: '800' }}>28.5%</h4>
                            <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '600' }}>Stable</span>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Rotation Stock</p>
                            <h4 style={{ fontSize: '1.25rem', fontWeight: '800' }}>1.8 fois</h4>
                            <span style={{ fontSize: '0.75rem', color: 'var(--danger)', fontWeight: '600' }}>-5% vs mois dernier</span>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '0.5rem' }}>Clients Actifs</p>
                            <h4 style={{ fontSize: '1.25rem', fontWeight: '800' }}>892</h4>
                            <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '600' }}>+24 nouveaux</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
