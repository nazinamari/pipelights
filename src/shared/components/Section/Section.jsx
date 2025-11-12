import Container from '../Container/Container';

export default function Section({ children }) {
  return (
    <section>
      <Container>{children}</Container>
    </section>
  );
}
