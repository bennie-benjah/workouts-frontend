// src/components/Footer.js
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} FitTrack | Built with ❤️ using MERN Stack</p>
        <div className="footer-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:your@email.com">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
