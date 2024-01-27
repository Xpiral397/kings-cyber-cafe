import React, {useEffect, useRef, useState} from 'react';
import {Button} from '@nextui-org/button';
import {Input} from '@nextui-org/input';
import {ScrollShadow} from '@nextui-org/react';
import {SendOutlined, LinkOutlined} from '@mui/icons-material';

interface Message {
    timestamp: number;
    author: 'sender' | 'receiver';
    message: string;
}

export default function ChartEngine() {
    const [userCurrentInput, updateUserCurrentInput] = useState<string>('');
    const inputMessage = useRef<HTMLInputElement>(null);
    const messageSection = useRef<HTMLInputElement>(null);
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [reply, setReply] = useState<boolean>(false);

    const Sender = ({message}: {message: string}) => {
        return (
            <div className='flex items-left justify-end left-0'>
                <Button className='px-5 text-white bg-[#FF0000] rounded-[45px] font-[500] text-white '>
                    {message}
                </Button>
            </div>
        );
    };

    const Receiver = ({message, animate}: {message: string, animate?: boolean}) => {
        return (
            <div className='flex items-start justify-start'>
                <Button className={`${animate ? 'animate animate-pulse' : ""} px-10 py-3 rounded-[16px] text-black `}>{message}</Button>
            </div >
        );

    };
    const scrollToBottom = () => {
        if(messageSection.current) {
            const scrollContainer = messageSection.current;
            const lastChild = scrollContainer.lastElementChild as HTMLElement | null;

            if(lastChild) {
                lastChild.scrollIntoView({behavior: 'smooth'});
            }
        }
    };
    useEffect(() => {
        setIsTyping(true);
        const time = setTimeout(() => {
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    author: 'receiver',
                    message: 'Hello',
                    timestamp: new Date().getMilliseconds(),
                },
            ]);
            scrollToBottom()
            setIsTyping(false);
            setReply(false);
        }, 5000);
        return () => clearTimeout(time);
    }, [reply]);

    const replyMessage = () => {
        setMessages((prevMessages) => [
            ...prevMessages,
            {
                author: 'sender',
                message: userCurrentInput,
                timestamp: new Date().getMilliseconds(),
            },
        ]);
        if(messageSection.current) {
            messageSection.current.scrollTop = messageSection.current.scrollHeight
        }
        setReply(true);
        if(messageSection.current) {

            messageSection.current.scrollIntoView({behavior: 'smooth'})
        }
        updateUserCurrentInput('')
    };

    return (
        <div className='flex flex-col space-y-5 w-full rounded-md h-[500px] shadow-2xl bg-white'>
            <h1 className='h-[10%] text-slate-950 text-center text-[12px] font-[500]'>
                Your Messages are end-to-end encrypted
            </h1>
            <section className='flex-1'>
                <ScrollShadow ref={messageSection} orientation='horizontal' className='max-h-[300px] space-y-[25px] px-2 '>
                    {messages.map((item, index: number) => {
                        if(item.author === 'sender') {
                            return <Sender message={item.message} key={index} />;
                        } else if(item.author === 'receiver') {
                            return <Receiver message={item.message} key={index} />;
                        } else {
                            return <Receiver message={'Untrackable Message'} key={index} />;
                        }
                    })}
                    {
                        isTyping && <Receiver animate={true} message={'typing...'} />
                    }
                </ScrollShadow>
                <div className='h-full space-y-2 px-2 w-full absolute top-[580px]  flex-col items-center justify-center'>
                    <div>
                        <Input
                            onKeyDown={(e) => e.key === 'Enter' && userCurrentInput.length > 0 && replyMessage()}
                            ref={inputMessage}
                            value={userCurrentInput}
                            color='default'
                            onChange={(e) => updateUserCurrentInput(e.target.value)}
                            className='px-2 w-full hover:border-b-danger-500 focus:outline-none bg-white text-zinc-950 text-[14px] border-b border-zinc-500'
                            placeholder='Type Your Message Here'
                        />
                    </div>
                    <div className='mt-2 px-5 absolute w-full flex items-center justify-between'>
                        <LinkOutlined fontSize='inherit' className='rotate-45 text-[24px] font-[200]' />
                        {userCurrentInput.length > 0 && <div
                            onClick={replyMessage}
                            className='rounded-full flex justify-center items-center text-white w-10 h-10 bg-[#FF0000] '
                        >
                            <SendOutlined color='inherit' />
                        </div>
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}
