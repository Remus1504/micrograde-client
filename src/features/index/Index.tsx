import { FC, LazyExoticComponent, ReactElement, Suspense, lazy } from 'react';
import { IHeader } from 'src/shared/header/interfaces/header.interface';
import Hero from './Hero';
import CourseTabs from './course-tabs/CourseTabs';
import HowItWorks from './course-tabs/HowItWorks';
import Categories from './course-tabs/Categories';

const IndexHeader: LazyExoticComponent<FC<IHeader>> = lazy(
  () => import('src/shared/header/components/Header')
);

const Index: FC = (): ReactElement => {
  return (
    <div className="flex flex-col ">
      <Suspense>
        <IndexHeader navClass="navbar peer-checked:navbar-active fixed z-20 w-full border-b border-gray-100 bg-white/90 shadow-2xl shadow-gray-600/5 backdrop-blur dark:border-gray-800 dark:bg-gray-900/80 dark:shadow-none" />
        <Hero />
        <CourseTabs />
        <HowItWorks />
        <Categories />
      </Suspense>
    </div>
  );
};

export default Index;
