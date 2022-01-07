import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import axios from 'axios';

function UserProfile() {

    const location = useLocation();
    
    const [playlistList, setPlaylistList] = useState([]);
    useEffect(() => {
      axios.get(`http://localhost:3001/user/find/playlist/${location.state.email}`).then((response) => {
      console.log(response);  
      setPlaylistList(response.data);
      });
    }, []);
    
    return (
        <div>
            {location.state.userName}
            {location.state.email}
            {console.log(playlistList)}
            {playlistList.forEach(element => {
                return <div>{element.playlistName}</div>
            })}
            this is the user page
        </div>
    )
}

export default UserProfile
