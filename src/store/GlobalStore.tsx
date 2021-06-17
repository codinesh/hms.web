import React, { createContext, useContext, useEffect, useReducer } from "react"
import { IGlobalState } from "../types/IGlobalState"
import IUser from "../types/IUser"

export enum GlobalStateAction {
  Busy,
  Idle,
  Error,
  LogIn,
  LogOut,
  SetPageTitle,
}

export type GlobalAction =
  | { type: GlobalStateAction.Busy }
  | { type: GlobalStateAction.Idle }
  | { type: GlobalStateAction.Error; error: string }
  | { type: GlobalStateAction.SetPageTitle; title: string }
  | { type: GlobalStateAction.LogIn; user: IUser }
  | { type: GlobalStateAction.LogOut }

const initialState: IGlobalState = {
  busy: false,
  error: false,
  pageTitle: "Home",
}

const globalStateContext = createContext<IGlobalState>(initialState)
const globalDispatchContext = createContext<React.Dispatch<GlobalAction>>(
  () => {}
)

const reducer = (state: IGlobalState, action: GlobalAction): IGlobalState => {
  switch (action.type) {
    case GlobalStateAction.Busy:
      return { ...state, busy: true }
    case GlobalStateAction.Idle:
      return { ...state, busy: false }
    case GlobalStateAction.Error:
      return { ...state, error: true, errorMessage: action.error }
    case GlobalStateAction.LogIn:
      return { ...state, user: action.user }
    case GlobalStateAction.LogOut:
      return { ...state, user: undefined }
    case GlobalStateAction.SetPageTitle:
      return { ...state, pageTitle: action.title }
    default:
      return state
  }
}

const GlobalStateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<
    React.Reducer<IGlobalState, GlobalAction>
  >(reducer, initialState)

  useEffect(() => {}, [])

  return (
    <globalStateContext.Provider value={state}>
      <globalDispatchContext.Provider value={dispatch}>
        {children}
      </globalDispatchContext.Provider>
    </globalStateContext.Provider>
  )
}

const useGlobalState = () => useContext(globalStateContext)
const useGlobalDispatch = () => useContext(globalDispatchContext)
const setTitle = (title: string) =>
  useGlobalDispatch()({ type: GlobalStateAction.SetPageTitle, title })

export { GlobalStateProvider, useGlobalState, useGlobalDispatch, setTitle }
