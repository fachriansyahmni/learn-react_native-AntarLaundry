import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { IconHome, IconAkun, IconPesanan, IconHomeActive } from '../../assets'
import { WARNA_UTAMA, WARNA_DISABLE } from '../../utils/constant'

const TabItem = ({ isFocused, onPress, onLongPress, label }) => {
    const Icon = () => {
        if (label === "Home") return isFocused ? <IconHomeActive /> : <IconHome />;
        if (label === "Akun") return isFocused ? <IconAkun /> : <IconAkun />;
        if (label === "Pesanan") return isFocused ? <IconPesanan /> : <IconPesanan />;
        return <IconHome />
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
        >
            <Icon style={styles.icon} />
            <Text style={styles.text(isFocused)}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    icon: {

    },
    text: (isFocused) => ({
        fontSize: 15,
        color: isFocused ? WARNA_UTAMA : WARNA_DISABLE,
        marginTop: 8
    })
})
