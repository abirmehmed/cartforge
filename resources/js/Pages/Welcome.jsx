export default function Welcome() {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Arial, sans-serif',
            background: '#f5f5f5',
        }}>
            <div style={{
                padding: '40px',
                background: 'white',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                textAlign: 'center',
            }}>
                <h1>CartForge is working!</h1>
                <p>Laravel + Inertia + React + Vite</p>
            </div>
        </div>
    );
}
