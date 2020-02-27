import React from 'react';

import Aux from '../../higer-order-comp/Aux';
import classes from './Layout.css';

const layout = ( props ) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;