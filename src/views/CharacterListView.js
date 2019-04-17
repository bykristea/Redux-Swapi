import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { fetch_chars } from '../actions';
class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetch_chars();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <h3>Hold on to your butts!</h3>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  }
};
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
 mapStateToProps,
  { fetch_chars }
)(CharacterListView);
