export const ImgAnimal = (props) => (
    <div className="AnimalImg">
        <img style={{
            width:'75%',
            height:'55%',
            transition:'0.5s ease-in-out',
            border:'1px solid gray',
            borderRadius:'500rem',
            cursor:'pointer'
        }}
        className="img"
        src={props.img} alt="" />
    </div>
)