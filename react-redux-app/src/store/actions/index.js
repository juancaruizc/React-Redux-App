import axios from 'axios'

export const FETCH_MISSIONS_START = 'FETCH_MISSIONS_START'
export const FETCH_MISSIONS_SUCCESS = 'FETCH_MISSIONS_SUCCESS'
export const FETCH_MISSIONS_FAILURE = 'FETCH_MISSIONS_FAILURE'

export const fetchMissions = () => {
    return(dispatch) => {
        dispatch({type: FETCH_MISSIONS_START})

        axios.get('https://api.spacexdata.com/v3/missions')
        .then((res) =>{
            dispatch({type: FETCH_MISSIONS_SUCCESS, payload: res.data})
            console.log(res.data)
        })
        .catch((err) => {
            dispatch({type:FETCH_MISSIONS_FAILURE, payload: err.message})
            console.log(err.message)
        })
    }
}