import React from 'react';
import User from '../User';
import s from './style.module.css';

export default function WomenBlock({users, delUser}) {
  return (
    <div className={s.block_woman}>
        {
            users.map(user => <User key={user.id} {...user} delUser={delUser}/>)
        }
    </div>
  )
}
