import React, {Component} from 'react'
import SubSubfeature from './SubSubfeature'

class Subfeature extends Component {
  render(){
    let subSubfeatureArray = this.props.subsubfeatures.map( (subSubfeature) => {
      return (
        <SubSubfeature
          key={subSubfeature.id}
          title={subSubfeature.title}
          id={subSubfeature.id} />
      )
    })
    return (
      <div>
        <li className={`subfeature ${this.props.id}`} id="">
          <span id={`${this.props.id}`}>{this.props.title}</span>
          <ul className="sub-subfeature-list">
            {subSubfeatureArray}
          </ul>
        </li>
      </div>
    )
  }
}

export default Subfeature
