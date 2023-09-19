import { BarOfPercentage } from '@/components/barpercentage'
import { Knowledge } from '@/components/knowledge';
import { ExtraSkills } from '@/components/extraskills';

const Index = () => {
  return (
    <section>
      <div className='flex flex-col w-full items-center'>
        <span>holi</span>
        <BarOfPercentage text={'Bobo'} percentageKnow={'30'} percentage={30} />
        <Knowledge icon={'/coding.svg'} knowledge={"Web Development"} description={"Blog, E-Commerce"} alt={"texto alternativo"} />
        <ExtraSkills text={"holi"} />
      </div>
    </section>

  );
};

export default Index 