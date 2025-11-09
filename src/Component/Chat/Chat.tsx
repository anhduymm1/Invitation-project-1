import { useState } from 'react';
import './Chat.scss';
import { IoMdSend } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { BsChatDotsFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const Chat = () => {
    const [visible, setVisible] = useState(true);

    return (
        <>
            <AnimatePresence>
                {visible ? (
                    <motion.div
                        className="chat"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4 }}
                        key="chat-box"
                    >
                        <div className='chat-header'>Gửi lời chúc của bạn</div>
                        <IoClose className='close-btn' onClick={() => setVisible(false)} />
                        <div className="chat-main">

                            {/* nội dung chat */}
                        </div>
                        <div className="send-chat">
                            <input type="text" />
                            <button>
                                <IoMdSend />
                            </button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        className="chat-toggle"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setVisible(true)}
                        key="chat-icon"
                    >
                        <BsChatDotsFill />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chat;
