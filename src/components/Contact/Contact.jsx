import PropTypes from 'prop-types';
import { Item } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { useRef } from 'react';

const Contact = ({ name, number, id }) => {
  const btnRef = useRef();
  const dispatch = useDispatch();
  const handleDelBtnClick = () => {
    dispatch(deleteContact(id));
    btnRef.current.disabled = true;
  };

  return (
    <Item>
      <span>
        {name}: {number}
      </span>
      <button type='button' ref={btnRef} id={id} onClick={handleDelBtnClick}>
        Delete
      </button>
    </Item>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Contact;
