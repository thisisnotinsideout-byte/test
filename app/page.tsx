export default function Home() {
  return (
    <main className="min-h-screen p-8">
    <input
      type="text"
      placeholder="Enter text..."
     style={{ width: '300px', padding: '8px 12px', fontSize: '16px', borderRadius: '4px', position: 'absolute', left: '50px', top: '125.2951600331134px' }}
    />
    <button style={{ backgroundColor: '#2b3950', color: '#ffffff', padding: '12px 24px', borderRadius: '8px', fontSize: '16px', fontWeight: '600', position: 'absolute', left: '143px', top: '36px' }}>
      Click me
    </button>
    </main>
  );
}