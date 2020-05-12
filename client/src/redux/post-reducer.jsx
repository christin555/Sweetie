const GET_POSTS = 'GET_POSTS';

let initialState ={
    posts: [

    ]
}

const postReducer = (state= initialState, action) =>{
    switch(action.type)
    {
        case GET_POSTS:

            return {...state, posts: action.posts}


        default: return state;
    }

}

export const getPosts = (posts) => ({type:GET_POSTS, posts})
export default postReducer;