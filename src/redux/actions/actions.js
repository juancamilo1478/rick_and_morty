//cards
export const ALL_CARDS="ALL_CARD";
export const DELETE_CARD="DELETE_CARD";
//favorite
export const ADD_FAVORITE="ADD_FAVORITE";
export const DELETE_FAVORITE="DELETE_FAVORITO";
//next atras
export const LINCK="LINCK";
//detail card
export const DETAIL="DETAIL";
// filter
export const FILTERS="FILTERS";
export const allcards=()=>{
    return  function(dispatch){
        fetch (`https://rickandmortyapi.com/api/character/`)
         .then((response) => response.json())
         .then(data => dispatch({type:ALL_CARDS, payload:data}))
         }
}
export const deletecard=(id)=>{
   return{type:DELETE_CARD ,payload:id}
}
export const linck=(elemento)=>{
  return  function(dispatch){
        fetch (`${elemento}`)
         .then((response) => response.json())
         .then(data => dispatch({type:LINCK, payload:data}))
         }  
}
export const deletefavorito=(id)=>{
    return{type:DELETE_FAVORITE,payload:id}
}
export const detail=(id)=>{
 return  function(dispatch){
        fetch (`https://rickandmortyapi.com/api/character/${id}`)
         .then((response) => response.json())
         .then(data => dispatch({type:DETAIL, payload:data}))
         }
}
export const addfavorito=(elemento)=>{
    return  function(dispatch){
        fetch (`https://rickandmortyapi.com/api/character/${elemento}`)
         .then((response) => response.json())
         .then(data => dispatch({type:ADD_FAVORITE, payload:data}))
         }
}
export const filters=(filtered)=>{
    return{type:FILTERS,payload:filtered}
}








