import React, {Component} from 'react'

class SubSubfeature extends Component {
  render(){
    return (
      <div>
        <li className={`sub-subfeature ${this.props.id}`} id="">
          <span id={`${this.props.id}`}>{this.props.title}</span>
        </li>
      </div>
    )
  }
}

export default SubSubfeature
