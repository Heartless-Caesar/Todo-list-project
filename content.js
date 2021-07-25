import React from 'react';
import { useState, useReducer } from 'react';
import { Modal } from './Modal';
import { Data } from './Data';
import { reducer } from './reducer';
import './index.css'
import '../node_modules/font-awesome/css/font-awesome.min.css';

export const Index = () => {
    const [state,dispatch] = useReducer(reducer, Data)
    const [name, setName] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        if(name){
          const newItem = {id : new Date().getTime().toString() ,name}
          dispatch({type : "ADD_ITEM", payload : newItem})
          setName("")
        }else{
           dispatch({type : "NO_VALUE"})
        }
    }
    return(
        <>
         <div className="modal-div">
           {state.modalContent && (<Modal modalContent={state.modalContent}/>)}
         </div>
         <form onSubmit={submitHandler}>
             <div className="input-div">
                 <input type='text' value={name} className="input-1" onChange={(e) => setName(e.target.value)}/>
                 <button type="submit" className="add-button">Add</button>
            </div>
         </form>
         <div className="rmv-all-div">
           <button type="button" className="rmv-all-button" onClick={() => dispatch({type : "REMOVE_ALL"})}>Remove all</button>
         </div>
         <div className="data-div">
         {state.people.map((person) => {
          const {id, name} = person
             return (
          <>
          <div key={id} className='item'>
            <button className="rmv-div" onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: id })}>
               <i className="fa fa-times" aria-hidden="true"></i>
             </button>
            <h4>{name}</h4>
          </div>
          </>
        )
      })}
        </div>
        </>
    )
 }
