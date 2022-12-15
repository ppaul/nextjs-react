import React from 'react';
import styles from './index.module.css';
import Card from './Card';
import { initStore, initialCards, addItem } from '../store';

class Index extends React.Component {
  static getInitialProps = initStore.getInitialAppProps((store) => async () => {
    return store.dispatch(initialCards());
  });

  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <img src="/logo.png" className={styles.logo} alt="logo" />
        </header>
        <div className={styles.grid}>
          {
            this.props.cards.map((card) => <Card key={card.id} />)
          }
        </div>
        {/*<button onClick={() => dispatch(addItem())}>Add Item</button>*/}
      </div>
    )
  }
}

export default initStore.withRedux(Index);