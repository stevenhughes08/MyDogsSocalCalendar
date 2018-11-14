import { Component } from 'react';
import { withRouter } from 'react-router-dom';
//corrects issue with scrolling issue based on location data getting to top of page. 

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)