import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

export default function Footer() {
  return (
    //the page footer
    <AppBar position="static" style={{ backgroundColor: "black" }}>
      <Container>
        <Toolbar>
          <Typography
            variant="body1"
            color="inherit"
            style={{ width: "100%", textAlign: "center" }}
          >
            © 2021 Dimitra Akourou
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
