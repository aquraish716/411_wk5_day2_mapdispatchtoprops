import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { removeCarAction } from '../redux/actions'
// import { removeCar } action here

const mapStateToProps = (state) => {
    return {
        user: state.user,
        cars: state.cars
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeCarAction:(index) => dispatch(removeCarAction(index))
    }
}

// add mapDispatchToProps function here

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)