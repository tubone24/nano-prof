import { h } from 'https://deno.land/x/nano_jsx@v0.0.16/core.ts'
import { Component } from 'https://deno.land/x/nano_jsx@v0.0.16/component.ts'

class Comments extends Component {
  render() {
    return (
      <ul>
        {this.props.comments.map((comment: any) => {
          return <li>{comment}</li>
        })}
      </ul>
    )
  }
}

export default Comments
