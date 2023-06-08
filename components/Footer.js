import Link from 'next/link';
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsGoogle,
  BsInstagram,
} from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-4 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="#">Web design</a>
                  </li>
                  <li>
                    <a href="#">Development</a>
                  </li>
                  <li>
                    <a href="#">Hosting</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 item text">
                <h3>NEXT JS DEMO</h3>
                <p>NEXT JS DEMO WITH BASIC FUNCTIONALITIES</p>
              </div>
              <div className="col-12 mt-4 item social">
                <a href="#">
                  <BsGoogle />
                </a>
                <a href="#">
                  <BsFacebook />
                  {/* <i className="fa fa-twitter"></i> */}
                </a>
                <a href="#">
                  <BsTwitter />
                </a>
                <a href="#">
                  <BsInstagram />
                </a>
                <a href="#">
                  <BsYoutube />
                </a>
              </div>
            </div>
            <p className="copyright mt-5  text-center">
              NEXT JS DEMO &copy; 2023
            </p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        .footer-dark {
          padding: 50px 0;
          color: #f0f9ff;
          background-color: #282d32;
        }

        .footer-dark h3 {
          margin-top: 0;
          margin-bottom: 12px;
          font-weight: bold;
          font-size: 16px;
        }

        .footer-dark ul {
          padding: 0;
          list-style: none;
          line-height: 1.6;
          font-size: 14px;
          margin-bottom: 0;
        }

        .footer-dark ul a {
          color: inherit;
          text-decoration: none;
          opacity: 0.6;
        }

        .footer-dark ul a:hover {
          opacity: 0.8;
        }

        @media (max-width: 767px) {
          .footer-dark .item:not(.social) {
            text-align: center;
            padding-bottom: 20px;
          }
        }

        .footer-dark .item.text {
          margin-bottom: 36px;
        }

        @media (max-width: 767px) {
          .footer-dark .item.text {
            margin-bottom: 0;
          }
        }

        .footer-dark .item.text p {
          opacity: 0.6;
          margin-bottom: 0;
        }

        .footer-dark .item.social {
          text-align: center;
        }

        @media (max-width: 991px) {
          .footer-dark .item.social {
            text-align: center;
            margin-top: 20px;
          }
        }

        .footer-dark .item.social > a {
          font-size: 20px;
          width: 36px;
          height: 36px;
          line-height: 36px;
          display: inline-block;
          text-align: center;
          border-radius: 50%;
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.4);
          margin: 0 8px;
          color: #fff;
          opacity: 0.75;
        }

        .footer-dark .item.social > a:hover {
          opacity: 0.9;
        }

        .footer-dark .copyright {
          text-align: center;
          padding-top: 24px;
          opacity: 0.3;
          font-size: 13px;
          margin-bottom: 0;
        }
      `}</style>
    </>
  );
};

export default Footer;
