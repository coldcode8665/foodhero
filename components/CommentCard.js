
import Image from "next/image";
import Style from '../styles/commentcard.module.css';

let CommentCard = ({text,user}) => {
    return ( 
    <div className={Style.commentCard}>
        <Image src="/icons/quotation.svg" height="50" width="50" className={Style.quotation}></Image>
        <Image src="/icons/stars.svg" height="100" width="100" className={Style.stars}></Image>
        <p className={Style.commentCardText}>{text}</p>

        <p className={Style.commentCardUser}>{user}</p>
    </div>)
}

export default CommentCard