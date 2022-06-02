import React from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	item: {
		borderBottomColor: '#19526d',
		borderBottomWidth: StyleSheet.hairlineWidth,
		flex: 1,
		flexDirection: 'row',
	},
	tab: {
		flex: 1,
		backgroundColor: '#2a8bb9',
		justifyContent: 'center',
		alignItems: 'center',
	},
	tabText: {
		color: 'white',
		fontSize: '2vh',
		whiteSpace: 'nowrap'
	},
	tabCenter: {
		flex: 5,
		padding: 12,
	},
	tabCenterText: {
		fontSize: '2vh',
	}
})

export const ConcertListItem = ({navigation, item}) => {

    return (

      <TouchableHighlight onPress={()=> navigation.navigate("Details", {item})}>

			<View style={styles.item}>

				<View style={styles.tab}>

					<Text style={styles.tabText}>

						{item.date.toLocaleDateString("en-us", {day: "2-digit", month:"short"})}

					</Text>

				</View>

				<View style={styles.tabCenter}>

					<Text style={styles.tabCenterText}>

						{item.name}

					</Text>

				</View>

			</View>

		</TouchableHighlight>

    )

}
