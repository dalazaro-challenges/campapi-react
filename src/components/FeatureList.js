import React, {Component} from 'react'
import Feature from './Feature'

class FeatureList extends Component {
  render(){
    let featureArray = this.props.features.map( (feature) => {
      return (
        <Feature
          key={feature.id}
          title={feature.title}
          id={feature.id}
          subfeatures={feature.subfeatures} />
      )
    })
    console.log(featureArray);
    return (
      <div>
        {featureArray}
      </div>
    )
  }
}

export default FeatureList
