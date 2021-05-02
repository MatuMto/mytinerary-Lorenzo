import axios from 'axios'
const authActions = {

   registerUser: (userToSave)=>{
      return async(dispatch, getState) => {
         const response = await axios.post('http://localhost:4000/api/user/signUp', userToSave)
         console.log(response)
         if(response.data.success){
            alert('Successfully registered')
         } else{
            // alert('Looks like that mail is actually taken :v')
            // response.data.error.map(error =>console.log(error))
            return response.data.errors //asi retorno directamente al componente que está llamando a esta action 
            // return false // esto haria que se corte acá y la accion no continue hacia el reducer
         }
         dispatch({type: 'LOG_USER', payload: response.data.success ? response.data.response : null})
         // le pongo LOG_USER porque el trabajo del front es el mismo tanto en register como en log. Mandar Info y luego recibir La Info o el error.
      }
   } ,
   
   logUser: (incomingUser)=>{
      return async(dispatch, getState)=>{
         const response = await axios.post('http://localhost:4000/api/user/signIn', incomingUser)
         console.log(response.data)
         if(response.data.success){
            alert('Bienvenido ' + response.data.response.name + '!')
         } else {
            // probando lo que va abajo 
            // alert('Mail or Password incorrect, please try again')
            alert(response.data.error)
         }
         dispatch({type: 'LOG_USER', payload: response.data.success ? response.data.response : null})
         // le pongo LOG_USER porque el trabajo del front es el mismo tanto en register como en log. Mandar Info y luego recibir La Info o el error.
      }
   },

   logOutUser: ()=>{
      return (dispatch, getState) => {
         dispatch({type: 'LOGOUT_USER'})
      }
   },
   
   forcedLoginByLS: (usuarioLS)=>{
      return async(dispatch, getState)=>{
         try {
            const response = await axios.get('http://localhost:4000/api/user/loginLS', {
               headers:{
                  'Authorization': 'Bearer '+usuarioLS.token
               }
            })
            dispatch({type: 'LOG_USER', payload: {
               ...response.data.response,
               token: usuarioLS.token
            }})
         } catch(err){
            if(err.response.status === 401){
               alert('Invalid token -.-')
            }
         }
      }
   }
}

export default authActions