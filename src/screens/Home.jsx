import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { getMD5Digest } from '../../helper/CommoneHelper';
import { getComics } from '../services/Endpoints';

const Home = () => {
    const fetchComics = async () => {
        try {
          const data = await getComics()
          console.log(data.data);
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        fetchComics();
      }, []);
  return (
    <View>
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})