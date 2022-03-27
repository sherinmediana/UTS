import {React,useState, useRef} from "react";
import {ScrollView, StyleSheet, Text, Button, View,TextInput, KeyboardAvoidingView, SafeAreaView } from 'react-native';

import ship from '../assets/ship.png'
import seat from '../assets/seat.png'
import calendar from '../assets/calendar.png'
import time from '../assets/time.png'
import {Input} from 'react-native-elements';

const Beranda = ({ navigation }) => {
  const [pel_awal, setPel_awal] = useState("");
  const [pel_akhir, setPel_akhir] = useState("");
  const [tgl, setTgl] = useState("");
  const [layanan, setLayanan] = useState("");
  const [jam, setJam] = useState("");


  const onsubmit = () => {
    // console.warn(awal, tujuan, layanan, tgl, jam);
    navigation.navigate('Detail', {
      pel_awal: pel_awal,
      pel_akhir: pel_akhir,
      layanan: layanan,
      tgl: tgl,
      jam: jam,
    });
    this;
  };


    return(
      <ScrollView>
      <SafeAreaView>
      <KeyboardAvoidingView style={styles.keyboard}>
        <View style={styles.container}>
            <View style={styles.top}>
              <Text style={styles.header}>Kapalzy</Text>
            </View>
            
            <View style={styles.card}>
            
              
              <Text style={styles.header2}>Pelabuhan Awal</Text>
              <View style={styles.maininputan}>
                <img src={ship} alt ="ship" width="20" height="20"/>
                <Input
                  style={styles.input}
                  onChangeText={setPel_awal}
                  value={pel_awal}
                  placeholder="Pilih Pelabuhan Awal"
                  selectTextOnFocus={false}
                  
                />
              </View>
              
              <Text style={styles.header2}>Pelabuhan Tujuan</Text>
              <View style={styles.maininputan}>
              <img src={ship} alt ="ship" width="20" height="20"/>
                <Input
                  style={styles.input}
                  onChangeText={setPel_akhir}
                  value={pel_akhir}
                  placeholder="Pilih Pelabuhan Tujuan"
                  selectTextOnFocus={false}
                />
              </View>
              
              <Text style={styles.header2}>Kelas Layanan</Text>
              <View style={styles.maininputan}>
              <img src={seat} alt ="seat" width="20" height="20"/>
                <Input
                  style={styles.input}
                  onChangeText={setLayanan}
                  value={layanan}
                  placeholder="Pilih Layanan"
                  selectTextOnFocus={false}
                />
                </View>
    
                <Text style={styles.header2}>Tanggal Masuk Pelabuhan</Text>
                <View style={styles.maininputan}>
                <img src={calendar} alt ="calendar" width="20" height="20"/>
                  <Input
                    style={styles.input}
                    onChangeText={setTgl}
                    value={tgl}
                    placeholder="Pilih Tanggal Masuk"
                    selectTextOnFocus={false}
                  />
                </View>

                <Text style={styles.header2}>Jam Masuk Pelabuhan</Text>
                <View style={styles.maininputan}>
                <img src={time} alt ="time" width="20" height="20"/>
                  <Input
                    style={styles.input}
                    onChangeText={setJam}
                    value={jam}
                    placeholder="Pilih Jam Masuk"
                    selectTextOnFocus={false}
                  />
                </View>
                <View style={styles.maininputan}>
                <Text style={styles.text}>Dewasa</Text>
                <Text style={styles.text}>1 Orang</Text>

                </View>
                
                

              <Button
                color= '#ED7D31'
                title="Buat Tiket"
                onPress={onsubmit}
              />
            </View>

            <View style={styles.kotak}>
              <Text style={styles.copyright}>Sherin Mediana Putri 119140050</Text>
            </View>
            
    
        </View>
      
        </KeyboardAvoidingView>
      </SafeAreaView>
      </ScrollView>
    
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
    overflow : "hidden",
    alignItems : 'center',
  },
  keyboard: {
    backgroundColor: '#88b454',
  },
  top: {
    flexDirection:'row',
    alignItems: 'center',
    padding:40,
    justifyContent: 'space-between',
  },
  maininputan: {
    width: '100%',
    flexDirection:'row',
    alignItems: 'center',
    marginBottom:20,
    marginTop:5,
    paddingLeft:10,
    borderWidth:1,
    borderRadius:3,
    borderColor: '#E5E5E5',
    
  },
  header: {
    borderColor: '#E5E5E5',
    color: '#000080',
    fontSize: 30,
    // fontFamily: 'Sans-Serif',
    fontWeight : 'Bold',
  },
  header2: {
    fontWeight:'bold',
    // fontFamily: 'Sans-Serif',
    color: 'Black',
  },
  card: {
    backgroundColor: 'white',
    margin: 'auto',
    width: '80%',
    padding:20,
    borderRadius:10,
    boxShadow: '0px 4px 8px 0px rgba(0,0,0,0.2)',
  },
  input: {
    height: 40,
    width: '100%',
    border:'none',
    padding: 10,
    borderRadius:3,
    
  },
  copyright: {
    color : '#797575',
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 30,
    textAlign: 'center',
  },
  text:{
    width: '100%',
    flexDirection:'row',
    alignItems: 'center',
    marginBottom:10,
    marginTop:5,
    paddingLeft:10,
    fontWeight:'bold',
    fontSize: 13,
  }
});

export default Beranda;