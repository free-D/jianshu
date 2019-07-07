import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getdMoreList } from '../store/actionCreators'
import { ListItem, ListInfo, LoadMore } from '../style'

class List extends PureComponent {
  render() {
    const { list, articlePage, getdMoreList } = this.props;
    return (
      <div>
        {
          list.map( item => {
            return (
              <Link to={ "/detail/" + item.get('id')} key={item.get('id')}>
                <ListItem>
                  <img 
                    className="list-pic" 
                    src={item.get('imgUrl')}
                    alt=""
                  />
                  <ListInfo>
                    <h3 className="title">{item.get('title')}</h3>
                    <p className="desc">{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() => getdMoreList(articlePage)}>加载更多</LoadMore>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    list: state.getIn(['home', 'articleList']),
    articlePage: state.getIn(['home', 'articlePage'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getdMoreList(articlePage) {
      dispatch(getdMoreList(articlePage))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
