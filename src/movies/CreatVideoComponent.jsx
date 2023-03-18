import React, { useState } from "react";
import VideoService from "../services/VideoService";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";

const CreatVideoComponents = (props) => {
  let navigate = useNavigate();
  const [videosLanguage, setVideoLanguage] = useState("");
  const [videosPrice, setVideoPrice] = useState("");
  const [videosTitle, setVideoTitle] = useState("");
  const [videosGenre, setVideoGenre] = useState("");
  const [videosYear, setVideoYear] = useState("");
  const [videostotalquantity, setVideoTotalQuantity] = useState("");

  // const [languageErr, setLanguageErr] = useState({});
  // const [priceErr, setPriceErr] = useState({});
  // const [titleErr, setTitleErr] = useState({});
  // const [genreErr, setGenreErr] = useState({});
  // const [yearErr, setYearErr] = useState({});
  // const [totalQuantityErr, settotalQuantityErr] = useState({});


  const saveVideos = (e) => {
    e.preventDefault();
    // const isValid = formValidation();
    let video = {
      language: videosLanguage,
      price: parseFloat(videosPrice),
      title: videosTitle,
      genre: videosGenre,
      year: videosYear,
      totalQuantity: videostotalquantity,
    };

    

    // const formValidation = () => {
    //   const languageErr = {};
    //   const priceErr = {};
    //   const titleErr = {};
    //   const genreErr = {};
    //   const yearErr = {};
    //   const totalQuantityErr = {};
    //   let isValid = true;

    //   if (videosLanguage.trim().length < 5) {
    //     languageErr.languageShort = "Language name is short";
    //     isValid = false;
    //   }
    //   if (videosLanguage.trim().length > 20) {
    //     languageErr.languageShort = "Language name is short";
    //     isValid = false;
    //   }

    //   if (videosPrice.trim().length < 0) {
    //     priceErr.languageShort = "Movie prices must be grate then Zero";
    //     isValid = false;
    //   }

    //   if (videosPrice.trim().length > 100) {
    //     priceErr.languageShort = "Movie prices must be less then hundred";
    //     isValid = false;
    //   }

    //   if (videosTitle.trim().length < 5) {
    //     titleErr.languageShort = "Movie title is short";
    //     isValid = false;
    //   }

    //   if (videosTitle.trim().length > 20) {
    //     titleErr.languageShort = "Movie title is Long";
    //     isValid = false;
    //   }

    //   if (videosGenre.trim().length < 5) {
    //     genreErr.languageShort = "Movie genre is short";
    //     isValid = false;
    //   }

    //   if (videosGenre.trim().length > 20) {
    //     genreErr.languageShort = "Movie genre is long";
    //     isValid = false;
    //   }

    //   if (videosYear.trim().length < 5) {
    //     yearErr.languageShort = "Movie prodaction date is incorrect";
    //     isValid = false;
    //   }

    //   if (videostotalquantity.trim().length < 5) {
    //     totalQuantityErr.languageShort = "Movies quantity is less than zero";
    //     isValid = false;
    //   }

    //   setLanguageErr(languageErr);
    //   setPriceErr(languageErr);
    //   setTitleErr(languageErr);
    //   setGenreErr(languageErr);
    //   setYearErr(languageErr);
    //   settotalQuantityErr(languageErr);
    //   return isValid;
    // };


    VideoService.creatVideo(video).then((res) => {
      navigate("/movies");
      Swal.fire({
        title: "Movie add successfully !",
        text: res.data.message,
        icon: "success",
        buttons: "Okay",
      
      });
    });
  };

  const cancel = (e) => {
    e.preventDefault();
    navigate("/movies");
  };

  return (
    <div>
      <div
        style={{ marginTop: "0%", marginBottom: "2%" }}
        className="container"
      >
        <div className="row">
          <div
            className="card col-md-6 offset-md-3 offset-md-3"
            style={{ marginTop: "15%" }}
          >
            <h4
              className="text-center"
              style={{
                padding: "15px",
                backgroundColor: "black",
                width: "100%",
                height: "70px",
                color: "white",
                fontSize: "26px",
              }}
            >
              {" "}
              Add Movies{" "}
            </h4>
            <div className="card-body">
              <form>

              {/* <div>
                  <label> Videos Language </label>

                  <select
                    class="form-select form-select-lg mb-6 ms-4 "
                    aria-label=".form-select-lg example"
                    placeholder=" Videos Language"
                    name=" videosLanguage"
                    className="form-control"
                    value={videosLanguage}
                    onChange={(e) => setVideoLanguage(e.target.value)}
                  >
                    <option selected> Select movie genre </option>
                    <option value="Action"> Action </option>
                    <option value="Comedy"> Comedy </option>
                    <option value="Documentary"> Documentary </option>
                    <option value="Drama"> Drama </option>
                    <option value="Fantasy"> Fantasy </option>
                    <option value="Horror"> Horror </option>
                    <option value="Musical"> Musical </option>
                    <option value="Mystery"> Mystery </option>
                    <option value="Romance"> Romance </option>
                    <option value="Science Fiction"> Science Fiction </option>
                    <option value="Thriller"> Thriller </option>
                    <option value="Science Fiction"> Western </option>
                  </select>
                </div> */}
                
                <div className="form-group">
                  <label> Videos Language </label>
                  <input
                    placeholder=" Videos Language"
                    name=" videosLanguage"
                    className="form-control"
                    value={videosLanguage}
                    onChange={(e) => setVideoLanguage(e.target.value)}
                  />

                  {/* {Object.keys(languageErr).map((key) => {
                    return (
                      <div style={{ color: "red" }}> {languageErr[key]} </div>
                    );
                  })} */}
                </div>

                <div className="form-group">
                  <label> Videos Price </label>
                  <input
                    placeholder="Videos Price"
                    name=" videosPrice"
                    className="form-control"
                    type={"number"}
                    value={videosPrice}
                    onChange={(e) => setVideoPrice(e.target.value)}
                  />

                  {/* {Object.keys(priceErr).map((key) => {
                    return (
                      <div style={{ color: "red" }}> {priceErr[key]} </div>
                    );
                  })} */}
                </div>
                <div className="form-group">
                  <label> videos Title </label>
                  <input
                    placeholder=" videos Title"
                    name=" videosTitle"
                    className="form-control"
                    value={videosTitle}
                    onChange={(e) => setVideoTitle(e.target.value)}
                  />

                  {/* {Object.keys(titleErr).map((key) => {
                    return (
                      <div style={{ color: "red" }}> {titleErr[key]} </div>
                    );
                  })} */}
                </div>
                <div className="form-group">
                  <label> Video Gener </label>
                  <input
                    placeholder="videos Gener"
                    name="videosGener"
                    className="form-control"
                    value={videosGenre}
                    onChange={(e) => setVideoGenre(e.target.value)}
                  />

                  {/* {Object.keys(genreErr).map((key) => {
                    return (
                      <div style={{ color: "red" }}> {genreErr[key]} </div>
                    );
                  })} */}
                </div>
                <div className="form-group">
                  <label> Videos Quantity </label>
                  <input
                    placeholder=" Videos Quantity"
                    name="videosYear"
                    className="form-control"
                    type={"number"}
                    value={videostotalquantity}
                    onChange={(e) => setVideoTotalQuantity(e.target.value)}
                  />

                  {/* {Object.keys(totalQuantityErr).map((key) => {
                    return (
                      <div style={{ color: "red" }}> {totalQuantityErr[key]} </div>
                    );
                  })} */}
                </div>
                <div className="form-group">
                  <label> Videos Year </label>
                  <input
                    placeholder=" videos Year"
                    name="videosYear"
                    className="form-control"
                    type={"date"}
                    value={videosYear}
                    onChange={(e) => setVideoYear(e.target.value)}
                  />

                  {/* {Object.keys(yearErr).map((key) => {
                    return (
                      <div style={{ color: "red" }}> {yearErr[key]} </div>
                    );
                  })} */}
                </div>

                <div
                  className="text-center"
                  style={{
                    marginTop: "40px",
                    marginBottom: "40px",
                    margin: "10px",
                    marginLeft: "0%",
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      padding: "20px",
                      margin: "20px",
                      height: "70px",
                      width: "100%",
                      borderRadius: "10px",
                      backgroundColor: "black",
                    }}
                  >
                    <Link onClick={(e) => saveVideos(e)}> Add Movie </Link>
                  </div>

                  <div
                  className="cancel"
                    style={{
                      textAlign: "center",
                      margin: "20px",
                      padding: "20px",
                      height: "70px",
                      width: "100%",
                      borderRadius: "10px",
                      backgroundColor: "red",
                    }}
                  >
                    <Link onClick={(e) => cancel(e)}> Cancel </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatVideoComponents;
