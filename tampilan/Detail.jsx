import {React} from 'react';
import {ScrollView, Text, StyleSheet, View, Button, StatusBar} from 'react-native';
import arrow from '../assets/arrow.png'

const Detail = ({ navigation, route }) => {
    const {pel_awal, pel_akhir, layanan, tgl, jam} = route.params;
    const onsubmit = () => {
        // console.warn(awal, tujuan, layanan, tgl, jam);
        navigation.navigate('Pemesanan', {
          pel_awal: pel_awal,
          pel_akhir: pel_akhir,
          layanan: layanan,
          tgl: tgl,
          jam: jam,
        });
        this;
      };
    return (
    <ScrollView>
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.head}>
                        <Text style={styles.Cardtitle}>Kapalzy</Text>
                </View>

                <Text style={styles.subJudul}>Kuota Tersedia (10000)</Text>
                <Text style={styles.subJudul}>Rincian Tiket </Text>

                <View style={styles.SubCard}>
                    <View style={styles.Wrap}>
                        <View style= {styles.cardinModal}>
                            <Text style={styles.pelabuhan}>{pel_awal}</Text>
                        </View>

                        <View style= {styles.cardinModal}>
                        <img src={arrow} alt ="Panah" width="20" height="20"/>
                        </View>

                        <View style= {styles.cardinModal}>
                            <Text style={styles.pelabuhan}>{pel_akhir}</Text>
                        </View>
                    </View>
                    
                    <Text style={styles.subJudul}>Jadwal Masuk Pelabuhan </Text>
                    <Text >{tgl} </Text>
                    <Text >{jam} </Text>
                    <Text style={styles.subJudul}>Layanan </Text> 
                    <Text >{layanan} </Text>
                    <View style={styles.line}/>
                    <View style={styles.formInput}>
                        <Text style={styles.TextOnly}>Dewasa</Text>
                        <Text style={styles.TextOnly}>Rp 65.000,00</Text>
                    </View>   
                </View>

                <View style={styles.formText2}>
                        <Text style={styles.TextOnly2}>Total</Text>
                        <Text style={styles.TextOnly2}>Rp 65.000,00</Text>
                </View>

                <View style={styles.tombol}>
                        <Button 
                            color='#000080'
                            title="Kembali" 
                            onPress={() => navigation.navigate('Beranda')}
                        />
                        <Button 
                            color='#ED7D31' 
                            title="Lanjutkan" 
                            onPress={onsubmit}
                        />
                </View>
                
            </View>

            <View style={styles.kotak}>
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
    },
    SubCard: {
        backgroundColor: '#EBEBEB',
        margin: 'auto',
        marginTop : 10,
        width: '100%',
        padding:20,
        borderRadius:5,
        borderColor: '#E5E5E5',
        borderWidth: 1,
    },
    subJudul: {
        marginTop: 10,
        fontWeight: "bold",
    },
    line: {
        borderBottomWidth: 1,
        marginTop: 10,
        borderColor: '#000',
    },
    pelabuhan: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    tombol: {
        width: '100%',
        flexDirection:'row',
        borderColor: '#E5E5E5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextOnly: {
        width: '70%',
        fontWeight:'bold',
        height: 40,
        marginTop: 10,
        justifyContent:'space-between',
    },
    TextOnly2: {
        width: '70%',
        fontWeight:'bold',
        height: 40,
        marginTop: 10,
        justifyContent:'space-between',
        fontSize:17,
    },
    formInput: {
        width: '100%',
        flexDirection:'row',
        borderColor: '#E5E5E5',
        marginBottom:20,
        marginTop:5,
        justifyContent:'space-between',
    },
    Wrap: {
        backgroundColor: '#EBEBEB',
        margin: 'auto',
        width: '100%',
        flexDirection: 'row'
    },
    cardinModal: {
            backgroundColor: '#EBEBEB',
            margin: 'auto',
            width: '30%',
            alignItems:'center',
            height: 40,
    },
    formText: {
        width: '100%',
        flexDirection:'row',
        borderColor: '#E5E5E5',
        marginBottom:20,
        marginTop:5,
        padding:20,
        justifyContent:'space-between',
    },
    formText2: {
        width: '110%',
        flexDirection:'row',
        borderColor: '#E5E5E5',
        marginBottom:20,
        marginTop:5,
        padding:10

    },
      copyright: {
        color : '#797575',
        fontWeight: 'bold',
        marginBottom: 30,
        marginTop: 30,
        textAlign: 'center',
      },
  });
  
  export default Detail;
