import { useEffect, useState } from 'react';
import axios from 'axios';
import Item from './Items';

const List = props => {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/question/preguntas')
      .then(res => {
        setMessages(res.data);
      });
  }, []);

  return (
    <ul>
      {messages.map(item => (
        <Item text={item.text} tema={item.tema}/>
      ))}
    </ul>
  );
};

export default List;
