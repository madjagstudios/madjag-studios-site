const faqs = [
  {
    question: 'What is Hyland Helper?',
    answer:
      'Hyland Helper is an iOS companion app for Schedule 1 that gives profile-aware advice, recipe help, property reference information, and progression planning.',
  },
  {
    question: 'Does it include a mixing calculator?',
    answer:
      'Yes. The mixing calculator helps you build recipes visually and optimize around profit, return on investment, or fast cash.',
  },
  {
    question: 'What does the Advisor know?',
    answer:
      'The Advisor uses your rank, cash, properties, and setup so answers are tuned to where you actually are in the game.',
  },
  {
    question: 'Is Hyland Helper official?',
    answer:
      'No. Hyland Helper is an unofficial fan app from MadJag Studios and is not affiliated with TVGS or the Schedule 1 developers.',
  },
];

export default function HHFAQ() {
  return (
    <section id="faq" style={{
      padding: '120px 2rem',
      borderTop: '1px solid #1e1e1e',
      background: '#0d0d0d',
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <span className="section-label">// quick answers</span>
        <h2 style={{
          fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
          fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f0f0f0',
          margin: '0.5rem 0 3rem', lineHeight: 0.95, letterSpacing: '0.01em',
        }}>
          Schedule 1 help,<br />
          <span style={{ color: '#D4A017' }}>without the wiki maze.</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1px',
          background: '#1e1e1e',
          border: '1px solid #1e1e1e',
        }}>
          {faqs.map((faq) => (
            <article key={faq.question} style={{ background: '#111', padding: '2rem' }}>
              <h3 style={{
                fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
                fontSize: '1.35rem', color: '#f0f0f0',
                margin: '0 0 0.75rem', letterSpacing: '0.02em',
              }}>{faq.question}</h3>
              <p style={{
                fontFamily: "'Inter', sans-serif", fontSize: '0.92rem',
                color: '#777', lineHeight: 1.75, margin: 0,
              }}>{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
