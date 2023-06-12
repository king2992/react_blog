import './App.css';
import {useState} from 'react';

function App() {

let [postTitle, setPostTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
let [likeCnt, setLikeCnt] = useState([0,0,0]);
let [modal, setModal] = useState(false);
let [curPost, setCurPost] = useState();
let [inpVal, setInpVal] = useState();

function selectPost(selected){
  setCurPost(selected)
  modal === true ? setModal(false) : setModal(true)
}

function delPost(i){
  let copy = [...postTitle]
  copy.splice(i, 1);
  setPostTitle(copy);
}


  return (
    <div className="App">
      <div className='black-nav'>
        <h4>reactBlog</h4>
      </div>
      {
        postTitle.map(function(a, i){
          return (
            <div className='list' key={i}>
              <h4 onClick={() => {selectPost(a)}}>
                {postTitle[i]} 
              </h4>
              <span onClick={() =>{
                  let copy = [...likeCnt]
                  copy[i] = copy[i] + 1;
                  setLikeCnt(copy)
                }
                }>👍</span> {likeCnt[i]} 
              <p>2월 17일 발행</p>
              <button type="button" onClick={()=>{
                delPost(i)
                }}>삭제</button>
            </div>
          )
        })
      }
      {
        modal === true ? <Modal postTitle={curPost}></Modal> : null
      }
      <input type="text" onChange={(e) => {setInpVal(e.target.value) }}/>
      <button type="button" onClick={() => {
        let copy = [...postTitle];
        copy.unshift(inpVal);
        setPostTitle(copy);
      }}>글 발행</button>
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
