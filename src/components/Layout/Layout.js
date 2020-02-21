import React from 'react';
import Aux from '../../higer-order-comp/Aux';

const layout = (props) => (
    <Aux>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        < main>
            {props.children}
        </main>
    </Aux>
);

export default layout;