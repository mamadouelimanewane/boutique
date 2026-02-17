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
                <div style={{ flex: 1, minHeight: '100vh', width: '100%' }}>
                    {children}
                </div>
            </div>
        </UIProvider>
    );
}
