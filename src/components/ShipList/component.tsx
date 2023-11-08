import { FC } from 'react';
import { ShipListProps, ShipType } from './types';
import { images, shipImages } from '../../data/images';
import { Container, Img, Item } from './styles';

export const ShipList: FC<ShipListProps> = ({ shipTypes }) => {
  return (
    <Container>
      {Object.keys(shipTypes).map((shipType: ShipType) => {
        return (
          <Item key={shipType}>
            <Img src={shipImages[shipType]} />
            {Array.from({ length: shipTypes[shipType].size }).map(
              (_, index) => {
                return <Img key={index} icon src={images.missSmall} />;
              }
            )}
          </Item>
        );
      })}
    </Container>
  );
};
