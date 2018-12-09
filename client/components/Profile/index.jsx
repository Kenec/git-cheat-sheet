import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Search from '../Search';
import CheatCard from './CheatCard';
import * as gitCheatsActions from '../../actions/gitCheatsAction';

class Profile extends Component {
  state = {
    searchText: ''
  };

  componentDidMount() {
    this.props.gitCheatsActions.getCheats();
  }

  handleOnChange = event => {
    this.setState({ searchText: event.target.value })
  };

  handleOnSearch = searchValue => {
    this.props.gitCheatsActions.searchCheats(searchValue)
  };

  render() {
    const { user } = this.props;
    return (
      <div className="container mt-3">
        <Search
          searchText={this.state.searchText} 
          handleOnChange={this.handleOnChange}  
          handleOnSearch={this.handleOnSearch}
        />
        <div className="grid-container">
          {
            this.props.gitCheats.map((gitCheat, index) => {
              return <CheatCard key={index} id={gitCheat.id} user={user} gitCheat={gitCheat} />  
            })
          }       
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  gitCheats: state.gitCheats,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  gitCheatsActions: bindActionCreators(gitCheatsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);