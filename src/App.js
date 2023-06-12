import './App.css';
import {useState} from 'react';

function App() {

let [postTitle, setPostTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
let [likeCnt, setLikeCnt] = useState([0,0,0]);
let [modal, setModal] = useState(false);
let [curPost, setCurPost] = useState();


function likeUp(like){
  setLikeCnt(like);
}

function selectPost(selected){
  setCurPost(selected)
  modal === true ? setModal(false) : setModal(true)
}


  return (
    <div className="App">
      <div className='black-nav'>
        <h4>reactBlog</h4>
      </div>
      <button onClick={() => {
        let copy = [...postTitle];
        copy[0] = '여자 코트 추천';
        setPostTitle(copy)
      }}>글수정</button>
      {
        postTitle.map(function(a, i){
          return (
            <div className='list' key={i}>
              <h4 onClick={() => {selectPost(a)}}>
                {postTitle[i] } 
                <span onClick={() =>{
                  let copy = [...likeCnt]
                  copy[i] = copy[i] + 1;
                  setLikeCnt(copy)
                }
                }>👍</span> {likeCnt[i]} 
              </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }
      {
        modal === true ? <Modal postTitle={curPost}></Modal> : null
      }
    </div>
  );
}

function Modal(props){
  return(
    <div className='modal'>
      <h4>{props.postTitle}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
