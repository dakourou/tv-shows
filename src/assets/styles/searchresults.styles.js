import { makeStyles } from "@material-ui/core/styles";

export const SearchResultsStyles = makeStyles((width) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: "black",
    paddingTop: "6%",
    backgroundSize: "cover",
    height: "100%",
  },
}));
