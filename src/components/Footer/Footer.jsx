import React from "react";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        bottom: "0",
        backgroundColor: "black",
        color: "#cbcbcb",
        fontFamily:
          "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif",
        fontSize: "16px",
        fontWeight: 400,

        borderTop: "3px solid rgba(35,35,35,1)",
      }}
    >
      <div
        className="footer-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: "3% 0",
          width: "85%",
          margin: "auto",
        }}
      >
        <div
          className="footer-left"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ul style={{ listStyle: "none", lineHeight: "2" }}>
            <li>
              <a
                href="https://help.netflix.com/ru/contactus"
                style={{
                  textDecoration: "none",
                  color: "#cbcbcb",
                  fontFamily:
                    "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif",
                  fontWeight: "500",
                }}
              >
                Herhangi bir sorunuz var mı? Bizimle iletişime geçin
              </a>
              .
            </li>
            <li>
              <a
                href="https://help.netflix.com/ru/node/412"
                style={{
                  textDecoration: "none",
                  color: "#cbcbcb",
                  fontFamily:
                    "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif",
                  fontWeight: "500",
                }}
              >
                Sık sorulan sorular
              </a>
            </li>
            <li>
              <a
                href="https://media.netflix.com/en/"
                style={{
                  textDecoration: "none",
                  color: "#cbcbcb",
                  fontFamily:
                    "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif",
                  fontWeight: "500",
                }}
              >
                Medya Merkezi
              </a>
            </li>
            <li>
              <a
                href="https://devices.netflix.com/en/"
                style={{
                  textDecoration: "none",
                  color: "#cbcbcb",
                  fontFamily:
                    "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif",
                  fontWeight: "500",
                }}
              >
                Görüntüleme yolları
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-middle">
          <ul style={{ listStyle: "none", lineHeight: "2" }}>
            <li>
              <a
                href="https://help.netflix.com/ru/"
                style={{
                  textDecoration: "none",
                  color: "#cbcbcb",
                  fontFamily:
                    "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif",
                  fontWeight: "500",
                }}
              >
                Destek merkezi
              </a>
            </li>
            <li>
              <a
                href="https://ir.netflix.net/ir-overview/profile/default.aspx"
                style={{
                  textDecoration: "none",
                  color: "#cbcbcb",
                  fontFamily:
                    "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif",
                  fontWeight: "500",
                }}
              >
                Yatırımcılar için
              </a>
            </li>
            <li>
              <a
                href="https://help.netflix.com/legal/termsofuse"
                style={{
                  textDecoration: "none",
                  color: "#cbcbcb",
                  fontFamily:
                    "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif",
                  fontWeight: "500",
                }}
              >
                Kullanım Kuralları
              </a>
            </li>
            <li>
              <a
                href="https://help.netflix.com/legal/privacy"
                style={{
                  textDecoration: "none",
                  color: "#cbcbcb",
                  fontFamily:
                    "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif",
                  fontWeight: "500",
                }}
              >
                Gizlilik
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <ul style={{ listStyle: "none", lineHeight: "2" }}>
            <li>
              <a
                href="https://www.facebook.com/"
                style={{
                  textDecoration: "none",
                  color: "#cbcbcb",
                  fontFamily:
                    "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif",
                  fontWeight: "500",
                }}
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/"
                style={{
                  textDecoration: "none",
                  color: "#cbcbcb",
                  fontFamily:
                    "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif",
                  fontWeight: "500",
                }}
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                style={{
                  textDecoration: "none",
                  color: "#cbcbcb",
                  fontFamily:
                    "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif",
                  fontWeight: "500",
                }}
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <span
          style={{
            textAlign: "center",
            width: "90%",
            margin: "auto",
            marginTop: "50px",
          }}
        >
          © 2023 "Netflix" En iyi filmleri çevrimiçi izleyin. Tüm hakları
          saklıdır, Kopyalamak yasak.
        </span>
      </div>
    </div>
  );
};

export default Footer;
