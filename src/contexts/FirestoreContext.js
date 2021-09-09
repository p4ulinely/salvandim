import React, { createContext, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import createGuid from "react-native-create-guid";

export const FirestoreContext = createContext();

export const FirestoreProvider = ({children}) => {
    const [errorMessage, setErrorMessage] = useState('');

    const translateErrrorMessage = (message) => {
        const errrorMessagesTranslated = {
            "": "",
        };

        return errrorMessagesTranslated.hasOwnProperty(message) ? errrorMessagesTranslated[message] : message;
    }

    const firestoreGetTagsByUid = async (uid) => {
        try {
            if (uid) {
                const data = await firestore()
                    .collection('tags')
                    .doc(uid)
                    .get();
                
                return data.get('tags');
            }
            
            return [];
        } catch (error) {
            console.log(error);
            setErrorMessage(translateErrrorMessage(error.code));
        }
    };

    const firestoreAddFirstTag = async (uid) => {
        try {
            if (uid) {
                const newGuid = await createGuid();
                const firstTag = {
                    id: newGuid,
                    title: `principal`,
                    description: `Tag principal.`,
                    thumbnail: ``,
                };

                const data = await firestore()
                    .collection('tags')
                    .doc(`${uid}`)
                    .set({
                        tags: [firstTag]
                    });

                return [firstTag];
            }
        } catch (error) {
            console.log(error);
            setErrorMessage(translateErrrorMessage(error.code));
        }
    }

    const firestoreAddNewTag = async (uid, previousTags, newTag) => {
        try {
            if (uid && previousTags && newTag) {
                const newGuid = await createGuid();

                const data = await firestore()
                    .collection('tags')
                    .doc(`${uid}`)
                    .set({
                        tags: [
                            ...previousTags,
                            {
                                id: newGuid,
                                title: newTag.title,
                                description: newTag.description,
                                thumbnail: newTag.thumbnail,
                            }
                        ]
                    });
            }
        } catch (error) {
            console.log(error);
            setErrorMessage(translateErrrorMessage(error.code));
        }
    }

    const firestoreGetBookmarksByUid = async (uid) => {
        try {
            if (uid) {
                const data = await firestore().collection('bookmarks')
                    .where('uid', '==', uid)
                    .orderBy('createdAt', 'asc')
                    .get();

                return data.docs;
            }
            
            return [];
        } catch (error) {
            console.log(error);
            setErrorMessage(translateErrrorMessage(error.code));
        }
    };

    const firestoreAddNewBookmark = async (bookmark) => {
        try {
            if (bookmark) {
                const data = await firestore()
                    .collection('bookmarks')
                    .add({
                        uid: bookmark.uid,
                        createdAt: bookmark.createdAt,
                        private: bookmark.private,
                        title: bookmark.title,
                        description: bookmark.description,
                        tags: [ ...bookmark.tags ]
                    });
                
                return data;
            }

            return null;
        } catch (error) {
            console.log(error);
            setErrorMessage(translateErrrorMessage(error.code));
        }
    }

    return (
        <FirestoreContext.Provider 
            value={{
                errorMessage,
                setErrorMessage,
                firestoreGetTagsByUid,
                firestoreAddFirstTag,
                firestoreAddNewTag,
                firestoreGetBookmarksByUid,
                firestoreAddNewBookmark,
            }}
        >
            { children }
        </FirestoreContext.Provider>
    );
}