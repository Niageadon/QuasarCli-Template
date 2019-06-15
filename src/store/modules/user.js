// import  * as fireBase from 'firebase/app'

/* class User {
  constructor (id) {
    this.id = id
  }
} */

export default {
  state: {
    localStorageData: {},
    user: null,
    userName: null,
    loadingUserInfo: false,
    success: false, // успешный логин или регистрация
    errorMessage: '',
    loggedIn: false
  },

  getters: {
    USERNAME: state => {
      return state.userName
    },

    LOADINGUSERINFO: state => {
      return state.loadingUserInfo
    },
    USER: state => {
      return state.user
    },
    ERRORMESSAGE: state => {
      return state.errorMessage
    },
    SUCCESS: state => {
      return state.success
    },
    isUserAuthorized: state => {
      return state.user !== null
    }

  },

  mutations: {
    setUser (state, payload) {
      state.user = payload
    },

    setError (state, payload) {
      state.errorMessage = payload
    },

    setLoading (state, payload) {
      state.loadingUserInfo = payload
    },

    setSuccess (state, payload) {
      state.success = payload
    },

    setUserName (state, payload) {
      state.userName = payload
    }

  },

  actions: {
    /* async registerUser({commit}, {email, password}){
      commit('setLoading', true);
      commit('setError', '');
      commit('setSuccess', false);

      try {
        const user = await fireBase.auth().createUserWithEmailAndPassword(email, password);
        commit('setUser', new User(user.uid));
        commit('setUserName', user.email);
        commit('setSuccess', true);
      }
      catch(error){
        commit('setLoading', false);
        commit('setError', error.message);
        //console.log(error)
        throw error
      }
      finally {
        commit('setLoading', false);
      }

    }, */

    /* async login ({ commit }, { email, password }) {
      commit('setLoading', true)
      commit('setSuccess', false)
      commit('setError', '')

      try {
        const user = await fireBase.auth().signInWithEmailAndPassword(email, password)
        commit('setSuccess', true);
        commit('setUser', new User(user.user.uid));
      }
      catch (error){
        commit('setError', error.message);
      }
      finally {
        commit('setLoading', false);
      }
    }, */

    /* async logout ({ commit }) {
      await fireBase.auth().signOut();
      setTimeout(() =>{
        commit('setUser', null);
        commit('setUserName', null)
      }, 300)
    }, */

    /*    autoLogin ({ commit }, payload) {
      commit('setUser', payload.uid)
      commit('setUserName', payload.email)
    } */
  }

}
