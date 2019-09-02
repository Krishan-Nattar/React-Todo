import React from "react";
import { Input } from 'semantic-ui-react'

class Search extends React.Component {
  render(props) {
    return (
      <form>
        <Input
        placeholder = "Search"
          onChange={e => this.props.handleSearch(e)}
          value={this.props.searchValue}
        />
      </form>
    );
  }
}

export default Search;
