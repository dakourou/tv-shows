import React from "react";
import ShowList from "./ShowsList.component";
import Typography from "@material-ui/core/Typography";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
} from "@material-ui/core/styles";

export default function ShowLists(props) {
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);
  function filterViaCategory(arr, category) {
    return arr
      .filter((obj) => obj.genres.some((cat) => cat === category))
      .filter((obj) => {
        if (obj.rating) return obj.rating.average > 7;
      });
  }

  return (
    //the section with the shows lists divided in genres
    <div>
      {props.indexes.map((object, i) => (
        <div key={i}>
          <MuiThemeProvider theme={theme}>
            <Typography
              variant="h5"
              style={{ textAlign: "left", marginLeft: "2%", color: "white" }}
            >
              {object.genre}
            </Typography>
          </MuiThemeProvider>
          <ShowList
            page="homePage"
            carouselImages={filterViaCategory(props.images, object.genre)}
          ></ShowList>
        </div>
      ))}
    </div>
  );
}
