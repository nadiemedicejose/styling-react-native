import React, {useRef} from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Text, View, StyleSheet, Animated } from 'react-native';

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

export const ConcertListItem = ({navigation, item, handleInteraction}) => {
	const widthAnimation = useRef(new Animated.Value(2)).current;

    return (

      <TouchableHighlight onPress={()=> {
		  Animated.timing(
			  widthAnimation,
			  {
				  toValue: 0,
				  duration: 250
			  }
		  ).start(() => {
			  handleInteraction(item);
			  widthAnimation.setValue(2);
		  });
	  }}>

			<View style={styles.item}>

				<Animated.View style={[styles.tab, {flex:widthAnimation}]}>

					<Text style={styles.tabText}>

						{item.date.toLocaleDateString("en-us", {day: "2-digit", month:"short"})}

					</Text>

				</Animated.View>

				<View style={styles.tabCenter}>

					<Text style={styles.tabCenterText}>

						{item.name}

					</Text>

				</View>

			</View>

		</TouchableHighlight>

    )

}
