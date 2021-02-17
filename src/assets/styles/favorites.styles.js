import { makeStyles } from "@material-ui/core/styles";

export const FavoritesStyles = makeStyles((width) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: "black",
    paddingTop: 70,
    backgroundSize: "cover",
    height: "100%",
  },
  title: {
    width: "100%",
    textAlign: "left",
    marginLeft: 20,
  },
}));
