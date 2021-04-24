import React from "react";
import { Text } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import starIcon from "../../images/star";
export const RestaurantInfo = ({
  restaurant: {
    name,
    icon,
    photos,
    address,
    openingHours,
    rating,
    isClosedTemporarily,
  },
}) => {
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <ResCard>
      <Card.Content>
        <Card.Cover key={name} source={{ uri: photos }} />
        <StylesText>{name}</StylesText>
        <Row>
          {ratingArray.map(() => (
            <SvgXml xml={starIcon} width={20} height={20} />
          ))}
        </Row>
      </Card.Content>
    </ResCard>
  );
};

const StylesText = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
  padding: ${(props) => props.theme.space[3]};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: bold;
`;

const ResCard = styled(Card)`
  margin-bottom: 20px;
`;

const Row = styled.View`
  flex-direction: row;
`;
