import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
} from '@chakra-ui/react';
import React from 'react';

export const MySlider = ({ intiValue, setValue }) => {
  return (
    <Flex width="100%">
      <Slider
        defaultValue={5}
        min={1}
        max={20}
        step={1}
        aria-label="slider-ex-2"
        focusThumbOnChange={false}
        onChangeEnd={val => setValue(val)}
      >
        <SliderTrack bg="#e6e6e6">
          <SliderFilledTrack bg="#FFCC00" />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Flex>
  );
};
