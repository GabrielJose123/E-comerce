import logo from '../assets/logo.png.svg'

export const SecHeader = () => {
    return (
        <div className="secHeader">
            <div style={{height:'100%',width:'15%',display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
                <img src={logo} alt="" />
            </div>
            
        </div>
    );
};