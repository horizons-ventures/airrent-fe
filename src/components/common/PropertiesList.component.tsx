import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PropertyCard from "./Card.component";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

interface Property {
  id: string;
  name: string;
  rate: number;
  location: string;
  numBedrooms: number;
  images: string[];
}

interface PropertyListProps {
  properties: Property[];
}

function PropertyList({ properties }: PropertyListProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {properties.map((property) => (
          <Grid item xs={12} md={6} lg={3} key={property.id}>
            <PropertyCard {...property} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default PropertyList;
