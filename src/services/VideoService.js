import axios from 'axios'; 

const VIDEO_API_BASE_URL = "http://localhost:8080/movies/";

class VideoService {

    getVideos() {
        return axios.get(VIDEO_API_BASE_URL)
    }

    creatVideo(video) {
        return axios.post(VIDEO_API_BASE_URL, video)
    }


    getVideosById(videoId){
        return axios.get(VIDEO_API_BASE_URL + '+' + videoId);
    }
    
    updateVideo(video, videoId) {
        return axios.put(VIDEO_API_BASE_URL  + videoId, video)
    }

    deleteVideo(video, videoId) {
        return axios.delete(VIDEO_API_BASE_URL + videoId, video)
    }
}


export default new VideoService(); 