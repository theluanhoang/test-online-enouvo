import './Card.css'
interface IProps {
    image: string
}
function Card({ image }: IProps) {
    return (
        <div className='card'>
            <p className='card__title'>Lorem ipsum dolor sit amet</p>
            <article className='card__content'>
                <img src={image} alt="" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
            </article>
        </div>
    )
}

export default Card