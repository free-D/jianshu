import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img{
    width: 625px;
    height: 270px;
  }
`

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -20px;
  border-bottom: 1px solid #dcdcdc;
`

export const TopItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .Topic-pic{
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`

export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .list-pic{
    width: 125px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 10px;
  }
`

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title: {
    line-height: 27px;
    font-size; 18px;
    font-weight: bold;
    color: #333;
  }
  .desc{
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`

export const RecommendItem  = styled.div`
  width: 280px;
  height: 50px;
  background: url(${props => props.imgUrl});
  background-size: contain;
  margin-bottom: 10px;
`

export const WriterWarpper = styled.div`
  width: 278px;
  border-radius: 3px;
  height: 300px;
  .recommend-authors{
    font-size: 14px;
    color: #969696;
  }
`

export const WriterSwitch = styled.div`
  float: right;
  font-size: 14px;
  color: #969696;
  .spin{
    font-size: 12px;
  }
`

export const WriterItem = styled.div`
  margin-top: 10px;
  width: 280px;
  height: 47px;
  overflow: hidden;
  .writer-pic{
    float: left;
    width: 48px;
    height: 48px;
    border: 1px solid #fff;
    border-radius: 50%;
  }
  .authors-info{
    float: left;
    width: 195px;
    margin-left: 5px;

  }
  .attention-authors{
    float: right;
    margin-top: 15px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
    cursor: pointer;
  }
  .authors-name{
    font-size: 16px;
    color: #333;
  }
  .authors-introduce{
    margin-top: 12px;
    font-size: 12px;
    color: #969696;
  }
`

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  text-align: center;
  background: #a5a5a5;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`

export const BackTop = styled.div`
  position: fixed;
  bottom: 100px;
  right: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  cursor: pointer;
`
