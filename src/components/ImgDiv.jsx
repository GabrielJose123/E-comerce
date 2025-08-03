export const ImgDiv = (props) => {
  return (
    <img
      style={{ height: '100%', width: '100%' }}
      src={props.src || ''}
      alt={props.alt || 'image'}
    />
  );
};

export default ImgDiv;
