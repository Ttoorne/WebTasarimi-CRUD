import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link, useSearchParams } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, TextField } from "@mui/material";
import { styled } from "@mui/system";

const pages = [
  { name: "Anasayfa", link: "/", id: 1 },
  { name: "Tümü", link: "/products", id: 2 },
  { name: "Diziler", link: "/series", id: 4 },
  { name: "Filmler", link: "/films", id: 8 },
  { name: "Çizgi Filmler", link: "/cartoons", id: 9 },
];

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = React.useState(searchParams.get("q") || "");

  React.useEffect(() => {
    setSearchParams({ q: search });
  }, [search]);

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "black", height: "100px" }}
    >
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: "black",
          height: "105px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "3px solid rgba(35,35,35,1)",
        }}
      >
        <Toolbar disableGutters sx={{ width: "100%" }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily:
                "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              width: "10%",
            }}
          >
            <img
              src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
              width={"100%"}
              alt=""
              href="/homepage"
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link key={page.id} to={page.link}>
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      fontFamily={
                        "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif"
                      }
                    >
                      {page.name}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
              <Link to="/admin">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Ekle</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily:
                "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
              width={"170px"}
              height={"100px"}
              alt=""
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                key={page.id}
                to={page.link}
                style={{ textDecoration: "none" }}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    display: "block",
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#cbcbcb",
                    "&:hover": {
                      color: "#fdfdfd",
                      textDecoration: "none",
                      transition: "0.5s",
                    },
                    fontFamily:
                      "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif",
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
            <Link to="/admin">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#cbcbcb",
                  "&:hover": {
                    color: "#fdfdfd",
                    textDecoration: "none",
                    transition: "0.5s",
                  },
                  fontFamily:
                    "Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif",
                }}
              >
                Ekle
              </Button>
            </Link>
          </Box>

          <Box
            sx={{
              border: "1px solid",
              display: "flex",
              alignItems: "center",
              width: "250px",
              height: "40px",
              borderRadius: "10px",
              border: "1px solid rgba(35,35,35,1)",
              marginRight: "2%",
              padding: "0 1%",
            }}
          >
            <SearchIcon sx={{ marginRight: "10px" }} />

            <TextField
              value={search}
              sx={{
                "& input": {
                  color: "rgb(255,255,255)",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#e50914",
                },
              }}
              label={""}
              InputLabelProps={{
                style: {
                  color: "rgb(255,255,255)",
                },
              }}
              placeholder="Arama"
              onChange={(e) => setSearch(e.target.value)}
              fullWidth
              variant="standard"
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
