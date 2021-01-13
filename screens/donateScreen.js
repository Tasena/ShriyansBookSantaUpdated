import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import { ListItem } from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';

export default class DonateScreen extends React.Component {
    constructor() {
        super();
        this.state = {
          reqBookList: [],
        }
        this.reqRef = null;
    }

    getReqBookList = () => {
        this.reqRef = db.collection('Requests').onSnapshot((snap)=> {
            var requestedBookList = snap.docs.map(document => document.data());

            this.setState({
                reqBookList: requestedBookList,
            })
        })
    }

    componentDidMount() {
        this.getReqBookList();
    }

    componentWillUnmount() {
        this.reqRef();
    }

    keyExtractor = (item, index) => index.toString();

    renderItem = ({item, i}) => {
        // console.log("Each item " + item);
        return (
            <ListItem
                key = {i}
                title = {item.Book_Name}
                subtitle = {item.Reason}
                titleStyle = {{color: 'black', fontWeight: 'bold'}}
                rightElement = {
                    <TouchableOpacity style={styles.requestButton}>
                        <Text style={{color:'#ffff'}}>Donate</Text>
                    </TouchableOpacity>
                }
                bottomDivider
            />
        )
    }

    render() {
        return (
            <View>
                <View>
                    <Text>
                        .....
                    </Text>
                    {
                        this.state.reqBookList.length === 0
                        ? (
                            <View>
                                <Text>
                                    List of Requested Books
                                </Text>
                            </View>
                        )
                        : (
                            <FlatList 
                              keyExtractor = {this.keyExtractor}
                              data = {this.state.reqBookList}
                              renderItem = {this.renderItem}
                            />
                        )
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    requestButton: {
      backgroundColor: 'black',
      marginTop: 30,
      height: 50,
      alignSelf: 'center',
      width: 90,
      borderRadius: 10,
    },
    reqText: {
      alignSelf: 'center',
      marginTop: 7,
      fontSize: 25,
    },
   
})