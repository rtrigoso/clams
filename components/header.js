import React, {Component} from 'react';
import {
    View,
    StatusBar,
    ToolbarAndroid,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    toolbar: {
        alignSelf: 'stretch',
        height: 56,
        backgroundColor: 'steelblue',
        color: 'white'
    }
});

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actions: [
                {
                    title: "Add New Bill",
                    show: "never"
                }
            ]
        }
    }
    render() {
        return (
            <View style={{flex:1}} >
                <StatusBar backgroundColor="lightblue" />
                <ToolbarAndroid 
                    title="Clams"
                    style={styles.toolbar}
                    titleColor="white"
                    actions = {this.state.actions}
                />
            </View>
        );
    }
}

export default Header;