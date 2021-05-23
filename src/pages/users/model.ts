import { Reducer, Effect, Subscription } from 'umi';
import { getRemoteList } from './service';

interface userModelType {
  namespace: 'users',
  state: {},
  reducers: {
    getList: Reducer
  },
  effects: {
    getRemote: Effect
  },
  subscriptions: {
    setup: Subscription
  }

}

const userModel: userModelType = {
  namespace: 'users',
  state: {
    userList:[]
  },
  reducers: {
    getList(state, action) {
      console.log(action);
      return {
        ...state,
        ...action.payload
      }

    },
  },
  effects: {
    * getRemote({ payload }, { call, put }) {
      console.log(payload);
      const res = yield call(getRemoteList);
      console.log(res, 111111111);
      yield put({
        type: 'getList',
        payload: {
          userList:res.data
        },
      });

    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen((location, action) => {
        if (location.pathname === '/users') {
          dispatch({
            type: 'getRemote',
            payload: {},
          });

        }
      });

    },

  },
};

export default userModel;
