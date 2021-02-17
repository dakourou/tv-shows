import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import notFound from "../../assets/notFound.png";
import { ShowDetailsStyles } from "../../assets/styles/showdetails.styles";

export default function ShowDetails() {
  const { id } = useParams();
  const [show, setShow] = useState({});
  const [cast, setCast] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  const classes = ShowDetailsStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`http://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setShow(result);
      });
    fetch(`http://api.tvmaze.com/shows/${id}/cast`)
      .then((res) => res.json())
      .then((result) => {
        setCast(result);
      });
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  return (
    //details of the show: image,rating,summary and top 4 actors of the cast
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        backgroundColor: "black",
        paddingBottom: 2,
      }}
    >
      {show ? (
        <div style={{ height: 600, width: width, marginTop: "6%" }}>
          <img
            style={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
            }}
            src={show.image ? show.image.original : notFound}
          ></img>
        </div>
      ) : (
        <div></div>
      )}
      <div style={{ margin: "2%", width: "70%" }}>
        <h1 style={{ color: "white" }}>{show.name}</h1>
        <span
          style={{ color: "white" }}
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(show.summary) }}
        ></span>
        <span style={{ color: "white" }}>
          Rating:{" "}
          {show.rating && show.rating.average ? show.rating.average : "-"}/10
        </span>
        <h1
          className="item__cast-title"
          style={{ color: "white", marginTop: "5%" }}
        >
          Top Cast
        </h1>
        <GridList className={classes.gridList} cols={4}>
          {cast && cast.length > 0 ? (
            cast
              .filter((item, index) => index < 4)
              .map((actor, i) => (
                <GridListTile key={i} className="tile">
                  <img
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                    }}
                    src={
                      actor.person.image
                        ? actor.person.image.original
                        : notFound
                    }
                  />
                  <GridListTileBar
                    title={actor.person.name}
                    classes={{
                      root: classes.titleBar,
                      title: classes.title,
                    }}
                  />
                </GridListTile>
              ))
          ) : (
            <h5 className="item__cast-title" style={{ color: "white" }}>
              No Cast Found
            </h5>
          )}
        </GridList>
      </div>
    </div>
  );
}
