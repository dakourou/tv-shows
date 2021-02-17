import "../../App.css";
import Banner from "../../components/homePage/Banner.component";
import ShowsLists from "../../components/homePage/ShowsLists.component";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as fetchShows from "../../actions/showsAction";
import { bindActionCreators } from "redux";

function HomePage({
  allShows,
  fetchShows,
  lists,
  fetchList,
  fetchCarouselShows,
  featuredShows,
}) {
  useEffect(() => {
    if (allShows.length == 0) fetchShows("");
  }, []);
  useEffect(() => {
    if (allShows.length > 0) fetchList(allShows);
    fetchCarouselShows(allShows);
  }, [allShows]);

  return (
    //app's home page including the banner and the lists of shows
    <div style={{ backgroundColor: "black" }}>
      <Banner carouselImages={featuredShows}></Banner>
      <ShowsLists
        indexes={lists}
        images={allShows}
        carouselImages={featuredShows}
      ></ShowsLists>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    allShows: state.show.allShows,
    lists: state.show.lists,
    featuredShows: state.show.featuredShows,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...fetchShows,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
