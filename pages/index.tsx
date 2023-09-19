import {RectanguloConBordesRedondeados} from '@/components/barpercent'
import { Knowledge } from '@/components/knowledge';

const Index = () => {
  return (
    <div className='flex flex-col w-full items-center'>
      <span>holi</span>
      <img src="../public/coding.svg" alt="oh nooo" />
      <RectanguloConBordesRedondeados text={'Bobo'} porcentaje={'30'} p={60}/>
      <Knowledge icon={'/coding.svg'} knowledge={"Web Development"} description={"Blog, E-Commerce"} alt={"texto alternativo"}/>
    </div>
  );
};

export default Index 