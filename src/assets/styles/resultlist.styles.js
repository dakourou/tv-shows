import { makeStyles } from "@material-ui/core/styles";

export const ResultListStyles = makeStyles((width) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "black",
  },
  title: {
    color: "white",
  },
  tile: {
    height: 300,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  },
}));
