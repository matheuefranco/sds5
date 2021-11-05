function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">
          App desenvolvido por{" "}
          <a
            href="https://github.com/matheuefranco"
            target="_blank"
            rel="noreferrer"
          >
            Matheus Franco
          </a>
        </p>
        <p className="text-light">
          <small>
            <strong>Semana Spring React</strong>
            <br />
            Evento promovido pela escola DevSuperior:{" "}
            <a
              href="https://github.com/matheuefranco"
              target="_blank"
              rel="noreferrer"
            >
              Matheus Dev
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
