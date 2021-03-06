import React from 'react';
import SEO from '../../components/seo/seo';
import Layout from '../../components/layout/layout';
import {graphql, StaticQuery} from 'gatsby';

import Chapter from '../../components/chapter/chapter';
import Projects from '../../components/projects/projects';

class MobiPage extends React.Component {
  render() {
    return (
      <Layout fixNav={true}>
        <SEO title="Die Mobiliar - La Mobilière" />

        <section className="project extrabigspace">
          <main>
            <Chapter img={this.props.data.mobiDarkImage.childImageSharp.fluid}>
              <h1>Die Mobiliar</h1>
            </Chapter>

            <article className="info">
              <div>
                <p>
                  I collaborate with{' '}
                  <a href="https://www.mobiliar.ch/" rel="noopener noreferrer">
                    die Mobiliar
                  </a>{' '}
                  (La Mobilière, La Mobiliare), a Swiss insurance group that employs more than 4'000 persons, as an external developer.
                </p>
                <p>Through this mandate, I take part in all the activities and development of the team I am attached to.</p>
                <p>Together we develop Angular applications (SPA) and libraries which are integrated in the internal ERP of the company.</p>
              </div>
            </article>
          </main>
        </section>

        <section className="factsheet">
          <main>
            <Chapter icon="info-circle">
              <h2>Fact sheet</h2>
            </Chapter>

            <article>
              <div>
                <p>
                  <strong>Technology:</strong>{' '}
                  <a href="http://angular.io" rel="noopener noreferrer">
                    Angular
                  </a>
                </p>
                <p>
                  <strong>Website:</strong>{' '}
                  <a href="https://www.mobiliar.ch" rel="noopener noreferrer">
                    {' '}
                    mobiliar.ch
                  </a>
                </p>
              </div>
              <div>
                <p>
                  <strong>Infrastructure:</strong> Die Mobiliar provides its own IT-Services solution
                </p>
              </div>
            </article>
          </main>
        </section>

        <Projects filter={'mobi'} />
      </Layout>
    );
  }
}

const MobiPageQuery = () => (
  <StaticQuery
    query={graphql`
      query {
        mobiDarkImage: file(relativePath: {eq: "portfolio/mobi-dark-icon.png"}) {
          childImageSharp {
            fluid(maxWidth: 240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => <MobiPage data={data} />}
  />
);

export default MobiPageQuery;
