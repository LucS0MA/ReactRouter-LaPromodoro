function DisplayCard({ name, id, image }) {
  return (
    <div className="Dcard-Global">
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
}
export default DisplayCard;
