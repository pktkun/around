import React, { useState } from 'react';
import { connect } from 'react-redux';
import ThreadForm from "src/components/ThreadForm";
import ThreadListItem from 'src/components/ThreadListItem';
import { addThread } from 'src/actions/threads';

const ThreadList = (props) => {
  return (
    <div>
      {
        props.threads.length === 0 ? (
          <p>投稿がありません。</p>
        ) : (
          props.threads.map((thread) => {
            return <ThreadListItem key={thread.id} {...thread} />
          })
        )
      }
      <ThreadForm />
    </div >
  )
};

const mapStateToProps = (state) => {
  return {
    threads: state.threads
  }
}

export default connect(mapStateToProps)(ThreadList);