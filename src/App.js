import './App.css';
import {useState} from 'react';

function App() {

let [postTitle, setPostTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
let [likeCnt, setLikeCnt] = useState(0);

function likeUp(){
  setLikeCnt(likeCnt + 1);
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
      <div className='list'>
        <h4>{postTitle[0] } <span onClick={likeUp}>👍</span> {likeCnt} </h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
