import React from 'react';
import ReactDom from 'react-dom';
import endPage from '../endPage';

it("renders without crashing", () =>{
    const div = document.createElement("div");
    ReactDom.render(<endPage></endPage>,div)
})