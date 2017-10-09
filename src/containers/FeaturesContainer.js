import React, {Component} from 'react'
import FeatureList from '../components/FeatureList'

class FeaturesContainer extends Component {
  constructor(){
    super()
    this.state = {
      FEATURES: [
        {
          'title': 'Toilet',
          'id': 101,
          'presence': true,
          'subfeatures': []
        },
        {
          'title': 'Pets allowed',
          'id': 102,
          'presence': true,
          'subfeatures': []
        },
        {
          'title': 'Shower',
          'id': 103,
          'presence': false,
          'subfeatures': [
            {
              'title': 'Outdoor shower',
              'id': 105,
              'presence': false,
              'subfeatures': []
            }
          ]
        },
        {
          'title': 'Trash',
          'id': 104,
          'presence': true,
          'subfeatures': [
            {
              'title': 'Recycling bin',
              'id': 106,
              'presence': true,
              'subfeatures': []
            },
            {
              'title': 'Compost bin',
              'id': 107,
              'presence': true,
              'subfeatures': []
            },
            {
              'title': 'Trash bin',
              'id': 108,
              'presence': false,
              'subfeatures': [
                {
                  'title': 'Pack in, pack out',
                  'id': 109,
                  'presence': true,
                  'subfeatures': []
                }
              ]
            }
          ]
        }
      ]
    }
  }

  render(){
    return(
      <div>
        <main>
          <ul className="feature-list">
            <FeatureList
            features={this.state.FEATURES} />
          </ul>
        </main>
      </div>
    )
  }
}

export default FeaturesContainer
