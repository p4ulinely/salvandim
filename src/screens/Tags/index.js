import React, { useState, useContext, useEffect } from "react";
import { RefreshControl, Text } from "react-native";
import { 
    Container,
    Scroller,
    LoadingIcon,
    ListArea,
    TagArea,
    TagTextTitle,
    TagText,
} from "./styles";
import AsyncStorage from '@react-native-community/async-storage';

//#region Contextos

import { FirestoreContext } from '../../contexts/FirestoreContext';

//#endregion Contextos

export default () => {
    const { 
        errorMessage,
        setErrorMessage,
        firestoreGetTagsByUid,
        firestoreAddFirstTag
    } = useContext(FirestoreContext);

    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [userTags, setUserTags] = useState([]);

    const getUserTagsAndSetOnState = async () => {
        setLoading(true);

        const uid = await AsyncStorage.getItem('uid');
        let data = await firestoreGetTagsByUid(uid);

        if (!data) {
            console.log(':::::::::: user sem tags')
            data = await firestoreAddFirstTag(uid);
        }
        
        // console.log(`:::::tags ${data.length}`, data)
        setUserTags(data);
        setLoading(false);
    };

    const onRefresh = () => {
        setRefreshing(false);
        getUserTagsAndSetOnState();
    }

    useEffect(() => {
        getUserTagsAndSetOnState();
    }, []);

    return (
        <Container>
            <Scroller refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} >
                <Text>TAGs</Text>

                {loading && <LoadingIcon size="large" color="#4C7FC8" /> }

                <ListArea>
                    {userTags.map((item, k) => (
                        <TagArea key={k}>
                            <TagTextTitle>
                                {item.title}
                            </TagTextTitle>
                            <TagText>
                                {item.description}
                            </TagText>
                        </TagArea>
                    ))}
                </ListArea>
            </Scroller>
        </Container>
    );
}