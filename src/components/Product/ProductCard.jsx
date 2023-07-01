import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import { IconButton, useMediaQuery } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./Product.css";

export default function ProductCard({ item }) {
  const { deleteProduct } = useProducts();
  const navigate = useNavigate();

  const matches = useMediaQuery("(min-width:600px)");
  const slicedDescription = matches
    ? item.description.slice(0, 200) + "..."
    : item.description.slice(0, 50);

  return (
    <Card
      className="boxx grid"
      sx={{
        maxWidth: "360px",
        marginBottom: "15%",
        backgroundColor: "black",
        color: "white",
        boxShadow: "0px 0px 8px 3px rgba(255, 1, 0, 0.5) inset",
        borderRadius: "30px",
        padding: "15px",
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <CardMedia
        sx={{
          height: 0,
          paddingTop: "100%",
          cursor: "pointer",
          maxWidth: "100%",
          borderRadius: "15px",
        }}
        image={item.picture}
        title="picture"
        onClick={() => navigate(`/details/${item.id}`)}
      />
      <CardContent>
        <Button
          gutterBottom
          variant="contained"
          color="error"
          component="div"
          onClick={() => navigate(`/details/${item.id}`)}
          sx={{
            textAlign: "center",
            fontSize: ".8em",
            fontWeight: "800",
            margin: "10px 0",
            width: "100%",
            height: "60px",
          }}
        >
          {item.title}
        </Button>
        <Typography
          gutterBottom
          variant="p"
          component="div"
          sx={{ fontSize: "1em", marginTop: "2%" }}
        >
          {slicedDescription}
        </Typography>
      </CardContent>
      <div
        style={{
          borderTop: "1px solid rgba(0, 0, 0, 0.1)",
          margin: "0 16px",
        }}
      />
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <>
          <Button
            startIcon={<DeleteIcon />}
            size="medium"
            color="error"
            variant="contained"
            sx={{
              fontSize: "85%",
            }}
            onClick={() => deleteProduct(item.id)}
          >
            Silme
          </Button>
          <Button
            startIcon={<EditIcon />}
            color="secondary"
            size="medium"
            variant="contained"
            sx={{
              fontSize: "85%",
            }}
            onClick={() => navigate(`/edit/${item.id}`)}
          >
            Düzenle
          </Button>
        </>
      </CardActions>
    </Card>
  );
}
