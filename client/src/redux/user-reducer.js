const GET_USERS = 'GET_USERS';
const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_CURRENT_OFFSET = 'SET_CURRENT_OFFSET';

let initialState ={
    users: [],
    offset: 0
}

const userReducer = (state= initialState, action) =>{
    switch(action.type)
    {
        case FOLLOW:
            console.log(1);
            return {...state,
                users: state.users. map( user => {
                    if(user.id ===  action.userId)
                        return { ...user, followed: true }
                    return user;
                })
            }

        case UNFOLLOW:

            return {...state,
                users: state.users. map( user => {
                    if(user.id ===  action.userId)
                        return { ...user, followed: false }
                    return user;
                })
            }

        case SET_CURRENT_OFFSET:

            return { ...state, offset: action.offset }

        case GET_USERS:
            let users = state.users;
            return { ...state, users: users.concat(action.users)}

        default: return state;
    }

}

export const getUsersAC = (users) => ({type: GET_USERS, users})
export const followAC = (userId) => ({type:FOLLOW, userId})
export const unfollowAC = (userId) => ({type:UNFOLLOW, userId})
export const setCurrentOffsetAC = (offset) => ({type:SET_CURRENT_OFFSET, offset})
export default userReducer;
