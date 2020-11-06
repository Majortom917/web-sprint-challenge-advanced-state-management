import axios from 'axios'

export const getSmurf = ()=>dispatch =>{
    dispatch({type: FETCH_SMURF_START})
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}