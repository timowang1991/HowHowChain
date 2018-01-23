import React, { Component } from 'react';
import KolListItem from './KolListItem';
import kolList from '../../config/kollisting';

class KolList extends Component {
    render() {
        return (
            <div className="W(100%)">
                <ul className="W(1028px) M(a)">
                    {kolList.map((item, idx) =>
                        <KolListItem key={`kolList-${idx}`} {...item} />
                    )}    
                </ul>
            </div>
        );
    }
}

export default KolList;