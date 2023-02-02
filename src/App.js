import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="2136bcdd-3a3c-42f5-b11b-fed79fa39ed6"
            userName="nicklazzari"
            userSecret="123123"
            renderChatFeed={(chatAppPrompts) => <ChatFeed { ... chatAppPrompts}/> }
        />
    );
};

export default App