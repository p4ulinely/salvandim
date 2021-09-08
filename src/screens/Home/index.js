import React, { useState, useContext, useEffect, useRef } from 'react';
import { RefreshControl } from 'react-native';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { 
    Container, 
    Scroller,
    HeaderArea,
    HeaderTitle,
    SearchButton,
    SearchArea,
    SearchInput,
    SearchFinder,
    LoadingIcon,
    ListArea
 } from './styles';

//#region Contextos

import { AuthContext } from '../../contexts/AuthContext';
import { FirestoreContext } from '../../contexts/FirestoreContext';

//#endregion Contextos

//#region Componentes

import LogoComponent from '../../components/Logo';
import BookmarkItem from '../../components/BookmarkItem';

//#endregion Componentes

import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';
import Search2Icon from '../../assets/search2.svg';

export default () => {
    const { 
        signOut,
        getDataFromStorage
    } = useContext(AuthContext);
    
    const { 
        errorMessage,
        firestoreGetBookmarksByUid,
    } = useContext(FirestoreContext);

    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [filter, setFilter] = useState('');
    const [userBasicInfo , setUserBasicInfo] = useState({});
    const [userBookmarks, setUserBookmarks] = useState([]);

    const scrollRef = useRef(); 

    const scrollToEnd = () => {
        scrollRef.current?.scrollToEnd({
            animated: true,
        });
    }

    const getUserBasicInfoFromStorageAndSetOnState = async () => {
        const data = await getDataFromStorage();
        setUserBasicInfo(data);
    };
    
    const getUserBookmarks = async () => {
        setLoading(true);
        setUserBookmarks([]);

        const uid = await AsyncStorage.getItem('uid');
        const data = await firestoreGetBookmarksByUid(uid);
        
        data.forEach(item => {
            if (userBookmarks == null) {
                setUserBookmarks([item.data()]);
            } else {
                setUserBookmarks(prev => [...prev, item.data()]);
            }
        })

        setLoading(false);
        scrollToEnd();
    };

    const handleFilterButton = () => {
        console.log('filter', filter)
    };

    useEffect(() => {
        getUserBasicInfoFromStorageAndSetOnState();
        getUserBookmarks();
    }, []);

    const onRefresh = () => {
        setRefreshing(false);
        getUserBookmarks();
    }

    return (
        <Container>
            {/* ADS ? */}
            {/* <LogoComponent corLogo={"azul"} /> */}
            <HeaderArea>
                <Text>{userBasicInfo.displayName ? `${userBasicInfo.displayName},` : ``}</Text>
                <Text>Voçê tem {userBookmarks.length} notas</Text>
            </HeaderArea>
            <Scroller 
                ref={scrollRef} 
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                } 
            >               
                {/* <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Procure suas coisas aqui</HeaderTitle>
                    <SearchButton onPress={()=>navigation.navigate('Search')}>
                        <SearchIcon width="26" height="26" fill="#FFFFFF" />
                    </SearchButton>
                </HeaderArea> */}
                
                {loading &&
                    <LoadingIcon size="large" color="#4C7FC8" />
                }

                <ListArea>
                    {userBookmarks.map((item, k) => (
                        <BookmarkItem key={k} data={item} />
                    ))}
                </ListArea>
            </Scroller>
            <SearchArea>
                <SearchInput
                    placeholder="Filtre aqui (ex: :data Dez, :tag links)"
                    placeholderTextColor="#B3806D"
                    onChangeText={f => setFilter(f)}
                />
                <SearchFinder>
                    <Search2Icon onPress={handleFilterButton} width="24" height="24" fill="#B3806D" />
                </SearchFinder>
            </SearchArea>
        </Container>
    );
}