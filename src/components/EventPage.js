import React, { useState } from 'react';
import ThreadList from "src/components/ThreadList";
import FormModal from './FormModal';

const EventPage = () => {
  const [state, setState] = useState({
    modalIsOpen: undefined
  });
  const handleModal = () => {
    setState(() => ({ modalIsOpen: true }))
  };
  const handleClearModal = () => {
    setState(() => ({ modalIsOpen: undefined }))
  };
  return (
    <div>
      <ThreadList />
      <FormModal
        modalIsOpen={state.modalIsOpen}
        handleClearModal={handleClearModal}
      />
      <button
        onClick={handleModal}
      >
        add thread
      </button>
    </div>
  );
};

export default EventPage;