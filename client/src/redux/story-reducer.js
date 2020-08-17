const GET_STORIES = 'GET_STORIES';

let initialState ={
    stories: [

    ]
}

const storyReducer = (state= initialState, action) =>{
    switch(action.type)
    {
        case GET_STORIES:

            return {...state, stories: action.stories}

        default: return state;
    }

}

export const getStories = (stories) => ({type:GET_STORIES, stories})
export default storyReducer;