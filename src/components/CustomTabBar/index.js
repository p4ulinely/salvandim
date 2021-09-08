import React, { useContext } from 'react';
import { 
    TabArea,
    TabItem,
    TabItemCenter,
    AvatarIcon
 } from './styles';
//  import { FiStar } from 'react-icons/fi';

// import { UserContext } from '../contexts/UserContext';

import HomeIcon from '../../assets/home.svg';
import Home2Icon from '../../assets/home2.svg';
import SearchIcon from '../../assets/search.svg';
import Search2Icon from '../../assets/search2.svg';
import TodayIcon from '../../assets/today.svg';
import StarIcon from '../../assets/star_empty.svg';
import Star2Icon from '../../assets/star2.svg';
import AccountIcon from '../../assets/account.svg';
import NotepadIcon from '../../assets/notepad.svg';
import ListIcon from '../../assets/list.svg';
import MenuIcon from '../../assets/menu.svg';
import Plus2Icon from '../../assets/plus2.svg';
import Lamp2Icon from '../../assets/lamp2.svg';

import { ScreenName } from '../../screens/ScreenNames';

export default ({ state, navigation }) => {
    // const { state:user } = useContext(UserContext);

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <TabArea>
            <TabItem onPress={()=>goTo(ScreenName.Home)}>
                <Home2Icon style={{opacity: state.index===0? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItem onPress={()=>goTo(ScreenName.Explore)}>
                <Lamp2Icon style={{opacity: state.index===1? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItemCenter onPress={()=>goTo(ScreenName.NewBookmark)}>
                <Plus2Icon width="32" height="32" fill={state.index===2? "#4C7FC8" : "#4C7FC8"} />
            </TabItemCenter>
            <TabItem onPress={()=>goTo(ScreenName.Tags)}>
                <Star2Icon style={{opacity: state.index===3? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItem onPress={()=>goTo(ScreenName.More)}>
                <MenuIcon style={{opacity: state.index===4? 1 : 0.5}} width="24" height="24" fill= "#FFFFFF" />
                {/* {user.avatar != '' ?
                    <AvatarIcon source={{uri: user.avatar}} />
                    :
                    <AccountIcon style={{opacity: state.index===4? 1 : 0.5}} width="24" height="24" fill="#FFFFFF" />
                } */}
            </TabItem>
        </TabArea>
    );
}