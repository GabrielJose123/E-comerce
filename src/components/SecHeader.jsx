import logo from '../assets/logo.png.svg';
import lupaIcon from '../assets/Link.svg';
import telephoneIcon from '../assets/span.icon.svg';
import cycleIcon from '../assets/Cycle.svg';
import Heart from '../assets/Heart.svg';
import Profile from '../assets/Profile.svg';
import Car from '../assets/Backpack.svg';
import { useHoverMargin } from '../hooks/HoverImgEffect';

const FlexCenterBox = ({ children, width = 'auto', bg = 'transparent' }) => (
  <div
    style={{
      width,
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: bg,
    }}
  >
    {children}
  </div>
);


const ImageIcon = ({ src, alt, style = {} }) => {
  const hover = useHoverMargin('1rem');

  return (
    <img
      src={src}
      alt={alt}
      {...hover}
      style={{
        ...style,
        ...hover.style,
      }}
    />
  );
};


const ActionIcon = ({ children }) => (
  <div style={{ 
    height: '60%',
    width: '70%',
    display: 'flex',
    alignItems: 'center', // <- mude de 'start' para 'center'
    justifyContent: 'center',
    gap: '2rem',
    overflow: 'visible', // <- adicione isso
  }}>
    {children}
  </div>
);


export const SecHeader = () => {
  return (
    <div className="secHeader">
    
      <FlexCenterBox width="15%" bg="white">
        <ImageIcon
          src={logo}
          alt="Logo"
          style={{ backgroundColor: 'white', minHeight: '50%', minWidth: '50%' }}
        />
      </FlexCenterBox>

      <div className="HeadInput">
        <div className="inputChild">
          <input className="SearchHead" placeholder="Pesquise Algo..." type="text" />
          <ImageIcon
            src={lupaIcon}
            alt="Pesquisar"
            style={{ cursor: 'pointer', marginLeft: '3rem', minHeight: '15%', minWidth: '15%' }}
          />
        </div>
      </div>

      <div className="headNum">
        <ImageIcon src={telephoneIcon} alt="Telefone" />
        <h2 style={{height:'80%' ,minHeight: '70%', minWidth: '70%', color: 'rgb(46, 46, 46)' }}>
          (00) 91234-5678
        </h2>
      </div>

      
      <div className="ActionIcons">
        <ActionIcon>
            <ImageIcon src={cycleIcon} alt="Ícone Ciclo" style={{ cursor:'pointer', width: '45%', height: '100%' }} />

            <ImageIcon src={Heart} alt='heart' style={{ cursor:'pointer', width: '45%', height: '100%' }}></ImageIcon>

            <ImageIcon src={Profile} alt='Profile' style={{ cursor:'pointer',  marginTop:'0.5rem',width: '60%', height: '100%' }}></ImageIcon>

            <ImageIcon src={Car} alt='Profile' style={{ cursor:'pointer',  width: '45%', height: '100%' }}></ImageIcon>
        </ActionIcon>
      </div>
    </div>
  );
};
