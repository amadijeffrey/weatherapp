import React, { Component } from 'react'
import { Sparklines, SparklinesLine , SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash'


export default class Sparkline extends Component {
    calcAvg(data){
        return _.round(_.sum(data)/data.length)
    }

    render() {
        return (
            <div>
            <Sparklines data={this.props.data} >
                <SparklinesLine color={this.props.color} />
                < SparklinesReferenceLine type='avg' />
            </Sparklines>
            <p>{this.calcAvg(this.props.data)} {this.props.units}</p>
            </div>
        )
    }
}