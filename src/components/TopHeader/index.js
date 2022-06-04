import React from 'react';
import useStyles from './styles';

const Index = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
        <div className={classes.overlay} />
        <div className={classes.content}>
            <h1>SupaCommerce Online Shop</h1>
            <h4>Easily & Securely Shop Online</h4>
        </div>
    </div>
  )
}

export default Index