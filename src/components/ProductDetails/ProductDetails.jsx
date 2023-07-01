import React, { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import { useComment } from "../../contexts/CommentContextProvider";
import GradeIcon from "@mui/icons-material/Grade";

const ProductDetails = () => {
  const { getProductDetails, productDetails, recentlyWatched } = useProducts();
  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
  }, [id, getProductDetails]);

  const navigate = useNavigate();

  const MAX_RECENTLY_WATCHED = 5;

  const isYouTubeLink = (url) => {
    const youtubeUrlRegex =
      /^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})$/;
    return youtubeUrlRegex.test(url);
  };

  const getEmbeddedTrailer = () => {
    const trailerUrl = productDetails?.trailer;

    if (trailerUrl && isYouTubeLink(trailerUrl)) {
      const videoId = trailerUrl.match(/([a-zA-Z0-9_-]{11})$/)[0];
      return (
        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Product-Video"
          allowFullScreen
        />
      );
    }

    return null;
  };

  return (
    <Box
      className="product-details-container"
      sx={{ width: "75%", margin: "auto", marginBottom: "5%" }}
    >
      <Box
        className="product-info"
        sx={{
          display: "flex",
          width: "100%",
          marginTop: "5%",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Box
          className="product-info-img"
          sx={{ display: "flex", flexDirection: "column", width: "30%" }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              color: "gray",
            }}
          >
            {productDetails?.category} / {productDetails?.title}
          </Typography>
          <CardMedia
            sx={{
              height: 300,
              width: "100%",
              marginTop: "5%",
              border: "2px solid rgba(35,35,35,1)",
              borderRadius: "4px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            }}
            image={productDetails?.picture}
            title="постер"
          />
          <Box
            className="product-rating"
            sx={{ marginTop: "10%", color: "rgb(2555,255,255)" }}
          >
            <Box
              className="IMDb"
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <Box
                sx={{
                  color: "black",
                  border: "none",
                  padding: "2%",
                  backgroundColor: "rgb(245,197,24)",
                  fontSize: "22px",
                  fontWeight: "800",
                  borderRadius: "5px",
                  textAlign: "center",
                  width: "25%",
                  flex: "start",
                }}
              >
                IMDb
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "55%",
                  justifyContent: "center",
                }}
              >
                <GradeIcon fontSize="large" sx={{ color: "rgb(245,197,24)" }} />
                <p>
                  <span
                    style={{
                      fontSize: "28px",
                      fontWeight: "700",
                    }}
                  >
                    {productDetails?.IMBd ? productDetails?.IMBd : 0}
                  </span>
                  <span
                    style={{
                      color: "gray",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    /10
                  </span>
                </p>
              </Box>
            </Box>
            <Box
              className="kinopoisk"
              sx={{
                marginTop: "5%",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <Box className="kinopoisk-img">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  width={"75px"}
                  height={"75px"}
                />
              </Box>
              <Box sx={{ alignItems: "center", textAlign: "center" }}>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    color: "gray",
                  }}
                >
                  Kinopoisk Değerlendirme
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "28px",
                      fontWeight: "700",
                    }}
                  >
                    {productDetails?.Kinopoisk ? productDetails?.Kinopoisk : 0}
                  </span>
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "gray",
                    }}
                  >
                    /10
                  </span>
                </p>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="product-info-main" sx={{ width: "60%" }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1em",
              }}
            >
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{
                  color: "#fff",
                  fontWeight: "800",
                  fontSize: "2em",
                }}
              >
                {productDetails?.title}
                <hr
                  style={{
                    borderBottom: "1px solid rgba(35,35,35,1)",
                    marginTop: "1%",
                  }}
                />
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ color: "#fff", fontWeight: "400", fontSize: "18px" }}
              >
                {productDetails?.description}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}></Box>
          </CardContent>
        </Box>

        <Box
          className="product-info-trailer"
          sx={{
            marginTop: "5%",
            width: "100%",
          }}
        >
          {getEmbeddedTrailer()}
        </Box>
      </Box>

      {recentlyWatched.length > 0 && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            marginTop: "10%",
          }}
        >
          <Typography sx={{ color: "rgb(255,255,255)" }}>
            Son görüntülenenler
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
            }}
          >
            {recentlyWatched.slice(0, MAX_RECENTLY_WATCHED).map((product) => (
              <Card
                sx={{
                  width: 180,
                  height: 260,
                  border: "1px solid #ccc",
                  backgroundColor: "transparent",
                  color: "white",
                  borderRadius: "10px",
                  margin: "auto",
                  marginLeft: "0",
                  marginTop: 5,
                  cursor: "pointer",
                }}
                key={product.id}
                onClick={() => navigate(`/details/${product.id}`)}
              >
                <CardMedia
                  sx={{ width: 180, height: 200 }}
                  image={product.picture}
                  title="изображение"
                />
                <CardContent>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "800",
                      textAlign: "center",
                    }}
                    gutterBottom
                    variant="h4"
                    component="div"
                  >
                    {product.title}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ProductDetails;
