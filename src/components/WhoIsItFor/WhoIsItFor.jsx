import Container from '../../shared/components/Container/Container';
import Section from '../../shared/components/Section/Section';
import css from './WhoIsItFor.module.css';
import * as images from './img';

export default function WhoIsItFor() {
  return (
    <Section>
      <Container>
        <h2 className={'headingSection'}>Who it’s for</h2>
        <ul>
          <li className={css.card}>
            {/* lamp icon */}
            <h3 className={'headingSubsection'}>For Interior Designers</h3>
          </li>
          <li className={css.card}>
            {/* cafe icon */}
            <h3 className={'headingSubsection'}>For Cafes & Showrooms</h3>
          </li>
          <div>
            <picture>
              <source
                media="(min-width: 1440px)"
                srcSet={`${images.desktop} 1x, ${images.desktop2x} 2x`}
              />

              <source
                media="(min-width: 744px)"
                srcSet={`${images.tablet} 1x, ${images.tablet2x} 2x`}
              />

              <img
                src={images.mobile}
                srcSet={`${images.mobile} 1x, ${images.mobile2x} 2x`}
                alt="Handcrafted lamp made from a vintage camera"
              />
            </picture>
          </div>
          <p className={'bodyRegular'}>
            Each lamp goes through numerous stages of creation — from pipe to
            final assembly. We bring stories to light.
          </p>
        </ul>
      </Container>
    </Section>
  );
}
