import React, { useState } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid'
import { addThread } from 'src/actions/threads'

const ThreadForm = (props) => {
  // 参考:関数コンポーネントのstate:https://ja.reactjs.org/docs/hooks-state.html
  const [thread, setThread] = useState({
    id: 'gresgsreg:;kgwa', //uuid() モーダル立ち上げた時点で取得
    type: 'event', //event, or sos, or chat
    position: 'thread', // thread, or response
    date: 0,
    text: '',
    name: ''
  });
  const [error, setError] = useState('');
  const changeText = (e) => {
    setThread((state) => ({
      ...state,
      text: e.target.value,
    }))
  };
  const changeName = (e) => {
    setThread((state) => ({
      ...state,
      name: e.target.value
    }))
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (!thread.text || !thread.name) {
      setError('投稿する内容とお名前をご記入ください');
    } else {
      setError('');
      props.dispatch(addThread(thread));
    }
  };
  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={onSubmit}>
        <input type="textarea" onChange={changeText} />
        <input type="text" onChange={changeName} />
        <button>Add</button>
      </form>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    threads: state.threads
  }
}

export default connect(mapStateToProps)(ThreadForm);