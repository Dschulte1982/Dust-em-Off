import React from 'react';
import {connect} from 'react-redux'


class HomePage extends React.Component{


  render(){
  return (
    <>
    <div className="portfolio-page">
        Hello
    </div>
    </>
  );}

}


const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.auth.user
});

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
