import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Card } from '../design-system/atoms/card.atom';
import { Chip } from '../design-system/atoms/chip.atom';
import { Paragraph } from '../design-system/atoms/paragraph.atom';
import { Title } from '../design-system/atoms/title.atom';
import { XlHeading } from '../design-system/atoms/xl-heading.atom';
import { Navbar } from '../design-system/molecules/nav-bar.molecule';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={'w-screen h-screen snap-y snap-mandatory overflow-scroll'}>
      <div
        className={
          'flex flex-col min-h-screen w-screen snap-start overflow-scroll items-center justify-between pb-8'
        }
      >
        <Navbar />
        {/*<div className={'max-w-screen-lg w-full'}>*/}
        <XlHeading>Hey, I&apos;m Ed</XlHeading>
        {/*</div>*/}
        <Paragraph>Let&apos;s take a walk 👇</Paragraph>
      </div>

      <section
        className={'flex min-h-screen p-8 w-screen justify-center snap-start'}
      >
        <div className={'flex flex-col self-center max-w-screen-lg'}>
          <div className={'flex flex-col space-y-8 items-center'}>
            <div className={'text-center space-y-4'}>
              <XlHeading>Stuff I&apos;m good at 💪</XlHeading>
              <Paragraph>
                I&apos;ve been working as a software engineer since 2015. I have
                maintained, developed and launched a large number of projects. I
                like working on innovative ideas with TypeScript using NodeJS,
                React &amp; GraphQL.
              </Paragraph>
            </div>

            <div
              className={'grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 w-full'}
            >
              <Card>
                <div className={'m-8 space-y-2'}>
                  <Title>Backend development</Title>
                  <ul className={'list-disc'}>
                    <li>
                      <Paragraph>NodeJS (NestJS, KoaJS, ExpressJS)</Paragraph>
                    </li>
                    <li>
                      <Paragraph>Databases (SQL, NoSQL, Neo4j)</Paragraph>
                    </li>
                    <li>
                      <Paragraph>Protocols (GraphQL, REST, RPC)</Paragraph>
                    </li>
                    <li>
                      <Paragraph>Queues (RabbitMQ, Redis)</Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        Architecture (DDD, microservices, monorepo, CQRS)
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>Testing (Jest, Supertest)</Paragraph>
                    </li>
                  </ul>
                </div>
              </Card>
              <Card>
                <div className={'m-8 space-y-2'}>
                  <Title>Frontend development</Title>
                  <ul className={'list-disc'}>
                    <li>
                      <Paragraph>
                        SPA (React, React Native, NextJS, Styled Components)
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>Android (XML, Jetpack)</Paragraph>
                    </li>
                    <li>
                      <Paragraph>HTML, CSS, SCSS</Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        Testing (Jest, React Testing Library, Espresso, Cypress)
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>Build systems (Webpack, NX)</Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        Architecture (Clean Architecture, use cases, onion)
                      </Paragraph>
                    </li>
                  </ul>
                </div>
              </Card>
              <Card>
                <div className={'m-8 space-y-2'}>
                  <Title>Project management</Title>
                  <ul className={'list-disc'}>
                    <li>
                      <Paragraph>
                        Story/task estimation, sprint planning
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        Leading teams, mentoring, backlog grooming
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>Code review</Paragraph>
                    </li>
                  </ul>
                </div>
              </Card>
              <Card>
                <div className={'m-8 space-y-2'}>
                  <Title>UI/UX design</Title>
                  <ul className={'list-disc'}>
                    <li>
                      <Paragraph>
                        Design mockup (low fidelity, high fidelity)
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>
                        Hypothesis testing, Agile feedback loops
                      </Paragraph>
                    </li>
                    <li>
                      <Paragraph>Client requirement gathering</Paragraph>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className={'h-screen w-screen snap-start'}>
        <div
          className={
            'flex flex-col h-screen w-screen snap-start overflow-scroll items-center justify-center pb-8 space-y-4'
          }
        >
          <XlHeading>The past</XlHeading>
        </div>
      </section>

      <section className={'h-screen w-screen snap-start'}>
        <div
          className={
            'flex flex-col h-screen w-screen snap-start overflow-scroll items-center justify-center pb-8 space-y-4'
          }
        >
          <XlHeading>The present</XlHeading>
        </div>
      </section>

      <section className={'h-screen w-screen snap-start'}>
        <div
          className={
            'flex flex-col h-screen w-screen snap-start overflow-scroll items-center justify-center pb-8 space-y-4'
          }
        >
          <XlHeading>The future</XlHeading>
          <Paragraph>Think I could be a good fit? Let&apos;s chat 🤝</Paragraph>

          <div className={'flex flex-row space-x-1'}>
            <Chip onClick={() => router.push('/cv')}>CV</Chip>
            <Chip onClick={() => router.push('/portfolio')}>Portfolio</Chip>
            <Chip onClick={() => window.open('mailto:oflynned@gmail.com')}>
              Email
            </Chip>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
