import { logout } from "@/utils/actions";

export default function RootLayout({ children }) {
    return (
        <>
            <form style={{ margin: '2rem' }} action={ logout }>
                <button style={{ padding: '1rem' }}>logout</button>
            </form>
            { children }
        </>
    );
}