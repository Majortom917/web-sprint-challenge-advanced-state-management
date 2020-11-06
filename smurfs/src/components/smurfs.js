import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getSmurfs} from '../actions/actions';
import Smurf from './smurf'

const SmurfList = (props) => {
    useEffect(() => {
        props.getSmurfs()
    }, [])

    return (
        <div>
            <h2>Smurfs</h2>
            <p>{props.error}</p>
            {props.smurfs.map((smurf) => (
                <Smurf smurf={smurf}/> 
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    smurfs: state.smurf,
    error: state.error
  });

  export default connect(
    mapStateToProps,
    { getSmurfs }
  )(SmurfList); 