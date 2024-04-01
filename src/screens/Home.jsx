import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getCharacters} from '../services/Endpoints';
import {useQuery, useQueryClient} from '@tanstack/react-query';
import {Button, Layout} from '@ui-kitten/components';

const Home = () => {
  const queryClient = useQueryClient();

  const fetchCharacters = async () => {
    console.log('Called!');
    const data = await getCharacters();
    return data.data.data.results;
  };

  const {
    data: characters,
    isError,
    isFetching,
  } = useQuery({
    queryKey: ['characters'],
    queryFn: fetchCharacters,
    staleTime: 5000,
    initialData: [],
  });

  console.log(characters[0]);

  return (
    <Layout style={styles.container} level="1">
      <Button
        appearance="filled"
        onPress={() => queryClient.invalidateQueries('characters')}>
        Refetch
      </Button>
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
