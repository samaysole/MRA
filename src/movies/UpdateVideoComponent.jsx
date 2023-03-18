import React, { useState } from "react";
import VideoService from "../services/VideoService";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateVideoComponent = (props) => {
  const location = useLocation();
  const { video } = location.state;
  let navigate = useNavigate();
  const [videosLanguage, setVideoLanguage] = useState(video.language);
  const [videosPrice, setVideoPrice] = useState(video.price);
  const [videosTitle, setVideoTitle] = useState(video.title);
  const [videosGener, setVideoGener] = useState(video.genre);
  const [videosYear, setVideoYear] = useState(video.year);

  const updateVideo = (e) => {
    e.preventDefault();
    let v = {
      language: videosLanguage,
      price: parseFloat(videosPrice),
      title: videosTitle,
      genre: videosGener,
      year: videosYear,
    };
    VideoService.updateVideo(v, video.video_Id).then((res) => {
      navigate("/movies");
      Swal.fire({
        title: "Movie updated successfully !",
        text: res.data.message,
        icon: "success",
        button: "Okay",
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
        className="container"
        style={{ marginTop: "0%", marginBottom: "2%" }}
      >
        <div className="row">
          <div
            className="card col-md-6 offset-md-3 offset-md-3"
            style={{ marginTop: "15%" }}
          >
            <h4
              className="text-center"
              style={{
                marginTop: "3%",
                marginBottom: "3%",
                padding: "15px",
                backgroundColor: "black",
                width: "100%",
                height: "70px",
                color: "white",
                fontSize: "26px",
              }}
            >
              {" "}
              Update video{" "}
            </h4>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> Videos Language </label>
                  <input
                    placeholder="Videos Language"
                    name="videosLanguage"
                    className="form-control"
                    value={videosLanguage}
                    onChange={(e) => setVideoLanguage(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label> Videos Price </label>
                  <input
                    placeholder="Videos Price"
                    name="videosPrice"
                    className="form-control"
                    type={"number"}
                    value={videosPrice}
                    onChange={(e) => setVideoPrice(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label> Videos Title </label>
                  <input
                    placeholder="videos Title"
                    name="videosTitle"
                    className="form-control"
                    value={videosTitle}
                    onChange={(e) => setVideoTitle(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label> Videos Genre </label>
                  <input
                    placeholder="videos Gener"
                    name="videosGenre"
                    className="form-control"
                    value={videosGener}
                    onChange={(e) => setVideoGener(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label> Videos Year </label>
                  <input
                    placeholder="videos Year"
                    name="videosYear"
                    className="form-control"
                    type={"date"}
                    value={videosYear}
                    onChange={(e) => setVideoYear(e.target.value)}
                  />
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
                    <Link onClick={(e) => updateVideo(e)}> Update Movie </Link>
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
                    <Link onClick={(e) => cancel(e)}>Cancel </Link>
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

export default UpdateVideoComponent;
