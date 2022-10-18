import axios from "axios";

const dataInitial = {
    infoInitial: []
}; 

const GET_INFOBLOG_SUCCESS = 'GET_INFOBLOG_SUCCESS';

export default function blogReducer(state = dataInitial, action){

    switch (action.type) {
        case GET_INFOBLOG_SUCCESS:
            return {...state, infoInitial: action.payload};
        default:
            return state;
    };
};

export const getInfoBlogAction = () => async(dispatch, id) => {
    
    try {
        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`);
        console.log(resp);
        
        dispatch({
            type: GET_INFOBLOG_SUCCESS,
            payload: resp.data.results
        });

    } catch (error) {
        console.log(error);
    };
};
