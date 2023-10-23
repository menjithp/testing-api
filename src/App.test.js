import { render, screen } from '@testing-library/react';
import App from './test';
import axios from 'axios'

import data from './data'

jest.mock('./data.js',()=>{
  return {
    p:jest.fn().mockImplementationOnce(()=><p>honey</p>)
    
  }
});

test('renders learn react link', async() => {

  jest.spyOn(window, 'fetch').mockImplementationOnce(() =>Promise.resolve({
      json: () => Promise.resolve({title:"menjith"}),
      status:200
    }))

  jest.spyOn(axios,'get').mockImplementationOnce(()=>Promise.resolve({
    data:{title:"pratish"},
    status:200
  }))



  screen.debug()
  const {findByText}=render(<App />);
  const linkElement =await findByText(/menjith/i);
  console.log(linkElement)
  expect(linkElement).toBeInTheDocument();

  const linkElement2 =await findByText(/pratish/i);
  console.log(linkElement2)
  expect(linkElement2).toBeInTheDocument();

  const linkElement3 =await findByText(/honey/i);
  console.log(linkElement3)
  expect(linkElement3).toBeInTheDocument();

expect(data).toBeCalled()
});
