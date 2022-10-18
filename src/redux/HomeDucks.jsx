import axios from "axios";

//const o state
const dataInitial = {
    infoInitial: []
};

//types
const GET_INFOHOME_SUCCESS = 'GET_INFOHOME_SUCCESS';

//reducer
export default function homeReducer(state = dataInitial, action){

    switch (action.type) {
        case GET_INFOHOME_SUCCESS:
            return{...state, infoInitial: action.payload};
        default:
            return state;
    };
};

export const getHomeAction = () => async(dispatch, getState) => {
    try {
        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`);
        console.log(resp);
        dispatch({
            type: GET_INFOHOME_SUCCESS,
            payload: resp.data.results
        });

    } catch (error) {
        console.log(error);
    }
};


