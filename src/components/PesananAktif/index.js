import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import { IconWashingMachine } from '../../assets'
import { WARNA_UTAMA } from '../../utils/constant'

const PesananAktif = ({ no_pesanan, status }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <IconWashingMachine />
            <View style={styles.infoPesananAktif}>
                <Text style={styles.label}>Pesanan No. {no_pesanan}</Text>
                <Text style={styles.statusPesanan(status)}>{status}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PesananAktif

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        padding: 17,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        marginRight: 30,
        marginVertical: windowHeight * 0.03,
        alignItems: 'center'
    },
    infoPesananAktif: {
        marginLeft: windowWidth * 0.02
    },
    label: {
        fontSize: 18,
        fontFamily: "TitilliumWeb-SemiBold"
    },
    statusPesanan: (status) => ({
        fontSize: 14,
        fontFamily: "TitilliumWeb-Light",
        color: status === "sudah selesai" ? WARNA_UTAMA : 'red'
    })
})
