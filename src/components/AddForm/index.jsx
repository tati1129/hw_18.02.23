import React from 'react'
import s from './style.module.css';

export default function AddForm({addUser}) {
  return (
    <div className={s.container}>
        <form onSubmit={addUser} className={s.form_block}>
            <input type="text" name='name'  placeholder='Input name' required/>
            <input type="text" name='avatar' placeholder='link to avatar' required/>
            <div className={s.gend}> gender 
                <select className={s.gend_select} name="gender" required > 
                    <option value=""></option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
            </div>
            <button className={s.add_btn}>add</button>
        </form>
    </div>
  )
}
