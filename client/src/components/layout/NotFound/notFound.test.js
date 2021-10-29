import React from 'react';
import NotFound from './NotFound';

import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { Image } from "@chakra-ui/react";

const errorImage = "https://res.cloudinary.com/dbduj98i3/image/upload/v1635254238/busqueda_olgwwp.png"

configure({ adapter: new Adapter() });

describe('<NotFound />', () => {
    let notFound;
    
    beforeEach(() => {
        notFound = mount(<NotFound />);
    });

    it('Deberia renderizar una lista desordenada con los pasos a seguir si no se encuentra la página', () => {
        expect(notFound.find('ul').length).toBeGreaterThanOrEqual(1);
        expect(notFound.find('li').length).toBeGreaterThanOrEqual(1);

    });

    it('Deberia renderizar una serie de componentes de Stack', () => {
        expect(notFound.find('div').length).toBeGreaterThanOrEqual(1);

    });

    it('Deberia renderizar una serie de componentes de Texto', () => {
        expect(notFound.find('p').length).toBeGreaterThanOrEqual(1);

    });

    it('Deberia renderizar una imagen de error', () => {
        expect(notFound.find(Image).props().src).toBe(errorImage);
    });

    
});
