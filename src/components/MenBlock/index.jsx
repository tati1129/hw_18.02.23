import React from 'react';
import User from '../User';
import s from './style.module.css';

export default function MenBlock({users,delUser}) {
  return (
    <div className={s.block_man}>
        {
            users.map(user => <User key={user.id} {...user}  delUser={delUser}/>)
        }
    </div>
  )
  
}
