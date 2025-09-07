import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light pt-4 pb-3">
      <div className="container">
        <div className="row">

          {/* Company Info */}
          <div className="col-md-4 mb-3">
            <h5 className="footer-brand">AI Physio</h5>
            <p className="footer-desc">
              Your personalized AI-powered physiotherapy recommender app.
              Get tailored exercises and improve your recovery.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-3">
            <h5 className="footer-title">Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://www.instagram.com/narendran_06/" target="_blank" rel="noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/narendran-saravanan-32169b23b/" target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com/SNarendranS" target="_blank" rel="noreferrer">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom text-center mt-3">
          <p>© {new Date().getFullYear()} AI Physiotherapy Recommender | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
