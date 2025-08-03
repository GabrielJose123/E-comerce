import Packageimg from '../assets/Package.svg'
import Car from '../assets/car.svg'
import Eye from '../assets/Eye.svg'

export const ActionContent = () => {
    return (
        <div className="actionContent">
            <div className="sell">
                <img style={{height:'5vh',width:'3vh'}} src={Packageimg} alt="" /><p style={{fontWeight:'700', fontSize:'2vh'}}>Compre e Venda</p>
            </div>
                
            <div className='sell'>
                <img style={{height:'5vh',width:'3vh'}} src={Car} alt="" /><p style={{fontWeight:'700', fontSize:'2vh'}}>Rastreamento</p>
            </div>

            <div className='sell'>
                <img style={{height:'5vh',width:'3vh'}} src={Eye} alt="" /><p style={{fontWeight:'700', fontSize:'2vh'}}>Vistos Recentes</p>
            </div>
        </div>
    )
}