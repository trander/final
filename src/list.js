import React from 'react';
import ReactDOM from 'react-dom';

export class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let elem = (
            <div>
                <div id="daily"> Board </div>
            </div>
        );

        return elem;
    }
}


// let elem = (
//     <div>
//         <div className="daily_board">
//             <div>
//                 <div className="daily">12-05-2017
//                     <div className="vocalist">
//                         <ul></ul>
//                         <li><input type="checkbox"/> voca 1</li>
//                         <li><input type="checkbox"/> voca 2</li>
//                         <li><input type="checkbox"/> voca 3</li>
//                         <li><input type="checkbox"/> voca 4</li>
//                         <li><input type="checkbox"/> voca 5</li>
//                     </div>
//                 </div>
//             </div>
//             <div className="daily">11-05-2017
//                 <div className="vocalist">
//                     <ul></ul>
//                     <li><input type="checkbox"/> voca 1</li>
//                     <li><input type="checkbox"/> voca 2</li>
//                     <li><input type="checkbox"/> voca 3</li>
//                     <li><input type="checkbox"/> voca 4</li>
//                 </div>
//             </div>
//             <div className="daily">10-05-2017
//                 <div className="vocalist">
//                     <ul></ul>
//                     <li><input type="checkbox"/> voca 1</li>
//                     <li><input type="checkbox"/> voca 2</li>
//                     <li><input type="checkbox"/> voca 3</li>
//                     <li><input type="checkbox"/> voca 4</li>
//                     <li><input type="checkbox"/> voca 5</li>
//                     <li><input type="checkbox"/> voca 6</li>
//                     <li><input type="checkbox"/> voca 7</li>
//                 </div>
//             </div>
//         </div>
//     </div>
// );
