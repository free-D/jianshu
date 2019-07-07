import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { changeInintData } from './store/actionCreators'
import { DetailWarpper, Header, Content } from './style'

class Detail extends PureComponent {
  render() {
    const { title, content } = this.props;
    return (
      <DetailWarpper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{__html: content}}></Content>
      </DetailWarpper>
    )
  }

  componentDidMount() {
    const { inintData, match } = this.props;
    inintData(match.params.id)
  }
}

const mapState = state => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
  }
}

const mapDispatch = dispatch => {
  return {
    inintData(id) {
      dispatch(changeInintData(id))
    }
  }
}

export default connect(mapState, mapDispatch)(withRouter(Detail));
