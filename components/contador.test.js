import { render, fireEvent} from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import Botonmenos from './botonmenos';
import Botonmás from './botonmás';
import Contador from './contador';

describe('my tests', () => {

test('should button to have plus icon', () => {

  const component = render(
    <Contador />
  )
  const button = component.getByText('+')

  expect(button).toBeTruthy()

  }); 
  test('should button to have minus icon', () => {

    const component = render(
      <Contador />
    )
    const button = component.getByText('-')
  
    expect(button).toBeTruthy()
  
    }); 

  test('increments count by one when + is clicked', () => {
    
  const component = render(
    <Contador/>
  )

  fireEvent.click(component.getByText('+'))
  fireEvent.click(component.getByText('+'))

  let num = component.getByText('2')
  expect(num).toBeInTheDocument()
  
  })
  test('decrements count by one when - is clicked', () => {
    
    const component = render(
      <Contador/>
    )
  
    fireEvent.click(component.getByText('-'))
   
  
    let num = component.getByText('-1')
    expect(num).toBeInTheDocument()
    
    })
    test('clicking increment button calls event handler once', () => {
      const mockHandler = jest.fn()

      const component = render(
        <Botonmás increment={mockHandler} />
      )

      const button = component.getByText('Incrementar')
    fireEvent.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)

    })
    test('clicking decrement button calls event handler once', () => {
      const mockHandler = jest.fn()

      const component = render(
        <Botonmenos decrement={mockHandler} />
      )

      const button = component.getByText('Decrementar')
    fireEvent.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)

    })
    test('practice snapshot', () => {
      
      const component = renderer.create(
     <Contador></Contador>
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
  
    });

});