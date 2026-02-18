"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { TrendingUp, ShoppingBag, CreditCard, AlertTriangle, ArrowUpRight, ArrowDownRight, Package, Users } from 'lucide-react';

const stats = [
  { label: 'Ventes du jour', value: '145 200 FCFA', trend: '+12.5%', isPositive: true, icon: TrendingUp, color: '#10b981', gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' },
  { label: 'Articles vendus', value: '42', trend: '+8.2%', isPositive: true, icon: ShoppingBag, color: '#3b82f6', gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' },
  { label: 'Crédits clients', value: '85 000 FCFA', trend: '-2.4%', isPositive: false, icon: CreditCard, color: '#f59e0b', gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' },
  { label: 'Ruptures stock', value: '3', trend: '+1', isPositive: false, icon: AlertTriangle, color: '#ef4444', gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' },
];

export default function Dashboard() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f1f5f9', transition: 'margin-left 0.3s' }}>
      <Header title="Tableau de bord" />

      <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>

        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '1.875rem', fontStyle: 'normal', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.025em' }}>
            Bienvenue, <span style={{ color: 'var(--primary)' }}>Mamadou</span> 👋
          </h1>
          <p style={{ color: '#64748b', fontWeight: '500', marginTop: '0.25rem' }}>Voici ce qui se passe dans votre boutique aujourd'hui.</p>
        </div>

        {/* Grille de Statistiques */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          {stats.map((stat) => (
            <div key={stat.label} className="card" style={{ padding: '1.5rem', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.04), 0 4px 6px -2px rgba(0,0,0,0.02)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div className="flex-center" style={{ width: '56px', height: '56px', borderRadius: '1rem', background: stat.gradient, color: 'white', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
                  <stat.icon size={28} />
                </div>
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  padding: '0.25rem 0.625rem',
                  borderRadius: '2rem',
                  backgroundColor: stat.isPositive ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                  color: stat.isPositive ? '#10b981' : '#ef4444',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2px'
                }}>
                  {stat.isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                  {stat.trend}
                </span>
              </div>
              <div>
                <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#64748b', marginBottom: '0.5rem' }}>{stat.label}</p>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.02em' }}>{stat.value}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="dashboard-grid">
          {/* Graphique de Ventes */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', minHeight: '400px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0f172a' }}>Performance des Ventes</h3>
                <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Vue hebdomadaire</p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', backgroundColor: '#f1f5f9', padding: '0.25rem', borderRadius: '0.75rem' }}>
                <button className="btn" style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem', borderRadius: '0.5rem' }}>Semaine</button>
                <button className="btn btn-primary" style={{ fontSize: '0.75rem', padding: '0.4rem 0.8rem', borderRadius: '0.5rem', boxShadow: 'none' }}>Mois</button>
              </div>
            </div>

            <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '1rem', height: '240px', paddingBottom: '2rem', borderBottom: '1px solid #f1f5f9' }}>
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{
                    width: '100%',
                    background: 'linear-gradient(to top, var(--primary) 0%, #34d399 100%)',
                    height: `${h}%`,
                    borderRadius: '0.5rem 0.5rem 0 0',
                    transition: 'height 1s ease-out'
                  }}></div>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#94a3b8' }}>
                    {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions Rapides */}
          <div className="card" style={{ height: 'fit-content' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0f172a', marginBottom: '1.5rem' }}>Actions Rapides</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Link href="/ventes" style={{ textDecoration: 'none' }}>
                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
                  <ShoppingBag size={20} /> Nouvelle Vente
                </button>
              </Link>
              <Link href="/stocks" style={{ textDecoration: 'none' }}>
                <button className="btn" style={{ width: '100%', justifyContent: 'center', border: '2px solid #e2e8f0', backgroundColor: 'white', color: '#0f172a', padding: '1rem' }}>
                  <Package size={20} /> Ajouter au Stock
                </button>
              </Link>
              <Link href="/clients" style={{ textDecoration: 'none' }}>
                <button className="btn" style={{ width: '100%', justifyContent: 'center', border: '2px solid #e2e8f0', backgroundColor: 'white', color: '#0f172a', padding: '1rem' }}>
                  <Users size={20} /> Encaisser Crédit
                </button>
              </Link>
            </div>

            <div style={{ marginTop: '2rem', padding: '1.5rem', borderRadius: '1rem', backgroundColor: 'rgba(245, 158, 11, 0.05)', border: '1px dashed #f59e0b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#f59e0b', marginBottom: '0.5rem' }}>
                <AlertTriangle size={20} />
                <span style={{ fontWeight: '700' }}>Alerte Stock</span>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#b45309', fontWeight: '500' }}>3 articles sont presque épuisés. Pensez à commander.</p>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        .dashboard-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 1.5rem;
        }
        @media (max-width: 1024px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
