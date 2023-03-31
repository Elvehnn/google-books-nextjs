import { FC, ReactElement, useRef } from 'react';
import Footer from '../Footer/Footer';
import { Search, SearchPanelStyle } from '../Search/Search';
import styles from './MainLayout.module.scss';
import { CSSTransition } from 'react-transition-group';

type MainLayoutProps = {
  children?: ReactElement;
  searchClassname: string;
  background?: boolean;
};

const MainLayout: FC<MainLayoutProps> = ({ children, searchClassname, background }) => {
  const mainBackground = background
    ? { background: `url('./ZoCtEVBYKzo.jpg') no-repeat top center / cover` }
    : { backgroundColor: '#FFF' };

  const nodeRef = useRef(null);

  return (
    <CSSTransition in={true} nodeRef={nodeRef} timeout={300} classNames="opacity" unmountOnExit>
      <div className={styles.main} style={mainBackground} ref={nodeRef}>
        <section className={styles.main__search}>
          <Search classname={searchClassname} />
        </section>
        {children}
        <Footer />
      </div>
    </CSSTransition>
  );
};

export default MainLayout;
