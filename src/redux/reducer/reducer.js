
import { ALL_CARDS,ADD_FAVORITE, DELETE_FAVORITE,DELETE_CARD ,LINCK,FILTERS} from "../actions/actions"

const initialState  ={
    drive:[],
    allcards:[],
    savefilter:[],
    favorite:[],
    detail:{},
  
}


const rootReducer=(state=initialState ,{type,payload})=>{
switch (type) {
    case ALL_CARDS:
       return{...state,
        allcards:payload.results,
        savefilter:payload.results,
        drive:payload.info
    }
    case  ADD_FAVORITE:
        return{
            ...state,
            favorite:[...state.favorite,payload]
        }
    case DELETE_FAVORITE:
        return{
            ...state,
            favorite:state.favorite.filter(data=>{
                return data.id!==payload
            })
        }
    case DELETE_CARD:
        return{
            ...state,
            allcards:state.allcards.filter(data=>{
                return data.id!==payload
            })
        }
        case LINCK:
            return{
                ...state,
                allcards:payload.results,
                drive:payload.info,
                savefilter:payload.results

            }
        case FILTERS:
            return{
                ...state,
                allcards:payload
            }



    default:
       return{
        ...state
       }
}
}
export default rootReducer