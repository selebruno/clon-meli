import React from 'react';
import HomeButtons from './HomeButtons';

import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { Image } from "@chakra-ui/react";

configure({ adapter: new Adapter() });

describe('<HomeButtons />', () => {
    let homeButtons;
    const creditCardImage = 'https://res.cloudinary.com/dbduj98i3/image/upload/v1635284886/credit-card_tlyfij.svg';
    const debitCardImage = 'https://res.cloudinary.com/dbduj98i3/image/upload/v1635284886/credit-card_tlyfij.svg';
    const mercadoPagoImage = 'https://res.cloudinary.com/dbduj98i3/image/upload/v1635284882/mercado-creditsv2_y6xc17.svg';
    const cashImage = 'https://res.cloudinary.com/dbduj98i3/image/upload/v1635284886/credit-card_tlyfij.svg';

    beforeEach(() => {
        homeButtons = mount(<HomeButtons />);
    });

    it('Deberia renderizar una serie de componentes de Stack', () => {
        expect(homeButtons.find('div').length).toBeGreaterThanOrEqual(1);

    });

    it('Deberia renderizar una serie de componentes de Text', () => {
        expect(homeButtons.find('p').length).toBeGreaterThanOrEqual(1);

    });

    it('Deberia renderizar el texto "Tarjeta de crédito" y una imagen correspondiente', () => {
        expect(homeButtons.text().includes("Tarjeta de crédito")).toBeTruthy();
        expect(homeButtons.find(Image).at(0).props().src).toBe(creditCardImage);
    });

    it('Deberia renderizar el texto "Tarjeta de débito" y una imagen correspondiente', () => {
        expect(homeButtons.text().includes("Tarjeta de débito")).toBeTruthy();
        expect(homeButtons.find(Image).at(1).props().src).toBe(debitCardImage);
    });

    it('Deberia renderizar el texto "Cuotas sin tarjeta" y una imagen correspondiente', () => {
        expect(homeButtons.text().includes("Cuotas sin tarjeta")).toBeTruthy();
        expect(homeButtons.find(Image).at(2).props().src).toBe(mercadoPagoImage);
    });

    it('Deberia renderizar el texto "Efectivo" y una imagen correspondiente', () => {
        expect(homeButtons.text().includes("Efectivo")).toBeTruthy();
        expect(homeButtons.find(Image).at(3).props().src).toBe(cashImage);
    });

});
