const GET_USERS = 'GET_USERS';
const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_CURRENT_OFFSET = 'SET_CURRENT_OFFSET';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const SET_USER = 'SET_USER';
const SET_USER_POSTS = 'SET_USER_POSTS';

let initialState ={
    users: [],
    user: [],
    posts: [],
    offset: 0,
    isFetching: true,
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

        case TOOGLE_IS_FETCHING:

            return { ...state, isFetching: action.isFetching}

        case SET_USER:
            return { ...state, user: action.user}

        case SET_USER_POSTS:
            let posts = state.posts;
            return { ...state,  posts: posts.concat(action.posts)}

        default: return state;
    }

}

export const getUsers = (users) => ({type: GET_USERS, users})
export const follow = (userId) => ({type:FOLLOW, userId})
export const unfollow = (userId) => ({type:UNFOLLOW, userId})
export const setCurrentOffset = (offset) => ({type:SET_CURRENT_OFFSET, offset})
export const toogleIsFetching = (isFetching) => ({type:TOOGLE_IS_FETCHING, isFetching})
export const  setUser = (user) => ({type:SET_USER, user})
export const  setUserPosts = (posts) => ({type:SET_USER_POSTS, posts})

export default userReducer;
