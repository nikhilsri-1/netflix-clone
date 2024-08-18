// components/Header.js
import NetflixLogo from "@/app/component/header/netflixlogo"
import '@/app/component/header/header.css'
export default function Header() {
  return (
    <header className="netflix-header">
      <div className="container">
        <div className="header-content">
          <NetflixLogo />
          <nav className="nav-links">
            <a href="#">Home</a>
            <a href="#">TV Shows</a>
            <a href="#">Movies</a>
            <a href="#">New & Popular</a>
            <a href="#">My List</a>
          </nav>
          <div className="auth-buttons">
            <button className="login-btn">Sign In</button>
          </div>
        </div>
      </div>
    </header>
  );
}
