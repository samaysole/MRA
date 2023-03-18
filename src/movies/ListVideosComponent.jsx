import React, { Component } from "react";
import VideoService from "../services/VideoService";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import { Upload } from "react-bootstrap-icons";
import { Trash } from "react-bootstrap-icons";
import swal from "sweetalert2"

// const ListVideosComponent = (props) => {

//     let navigate = useNavigate();

//     const [addVideo, setAddvideo] = useState('');
//     const [editVideo, setEditVideo] = useState('');
//     const [deleteVideos, setDeletVideos] = useState('');

// const deleteVideo = (e, id) => {
//     e.preventDefault();

//     const thisClicked = e.currentTarget;
//     thisClicked.innerText = "Delting";

//     axios.delete(`/api/delete-category/${id}`).then(res=>{
//             if(res.data.status === 200)
//             {
//                 swal("success",res.data.message,"success");
//                 thisClicked.closest("tr").remove();
//             }
//             else if(res.data.message,"success");
//             thisClicked.innerText = "Delete";
//     });
// }

const test = {
  margin: "10px 0px",
  width: "150px",
  height: "50px",
  textAlign: "center",
  padding: "10px",
  color: "white",
  backgroundColor: "#FF0000",
  
};

class ListVideosComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
    };

    this.addVideo = this.addVideo.bind(this);
    this.editVideo = this.editVideo.bind(this);
    this.deleteVideo = this.deleteVideo.bind(this);
  }

  deleteVideo(id) {
    //rest api
    VideoService.deleteVideo(id).then((res) => {
      this.setState({
        videos: this.state.videos.filter((video) => video.video_Id !== id),
      });
    });
  }

  viewVideos(id) {
    this.props.history.push(`/view-video/${id}`);
  }

  editVideo(id) {
    this.props.history.push(`/update-video/${id}`);
  }

  componentDidMount() {
    VideoService.getVideos().then((res) => {
      this.setState({ videos: res.data });
    });
  }

  componentDidUpdate() {
    VideoService.getVideos().then((res) => {
      this.setState({ videos: res.data });
    });
  }

  addVideo() {
    this.props.history.push(`/add-video`);
  }

  deleteVideo = (e, vid, id) => {
    e.preventDefault();
    VideoService.deleteVideo(vid, id);
    swal.fire({
      title: "Movie Deleted successfully !",
      text: vid.data.message,
      icon: "success",
      button: "Okay",
      
    });
  };

  render() {
    return (
      <div style={{ padding: "0 5%" }}>
        <div className="row">
          <div className="col-12">
            <button
              className="btn-mov"
              style={{
                
              }}
            >
              {" "}
              <Link
                style={{ textDecoration: "none", letterSpacing: "3px" }}
                to={"/add-video"}
              >
                {" "}
                <Icon.Film /> Add Movie{" "}
              </Link>{" "}
            </button>
          </div>

          <div className="container" style={{ marginBottom: "3%" }}>
            <table className="table table-striped table-bordered">
              <thead>
                <tr style={{ backgroundColor: "black", color: "white" }}>
                  <th> Videos Id </th>
                  <th> Videos Language </th>
                  <th> Videos Price </th>
                  <th> Videos Title </th>
                  <th> Videos Genre </th>
                  <th> Videos Year </th>
                  <th> Total Quantity </th>
                  <th> Remaining Quantity </th>
                  <th> Actions </th>
                </tr>
              </thead>

              <tbody>
                {[...this.state.videos]
                  .sort((a, b) => a.video_Id - b.video_Id)
                  .map((video) => (
                    <tr key={video.video_Id}>
                      <td> {video.movie_Id} </td>
                      <td> {video.language} </td>
                      <td> {video.price} </td>
                      <td> {video.title} </td>
                      <td> {video.genre} </td>
                      <td> {video.year} </td>
                      <td> {video.totalQuantity} </td>
                      <td> {video.remainingQuantity} </td>

                      <td>
                        <div className="function-buttons">
                          {/* <button onClick={() => this.editVideo(video.id)} className= "btn btn-info" style={{marginLeft: "30px"}}> Update </button> */}
                          <div
                            className="mov-update"
                          >
                            {" "}
                            <Link
                              className="update"
                              to={"/update-video/" + video.video_Id}
                              state={{ video: video }}
                            >
                              {" "}
                              <Upload /> Update{" "}
                            </Link>{" "}
                          </div>

                          <button
                            className="delete"
                            onClick={(e) =>
                              this.deleteVideo(e, video, video.video_Id)
                            }
                          >
                            {" "}
                            <Trash /> Delete{" "}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ListVideosComponent;
