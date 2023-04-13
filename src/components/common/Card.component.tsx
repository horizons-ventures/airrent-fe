import { makeStyles } from "@material-ui/core";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface PropertyCardProps {
  images: string[];
  name: string;
  rate: number;
  location: string;
  numBedrooms: number;
}

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 400,
    height: "100%",
    boxShadow: theme.shadows[5],
    borderRadius: theme.shape.borderRadius,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    backgroundColor:"#fff",
    color:"#000"
  },
  slider: {
    height: "100%",
  },
  imageContainer: {
    position: "relative",
    height: 0,
    paddingTop: "56.25%", // 16:9 aspect ratio
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

function PropertyCard({
  images,
  name,
  rate,
  location,
  numBedrooms,
}: PropertyCardProps) {
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={classes.card}>
      <div className={classes.slider}>
        <Slider {...settings}>
          {images.map((image: string) => (
            <div className={classes.imageContainer} key={image}>
              <img src={image} className={classes.image} alt={name} />
            </div>
          ))}
        </Slider>
      </div>
      <div className={classes.content}>
        <h2>{name}</h2>
        <p>
          {rate}/night - {numBedrooms} bedroom(s) - {location}
        </p>
      </div>
    </div>
  );
}

export default PropertyCard;
