const GET_USERS = 'GET_USERS';
const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';

let initialState ={
    users: []
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


        case GET_USERS:

            return { ...state, users: action.users.concat(state.users)}

        default: return state;
    }

}

export const getUsersAC = (users) => ({type: GET_USERS, users})
export const followAC = (userId) => ({type:FOLLOW, userId})
export const unfollowAC = (userId) => ({type:UNFOLLOW, userId})

export default userReducer;
