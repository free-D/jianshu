import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { WriterWarpper, WriterItem, WriterSwitch } from '../style'

class Writer extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <WriterWarpper>
        <span className="recommend-authors">推荐作者</span>
        <WriterSwitch>
          <i className="iconfont spin">&#xe851;</i>
          换一批
        </WriterSwitch>
        {
          list.map(item => (
            <WriterItem key={item.get('id')}>
              <img 
                className="writer-pic" 
                src={item.get('imgUrl')}
                alt="" 
              />
              <div className="authors-info">
                <h1 className="authors-name">{item.get('name')}</h1>
                <p className="authors-introduce">{item.get('centent')}</p>
              </div>
              <div className="attention-authors">关注</div>
            </WriterItem>
          ))
        }
      </WriterWarpper>
    )
  }
}

const mapStateToProps = state => {
  return {
    list: state.getIn(['home', 'writerList'])
  }
}
export default connect(mapStateToProps, null)(Writer);