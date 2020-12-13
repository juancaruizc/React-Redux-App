import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchMissions} from '../store/actions'

const MissionsList = (props) => {

    useEffect(() => {
        props.fetchMissions();
    }, [])

    return (
        <div>
            {props.isLoading ? <p>Loading mission data...</p> : null}
            {props.error ? <p>{props.error}</p>: null}
            {props.missions.map((mission) => (
                    <div>
                        <h3>Mission: {mission.mission_name}</h3>
                        <h4>Manufacturer: {mission.manufacturers}</h4>
                        <p>{mission.description}</p>
                    </div>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        isLoading: state.isLoading,
        missions: state.missionsData,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchMissions})(MissionsList)
