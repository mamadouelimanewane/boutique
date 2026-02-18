import Sidebar from "@/components/Sidebar";
import { UIProvider } from "@/context/UIContext";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <UIProvider>
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <div className="dashboard-content" style={{
                    flex: 1,
                    minHeight: '100vh',
                    width: '100%',
                    paddingLeft: 'var(--sidebar-width)',
                    transition: 'padding-left 0.3s ease'
                }}>
                    {children}
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 1024px) {
                    .dashboard-content {
                        padding-left: 0 !important;
                    }
                }
            `}</style>
        </UIProvider>
    );
}
