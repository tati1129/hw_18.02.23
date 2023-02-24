import React from 'react';
import { useEffect, useState } from 'react';
import AddForm from '../AddForm';
import MenBlock from '../MenBlock';
import WomenBlock from '../WomenBlock'
import s from './style.module.css';

export default function Container() {
 const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem('users')) ?? []);
  
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users])
  
    const addUser = (event) => {
      event.preventDefault();
      let name = event.target.name.value;
      let avatar = event.target.avatar.value;
      let gender = event.target.gender.value;
    
      let userNew = {
        id: Date.now(),
        name,
        avatar,
        gender
      }
      setUsers([...users, userNew]);
  
      event.target.name.value = '';
      event.target.avatar.value = '';
      event.target.gender.value = '';
    }
  
    const delUser = (value) => setUsers(users.filter(({id}) => id !== value));

const male = users.filter((elem) => elem.gender === 'male');
const female = users.filter((elem) => elem.gender === 'female');
  return (
    <div className={s.contain}>
      <AddForm addUser={addUser} />
        {male[0] && (
            <div className={s.block_mens}>
                <div className={s.caption}>Mens</div>
                <MenBlock users={male} delUser={delUser}/>
                </div>
        )}
        {female[0] && (
                <div className={s.block_women}>
                    <div className={s.caption}>Women</div>
                    <WomenBlock users={female} delUser={delUser} />
                    </div>
            )}
    </div>
  )
}
