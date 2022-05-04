// 导入createStore用来创建redux的核心： store
import { createStore, applyMiddleware, combineReducers  } from 'redux'
// 导入支持异步的 middleware
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
// 引入为markdown组件服务的reducer
import markdownReducer from './markDown/reducer'

/**
 * 一般在项目中，不会只使用一个reducer，而是多个reducer并存，但是使用createStore 函数创建store时，只允许传入一个reducer
 * 所以，需要使用combineReducers 方法，将多个reducer 合为一个
 *
 *  */

/**
 * combineReducers 接受一个对象作为参数，参数对象的key ，就是redux 向组件中传值时的props 的名字，value就是对应的reducer
 * 例： cmarkdown: cmarkdownReducer,表示将 cmarkdown 赋值给 count属性，那么卫门在将store 传给provider之后，
 * 就可以在组件中使用connect 函数合并UI组件和容器组件时，接收到store,然后store/state.count就可以获取到该store的值
 *  */
const allReducers = combineReducers({
  markdown: markdownReducer
})

// 调用 createStore api 创建核心store
const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))// createStore 函数接受第二个参数，为调用中间件函数，为store添加中间件
export type RootState = ReturnType<typeof store.getState>
export default store