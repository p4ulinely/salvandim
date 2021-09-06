export const initialState = {
    id: -1,
    avatar: '',
    user: '',
    email: '',
    following: [],
};

export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'setId':
            return { ...state, id: action.payload.id };  
        case 'setAvatar':
            return { ...state, avatar: action.payload.avatar };    
        default:
            return state;
    }
}

