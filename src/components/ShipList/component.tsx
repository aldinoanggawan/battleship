import { FC } from 'react';
import { ShipListProps, ShipType } from './types';
import { images, shipImages } from '../../data/images';
import { Container, Img, Item } from './styles';

export const ShipList: FC<ShipListProps> = ({ shipTypes, hitCounts }) => {
  return (
    <Container>
      {Object.keys(shipTypes).map((shipType: ShipType) => {
        const hitCount = hitCounts[shipType];

        return (
          <Item key={shipType}>
            <Img draggable='false' src={shipImages[shipType]} />
            {hitCounts[shipType] > 0 && (
              <>
                {Array.from({ length: hitCount }).map((_, hitIndex) => {
                  return (
                    <Img
                      key={hitIndex}
                      icon
                      src={images.hitSmall}
                      draggable='false'
                    />
                  );
                })}
              </>
            )}
            {Array.from({ length: shipTypes[shipType].size - hitCount }).map(
              (_, sizeIndex) => {
                return (
                  <Img
                    key={sizeIndex}
                    icon
                    src={images.missSmall}
                    draggable='false'
                  />
                );
              }
            )}
          </Item>
        );
      })}
    </Container>
  );
};
