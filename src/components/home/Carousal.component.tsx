import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { makeStyles } from "@material-ui/core/styles";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

const images = [
  {
    src: image1,
    alt: "Image 1",
    caption: "Discover the world, one home at a time",
    captionSubtext: "Get 50% off on bookings made in the next 24 hours!",
  },
  {
    src: image2,
    alt: "Image 2",
    caption: "Memories that last a lifetime",
    captionSubtext: "Book for 3 nights and get the 4th night free!",
  },
  {
    src: image3,
    alt: "Image 3",
    caption: "Ultimate holiday experience",
    captionSubtext: "Stay with us during weekdays and save up to 20%!",
  },
];

const useStyles = makeStyles((theme) => ({
  carouselWrapper: {
    position: "sticky",
    top: "56px", // adjust this value based on your navbar height
    height: "20vh",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  legend: {
    position: "absolute",
    top: "10px", // adjust this value based on your desired position
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "white",
    padding: "10px",
    fontSize: "20px",
    fontWeight: "bold",
  },
  subtext: {
    position: "absolute",
    top: "60px", // adjust this value based on your desired position
    left: "50%",
    transform: "translateX(-50%)",
    color: "black",
    padding: "10px",
    fontSize: "30px",
    fontWeight: "bold",
  },
}));

function CustomCarousel() {
  const classes = useStyles();

  return (
    <div className={classes.carouselWrapper}>
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        interval={5000}
      >
        {images.map((image) => (
          <div style={{ position: "relative" }} key={image.alt}>
            <img src={image.src} alt={image.alt} />
            <p className={classes.legend}>{image.caption}</p>
            <p className={classes.subtext}>{image.captionSubtext}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
