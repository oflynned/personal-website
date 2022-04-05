import { motion } from 'framer-motion';
import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { experience } from '../data/experience';
import { Card } from '../design-system/atoms/card.atom';
import { Chip } from '../design-system/atoms/chip.atom';
import { Paragraph } from '../design-system/atoms/paragraph.atom';
import { Title } from '../design-system/atoms/title.atom';
import { XlHeading } from '../design-system/atoms/xl-heading.atom';
import { Navbar } from '../design-system/molecules/nav-bar.molecule';

const Home: NextPage = () => {
  const router = useRouter();

  const currentJob = experience.positions.find((item) => !item.end);
  const hasJob = !!currentJob;
  const currentSituation = hasJob
    ? `Right now I'm working as a ${currentJob.title} at ${currentJob.company}, and have been doing so since ${currentJob.start}.`
    : `Right now either I'm taking a break from work and recharging, or doing freelance work.`;

  return (
    <div
      className={
        'w-screen h-screen sm:snap-y sm:snap-mandatory overflow-scroll'
      }
    >
      <div
        className={
          'flex flex-col min-h-screen w-screen snap-start overflow-scroll items-center justify-between pb-8'
        }
      >
        <Navbar />
        <div
          className={
            'w-full max-w-screen-lg flex flex-col sm:flex-row justify-between px-8'
          }
        >
          <div className={'self-center text-center sm:text-left'}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: 'easeIn', duration: 0.5 }}
            >
              <XlHeading>Hey, I&apos;m Ed.</XlHeading>
            </motion.div>
            <motion.div
              className={'mb-4'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: 'easeIn', duration: 0.5, delay: 1 }}
            >
              <Paragraph>I&apos;m a software engineer.</Paragraph>
            </motion.div>
          </div>
          <motion.div
            className={'max-w-xs self-center'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeIn', duration: 0.5, delay: 2 }}
          >
            <Image
              width={320}
              height={240}
              alt={'Me'}
              src={'/me.jpeg'}
              className={'rounded-3xl border-none align-middle'}
            />
          </motion.div>
        </div>
        <Paragraph>Let&apos;s take a walk 👇</Paragraph>
      </div>

      <section
        className={
          'flex min-h-screen px-4 py-8 w-screen justify-center snap-start'
        }
      >
        <div className={'flex flex-col self-center max-w-screen-lg'}>
          <div className={'flex flex-col space-y-8 items-center'}>
            <div className={'text-center'}>
              <XlHeading>Skills 💪</XlHeading>
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
                      <Paragraph>Queues (RabbitMQ, Kafka, Redis)</Paragraph>
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

      <section className={'min-h-screen w-screen snap-start'}>
        <div
          className={
            'flex flex-col min-h-screen w-screen snap-start overflow-scroll items-center justify-center space-y-4 px-4 py-8'
          }
        >
          <div className={'max-w-screen-lg space-y-4 text-center'}>
            <XlHeading>The past</XlHeading>
            <ol className={'text-left space-y-4'}>
              <li>
                <div>
                  <Title>2015</Title>
                  <Paragraph>
                    I started my first startup with some friends &mdash;
                    GlassByte.
                  </Paragraph>
                </div>
              </li>
              <li>
                <Title>2016</Title>
                <Paragraph>
                  I decided that making software at GlassByte was limited by a
                  lack of external professional experience.
                </Paragraph>
                <Paragraph>
                  I kicked it up to the next level by taking some time away from
                  GlassByte and started a summer internship at Accenture.
                </Paragraph>
              </li>
              <li>
                <Title>2017</Title>
                <Paragraph>
                  I graduated from Trinity College Dublin and left GlassByte a
                  few months later.
                </Paragraph>
              </li>
              <li>
                <Title>2018</Title>
                <Paragraph>
                  I worked at Swrve and got my hands dirty with a new language
                  and framework &mdash; Ruby on Rails.
                </Paragraph>
              </li>
              <li>
                <Title>2019</Title>
                <Paragraph>
                  I moved to Belgium and worked as a remote contractor for a few
                  months with devfair. Later that year, I started at Sortlist.
                </Paragraph>
              </li>
              <li>
                <Title>2020</Title>
                <Paragraph>I left Sortlist and joined Aaqua.</Paragraph>
              </li>
              <li>
                <Title>2021</Title>
                <Paragraph>
                  I worked on some interesting personal projects in my spare
                  time.
                </Paragraph>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className={'h-screen w-screen snap-start'}>
        <div
          className={
            'flex flex-col h-screen w-screen snap-start overflow-scroll items-center justify-center space-y-4 p-4'
          }
        >
          <div className={'text-center space-y-4'}>
            <XlHeading>The present</XlHeading>
            <Paragraph>{currentSituation}</Paragraph>
            <Paragraph>
              My preferred stack is NodeJS, TypeScript, NestJS, PostgreSQL &amp;
              ReactJS.
            </Paragraph>
            <Paragraph>
              In my spare time, I like to work on my own projects and hobbies.
            </Paragraph>
          </div>
        </div>
      </section>

      <section className={'h-screen w-screen snap-start'}>
        <div
          className={
            'flex flex-col h-screen w-screen snap-start overflow-scroll items-center justify-center px-4 py-8'
          }
        >
          <XlHeading>The future</XlHeading>
          <div className={'mb-8 mt-2 space-y-4 text-center flex flex-col'}>
            <div>
              <Paragraph>
                I am interested in working in innovative areas of technology
                that improve people&apos;s lives.
              </Paragraph>
              <Paragraph>
                I&apos;m also open to taking some risks and co-founding a
                startup as long as the focus is building a great product.
              </Paragraph>
            </div>
            <div className={'max-w-lg self-center'}>
              <Card>
                <div className={'p-4 text-left space-y-4'}>
                  <div>
                    <Title>This does not include ❌</Title>
                    <Paragraph>
                      Crypto, weapons, oil, tobacco, gambling, stock trading,
                      banks, auditing, services where engineers are the consumer
                    </Paragraph>
                  </div>
                  <div>
                    <Title>It depends on the company 🤷‍♂️</Title>
                    <Paragraph>
                      Social media, insurance, housing, travel
                    </Paragraph>
                  </div>
                  <div>
                    <Title>This does include ✅</Title>
                    <Paragraph>
                      Health, languages, ethical management, environment,
                      marketplaces, content streaming, transport, education,
                      communication, fitness, logistics, music
                    </Paragraph>
                  </div>
                </div>
              </Card>
            </div>
            <Paragraph>
              Think I could be a good fit? Let&apos;s chat over a coffee 🤝
            </Paragraph>
          </div>

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
