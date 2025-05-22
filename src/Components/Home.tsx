import React from "react";
import { Container, Card, CardMedia, CardContent, Typography, Button, Grid } from "@mui/material";
import album1 from "../images/album1.png";
import album2 from "../images/album2.png";
import album3 from "../images/album3.png";
import album4 from "../images/album4.png";
import album5 from "../images/album5.png";
import album6 from "../images/album6.png";

const albums = [
  { image: album1, title: "Create Stunning Collages", description: "Use our intuitive design tools to craft beautiful collages with ease. No experience needed! Customize every detail, add effects, and experiment with various layouts to make your vision come to life. Perfect for social media, memories, or gifts!", button: "Start Designing", link: "#", color: "linear-gradient(45deg, #ff4081, #ff9100)" },
  { image: album2, title: "Join Our Creative Community", description: "Connect with thousands of creatives, share your work, and get inspired by others. Our platform offers a space to showcase your designs, participate in challenges, and get feedback from like-minded individuals. Creativity thrives when shared!", button: "Join Now", link: "#", color: "linear-gradient(45deg, #3f51b5, #00bcd4)" },
  { image: album3, title: "Explore Unique Templates", description: "Access a wide variety of templates to make your collage stand out. Whether you're designing a travel memory board, a wedding album, or a fun digital poster, our templates provide a fantastic starting point. Simply pick a template and personalize it to your liking!", button: "Browse Templates", link: "#", color: "linear-gradient(45deg, #4caf50,rgb(223, 240, 203))" },
  { image: album4, title: "Customize Your Design", description: "Adjust colors, fonts, and layouts to match your unique style and preferences effortlessly. Our advanced editing tools let you fine-tune every element, from background textures to shadow effects, ensuring that your design is one-of-a-kind.", button: "Get Started", link: "#", color: "linear-gradient(45deg, #ff5722, #ffc107)" },
  { image: album5, title: "Share with Friends", description: "Easily share your stunning creations on social media or with loved ones in just one click. Whether it's a birthday surprise, an anniversary gift, or just a fun collage to brighten someone's day, our platform makes it simple and convenient!", button: "Share Now", link: "#", color: "linear-gradient(45deg, #9c27b0, #e91e63)" },
  { image: album6, title: "Print Your Creations", description: "Turn your digital collages into high-quality prints and frame them as beautiful memories. Choose from various print sizes, materials, and finishes to get a stunning physical copy of your design. Preserve your favorite moments forever!", button: "Order Prints", link: "#", color: "linear-gradient(45deg,rgb(101, 172, 231),rgb(8, 124, 178))" }
];

const HomePage = () => {
  return (
    <Container maxWidth="xl" style={{ padding: "3rem", textAlign: "center", backgroundColor: "#121212", color: "white" }}>
      <Typography variant="h2" gutterBottom style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "bold" }}>
        Welcome to Our Free Collage Maker
      </Typography>
      <Typography variant="h5" paragraph style={{ fontFamily: "'Poppins', sans-serif", background: "linear-gradient(45deg, #ff4081, #ff9100)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: "bold" }}>
        Create stunning collages effortlessly with our easy-to-use design tools. Whether you're a professional or just having fun, we provide the best platform for your creative projects.
      </Typography>
      
      <Grid container spacing={8} direction="column" alignItems="center">
        {albums.map((album, index) => (
          <Grid item xs={12} key={index}>
            <Card style={{ display: "flex", flexDirection: index % 2 === 0 ? "row" : "row-reverse", alignItems: "center", backgroundColor: "#1e1e1e", borderRadius: "20px", boxShadow: "0px 6px 15px rgba(255,255,255,0.3)", padding: "2rem", maxWidth: "80vw" }}>
              <CardMedia component="img" style={{ width: "55%", borderRadius: "15px" }} image={album.image} alt={album.title} />
              <CardContent style={{ width: "45%", textAlign: "left", padding: "3rem" }}>
                <Typography variant="h3" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "bold", color: "#ffffff" }}>
                  {album.title}
                </Typography>
                <Typography variant="h6" style={{ fontFamily: "'Poppins', sans-serif", color: "#bbbbbb", marginTop: "1rem", lineHeight: "1.6" }}>
                  {album.description}
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  href={album.link}
                  style={{ marginTop: "1.5rem", background: album.color, color: "white", fontWeight: "bold", padding: "1rem", fontSize: "1.2rem" }}
                >
                  {album.button}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;








