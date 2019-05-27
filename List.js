import React from 'react';
import Card from './CARD/Card';
import './List.css';
const ConsoleLog = ({ children }) => {
    console.log(children);
    return false;
  };
export default function List(props){
        return (
        <section className="List">
        <div className="List-cards">
        <h2>{props.header}</h2>
        {props.cards.map((card) =>{
            console.log(card.id)
            return(
        //<div key= {card.id}> 
            <Card 
                  key = {card.id}
                  cardkey = {card.id}
                  title = {card.title}
                  content = {card.content}
                  onDeleteItem = {props.onDeleteItem}/> 
                  ) 
            //</div>
            
        }            
        )}
         <button type = 'button' className= "List-add-button" onClick={()=>props.onAddItem(props.id)}>
              + Add Random Card
             </button>
             </div>
             </section>
              )
         }
         //what is this?
         List.defaultProps = {
            onClickAdd: () => {},
          }
    // <section className="List">
    //     <header className="List-header">
    //         <h2>{props.header}</h2>
    //     </header>
    //     <div className="List-cards">  
    //     { console.log(props) }
    //         {props.cards.map((card)=>
    //             <Card 
    //              key= {card.id}
    //              cardkey= {card.id}
    //              title = {card.title}
    //              content = {card.content} /> 
    //         )}
    //         <button type = 'button' className= "List-add-button">
    //          + Add Random Card
    //         </button>
    //     </div>
    // </section>     
       
