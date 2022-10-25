import {useState, useEffect} from 'react'
import styles from "./Message.module.css"


const Message = ({type, msg}) => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!msg) {
            setVisible (false)
            return
            
        }
        console.log (msg)
        setVisible (true)

        const timer = setTimeout(() => {
            setVisible (false)
        }, 3000)

        return () =>clearTimeout(timer)

    }, [msg])

    return ( 
    <>
    {visible && (
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div> 
    )}
    </>
    )
}
export default Message