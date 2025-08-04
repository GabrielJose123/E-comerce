import logo from '../assets/logo.png.svg'
import Lupa from '../assets/lupa.png'

export const SecHeader = () => {
    return (
        <div className="secHeader">
            <div style={{height:'100%',width:'15%',display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
                <img src={logo} alt="" />
            </div>

            <div className='HeadInput'>
                <div className='inputChild'>
                    <input className='SearchHead' placeholder='Pesquise Algo' type="text" />
                    <img style={{cursor:'pointer', marginLeft:'3rem'}} src={Lupa} alt="" />
                </div>
            </div>

            <div></div>
        </div>
    );
};