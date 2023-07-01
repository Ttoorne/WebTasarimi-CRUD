import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./styles/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const maxWidth960 = useMediaQuery("(max-width:960px)");

  return (
    <Box
      className="container boxx"
      sx={{
        fontFamily:
          "Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif",
      }}
    >
      <Box
        className="container-head"
        sx={{
          color: "rgb(255, 255, 255)",
          backgroundImage:
            "url('https://assets.nflxext.com/ffe/siteui/vlv3/530fc327-2ddb-4038-a3f0-2da2d9ccede1/e39f2247-f332-4591-9e9d-f4cd8fc45104/KG-ru-20230619-popsignuptwoweeks-perspective_alpha_website_medium.jpg')",
          padding: "5%",
          zIndex: 1,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexWrap: "wrap",
          borderBottom: "10px solid rgba(35,35,35,1)",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "900",
            textAlign: "center",
            fontSize: "3em",
            width: "80%",
            margin: "5% auto auto",
          }}
        >
          Kısıtlama olmaksızın filmler, TV dizileri ve daha fazlası
        </Typography>
        <Typography
          variant="p"
          sx={{
            width: "80%",
            textAlign: "center",
            fontSize: "1.5em",
            margin: "3% auto",
            fontWeight: "400",
          }}
        >
          İstediğiniz yerde, istediğiniz zaman izleyin!
        </Typography>
        <Button
          variant="contained"
          sx={{
            width: "30%",
            margin: "auto",
            padding: "1%",
            fontSize: "1.3em",
            fontWeight: "500",
            backgroundColor: "rgb(229, 9, 20)",
            "&:hover": {
              backgroundColor: "rgb(229, 9, 20)",
              filter: "brightness(0.8)",
              color: "white",
            },
          }}
          onClick={() => navigate("/products")}
        >
          İzlemeye başlayın
        </Button>
      </Box>
      <Box
        className="container-mid"
        sx={{
          display: "flex",
          flexDirection: maxWidth960 ? "column" : "row",
          justifyContent: "space-between",
          borderBottom: "10px solid rgba(35,35,35,1)",
          color: "rgb(255, 255, 255)",
          padding: "5%",
        }}
      >
        <Box
          className="container-mid-left"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: maxWidth960 ? "center" : "",
            width: maxWidth960 ? "100%" : "45%",
            textAlign: maxWidth960 ? "center" : "",
            margin: "auto",
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontSize: "3em", fontWeight: "900", marginTop: "3%" }}
          >
            TV'de izleyin
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: "1.5em",
              fontWeight: "400",
              marginTop: "3%",
              width: "90%",
            }}
          >
            Smart TV, PlayStation, Xbox, Chromecast, Apple TV'de izleyin,
            Blu-ray oynatıcılar ve diğer cihazlar.
          </Typography>
        </Box>
        <Box
          className="container-mid-right"
          sx={{ width: maxWidth960 ? "100%" : "35%", margin: "auto" }}
        >
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt=""
              width={"100%"}
            />

            <video
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
              autoPlay
              loop
              muted
              style={{
                zIndex: "-1",
                overflow: "hidden",
                width: "100%",
                height: "100%",
                maxWidth: "73%",
                maxHeight: "54%",
                position: "absolute",
                top: "21%",
                left: "13%",

                verticalAlign: "baseline",
              }}
            />
          </div>
        </Box>
      </Box>
      <Box
        className="container-third"
        sx={{
          display: "flex",
          flexDirection: maxWidth960 ? "column-reverse" : "row",
          justifyContent: "space-between",
          borderBottom: "10px solid rgba(35,35,35,1)",
          color: "rgb(255, 255, 255)",
          padding: "5%",
        }}
      >
        <Box sx={{ width: maxWidth960 ? "100%" : "35%", margin: "auto" }}>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt=""
            width={"100%"}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: maxWidth960 ? "center" : "",
            width: maxWidth960 ? "100%" : "45%",
            textAlign: maxWidth960 ? "center" : "",
            margin: "auto",
            marginTop: "20px",
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontSize: "3em", fontWeight: "900", marginTop: "3%" }}
          >
            Çevrimdışı görüntüleme için seriyi indirin
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: "1.5em",
              fontWeight: "400",
              marginTop: "3%",
              width: "90%",
            }}
          >
            Videoları favorilerinize kaydedin ve her zaman izleyecek bir şeyiniz
            olsun.
          </Typography>
        </Box>
      </Box>
      <Box
        className="container-fourth"
        sx={{
          display: "flex",
          flexDirection: maxWidth960 ? "column" : "row",
          justifyContent: "space-between",
          borderBottom: "10px solid rgba(35,35,35,1)",
          color: "rgb(255, 255, 255)",
          padding: "5%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: maxWidth960 ? "100%" : "45%",
            textAlign: maxWidth960 ? "center" : "",
            margin: "auto",
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontSize: "3em", fontWeight: "900", marginTop: "3%" }}
          >
            Herhangi bir yere bakın
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: "1.5em",
              fontWeight: "400",
              marginTop: "3%",
            }}
          >
            Filmleri ve dizileri telefonunuzda, tabletinizde, dizüstü
            bilgisayarınızda ve TELEVIZYON.
          </Typography>
        </Box>
        <Box sx={{ width: maxWidth960 ? "100%" : "40%", margin: "auto" }}>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <img
              src="	https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
              alt=""
              width={"100%"}
            />
            <video
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
              autoPlay
              loop
              muted
              style={{
                zIndex: "-1",
                overflow: "hidden",
                width: "100%",
                height: "100%",
                maxWidth: "63%",
                maxHeight: "47%",
                position: "absolute",
                top: "9%",
                left: "18%",

                verticalAlign: "baseline",
              }}
            />
          </div>
        </Box>
      </Box>

      <Box
        className="container-fifth"
        sx={{
          display: "flex",
          flexDirection: maxWidth960 ? "column-reverse" : "row",
          justifyContent: "space-between",
          color: "rgb(255, 255, 255)",
          padding: "5%",
        }}
      >
        <Box sx={{ width: maxWidth960 ? "80%" : "35%", margin: "auto" }}>
          <img
            src="https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
            alt=""
            width={"100%"}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: maxWidth960 ? "center " : "",
            alignItems: maxWidth960 ? "center" : "",
            width: maxWidth960 ? "100%" : "45%",
            margin: "auto",
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontSize: "3em", fontWeight: "900", marginTop: "3%" }}
          >
            Çocuklar için profiller oluşturun
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: "1.5em",
              fontWeight: "400",
              marginTop: "3%",
              width: "90%",
            }}
          >
            Çocuklara en sevdikleri karakterlerle macera dolu bir dünya sunun.
            Bu tasarlanmış onlar için ve aboneliğinizle birlikte zaten mevcut.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
