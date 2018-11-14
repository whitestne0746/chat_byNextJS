import Link from 'next/link'
import App from '../components/App'

export default () => (
  <div>
    <App />
    <div className="menu">
      <Link className="link" href="https://www.soundonlive.com/">
        <a>Sound On Live ホームページへ</a>
      </Link>
    </div>
    <style jsx>{`
      .menu {
        position: absolute;
        top: 100px;
        left: 30px;
      }
    `}</style>
  </div>
)
