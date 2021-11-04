import axios from 'axios';


const KEY = 'AIzaSyCYOSmU4ITMEwiSbUGiccuT45fFW6EWp2s'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY        
    }
})