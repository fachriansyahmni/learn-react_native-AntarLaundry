import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { WARNA_UTAMA } from '../../utils/constant'
import ButtonIcon from '../ButtonIcon'
import Gap from '../Gap'

const Saldo = () => {
    var valueSaldo = 100000;
    var mySaldo = "Rp. 100.000";
    return (
        <View style={styles.container}>
            <View style={styles.informasiSaldo}>
                <View style={styles.text}>
                    <Text style={styles.labelSaldo}>Saldo : </Text>
                    {/* <Text style={styles.valueSaldo}>Rp 100.000</Text> */}
                    <Text style={styles.valueSaldo}>{mySaldo}</Text>
                </View>
                <View style={styles.text}>
                    <Text style={styles.labelAntarPoint}>Antar Point</Text>
                    <Text style={styles.valueAntarPoint}>100 points</Text>
                </View>
            </View>
            <View style={styles.buttonAksi}>
                <ButtonIcon title={'Add Saldo'} />
                <Gap width={11} />
                <ButtonIcon title={'Get Point'} />
            </View>
        </View>
    )
}

export default Saldo

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 17,
        marginHorizontal: 30,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        marginTop: -windowHeight * 0.05,
        flexDirection: 'row'
    },
    text: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    informasiSaldo: {
        width: "60%"
    },
    buttonAksi: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 10,
        justifyContent: 'flex-end'
    },
    labelSaldo: {
        fontSize: 20,
        fontFamily: "TitilliumWeb-Regular"
    },
    valueSaldo: {
        fontSize: 20,
        fontFamily: "TitilliumWeb-Bold"
    },
    labelAntarPoint: {
        fontSize: 12,
        fontFamily: "TitilliumWeb-Bold"
    },
    valueAntarPoint: {
        fontSize: 12,
        fontFamily: "TitilliumWeb-Bold",
        color: WARNA_UTAMA
    },
})
