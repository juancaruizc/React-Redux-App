import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchMissions} from '../store/actions'
import styled from 'styled-components'

const Div = styled.div`
    text-align:left;
    width:75%;
    background:white;
    padding:2%;
    border-radius:10px;
    margin-bottom:1%;
    margin-top:3%;   
`

const H4 = styled.div`
    font-size:0.8rem;
    margin-bottom:2%;
`

const P = styled.div`
    font-size:0.7rem;
`

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const MissionsList = (props) => {

    useEffect(() => {
        props.fetchMissions();
    }, [])

    return (
        <Container>
            {props.isLoading ? <p>Loading mission data...</p> : null}
            {props.error ? <p>{props.error}</p>: null}
            {props.missions.map((mission) => (
                    <Div>
                        <h3>{mission.mission_name}</h3>
                        <H4><strong>Manufacturer: </strong>{mission.manufacturers}</H4>
                        <P>{mission.description}</P>
                    </Div>
            ))}
        </Container>
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
