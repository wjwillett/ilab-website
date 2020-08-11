import React from 'react'
import ReactMarkdown from 'react-markdown'
import people from '../content/output/people.json'

let types = [
  { key: 'faculty', title: 'Faculty' },
  { key: 'postdoc', title: 'Post Docs' },
  { key: 'phd', title: 'PhD Students' },
  { key: 'master', title: 'Masters Students' },
  { key: 'undergrad', title: 'Undergrad Students'},
  { key: 'visiting', title: 'Visiting Researchers' },
  { key: 'alumni', title: 'Alumni' }
]

class People extends React.Component {
  componentDidMount() {
  }

  render() {
    if (this.props.show) {
      types = types.filter((type) => type.key === 'faculty' )
    }
    return (
      <div id="people" className="category">
<h1 class="ui horizontal divider header">
  <i class="child icon"></i>
  People
</h1>
        { types.map((type) => {
          return (
            <div className="people-category">
              <h2>{ type.title }</h2>
              <div className="ui grid">
                { people
                  .filter((person) => {
                    return person.type === type.key
                  }) // filter
                  .map((person) => {
                    return (
                      <div className="four wide column person">
                        <img className="ui tiny circular image" src={ `/static/images/people/${ person.name.replace(' ', '-').toLowerCase() }.jpg`}/>
                        <p><b>{ person.name }</b></p>
                        <p>{ person.title }</p>
                      </div>
                    ) // return
                  }) // map
                }
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default People