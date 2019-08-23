import React, {Component} from 'react';
import {
    View,
    SectionList
} from 'react-native';

class SectionHeader extends Component {
    render() {
        return (
            <View></View>
        );
    }
}

class BillItem extends Component {
    render() {
        return (
            <View></View>
        );
    }
}

class Body extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        const curr = new Date();
        const first = curr.getDate() - curr.getDay();
        const last = first + 13; // 1 day + 6 days + 1 week

        let week_beg = new Date(curr.setDate(first)).toUTCString();
        let week_end = new Date(curr.setDate(last)).toUTCString();

        this.setState({
            data: [
                {
                    title: week_beg + " - " + week_end,
                    data: []
                }
            ]
        });
    }

    render() {
        return (
            <View style={{flex:8}}>
                <SectionList 
                    renderItem={<BillItem />}
                    renderSectionHeader={({section: {title}}) => <SectionHeader />}
                    sections={this.state.data}
                    keyExtractor={(item, index) => item + index}
                />
            </View>
        );
    }
}

export default Body;