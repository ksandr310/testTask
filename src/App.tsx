import React from 'react';
import logo from './logo.svg';
import { ListElement } from './types';
import { getListItems } from './utils';
import './App.css';

const App = () => {
    // d - List of items that can be updated with new additional items when the button is pressed
    const [list, setList] = React.useState<ListElement[]>([]);

    // Fills the List onmount
    React.useEffect(() => {
        setList(getListItems(20));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onClick = () => setList((list) => [...list, ...getListItems(20)]);

    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div>
                <button className={'App-button'} onClick={onClick}>
                    Add More
                </button>
            </div>
            <div>
                {list.map((item) => (
                    <div key={item.id} className={'App-item'}>
                        {'Title is: ' + item.title + '!'}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
