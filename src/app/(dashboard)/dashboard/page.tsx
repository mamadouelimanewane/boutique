"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { TrendingUp, ShoppingBag, CreditCard, AlertTriangle, ArrowUpRight, ArrowDownRight, Package, Users } from 'lucide-react';

const stats = [
  { label: 'Ventes du jour', value: '145 200 FCFA', trend: '+12.5%', isPositive: true, icon: TrendingUp, color: '#10b981' },
  { label: 'Articles vendus', value: '42', trend: '+8.2%', isPositive: true, icon: ShoppingBag, color: '#3b82f6' },
  { label: 'Crédits clients', value: '85 000 FCFA', trend: '-2.4%', isPositive: false, icon: CreditCard, color: '#f59e0b' },
  { label: 'Ruptures stock', value: '3', trend: '+1', isPositive: false, icon: AlertTriangle, color: '#ef4444' },
];

export default function Dashboard() {
  return (
    <main style={{ marginLeft: 'var(--sidebar-width)', minHeight: '100vh', backgroundColor: 'var(--background)', transition: 'margin-left 0.3s' }}>
      <Header title="Tableau de bord" />

      <div style={{ padding: '1rem', maxWidth: '1400px', margin: '0 auto' }}>

        {/* Grille de Statistiques */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
          {stats.map((stat) => (
            <div key={stat.label} className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem' }}>
              <div className="flex-center" style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', backgroundColor: `${stat.color}15`, color: stat.color }}>
                <stat.icon size={24} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '0.8rem', fontWeight: '600', color: '#64748b', marginBottom: '0.25rem' }}>{stat.label}</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '800' }}>{stat.value}</h3>
                  <span style={{ fontSize: '0.7rem', fontWeight: '700', color: stat.isPositive ? 'var(--success)' : 'var(--danger)', display: 'flex', alignItems: 'center' }}>
                    {stat.isPositive ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                    {stat.trend}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="dashboard-grid">
          {/* Graphique de Ventes (Simulé avec des barres CSS) */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700' }}>Performance</h3>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button className="btn" style={{ fontSize: '0.7rem', padding: '0.3rem 0.6rem', backgroundColor: '#f1f5f9', border: '1px solid var(--card-border)' }}>S</button>
                <button className="btn btn-primary" style={{ fontSize: '0.7rem', padding: '0.3rem 0.6rem' }}>M</button>
              </div>
            </div>

            <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '0.75rem', height: '200px', paddingBottom: '1.5rem', borderBottom: '1px solid var(--card-border)' }}>
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <div key={i} style={{ flex: 1, backgroundColor: 'var(--primary)', height: `${h}%`, borderRadius: '4px 4px 0 0', opacity: 0.8, position: 'relative' }}>
                  <div style={{ position: 'absolute', bottom: '-22px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.65rem', color: '#64748b' }}>
                    {['L', 'M', 'M', 'J', 'V', 'S', 'D'][i]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions Rapides */}
          <div className="card">
            <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '1.5rem' }}>Actions Rapides</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link href="/ventes" style={{ textDecoration: 'none' }}>
                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'flex-start' }}>
                  <ShoppingBag size={18} /> Nouvelle Vente
                </button>
              </Link>
              <Link href="/stocks" style={{ textDecoration: 'none' }}>
                <button className="btn" style={{ width: '100%', justifyContent: 'flex-start', border: '1px solid var(--card-border)', backgroundColor: 'transparent', color: 'inherit' }}>
                  <Package size={18} /> Ajouter au Stock
                </button>
              </Link>
              <Link href="/clients" style={{ textDecoration: 'none' }}>
                <button className="btn" style={{ width: '100%', justifyContent: 'flex-start', border: '1px solid var(--card-border)', backgroundColor: 'transparent', color: 'inherit' }}>
                  <Users size={18} /> Encaisser Crédit
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        .dashboard-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 1rem;
        }
        @media (max-width: 1024px) {
          main { margin-left: 0 !important; }
          .dashboard-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
