import s from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({onClick}) => (
    <button className={s.btn} type=" button" onClick={onClick}>Load more</button>
)

export default LoadMoreBtn