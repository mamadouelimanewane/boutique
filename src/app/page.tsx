import Link from "next/link";
import { ArrowRight, CheckCircle, TrendingUp, Users, Package, ShieldCheck, BarChart3, Smartphone } from 'lucide-react';

export default function LandingPage() {
    return (
        <main className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="fixed top-0 w-full z-50 glass border-b border-white/10">
                <div className="container h-[var(--header-height)] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold text-xl shadow-lg">D</div>
                        <span className="font-bold text-xl tracking-tight text-slate-800 dark:text-white">DiaraBi</span>
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="#features" className="text-sm font-medium hover:text-emerald-600 transition-colors">Fonctionnalités</Link>
                        <Link href="#testimonials" className="text-sm font-medium hover:text-emerald-600 transition-colors">Témoignages</Link>
                        <Link href="#contact" className="text-sm font-medium hover:text-emerald-600 transition-colors">Contact</Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link href="/dashboard" className="hidden md:block text-sm font-semibold hover:text-emerald-600">Se connecter</Link>
                        <Link href="/dashboard">
                            <button className="btn btn-primary shadow-emerald-500/20">
                                Commencer <ArrowRight size={18} />
                            </button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero-section pt-32 pb-20 px-6">
                <div className="container grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider border border-emerald-200">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            Nouveau v2.0 Disponible
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1]">
                            Gérez votre boutique <br />
                            <span className="text-gradient">en toute sérénité</span>
                        </h1>

                        <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                            La solution tout-en-un pour les commerçants du Sénégal. Suivez vos ventes, gérez vos stocks et fidélisez vos clients depuis une interface simple et intuitive.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="/dashboard">
                                <button className="btn btn-primary text-lg px-8 py-4 w-full sm:w-auto">
                                    Essayer Gratuitement
                                </button>
                            </Link>
                            <button className="btn btn-outline text-lg px-8 py-4 w-full sm:w-auto">
                                Voir la Démo
                            </button>
                        </div>

                        <div className="pt-8 flex items-center gap-6 text-sm text-slate-500 font-medium">
                            <div className="flex items-center gap-2">
                                <CheckCircle size={16} className="text-emerald-500" /> Pas de carte requise
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle size={16} className="text-emerald-500" /> Installation instantanée
                            </div>
                        </div>
                    </div>

                    <div className="relative animate-in fade-in zoom-in duration-700 delay-200 hidden lg:block">
                        {/* Abstract Dashboard Showcase Elements */}
                        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-emerald-200/20 rounded-full blur-3xl -z-10"></div>
                        <div className="relative z-10 bg-white/50 backdrop-blur-xl border border-white/60 p-6 rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            {/* Mockup Header */}
                            <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                                </div>
                                <div className="text-xs font-mono text-slate-400">dashboard.diarabi.app</div>
                            </div>

                            {/* Mockup Content Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                    <div className="text-slate-400 text-xs font-semibold uppercase mb-2">Revenu Total</div>
                                    <div className="text-2xl font-bold text-slate-800">2,450,000 F</div>
                                    <div className="text-emerald-500 text-xs font-bold flex items-center mt-1">+12% <TrendingUp size={12} className="ml-1" /></div>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                    <div className="text-slate-400 text-xs font-semibold uppercase mb-2">Commandes</div>
                                    <div className="text-2xl font-bold text-slate-800">145</div>
                                    <div className="text-emerald-500 text-xs font-bold flex items-center mt-1">+5% <TrendingUp size={12} className="ml-1" /></div>
                                </div>
                            </div>

                            {/* Chart Placeholder */}
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 h-32 flex items-end justify-between px-2 gap-2">
                                {[40, 70, 45, 90, 60, 80, 55].map((h, i) => (
                                    <div key={i} style={{ height: `${h}%` }} className="w-full bg-emerald-500/20 rounded-t-md relative group hover:bg-emerald-500 transition-colors"></div>
                                ))}
                            </div>
                        </div>

                        {/* Floating Element */}
                        <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce duration-[3000ms]">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                <CheckCircle size={20} />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-slate-800">Commande #1204</div>
                                <div className="text-xs text-slate-500">Confirmée à l'instant</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="py-20 bg-white/50 border-y border-slate-200/50">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tout ce dont vous avez besoin</h2>
                        <p className="text-slate-600">Une suite complète d'outils puissants conçus pour simplifier la gestion quotidienne de votre commerce.</p>
                    </div>

                    <div className="grid grid-features gap-8">
                        <FeatureCard
                            icon={<BarChart3 size={32} />}
                            title="Analyses Détaillées"
                            desc="Suivez vos performances en temps réel avec des graphiques clairs et précis."
                            color="text-blue-500"
                            bg="bg-blue-50"
                        />
                        <FeatureCard
                            icon={<Package size={32} />}
                            title="Gestion de Stock"
                            desc="Ne soyez plus jamais en rupture. Alertes automatiques et suivi précis."
                            color="text-emerald-500"
                            bg="bg-emerald-50"
                        />
                        <FeatureCard
                            icon={<Users size={32} />}
                            title="Carnet Clients"
                            desc="Gardez une trace de vos clients et de leurs dettes en toute simplicité."
                            color="text-purple-500"
                            bg="bg-purple-50"
                        />
                        <FeatureCard
                            icon={<Smartphone size={32} />}
                            title="100% Mobile"
                            desc="Accédez à votre boutique depuis n'importe où, sur votre téléphone ou tablette."
                            color="text-amber-500"
                            bg="bg-amber-50"
                        />
                        <FeatureCard
                            icon={<ShieldCheck size={32} />}
                            title="Sécurité Maximale"
                            desc="Vos données sont cryptées et sauvegardées automatiquement chaque jour."
                            color="text-rose-500"
                            bg="bg-rose-50"
                        />
                        <FeatureCard
                            icon={<TrendingUp size={32} />}
                            title="Croissance"
                            desc="Des outils marketing pour fidéliser vos clients et augmenter votre chiffre."
                            color="text-indigo-500"
                            bg="bg-indigo-50"
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-900 -z-10"></div>
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                <div className="container text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Prêt à transformer votre commerce ?</h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">Rejoignez plus de 500 commerçants qui utilisent DiaraBi pour développer leur activité au quotidien.</p>

                    <Link href="/dashboard">
                        <button className="btn bg-emerald-500 hover:bg-emerald-400 text-white text-lg px-10 py-5 shadow-lg shadow-emerald-500/20 border-none">
                            Commencer Maintenant
                        </button>
                    </Link>
                    <p className="mt-6 text-sm text-slate-400">Aucun engagement requis. Essai gratuit de 14 jours.</p>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-white border-t border-slate-200">
                <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold">D</div>
                        <span className="font-bold text-lg text-slate-800">DiaraBi</span>
                    </div>

                    <div className="text-slate-500 text-sm">
                        &copy; 2026 DiaraBi Inc. Fait avec passion à Dakar.
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="text-slate-400 hover:text-emerald-600 transition-colors">Confidentialité</a>
                        <a href="#" className="text-slate-400 hover:text-emerald-600 transition-colors">Conditions</a>
                        <a href="#" className="text-slate-400 hover:text-emerald-600 transition-colors">Support</a>
                    </div>
                </div>
            </footer>
        </main>
    );
}

function FeatureCard({ icon, title, desc, color, bg }: any) {
    return (
        <div className="card group hover:bg-white transition-all duration-300 border border-transparent hover:border-slate-100">
            <div className={`w-14 h-14 rounded-2xl ${bg} ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
            <p className="text-slate-600 leading-relaxed">{desc}</p>
        </div>
    )
}
