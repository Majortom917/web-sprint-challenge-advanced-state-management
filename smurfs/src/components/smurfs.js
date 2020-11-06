import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getSmurfs} from '../actions/actions';
import Smurf from './smurf'


const SmurfList = props => {

    useEffect(() => {
        props.getSmurfs()
    }, [])

    return (
        <div>
            <h2>Smurf List</h2>
            {props.isLoading ? <p>Loading Data...</p> : null}
            {props.smurfs.length > 0 && props.smurfs.map(smurf => (
                <Smurf smurf={smurf}/> 
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    smurfs: state.smurf,
    error: state.error
  });

export default connect(mapStateToProps,{getSmurfs}
  )(SmurfList); 