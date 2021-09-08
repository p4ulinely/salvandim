import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { 
    Container,
    NewBookmarkDescriptionArea,
    NewBookmarkDescriptionInput,
    NewBookmarkTitleArea,
    NewBookmarkTitleInput,
    NewBookmarkAddButton,
    Select,
 } from './styles';

import SendIcon from '../../assets/send.svg';
import MenuIcon from '../../assets/menu.svg';

export default () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSendButton = () => {
        console.log('title', title)
        console.log('description', description)
    };

    const handleMenuButton = () => {
        console.log('menu +', title)
    };

    return (
        <Container>
            <Text>Nova nota</Text>
            <Select>
                <option value="1">Audi</option>
                <option value="2">BMW</option>
                <option value="3">Citroen</option>
                <option value="4">Ford</option>
            </Select>
            <NewBookmarkDescriptionArea>
                <NewBookmarkDescriptionInput
                    placeholder="Descreva mais sobre esta nota..."
                    placeholderTextColor="#172243"
                    onChangeText={d => setDescription(d)}
                />
            </NewBookmarkDescriptionArea>
            <NewBookmarkTitleArea>
                <NewBookmarkTitleInput
                    placeholder="Mensagem"
                    placeholderTextColor="#172243"
                    onChangeText={t => setTitle(t)}
                />
                <NewBookmarkAddButton>
                    {title !== '' ?
                        <SendIcon onPress={handleSendButton} width="24" height="24" fill="#FFFFFF" />
                        :
                        <MenuIcon onPress={handleMenuButton} width="24" height="24" fill="#172243" />
                    }
                </NewBookmarkAddButton>
            </NewBookmarkTitleArea>
        </Container>
    );
}