import { FC } from 'react';
import { experience } from '../data/experience';
import { Heading } from '../design-system/atoms/heading.atom';
import { Paragraph } from '../design-system/atoms/paragraph.atom';
import { Page } from '../design-system/components/page';
import { Header } from '../design-system/molecules/header.molecule';
import { WorkHistory } from '../design-system/molecules/work-history.molecule';

const Resume: FC = () => {
  const {
    name,
    summary,
    email,
    links,
    positions,
    education,
    languages,
    awards,
  } = experience;
  return (
    <div className={'w-screen min-h-screen flex justify-center'}>
      <Page>
        <Header name={name} summary={summary} email={email} links={links} />
        <div className={'mt-8'}>
          <WorkHistory positions={positions} />
        </div>

        <Heading content={'Projects'} />
        <div className={'mt-2'}>
          <Paragraph
            content={
              'I have a lot of projects. Head to here for a full overview'
            }
          />
        </div>

        <div className={'mt-8'}>
          <Heading content={'Languages'} />
          <div className={'mt-2'}>
            <Paragraph content={languages.join(', ')} />
          </div>
        </div>

        <div className={'mt-8'}>
          <Heading content={'Awards'} />
          <ul className={'mt-2'}>
            {awards.map((award) => (
              <li key={award}>
                <Paragraph content={award} />
              </li>
            ))}
          </ul>
        </div>
      </Page>
    </div>
  );
};

export default Resume;
