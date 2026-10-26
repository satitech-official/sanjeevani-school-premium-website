import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="wrap section empty-content">
      <p className="eyebrow">404</p>
      <h1>Let’s get you back to school.</h1>
      <p>This page could not be found. यह पृष्ठ उपलब्ध नहीं है।</p>
      <div className="actions"><Link className="button" href="/">Back to home / होम पर जाएँ</Link></div>
    </main>
  );
}
