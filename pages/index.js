import Layout from '../components/layout'
import Heading from '../components/heading'
import Link from 'next/link'
// Landing Page
export default function Home() {
  return (
    <Layout>
      <Heading
        titleText="Welcome to Pathshala"
        desc="A better way to take classes, remotely"
      />

      <div className="grid">
        <Link href="/host">
          <a className="card">
            <h1 align="center">Host</h1>
          </a>
        </Link>

        <Link href="/join">
          <a className="card">
            <h1 align="center">Join</h1>
          </a>
        </Link>
      </div>
      <style jsx>{`
        .grid {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          flex-wrap: nowrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          padding-left: 3rem;
          padding-right: 3rem;
          text-align: center;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
      `}</style>
    </Layout>
  )
}
