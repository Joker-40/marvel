import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Card} from '@ui-kitten/components';
import {CoverImages} from '../../../../assets';
import {rootStyle} from '../../../Styles/RootStyle';

const TopicCard = (topic: any) => {
  return (
    <Card
      key={topic.topicName}
      header={<Text>{topic.topicName}</Text>}
      style={rootStyle.card}>
      <Image
        source={CoverImages.Comics_Cover}
        style={{width: '100%', height: 300}}
      />
    </Card>
  );
};

export default TopicCard;

const styles = StyleSheet.create({});
