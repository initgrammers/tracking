import React from 'react';
import {FlatList} from 'react-native';
import {Box, Text} from '../../../../../components';
import ItemPosition from './ItemPosition';
const ListSites = ({data}) => (
  <Box marginTop="l" width="90%">
    <FlatList
      data={data}
      scrollEnabled={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => <ItemPosition {...item} />}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={<Text>Aun no registras una sesión</Text>}
    />
  </Box>
);
export default ListSites;
