import React, { PureComponent } from 'react';
// import { actionCreators } from '../store';
import { connect } from 'react-redux'
import { TopicWrapper, TopItem } from '../style'

class Topic extends PureComponent {
  render() {
    const { topicList } = this.props;
    return (
      <TopicWrapper>
        {
          topicList.map(item => (
            <TopItem key={item.get('id')}>
              <img 
                className="Topic-pic" 
                src={item.get('imgUrl')} 
                alt={item.get('title')}
              />
              {item.get('title')}
            </TopItem>
          ))
        }
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    topicList: state.getIn(['home', 'topicList'])
  }
}

export default connect(mapStateToProps, null)(Topic);
