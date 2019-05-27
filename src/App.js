import React, { Component } from 'react';
import List from './LIST/List';
import './App.css';
import STORE from './store';
const ConsoleLog = ({ children }) => {
  console.log(children);
  return false;
};

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}
class App extends Component {
  state = {
    store: STORE,
  }
  static defaultProps ={
    store:{
      lists:[],
      allCards:{},
    }
  };

  //to delete the cards from CARD: DeleteCard(){}
  //need to put a function to delete the card Ids and card first (see top)
  // don't get this function: why creating two consts again?
  //why the map function needs this: ({})
  
  // does setState always goes like ({})
  DeleteCard = (cardId) =>{
    const {lists, allCards} = this.state.store;
    const newLists =lists.map((list) =>({
      ...list,
      cardIds:list.cardIds.filter(id => id!==cardId)
    }));
    const newCards = omit(allCards, cardId);
    console.log(cardId)
    console.log(newCards)
    this.setState({
      store:{
        lists:newLists,
        allCards : newCards
      }
    })
    
  };

  // to add the cards from LIST: AddCard() {}
  // listId came from List(props){...} <button onClick = onAddCard(props.id)
  AddCard =(listId) => {
    const newRandomCard = () => {
      const id = Math.random().toString(36).substring(2, 4)
        + Math.random().toString(36).substring(2, 4);
      return {
        id,
        title: `Random Card ${id}`,
        content: 'lorem ipsum',
      }
    }
    const newCard = newRandomCard()
    const newLists = this.state.store.lists.map(list => {
      if(list.id === listId){
        return {
          ...list,
          cardIds:[...list.cardIds, newCard.id]
        };
      }
      return list;
    })
   this.setState({
     store:{
       lists:newLists,
       allCards:{
         ...this.state.store.allCards,
         [newCard.id]:newCard
       }
     }
   })
  }

  render(){
    const {store} = this.state;
    console.log(store.allCard, 'All cards')
    console.log(store.lists, 'List cards')
  return (
    <main className='App'>
      <header className="App-header">
      <h1>Trelloyes!</h1>
      </header>
      <div className='App-List'>
      {store.lists. map (list => <List 
      key = {list.id}
      id = {list.id}
      header = {list.header}
      cards = {list.cardIds.map (id =>
        store.allCards[id])}
        onDeleteItem = {this.DeleteCard}
        onAddItem = {this.AddCard}/>
     )}
     </div>
    </main>
  )
  

}
}
export default App;