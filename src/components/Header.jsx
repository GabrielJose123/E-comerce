import headerBack from '../assets/headerBack.jpg';

export const Header = () => {
  return (
    <header style={{
      backgroundImage: `url(${headerBack})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
    </header>
  );
};