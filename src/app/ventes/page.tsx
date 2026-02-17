"use client";

import Header from "@/components/Header";
import { ShoppingBag, Search, Plus, Trash2, Save, CheckCircle2, QrCode, Smartphone, X, Calculator, Delete, User, UserPlus, Users } from 'lucide-react';
import { useState, useMemo } from 'react';

const products = [
    { id: 1, name: 'Riz Brisé 50kg', price: 23500, stock: 15, category: 'Alimentation' },
    { id: 2, name: 'Huile Dinor 5L', price: 5500, stock: 24, category: 'Alimentation' },
    { id: 3, name: 'Sucre Béghin Say 1kg', price: 850, stock: 42, category: 'Alimentation' },
    { id: 4, name: 'Savon BF 250g', price: 350, stock: 120, category: 'Entretien' },
    { id: 5, name: 'Lait en Poudre 1kg', price: 4200, stock: 18, category: 'Alimentation' },
    { id: 6, name: 'Thé Achoura 25g', price: 250, stock: 50, category: 'Boissons' },
];

const initialClients = [
    { id: 'walk-in', name: 'Client Divers', phone: '-' },
    { id: 'c1', name: 'Fatou Diop', phone: '77 450 12 34' },
    { id: 'c2', name: 'Moussa Ndiaye', phone: '76 123 45 67' },
];

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export default function Ventes() {
    const [searchTerm, setSearchTerm] = useState('');
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isSuccess, setIsSuccess] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState<'cash' | 'wave' | 'om' | null>(null);

    // Client state
    const [clients, setClients] = useState(initialClients);
    const [selectedClient, setSelectedClient] = useState(initialClients[0]);
    const [showClientModal, setShowClientModal] = useState(false);
    const [newClientName, setNewClientName] = useState('');
    const [newClientPhone, setNewClientPhone] = useState('');

    // Cash calculation state
    const [amountReceived, setAmountReceived] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const filteredProducts = useMemo(() => {
        return products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [searchTerm]);

    const addToCart = (product: typeof products[0]) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { id: product.id, name: product.name, price: product.price, quantity: 1 }];
        });
    };

    const removeFromCart = (id: number) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const total = useMemo(() => {
        return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }, [cart]);

    const changeToReturn = useMemo(() => {
        const received = parseInt(amountReceived) || 0;
        return Math.max(0, received - total);
    }, [amountReceived, total]);

    const handleValidateSale = () => {
        if (cart.length === 0) return;
        setIsSuccess(true);
        setShowPaymentModal(false);
        setTimeout(() => {
            setIsSuccess(false);
            setCart([]);
            setPaymentMethod(null);
            setAmountReceived('');
            setPhoneNumber('');
            setSelectedClient(initialClients[0]);
        }, 2000);
    };

    const openPayment = (method: 'cash' | 'wave' | 'om') => {
        if (cart.length === 0) return;
        setPaymentMethod(method);
        setShowPaymentModal(true);
    };

    const createClient = () => {
        if (!newClientName) return;
        const newClient = {
            id: Date.now().toString(),
            name: newClientName,
            phone: newClientPhone || '-'
        };
        setClients(prev => [...prev, newClient]);
        setSelectedClient(newClient);
        setShowClientModal(false);
        setNewClientName('');
        setNewClientPhone('');
    };

    return (
        <main style={{ marginLeft: 'var(--sidebar-width)', minHeight: '100vh', backgroundColor: 'var(--background)', transition: 'margin-left 0.3s' }}>
            <Header title="Vente au Comptoir" />

            <div style={{ padding: '1rem', maxWidth: '1400px', margin: '0 auto' }}>
                <div className="ventes-layout">

                    {/* Sélection de produits */}
                    <div className="card products-panel">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: '700' }}>Catalogue</h3>
                            <div style={{ position: 'relative', flex: 1, minWidth: '200px' }}>
                                <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
                                <input
                                    type="text"
                                    placeholder="Rechercher..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    style={{ padding: '0.6rem 1rem 0.6rem 2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--card-border)', width: '100%', outline: 'none' }}
                                />
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '1rem' }}>
                            {filteredProducts.map((product) => (
                                <div key={product.id} className="card product-card" style={{ padding: '1rem', cursor: 'pointer', transition: 'all 0.2s', border: '1px solid var(--card-border)' }} onClick={() => addToCart(product)}>
                                    <p style={{ fontSize: '0.7rem', color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{product.category}</p>
                                    <h4 style={{ fontWeight: '600', marginBottom: '0.5rem', fontSize: '0.85rem' }}>{product.name}</h4>
                                    <p style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--secondary)' }}>{product.price.toLocaleString()} FCFA</p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                                        <span style={{ fontSize: '0.65rem', color: product.stock < 20 ? 'var(--danger)' : '#64748b' }}>Stock: {product.stock}</span>
                                        <button className="flex-center" style={{ width: '28px', height: '28px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--primary)', color: 'white', border: 'none' }}>
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Panier et Encaissement */}
                    <div className="card cart-panel">
                        {/* Client Selection Section */}
                        <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#f8fafc', borderRadius: 'var(--radius-md)', border: '1px solid var(--card-border)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <User size={18} color="var(--primary)" />
                                    <span style={{ fontWeight: '700', fontSize: '0.9rem' }}>Client :</span>
                                </div>
                                <button
                                    onClick={() => setShowClientModal(true)}
                                    style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', fontWeight: '600' }}
                                >
                                    <UserPlus size={14} /> Nouveau
                                </button>
                            </div>
                            <select
                                value={selectedClient.id}
                                onChange={(e) => setSelectedClient(clients.find(c => c.id === e.target.value) || initialClients[0])}
                                style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--card-border)', outline: 'none', fontSize: '1rem', fontWeight: '600' }}
                            >
                                {clients.map(c => (
                                    <option key={c.id} value={c.id}>{c.name} {c.phone !== '-' ? `(${c.phone})` : ''}</option>
                                ))}
                            </select>
                        </div>

                        <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '1.5rem' }}>Articles ({cart.length})</h3>

                        <div style={{ flex: 1, marginBottom: '2rem', maxHeight: '400px', overflowY: 'auto' }}>
                            {cart.length === 0 ? (
                                <div style={{ textAlign: 'center', padding: '2rem', color: '#94a3b8' }}>
                                    <ShoppingBag size={48} style={{ margin: '0 auto 1rem', opacity: 0.2 }} />
                                    <p>Panier vide</p>
                                </div>
                            ) : (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {cart.map((item) => (
                                        <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid var(--card-border)' }}>
                                            <div style={{ flex: 1 }}>
                                                <p style={{ fontWeight: '600', fontSize: '0.9rem' }}>{item.name}</p>
                                                <p style={{ fontSize: '0.75rem', color: '#64748b' }}>{item.price.toLocaleString()} x {item.quantity}</p>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                <span style={{ fontWeight: '700', fontSize: '0.9rem' }}>{(item.price * item.quantity).toLocaleString()}</span>
                                                <Trash2 size={16} color="var(--danger)" style={{ cursor: 'pointer' }} onClick={(e) => { e.stopPropagation(); removeFromCart(item.id); }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div style={{ backgroundColor: '#f1f5f9', padding: '1.25rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--card-border)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', fontSize: '1.25rem' }}>
                                <span style={{ fontWeight: '700' }}>TOTAL</span>
                                <span style={{ fontWeight: '900', color: 'var(--primary)' }}>{total.toLocaleString()} FCFA</span>
                            </div>

                            <div className="payment-grid">
                                <button
                                    className="btn btn-primary payment-btn"
                                    disabled={cart.length === 0 || isSuccess}
                                    onClick={() => openPayment('cash')}
                                >
                                    <Calculator size={18} />
                                    Espèces
                                </button>

                                <button
                                    className="btn payment-btn wave-btn"
                                    disabled={cart.length === 0 || isSuccess}
                                    onClick={() => openPayment('wave')}
                                >
                                    Wave
                                </button>

                                <button
                                    className="btn payment-btn om-btn"
                                    disabled={cart.length === 0 || isSuccess}
                                    onClick={() => openPayment('om')}
                                >
                                    O. Money
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* New Client Modal */}
            {showClientModal && (
                <div className="modal-overlay" onClick={() => setShowClientModal(false)}>
                    <div className="card modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '400px', width: '90%' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '800' }}>Nouveau Client</h3>
                            <X size={24} style={{ cursor: 'pointer' }} onClick={() => setShowClientModal(false)} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                <label style={{ fontSize: '0.875rem', fontWeight: '600' }}>Nom Complet</label>
                                <input
                                    type="text"
                                    placeholder="Ex: Amadou Diop"
                                    value={newClientName}
                                    onChange={(e) => setNewClientName(e.target.value)}
                                    style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--card-border)', outline: 'none' }}
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                                <label style={{ fontSize: '0.875rem', fontWeight: '600' }}>Téléphone</label>
                                <input
                                    type="text"
                                    placeholder="77 XXX XX XX"
                                    value={newClientPhone}
                                    onChange={(e) => setNewClientPhone(e.target.value)}
                                    style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--card-border)', outline: 'none' }}
                                />
                            </div>
                            <button
                                className="btn btn-primary"
                                onClick={createClient}
                                style={{ width: '100%', marginTop: '1rem', padding: '0.75rem' }}
                            >
                                Créer et Sélectionner
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Unified Payment & Calculator Modal */}
            {showPaymentModal && (
                <div className="modal-overlay" onClick={() => setShowPaymentModal(false)}>
                    <div className="card modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '450px', width: '95%', maxHeight: '90vh', overflowY: 'auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '800' }}>
                                Reglement : {paymentMethod === 'cash' ? 'Espèces' : paymentMethod === 'wave' ? 'Wave' : 'Orange Money'}
                            </h3>
                            <X size={24} style={{ cursor: 'pointer' }} onClick={() => setShowPaymentModal(false)} />
                        </div>

                        <div style={{ backgroundColor: '#f1f5f9', padding: '1.5rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', marginBottom: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#64748b' }}>
                                <User size={16} />
                                <span style={{ fontWeight: '700' }}>{selectedClient.name}</span>
                            </div>
                            <p style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--secondary)' }}>{total.toLocaleString()} FCFA</p>
                        </div>

                        {paymentMethod === 'cash' ? (
                            <div className="calculator-interface">
                                <div style={{ marginBottom: '1rem' }}>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', marginBottom: '0.5rem', color: '#64748b' }}>MONTANT REÇU</label>
                                    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', border: '2px solid var(--primary)', borderRadius: 'var(--radius-md)', padding: '1rem' }}>
                                        <span style={{ fontSize: '1.5rem', fontWeight: '800', flex: 1 }}>{amountReceived || '0'}</span>
                                        <Delete size={20} style={{ cursor: 'pointer', color: 'var(--danger)' }} onClick={() => setAmountReceived('')} />
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', marginBottom: '1rem' }}>
                                    {[1000, 2000, 5000, 10000].map(bill => (
                                        <button key={bill} onClick={() => setAmountReceived(bill.toString())} style={{ padding: '0.5rem', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-md)', background: 'white', fontSize: '0.75rem', fontWeight: '700' }}>
                                            {bill}
                                        </button>
                                    ))}
                                </div>

                                <div className="numpad">
                                    {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '00', '000'].map(key => (
                                        <button key={key} onClick={() => setAmountReceived(prev => prev + key)} className="numpad-btn">{key}</button>
                                    ))}
                                </div>

                                <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#ecfdf5', borderRadius: 'var(--radius-md)', border: '1px solid #10b981', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontWeight: '700' }}>MONNAIE :</span>
                                    <span style={{ fontSize: '1.25rem', fontWeight: '900', color: 'var(--primary)' }}>{changeToReturn.toLocaleString()} FCFA</span>
                                </div>

                                <button className="btn btn-primary" disabled={isSuccess} onClick={handleValidateSale} style={{ width: '100%', marginTop: '1rem', height: '50px' }}>
                                    VALIDER ET IMPRIMER
                                </button>
                            </div>
                        ) : (
                            <div style={{ textAlign: 'center' }}>
                                <div className="flex-center" style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--card-border)', marginBottom: '1.5rem' }}>
                                    <QrCode size={180} color={paymentMethod === 'wave' ? '#1da1f2' : '#FF7900'} />
                                </div>
                                <button className="btn btn-primary" style={{ width: '100%', padding: '1rem', backgroundColor: paymentMethod === 'wave' ? '#1da1f2' : '#FF7900' }} onClick={handleValidateSale}>
                                    CONFIRMER PAIEMENT MOBILE
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {isSuccess && (
                <div style={{ position: 'fixed', inset: 0, zIndex: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(16, 185, 129, 0.95)', color: 'white' }}>
                    <div style={{ textAlign: 'center' }}>
                        <CheckCircle2 size={80} style={{ marginBottom: '1rem' }} />
                        <h2 style={{ fontSize: '2rem', fontWeight: '900' }}>VENTE TERMINÉE</h2>
                        <p>Ticket imprimé pour {selectedClient.name}</p>
                    </div>
                </div>
            )}

            <style jsx>{`
        .ventes-layout {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 1.5rem;
        }
        .payment-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
        }
        .payment-btn {
          flex: 1;
          padding: 1rem 0.5rem;
          font-size: 0.8rem;
          border: 1px solid var(--card-border);
          background: white;
          color: var(--secondary);
          flex-direction: column;
        }
        .wave-btn:hover { border-color: #1da1f2; color: #1da1f2; }
        .om-btn:hover { border-color: #FF7900; color: #FF7900; }
        .numpad {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0.5rem;
        }
        .numpad-btn {
            padding: 0.75rem;
            border: 1px solid var(--card-border);
            border-radius: var(--radius-md);
            background: #f8fafc;
            font-size: 1.125rem;
            font-weight: 700;
        }
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 200;
          backdrop-filter: blur(4px);
        }
        @media (max-width: 1024px) {
          main { margin-left: 0 !important; }
          .ventes-layout { grid-template-columns: 1fr; }
        }
      `}</style>
        </main>
    );
}
