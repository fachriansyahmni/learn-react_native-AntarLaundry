import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconMoney, IconCoin, IconTimbangan, IconBaju, IconDress, IconKarpet, IconSetrika, IconTruck } from '../../assets'
import { WARNA_SEKUNDER } from '../../utils/constant'

const ButtonIcon = ({ title, type }) => {
    const Icon = () => {
        if (title === "Add Saldo") return <IconMoney />
        if (title === "Get Point") return <IconCoin />
        if (type === "layanan") {
            if (title.toLowerCase() === "kiloan") return <IconTimbangan />
            if (title.toLowerCase() === "satuan") return <IconBaju />
            if (title.toLowerCase() === "vip") return <IconDress />
            if (title.toLowerCase() === "karpet") return <IconKarpet />
            if (title.toLowerCase() === "setrika saja") return <IconSetrika />
            if (title.toLowerCase() === "ekspress") return <IconTruck />
        }

        return <IconMoney />
    }

    return (
        <TouchableOpacity style={styles.container(type)}>
            <View style={styles.icon(type)}>
                <Icon />
            </View>
            <Text style={styles.textIcon(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonIcon

const styles = StyleSheet.create({
    container: (type) => ({
        marginBottom: type === "layanan" ? 12 : 0,
        marginRight: type === "layanan" ? 30 : 0
    }),
    icon: (type) => ({
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: type !== "layanan" ? 40 : null,
        height: type !== "layanan" ? 40 : null,
        padding: type === "layanan" ? 12 : 5,
        backgroundColor: WARNA_SEKUNDER,
        borderRadius: 5
    }),
    textIcon: (type) => ({
        fontSize: type === "layanan" ? 14 : 10,
        fontFamily: type === "layanan" ? "TitilliumWeb-Light" : "TitilliumWeb-Regular",
        marginTop: 3,
        textAlign: 'center'
    })
})
