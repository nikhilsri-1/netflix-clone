import Image from 'next/image';
import Link from 'next/link';
import "@/app/component/footer/footer.css"
const Footer = () => {
  return (
    <footer role="contentinfo" className="member-footer">
      {/* <div className="social-links">
        <a className="social-link" href="https://www.facebook.com/NetflixIN/" target="_blank" aria-label="facebook">
          <Image 
            src="/facebook-logo.svg" 
            alt="Facebook" 
            width={24} 
            height={24} 
          />
        </a>
        <a className="social-link" href="https://www.instagram.com/Netflix_IN/" target="_blank" aria-label="instagram">
          <Image 
            src="/instagram-logo.svg" 
            alt="Instagram" 
            width={24} 
            height={24} 
          />
        </a>
        <a className="social-link" href="https://twitter.com/netflixindia" target="_blank" aria-label="twitter">
          <Image 
            src="/twitter-logo.svg" 
            alt="Twitter" 
            width={24} 
            height={24} 
          />
        </a>
        <a className="social-link" href="https://www.youtube.com/channel/UCZSNzBgFub_WWil6TOTYwAg" target="_blank" aria-label="youtube">
          <Image 
            src="/youtube-logo.svg" 
            alt="YouTube" 
            width={24} 
            height={24} 
          />
        </a>
      </div> */}
      <ul className="member-footer-links">
        <li className="member-footer-link-wrapper">
          <Link legacyBehavior href="/browse/audio-description">
            <a className="member-footer-link">Audio Description</a>
          </Link>
        </li>
        <li className="member-footer-link-wrapper">
          <Link legacyBehavior href="https://help.netflix.com/">
            <a className="member-footer-link">Help Centre</a>
          </Link>
        </li>
        <li className="member-footer-link-wrapper">
          <Link legacyBehavior href="/redeem">
            <a className="member-footer-link">Gift Cards</a>
          </Link>
        </li>
        <li className="member-footer-link-wrapper">
          <Link legacyBehavior href="https://media.netflix.com/">
            <a className="member-footer-link">Media Centre</a>
          </Link>
        </li>
        <li className="member-footer-link-wrapper">
          <Link legacyBehavior href="http://ir.netflix.com/">
            <a className="member-footer-link">Investor Relations</a>
          </Link>
        </li>
        <li className="member-footer-link-wrapper">
          <Link legacyBehavior href="https://jobs.netflix.com/">
            <a className="member-footer-link">Jobs</a>
          </Link>
        </li>
        <li className="member-footer-link-wrapper">
          <Link legacyBehavior href="https://help.netflix.com/legal/termsofuse">
            <a className="member-footer-link">Terms of Use</a>
          </Link>
        </li>
        <li className="member-footer-link-wrapper">
          <Link legacyBehavior href="https://help.netflix.com/legal/privacy">
            <a className="member-footer-link">Privacy</a>
          </Link>
        </li>
        <li className="member-footer-link-wrapper">
          <Link legacyBehavior href="https://help.netflix.com/legal/notices">
            <a className="member-footer-link">Legal Notices</a>
          </Link>
        </li>
        <li className="member-footer-link-wrapper">
          <Link legacyBehavior href="/Cookies">
            <a className="member-footer-link">Cookie Preferences</a>
          </Link>
        </li>
        <li className="member-footer-link-wrapper">
          <Link legacyBehavior href="https://help.netflix.com/legal/corpinfo">
            <a className="member-footer-link">Corporate Information</a>
          </Link>
        </li>
        <li className="member-footer-link-wrapper">
          <Link legacyBehavior href="https://help.netflix.com/contactus">
            <a className="member-footer-link">Contact Us</a>
          </Link>
        </li>
      </ul>
      <div className="member-footer-service">
        <button className="service-code">Service Code</button>
      </div>
      <div className="member-footer-copyright">
        <span>© 1997-2024 Netflix, Inc.<br/>Handcrafted by Romilala</span>
      </div>
    </footer>
  );
};

export default Footer;
