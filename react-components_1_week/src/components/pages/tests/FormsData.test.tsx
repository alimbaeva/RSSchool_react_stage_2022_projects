import { getByTestId, render, screen, fireEvent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import React from 'react';
import FormsData from '../FormsData';
import CreatFormCart from '../../formCarts/CreatFormCart';

describe('when render FormsData file', () => {
  test('Click Input fireEvent', async () => {
    render(<FormsData />);
    // const textInput = screen.getByTestId('fname');
    // expect(screen.getByTestId('forms-names')).toHaveFormValues({
    //   fname: 'jane',
    //   rememberMe: true,
    // });
  });
});

describe('with valid inputs', () => {
  it('In the document', () => {
    render(<FormsData />);
    expect(screen.getByTestId('fname')).toBeInTheDocument();
    expect(screen.getByTestId('lname')).toBeInTheDocument();
    expect(screen.getByTestId('date-delivery')).toBeInTheDocument();
    expect(screen.getByTestId('myfile')).toBeInTheDocument();
    expect(screen.getByTestId('email')).toBeInTheDocument();
    expect(screen.getByTestId('male')).toBeInTheDocument();
    expect(screen.getByTestId('female')).toBeInTheDocument();
  });
  it('Input value firstName', () => {
    render(<FormsData />);
    const inputName = screen.getByTestId('fname') as HTMLInputElement;
    expect(inputName.value).toBe('');
    fireEvent.change(inputName, { target: { value: 'Aliya' } });
    expect(inputName.value).toBe('Aliya');
  });
  it('Input value lname', () => {
    render(<FormsData />);
    const inputName = screen.getByTestId('lname') as HTMLInputElement;
    expect(inputName.value).toBe('');
    fireEvent.change(inputName, { target: { value: 'Alomina' } });
    expect(inputName.value).toBe('Alomina');
  });
  it('Input value Date', () => {
    render(<FormsData />);
    const inputDate = screen.getByTestId('date-delivery') as HTMLInputElement;
    expect(inputDate.value).toBe('');
    fireEvent.change(inputDate, { target: { value: '27.01.2022' } });
    expect(inputDate.value).toBe('');
  });
  it('Input value email', () => {
    render(<FormsData />);
    const inputemail = screen.getByTestId('email') as HTMLInputElement;
    expect(inputemail.value).toBe('');
    fireEvent.change(inputemail, { target: { value: 'alia@maol.ru' } });
    expect(inputemail.value).toBe('alia@maol.ru');
  });
  it('Input value male', () => {
    render(<FormsData />);
    const inputmale = screen.getByTestId('male') as HTMLInputElement;
    expect(inputmale.value).toBe('male');
    fireEvent.change(inputmale, { target: { value: '' } });
    expect(inputmale.value).toBe('');
  });
  it('Input value female', () => {
    render(<FormsData />);
    const inputfemale = screen.getByTestId('female') as HTMLInputElement;
    expect(inputfemale.value).toBe('female');
    fireEvent.change(inputfemale, { target: { value: '' } });
    expect(inputfemale.value).toBe('');
  });
  it('Reset button', () => {
    render(<FormsData />);
    const inputName = screen.getByTestId('lname') as HTMLInputElement;
    expect(inputName.value).toBe('');
    fireEvent.change(inputName, { target: { value: 'Alomina' } });
    const inputemail = screen.getByTestId('email') as HTMLInputElement;
    expect(inputemail.value).toBe('');
    fireEvent.change(inputemail, { target: { value: 'alia@maol.ru' } });
    const inputmale = screen.getByTestId('male') as HTMLInputElement;
    expect(inputmale.value).toBe('male');
    fireEvent.change(inputmale, { target: { value: '' } });
    const inputfemale = screen.getByTestId('female') as HTMLInputElement;
    expect(inputfemale.value).toBe('female');
    fireEvent.change(inputfemale, { target: { value: '' } });

    const reset = screen.getByTestId('reset') as HTMLButtonElement;
    fireEvent.click(reset);

    expect(inputName.value).toBe('');
    expect(inputemail.value).toBe('');
    expect(inputmale.value).toBe('');
    expect(inputfemale.value).toBe('');
  });
});
