import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hmarai Kahani</title>
        <meta name="description" content="Hamari Kahani - Our Story Website" />
      </Head>
      <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1 style={{ textAlign: 'center', color: '#ff3366' }}>💖 Hmarai Kahani 💖</h1>
        <p style={{ textAlign: 'center', fontSize: '18px' }}>
          Ye hamari kahani hai, jo humesha humare dil me rahegi.
        </p>

        <section style={{ marginTop: '40px' }}>
          <h2 style={{ color: '#ff6699' }}>📖 Shuruaat</h2>
          <p>
            Sab kuch ek choti si mulaqat se shuru hua. Us din se hamari kahani ek nayi disha me chali gayi...
          </p>
        </section>

        <section style={{ marginTop: '40px' }}>
          <h2 style={{ color: '#ff6699' }}>💌 Yaadein</h2>
          <ul>
            <li>Pehli mulaqat</li>
            <li>Pehla gift</li>
            <li>Pehli muskaan</li>
          </ul>
        </section>

        <section style={{ marginTop: '40px' }}>
          <h2 style={{ color: '#ff6699' }}>🌹 Aage ka Safar</h2>
          <p>
            Hum dono ka safar abhi shuru hua hai, aur hum ise hamesha yaadgar banayenge.
          </p>
        </section>
      </main>
    </div>
  );
            }
