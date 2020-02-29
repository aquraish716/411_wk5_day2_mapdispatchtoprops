import { connect } from 'react-redux'
import AddCar from '../components/AddCar'
import { addCarAction } from '../redux/actions'


const mapDispatchToProps = dispatch => {
    return {
        addCarAction: (payload) => dispatch(addCarAction(payload))
    }
}

export default connect(null, mapDispatchToProps)(AddCar)

