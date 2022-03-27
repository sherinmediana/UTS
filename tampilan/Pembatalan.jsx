import {React} from 'react';
import {ScrollView, Text, StyleSheet, View, StatusBar} from 'react-native';
import tiket from '../assets/tiket.jpg'

const Pembatalan = ({ navigation }) => {

    return ( 

    <ScrollView>
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.head}>
                        <Text style={styles.Cardtitle}>Kapalzy</Text>
                </View>

                <Text style={styles.subJudul}>Tidak Ada Aktivitas Pembatalan Tiket</Text>
                <img src={tiket} alt ="Panah" width="300" height="800"/>

            </View>
            <View>
              <Text style={styles.copyright}>Sherin Mediana Putri 119140050</Text>
            </View>
            </View>
    
    </ScrollView>
   
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBEBEB',
        marginTop: StatusBar.currentHeight || 0,
        alignItems: 'center'
    },
    head: {
        padding:10,
        alignItems: 'center',
    },
    subJudul: {
        color:'#000080',
        marginTop: 10,
        fontWeight: "bold",
    },
    Cardtitle: {
        textAlign: 'center',
        color: '#000080',
        fontSize: 25,
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#fff',
        marginTop: 100,
        width: '90%',
        padding:10,
        borderRadius:10,
        alignItems:'center',
    },
    copyright: {
        color : '#797575',
        fontWeight: 'bold',
        marginBottom: 30,
        marginTop: 30,
        textAlign: 'center',
    },
  });
  
  export default Pembatalan;
