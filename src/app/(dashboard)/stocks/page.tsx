"use client";

import Header from "@/components/Header";
import { Package, Search, Plus, MoreHorizontal, Filter, AlertCircle, TrendingUp, DollarSign, Box, PlusCircle, MinusCircle, X, Check } from 'lucide-react';
import { useState, useMemo } from 'react';

const initialInventory = [
    { id: 1, name: 'Riz Brisé 50kg', sku: 'AL-RIZ-001', stock: 15, minStock: 20, price: 23500, category: 'Alimentation' },
    { id: 2, name: 'Huile Dinor 5L', sku: 'AL-HUI-002', stock: 24, minStock: 10, price: 5500, category: 'Alimentation' },
    { id: 3, name: 'Sucre Béghin Say 1kg', sku: 'AL-SUC-003', stock: 42, minStock: 15, price: 850, category: 'Alimentation' },
    { id: 4, name: 'Savon BF 250g', sku: 'EN-SAV-004', stock: 120, minStock: 50, price: 350, category: 'Entretien' },
    { id: 5, name: 'Lait en Poudre 1kg', sku: 'AL-LAI-005', stock: 8, minStock: 12, price: 4200, category: 'Alimentation' },
];

export default function Stocks() {
    const [inventory, setInventory] = useState(initialInventory);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [editingItem, setEditingItem] = useState<any>(null);

    // Stats
    const totalItems = inventory.length;
    const lowStockItems = inventory.filter(item => item.stock <= item.minStock).length;
    const totalValue = inventory.reduce((acc, item) => acc + (item.price * item.stock), 0);

    const filteredInventory = useMemo(() => {
        return inventory.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.sku.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, inventory]);

    const updateStock = (id: number, delta: number) => {
        setInventory(prev => prev.map(item =>
            item.id === id ? { ...item, stock: Math.max(0, item.stock + delta) } : item
        ));
    };

    const handleSaveItem = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newItem = {
            id: editingItem ? editingItem.id : Date.now(),
            name: formData.get('name') as string,
            sku: formData.get('sku') as string,
            category: formData.get('category') as string,
            stock: parseInt(formData.get('stock') as string),
            minStock: parseInt(formData.get('minStock') as string),
            price: parseInt(formData.get('price') as string),
        };

        if (editingItem) {
            setInventory(prev => prev.map(i => i.id === editingItem.id ? newItem : i));
        } else {
            setInventory(prev => [...prev, newItem]);
        }
        setShowModal(false);
        setEditingItem(null);
    };

    return (
        <main style={{ minHeight: '100vh', backgroundColor: '#f1f5f9', transition: 'margin-left 0.3s' }}>
            <Header title="Gestion des Stocks" />

            <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>

                {/* Résumé de l'inventaire */}
                <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                    <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                        <div className="flex-center" style={{ width: '56px', height: '56px', backgroundColor: '#e0f2fe', color: '#0ea5e9', borderRadius: '1rem' }}>
                            <Box size={28} />
                        </div>
                        <div>
                            <p style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: '700' }}>Articles Totaux</p>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#0f172a' }}>{totalItems}</h3>
                        </div>
                    </div>
                    <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                        <div className="flex-center" style={{ width: '56px', height: '56px', backgroundColor: '#fef2f2', color: '#ef4444', borderRadius: '1rem' }}>
                            <AlertCircle size={28} />
                        </div>
                        <div>
                            <p style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: '700' }}>Stock Faible</p>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#ef4444' }}>{lowStockItems}</h3>
                        </div>
                    </div>
                    <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                        <div className="flex-center" style={{ width: '56px', height: '56px', backgroundColor: '#ecfdf5', color: '#10b981', borderRadius: '1rem' }}>
                            <TrendingUp size={28} />
                        </div>
                        <div>
                            <p style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: '700' }}>Valeur Stock</p>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#0f172a' }}>{totalValue.toLocaleString()} <span style={{ fontSize: '0.875rem' }}>FCFA</span></h3>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1.5rem' }}>
                    <div style={{ position: 'relative', flex: 1, minWidth: '300px', maxWidth: '500px' }}>
                        <Search size={20} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                        <input
                            type="text"
                            placeholder="Rechercher par nom ou SKU..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '0.875rem 1rem 0.875rem 3.25rem',
                                borderRadius: '0.75rem',
                                border: '1px solid #e2e8f0',
                                outline: 'none',
                                fontSize: '0.95rem',
                                backgroundColor: 'white',
                                fontWeight: '500'
                            }}
                        />
                    </div>
                    <button className="btn btn-primary" onClick={() => { setEditingItem(null); setShowModal(true); }}>
                        <Plus size={20} /> Nouvel Article
                    </button>
                </div>

                <div className="card" style={{ padding: 0, overflowX: 'auto', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '1000px' }}>
                        <thead style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #f1f5f9' }}>
                            <tr>
                                <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', fontWeight: '800', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Article</th>
                                <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', fontWeight: '800', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em' }}>SKU</th>
                                <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', fontWeight: '800', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Catégorie</th>
                                <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', fontWeight: '800', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Stock actuel</th>
                                <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', fontWeight: '800', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Prix Unitaire</th>
                                <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', fontWeight: '800', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Ajuster</th>
                                <th style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', fontWeight: '800', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredInventory.map((item) => (
                                <tr key={item.id} style={{ borderBottom: '1px solid #f1f5f9', transition: 'background-color 0.2s' }} className="hover:bg-slate-50/50">
                                    <td style={{ padding: '1.25rem 1.5rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <div className="flex-center" style={{ width: '40px', height: '40px', backgroundColor: '#f1f5f9', borderRadius: '0.75rem', color: '#0f172a' }}>
                                                <Package size={20} />
                                            </div>
                                            <span style={{ fontWeight: '700', color: '#1e293b' }}>{item.name}</span>
                                        </div>
                                    </td>
                                    <td style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', color: '#64748b', fontWeight: '600' }}>{item.sku}</td>
                                    <td style={{ padding: '1.25rem 1.5rem' }}>
                                        <span style={{ padding: '0.35rem 0.75rem', borderRadius: '2rem', backgroundColor: '#f1f5f9', color: '#475569', fontSize: '0.75rem', fontWeight: '700 border: 1px solid #e2e8f0' }}>{item.category}</span>
                                    </td>
                                    <td style={{ padding: '1.25rem 1.5rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <span style={{ fontWeight: '900', fontSize: '1.125rem', color: item.stock <= item.minStock ? '#ef4444' : '#0f172a' }}>{item.stock}</span>
                                            {item.stock <= item.minStock && (
                                                <span style={{ backgroundColor: '#fef2f2', color: '#ef4444', padding: '0.125rem 0.375rem', borderRadius: '4px', fontSize: '0.65rem', fontWeight: '800' }}>BAS</span>
                                            )}
                                        </div>
                                    </td>
                                    <td style={{ padding: '1.25rem 1.5rem', fontWeight: '800', color: '#0f172a' }}>{item.price.toLocaleString()} FCFA</td>
                                    <td style={{ padding: '1.25rem 1.5rem' }}>
                                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                                            <button onClick={() => updateStock(item.id, -1)} className="flex-center" style={{ width: '32px', height: '32px', borderRadius: '0.5rem', border: '1px solid #e2e8f0', background: 'white', cursor: 'pointer', transition: 'all 0.2s' }}>
                                                <MinusCircle size={18} color="#ef4444" />
                                            </button>
                                            <button onClick={() => updateStock(item.id, 1)} className="flex-center" style={{ width: '32px', height: '32px', borderRadius: '0.5rem', border: '1px solid #e2e8f0', background: 'white', cursor: 'pointer', transition: 'all 0.2s' }}>
                                                <PlusCircle size={18} color="#10b981" />
                                            </button>
                                        </div>
                                    </td>
                                    <td style={{ padding: '1.25rem 1.5rem' }}>
                                        <button onClick={() => { setEditingItem(item); setShowModal(true); }} style={{ backgroundColor: '#f1f5f9', border: 'none', padding: '0.5rem 1rem', borderRadius: '0.5rem', cursor: 'pointer', color: '#0f172a', fontWeight: '700', fontSize: '0.875rem' }}>
                                            Détails
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal Ajout/Modification */}
            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="card modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '500px', width: '90%' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '800' }}>{editingItem ? 'Modifier Article' : 'Nouvel Article'}</h3>
                            <X size={24} style={{ cursor: 'pointer' }} onClick={() => setShowModal(false)} />
                        </div>

                        <form onSubmit={handleSaveItem} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                <label style={{ fontSize: '0.875rem', fontWeight: '600' }}>Nom de l'article</label>
                                <input name="name" defaultValue={editingItem?.name} required style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--card-border)', outline: 'none' }} />
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                    <label style={{ fontSize: '0.875rem', fontWeight: '600' }}>SKU (Code)</label>
                                    <input name="sku" defaultValue={editingItem?.sku} required style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--card-border)', outline: 'none' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                    <label style={{ fontSize: '0.875rem', fontWeight: '600' }}>Catégorie</label>
                                    <select name="category" defaultValue={editingItem?.category || 'Alimentation'} style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--card-border)', outline: 'none' }}>
                                        <option>Alimentation</option>
                                        <option>Entretien</option>
                                        <option>Boissons</option>
                                        <option>Divers</option>
                                    </select>
                                </div>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                    <label style={{ fontSize: '0.875rem', fontWeight: '600' }}>Stock Initial</label>
                                    <input name="stock" type="number" defaultValue={editingItem?.stock || 0} required style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--card-border)', outline: 'none' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                    <label style={{ fontSize: '0.875rem', fontWeight: '600' }}>Seuil Alerte</label>
                                    <input name="minStock" type="number" defaultValue={editingItem?.minStock || 5} required style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--card-border)', outline: 'none' }} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                <label style={{ fontSize: '0.875rem', fontWeight: '600' }}>Prix Unitaire (FCFA)</label>
                                <input name="price" type="number" defaultValue={editingItem?.price} required style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--card-border)', outline: 'none' }} />
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                <button type="button" onClick={() => setShowModal(false)} className="btn" style={{ flex: 1, backgroundColor: '#f1f5f9' }}>Annuler</button>
                                <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>{editingItem ? 'Mettre à jour' : 'Ajouter au Stock'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <style jsx>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 200;
          backdrop-filter: blur(8px);
        }
        @media (max-width: 1024px) {
          main { margin-left: 0 !important; }
        }
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: 1fr; }
        }
      `}</style>
        </main>
    );
}
