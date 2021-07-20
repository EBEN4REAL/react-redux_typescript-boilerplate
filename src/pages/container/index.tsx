import {
  clearErrorMessage,
  clearSuccessMessage,
  handleCustomersList,
  handleSetError,
} from "../reduxFunctions/actions";

import { bindActionCreators, Dispatch  } from "redux";
import { connect } from "react-redux";
import App from "../component/App";

const mapStateToProps = (state: any) => ({
  result: state.customerReducer.result,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      clearErrorMessage,
      clearSuccessMessage,
      handleCustomersList,
      handleSetError,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
