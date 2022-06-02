import React, { useRef } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, View, SectionList, StyleSheet } from 'react-native';

import { defaultState } from '../../config';
import { ConcertListItem } from './ConcertListItem';


export const HomeScreen = ({navigation})=>{

    return (
        <View style={styles.container}>
			<View style={styles.homeBody}>
				<ScrollView>
					<SectionList
						sections={defaultState}
						renderItem={({item}) => (
							<ConcertListItem item={item} navigation={navigation}/>
						)}
						renderSectionHeader={({section}) => (
							<Text style={styles.sectionHeader}>
								{section.title}
							</Text>
						)}
					/>
				</ScrollView>
			</View>

			<View style={styles.homeFooter}>
				<Text>&copy; 2020 Globoticket</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		flex: 1,
	},
	homeBody: {
		flex: 7,
	},
	homeFooter: {
		flex: 1,
	},
	sectionHeader: {
		paddingVertical: 2,
		paddingHorizontal: 10,
		fontWeight: 'bold',
		color: 'white',
		backgroundColor: '#19526d',
		borderColor: '#19526d',
		borderBottomWidth: StyleSheet.hairlineWidth
	}
})
