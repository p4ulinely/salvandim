import React, { useState, useEffect, useContext } from 'react';
import { Text, Alert  } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import firestore from '@react-native-firebase/firestore';
import { 
    Container,
    PrivacyArea,
    TagArea,
    TagInput,
    DescriptionArea,
    DescriptionInput,
    TitleArea,
    TitleInput,
    AddButton,
    FooterArea,
    MessageButtonError,
    MessageButtonErrorText,
} from './styles';


//#region Contextos

import { FirestoreContext } from '../../contexts/FirestoreContext';

//#endregion Contextos

//#region Componentes

import DropDown from '../../components/DropDown';
import LogoComponent from '../../components/Logo';

//#endregion Componentes

//#region Icones

import SendIcon from '../../assets/send.svg';
import MenuIcon from '../../assets/menu.svg';
import ShareIcon from '../../assets/share.svg';
import Star2Icon from '../../assets/star2.svg';

//#endregion Icones

export default () => {
    const { 
        errorMessage, 
        setErrorMessage,
        firestoreAddNewBookmark,
    } = useContext(FirestoreContext);

    const [uid, setUid] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [privacy, setPrivacy] = useState(null);
    const [tags, setTags] = useState([]);

    const clearBoomarksStates = () => {
        setUid('');
        setTitle('');
        setDescription('');
        setPrivacy(null);
        setTags([]);
    };

    const createBookmark = () => {
        return {
            uid,
            createdAt: firestore.Timestamp.now(),
            private: privacy,
            title,
            description,
            tags: [...tags]
        };
    }

    const addNewBookmark = async () => {
        const newBookmark = createBookmark();
        await firestoreAddNewBookmark(newBookmark);

        if (!errorMessage) {
            clearBoomarksStates();
            alert(`Nota salva!`);
        } else {
            alert(errorMessage);
        }
    };

    const showConfirmDialog = (message) => {
        return Alert.alert(
            'Confirmação',
            message,
            [
              {
                text: 'Não',
                onPress: null,
                style: 'cancel',
              },
              {text: 'Sim', onPress: addNewBookmark},
            ],
            {cancelable: false},
        );
    };

    const handleSendButton = async () => {
        if (!title)
            return alert(`Preencha o campo de mensagem.`);

        if (privacy === null)
            return alert(`Preencha a privacidade da nota.`);

        if (!privacy)
            showConfirmDialog(`Salvar nota como pública?`);
        else
            addNewBookmark();
    };

    const handleSetUid = async () => {
        const uid = await AsyncStorage.getItem('uid');
        setUid(uid);
    };

    const handleSetTags = (tags) => {
        const tagsSplited = tags.split(',');
        setTags(tagsSplited);
    };

    const handleMenuButton = () => {
        console.log('menu +', title)
    };

    useEffect(() => {
        handleSetUid();
    }, []);

    return (
        <Container>
            <LogoComponent corLogo={"azul"} />
            <MessageButtonError>
                <MessageButtonErrorText>{errorMessage}</MessageButtonErrorText>
            </MessageButtonError>
            <PrivacyArea>
                <ShareIcon width="24" height="24" fill="#172243" />
                <DropDown
                    onValueChange={v => setPrivacy(v)}
                    useNativeAndroidPickerStyle={false}
                    placeholder={{ label: "Privacidade da nota...", value: null}}
                    items={[
                        { label: "Privada", value: true },
                        { label: "Pública", value: false },
                    ]}
                />
            </PrivacyArea>
            <TagArea>
                <Star2Icon width="24" height="24" fill="#172243" />
                <TagInput
                    placeholder="Escolhas as tags..."
                    placeholderTextColor="#172243"
                    onChangeText={tags => handleSetTags(tags)}
                    value={tags.join()}
                />
            </TagArea>
            <DescriptionArea>
                <DescriptionInput
                    placeholder="Descreva mais sobre esta nota..."
                    placeholderTextColor="#172243"
                    onChangeText={d => setDescription(d)}
                    value={description}
                />
            </DescriptionArea>
            <FooterArea>
                <TitleArea>
                    <TitleInput 
                        placeholder="Mensagem" 
                        placeholderTextColor="#172243" 
                        onChangeText={t => setTitle(t)}
                        value={title}
                    />
                </TitleArea>
                <AddButton>
                    {title !== '' ?
                        <SendIcon onPress={handleSendButton} width="24" height="24" fill="#FFFFFF" />
                        :
                        <MenuIcon onPress={handleMenuButton} width="24" height="24" fill="#172243" />
                    }
                </AddButton>
            </FooterArea>
        </Container>
    );
}