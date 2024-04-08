// MessageContext.tsx
import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from 'react';

// Define interfaces for your state and actions
interface MessageState {
  users: Record<string, string[]>;
}

interface AddMessageAction {
  type: 'ADD_MESSAGE';
  payload: { userId: string; message: string };
}

type MessageAction = AddMessageAction;

// Create a reducer function
const messageReducer = (state: MessageState, action: MessageAction): MessageState => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      const { userId, message } = action.payload;
      return {
        ...state,
        users: {
          ...state.users,
          [userId]: [...(state.users[userId] || []), message],
        },
      };
    default:
      return state;
  }
};

// Define the context and its types
interface MessageContextProps {
  messages: MessageState['users'];
  addMessage: (userId: string, message: string) => void;
}

const MessageContext = createContext<MessageContextProps | undefined>(undefined);

// Create a context provider component
interface MessageProviderProps {
  children: ReactNode;
}

export const MessageProvider: React.FC<MessageProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(messageReducer, { users: {} });

  const addMessage = (userId: string, message: string) => {
    dispatch({ type: 'ADD_MESSAGE', payload: { userId, message } });
  };

  const value: MessageContextProps = {
    messages: state.users,
    addMessage,
  };

  return <MessageContext.Provider value={value}>{children}</MessageContext.Provider>;
};

// Create a custom hook to access the context
export const useMessage = (): MessageContextProps => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error('useMessage must be used within a MessageProvider');
  }
  return context;
};
