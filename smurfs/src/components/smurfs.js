import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getSmurfs} from '../actions/actions';
import Smurf from './smurf'


const SmurfList = ({getSmurfs, isLoading, smurfs}) => {
    //{getSmurfs, isLoading, smurfs}=props
    useEffect(() => {
        getSmurfs()
    }, [])

    return (
        <div>
            <h2>Smurf List of Smurfyness</h2>
            {isLoading ? <p>Loading Data...</p> : null}
            {smurfs.length > 0 && smurfs.map(each_smurf => (
                <Smurf smurf={each_smurf}/> 
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