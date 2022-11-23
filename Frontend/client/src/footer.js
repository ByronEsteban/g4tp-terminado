const Footer = () => {
return(
  <div className="p-3 footer">
  <div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="#" className="nav-link px-2"></a><i className="bi bi-star text-warning"></i></li>

      <li className="nav-item"><a href="#" className="nav-link px-2 text-light">Inicio</a></li>

      <li className="nav-item"><i className="bi bi-star text-warning"></i><a href="#" className="nav-link px-2 text-muted"></a></li>

    </ul>
    <p className="text-light">Hecho por:
    Antezana Valentin, Heredia Federico, Lesta Ignacio, Perez Enzo,  Urriza Byron.
    </p>
    <p className="text-center fs-5 text-light">Preguntados La35</p>
  </footer>
</div>
</div>
  );
};
export default Footer;
