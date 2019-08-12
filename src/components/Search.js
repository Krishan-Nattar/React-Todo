import React from 'react';

class Search extends React.Component {
    
    render(props) { 
        return ( 
            <form>
                search
                <input type="text" onChange={(e)=>this.props.handleSearch(e)} value={this.props.searchValue} />

                
                
                </form>
         );
    }
}
 
export default Search;