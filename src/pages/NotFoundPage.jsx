import LinkButton from '../components/LinkButton';

function NotFoundPage({ navigate }) {
  return (
    <section className="page-section not-found">
      <p className="section-kicker">Page Not Found</p>
      <h1>This page is not available.</h1>
      <LinkButton to="/" navigate={navigate} className="button button-primary">
        Back Home
      </LinkButton>
    </section>
  );
}

export default NotFoundPage;
