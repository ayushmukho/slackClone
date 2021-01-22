import React, {useState, useEffect} from 'react'

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import SidebarOption from '../sidebar-option/sidebar-option.component';
import db from '../../firebase/firebase';

import './sidebar.styles.css';
import { useStateValue } from '../../StateProvider';


function Sidebar() {

    const [channels, setChannels] = useState([]);
    const [{user}] = useStateValue();

    useEffect(() => {
        //Run this code run once when the sidebar component load
        db.collection('rooms').onSnapshot(snapshot => (
            setChannels(
                snapshot.docs.map(doc => ({
                    id:doc.id,
                    name: doc.data().name,
                }))
            )
        ))
    }, [])

    const deleteChannel = () => {
        const roomName1 = prompt("Please enter name for chat room");

        if(roomName1){
        db.collection("rooms").where("name", "==", roomName1).get()
            .then(querySnapshot => {
            querySnapshot.docs[0].ref.delete();
        });
        }
    }


    return (

        
        <div className='sidebar'>
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Slack Clone</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </div> 
                <CreateIcon />        
            </div>
                
                <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
                <SidebarOption Icon={InboxIcon} title="Mentions & reactions"/>
                <SidebarOption Icon={DraftsIcon} title="Saved Items"/>
                <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser"/>
                <SidebarOption Icon={PeopleAltIcon} title="People & user groups"/>
                <SidebarOption Icon={AppsIcon} title="Apps"/>
                <SidebarOption Icon={FileCopyIcon} title="FileBrowser"/>
                <SidebarOption Icon={ExpandLessIcon} title="Show less"/>
                <hr/>
                    <SidebarOption Icon={ExpandMoreIcon} title="Channels"  />
                <hr/>
                <div className="sidebarOption__icon" onClick={deleteChannel}>
                    <RemoveIcon/>
                     <h3 className='nanga'>Delete Channel</h3>
                </div>
                <SidebarOption Icon = {AddIcon} addChannelOption title = 'Add Channel' /> 

                {
                    channels.map(channel => (
                        <SidebarOption title={channel.name} id={channel.id} />
                    ))
                }
                
        </div>
    )
}

export default Sidebar
