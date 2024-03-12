export default function Header(props) {
  return (
    <>
      <h1>Header</h1>
      <p>{props.nombre}</p>
      <p>{props.apellido}</p>
    </>
  );
}
