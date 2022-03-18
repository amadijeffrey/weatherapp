import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './searchbar.css'
import fetchWeather from '../actions/searchForCity'

 class Searchbar extends Component {
    constructor(props) {
        super(props)

        this.state = { term: '' }

        this.onInputChange = this.onInputChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onInputChange(e) {
        this.setState({ term: e.target.value })

    }

    onSubmit(e) {
        e.preventDefault()
        const countryData = document.querySelector('#country').value
        this.props.fetchWeather(this.state.term, countryData)
        console.log(countryData)
        document.querySelector('input').value = ''
    }

    render() {
        return (
           <div className='container'>
            <form onSubmit={this.onSubmit}>
                <select name='country' id='country'>
                    <option>UK</option>
                    <option>US</option>
                    <option>France</option>
                    <option>Germany</option>
                </select>
                <input onChange={this.onInputChange} placeholder="search for city's weather data in selected Country" className="search-bar" value={this.state.term} type="text" id="input" />
                <input  className='submit' type='submit' value='search' />
            </form>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(Searchbar)