
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

// Takes all actions from action creators
import * as actionCreators from '../actions/actionCreators';

import Main from './Main';

/*
  Mapping

  This is where the magic of redux comes in.

  We need a way to make
  1. our state (our data)
  2. our 'dispatch' functions
  available to the <Main /> component.

  We will surface state and functions via props (this.props.whatever)

*/


/*
  Here we specify which state needs to be made available to the component
  our state.posts and state.comments will be available via this.props.posts and this.props.comments
*/

// Gives up the state
function mapStateToProps(state) {
    // gives whatever is in our store
    return {
        posts: state.posts,
        comments: state.comments
    }
}

/*
  This will bind our actions to dispatch (make the fire-able)
  and make the actions available via props
*/

export function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}


/*
  Here we create an <App/> component which is just our <Main/> component with it's props
  populated with our actions and our state

  We're injecting the data at the top level and passing it down, but you can connect() any component
  to make the actions and the store available to you.
*/

const App = connect(mapStateToProps, mapDispatchToProps)
    // This notation adds all the data from the props and the actions from the actionCreator to
    // the main component, and renders the Main component as well.
    (Main);

export default App;
