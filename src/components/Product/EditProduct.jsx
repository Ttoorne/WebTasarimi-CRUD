import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import CategorySelect from "./CategorySelect";
import GenreSelect from "./GenreSelect";
import "./Product.css";

const EditProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    picture: "",
    description: "",
    price: 0,
    trailer: "",
    category: "",
    genre: "",
    IMBd: "",
    Kinopoisk: "",
  });

  const { saveEditedProduct, getProductDetails, productDetails } =
    useProducts();

  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    if (productDetails) {
      setProduct(productDetails);
    }
  }, [productDetails]);

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <Box
      sx={{
        paddingBottom: "3%",
        color: "rgb(255, 255, 255)",
        paddingTop: "100px",
        backgroundImage:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/39f3c979-c105-4948-9c51-611eedf3a6fd/cbcb1617-1a2b-46ce-96ef-768e2a9c591f/KG-ru-20230612-popsignuptwoweeks-perspective_alpha_website_medium.jpg')",
      }}
    >
      <Box
        sx={{
          width: "45%",
          margin: " auto",
          padding: "5% 5%",
          border: "1px solid #000",
          boxShadow: "0px 0px 7px 9px rgba(255, 1, 0, 0.5) inset",
          borderRadius: "20px",
          display: "flex",
          backgroundColor: "rgba(0, 0, 0, 0.7);",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            margin: "5% 0",
            fontWeight: "900",
            fontSize: "3em",
            marginBottom: "50px",
          }}
          variant="h4"
          align="center"
        >
          Düzenle
        </Typography>
        <TextField
          sx={{
            backgroundColor: "#fff",
            borderRadius: "5px",
            marginBottom: "20px",
            textAlign: "center",
            fontSize: "1em",
          }}
          fullWidth
          onChange={handleInp}
          name="title"
          label="Başlık"
          variant="outlined"
          value={product.title}
        />
        <TextField
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          fullWidth
          onChange={handleInp}
          name="description"
          label="Tanımlama"
          variant="outlined"
          value={product.description}
        />
        <TextField
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          fullWidth
          onChange={handleInp}
          name="picture"
          label="Görüntü"
          variant="outlined"
          value={product.picture}
        />
        <TextField
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          fullWidth
          onChange={handleInp}
          name="price"
          label="Fiyat"
          variant="outlined"
          value={product.price}
        />
        <TextField
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          fullWidth
          onChange={handleInp}
          name="trailer"
          label="Fragman bağlantısı"
          variant="outlined"
          value={product.trailer}
        />
        <TextField
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          fullWidth
          onChange={handleInp}
          name="IMBd"
          label="IMDb'de değerlendirme"
          variant="outlined"
          type="number"
          inputProps={{
            min: 0,
            max: 10,
          }}
          value={product.IMBd}
        />
        <TextField
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          fullWidth
          onChange={handleInp}
          name="Kinopoisk"
          label="Kinopoisk'te derecelendirildi"
          variant="outlined"
          type="number"
          inputProps={{
            min: 0,
            max: 10,
          }}
          value={product.Kinopoisk}
        />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            margin: "20px 0px",
          }}
        >
          <GenreSelect
            sx={{ width: "40%" }}
            product={product}
            setProduct={setProduct}
          />

          <CategorySelect
            sx={{ width: "40%" }}
            product={product}
            setProduct={setProduct}
          />
        </Box>

        <Box>
          <Button
            sx={{
              backgroundColor: "red",
              borderRadius: "5px",
              color: "rgb(255,255,255)",
              fontSize: "1.5em",
              fontWeight: "900",
              fontFamily: "segoe ui",
              border: "none",
              "&:hover": {
                backgroundColor: "red",
                filter: "brightness(90%)",
                color: "white",
                border: "none",
              },
            }}
            onClick={() => saveEditedProduct(product)}
            fullWidth
            variant="outlined"
            size="large"
            className="admin__button"
          >
            Kaydet
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EditProduct;
