const saveContacts = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export default saveContacts;
