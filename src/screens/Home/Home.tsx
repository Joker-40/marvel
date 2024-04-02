import React, {useEffect} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {getCharacters} from '../../services/Endpoints';
import {useQuery, useQueryClient} from '@tanstack/react-query';
import {Button, Card, Layout} from '@ui-kitten/components';
import {Topics} from './helper/Topics';
import {CoverImages} from '../../../assets';
import {rootStyle} from '../../Styles/RootStyle';
import TopicCard from './components/TopicCard';
import {Colors} from '../../theme/Colors';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../navigation/MainStack';

const Home = ({}) => {
  const navigation = useNavigation()
  return (
    <Layout style={styles.container} level="1">
      <FlatList
        data={Topics}
        contentContainerStyle={{
          width: '100%',
          backgroundColor: Colors.Red,
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({item: topic}) => (
          <Card
            key={topic.topicName}
            header={<Text>{topic.topicName}</Text>}
            style={rootStyle.card}
            //@ts-ignore
            onPress={() => navigation.navigate(ScreenNames.ComicsList)} 
            >
            <Image
              source={CoverImages.Comics_Cover}
              style={{
                width: '100%',
                height: 300,
                resizeMode: 'stretch',
              }}
            />
          </Card>
        )}
      />
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
