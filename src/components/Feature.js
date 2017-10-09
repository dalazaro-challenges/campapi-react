import React, {Component} from 'react'
import Subfeature from './Subfeature'

class Feature extends Component {
  render(){
    let subfeatureArray = this.props.subfeatures.map( (subfeature) => {
      return (
        <Subfeature
          key={subfeature.id}
          title={subfeature.title}
          id={subfeature.id}
          subsubfeatures={subfeature.subfeatures} />
      )
    })
    return (
      <div>
        <li className={`feature ${this.props.id}`} id="">
          <span id={`${this.props.id}`}>{this.props.title}</span>
          <ul className="subfeature-list">
            {subfeatureArray}
          </ul>
        </li>
      </div>
    )
  }
}

export default Feature
