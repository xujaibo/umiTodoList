import { Reducer, Effect, Subscription } from 'umi';
import { getRemoteList, editUser, addUser } from './service';

interface userModelType {
  namespace: 'users';
  state: {};
  reducers: {
    getList: Reducer;
  };
  effects: {
    getRemote: Effect;
  };
  subscriptions: {
    setup: Subscription;
  };
}

const userModel: userModelType = {
  namespace: 'users',
  state: {
    userList: [],
  },
  reducers: {
    getList(state, action) {
      console.log(action);
      return {
        ...state,
        ...action.payload,
      };
    },
  },
  effects: {
    *getRemote({ payload }, { call, put }) {
      console.log(payload);
      const res = yield call(getRemoteList);
      console.log(res, 'getRemote111111111');
      // return res
      yield put({
        type: 'getList',
        payload: {
          userList: res.data,
        },
      });
    },
    *editUsers({ payload }, { call, put }) {
      const res = yield call(editUser, payload);
      return res;
    },
    *addUsers({ payload }, { call, put }) {
      console.log(payload);
      const res = yield call(addUser, payload);
      return res;
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen((location, action) => {
        if (location.pathname === '/users') {
        }
      });
    },
  },
};

export default userModel;
