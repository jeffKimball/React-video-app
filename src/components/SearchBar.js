import React from 'react';

class SearchBar extends React.Component {
    state={ term : ''}
    
    onInputChange = (e) => {
        this.setState({term: e.target.value})
        console.log(this.state.term)
    }

    onFormSubmit = (e) => {
        e.preventDefault()

       this.props.onTermSubmit(this.state.term)
    }

    render(){
        return(
            <div className="ui segment search-bar">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            value={this.state.term} 
                            onChange={this.onInputChange}
                            type="text"/>
                    </div>
                </form>
            </div>
        )
    }
}


export default SearchBar