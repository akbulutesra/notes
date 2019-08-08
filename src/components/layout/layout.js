import React from 'react';

import Aux from '../hoc/Aux';

import Notlar from '../Notlar/notlar';
import Kutucuklar from '../kutucuklar/kutucuklar';
import Iletisim from '../iletisim/iletisim';

class layout extends React.Component {
    render() {
        return (
            <Aux>
                <Notlar />
                <Kutucuklar />
                <Iletisim />
            </Aux>
        );
    }
}

export default layout;