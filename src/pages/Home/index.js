import React from 'react'
import { Image, Dimensions, ImageBackground, StyleSheet, Text, View, ScrollView } from 'react-native'
import { ImageHeader, logo } from '../../assets';
import { ButtonIcon, Saldo } from '../../components';
import PesananAktif from '../../components/pesananAktif';
import { WARNA_ABU_ABU } from '../../utils/constant';

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

const Home = () => {
    const User = {
        "username": "Fachriansyah"
    }

    const DataDaftarLayanan = [
        {
            "id": 1,
            "nama": "Kiloan",
            "icon": "icon_kiloan",
        },
        {
            "id": 2,
            "nama": "Satuan",
            "icon": "icon_satuan",
        },
        {
            "id": 3,
            "nama": "Vip",
            "icon": "icon_vip",
        },
        {
            "id": 4,
            "nama": "Karpet",
            "icon": "icon_karpet",
        },
        {
            "id": 5,
            "nama": "Setrika saja",
            "icon": "icon_setrika",
        },
        {
            "id": 6,
            "nama": "Ekspress",
            "icon": "icon_ekspress",
        },
    ];

    const Layanans = DataDaftarLayanan.map((key, index) => <ButtonIcon key={index} title={key.nama} type="layanan" />);

    const DataPesananAktif = [
        {
            "id": 3,
            "no_pesanan": "0002142",
            "status": "sudah selesai",
        },
        {
            "id": 4,
            "no_pesanan": "0002143",
            "status": "masih dicuci",
        },
    ];
    const PesananAktifs = DataPesananAktif.map((key, index) =>
        <PesananAktif key={index} no_pesanan={key.no_pesanan} status={key.status} />
    );

    return (
        <View style={styles.page}>
            <ScrollView showsHorizontalScrollIndicator="false">
                <ImageBackground source={ImageHeader} style={styles.header}>
                    <Image source={logo} style={styles.logo} />
                    <View style={styles.hello}>
                        <Text style={styles.welcome}>Selamat Datang</Text>
                        <Text style={styles.username}>{User.username}</Text>
                    </View>
                </ImageBackground>
                <Saldo />
                <View style={styles.layanan}>
                    <Text style={styles.label}>Layanan Kami</Text>
                    <View style={styles.iconLayanan}>
                        {Layanans}
                    </View>
                </View>
                <View style={styles.pesananAktif}>
                    <Text style={styles.label}>Pesanan Aktif</Text>
                    {PesananAktifs}
                </View>
            </ScrollView>
        </View>
    )
}

export default Home

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        width: windowWidth,
        height: windowHeight * 0.3,
        paddingHorizontal: 30,
        paddingTop: 10
    },
    logo: {
        width: windowWidth * 0.25,
        height: windowHeight * 0.06,
    },
    hello: {
        marginTop: windowHeight * 0.030
    },
    welcome: {
        fontSize: 24,
        fontFamily: "TitilliumWeb-Regular"
    },
    username: {
        fontSize: 22,
        fontFamily: "TitilliumWeb-Bold"
    },
    layanan: {
        paddingLeft: 30,
        paddingTop: 24
    },
    label: {
        fontSize: 18,
        fontFamily: "TitilliumWeb-Bold"
    },
    iconLayanan: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        flexWrap: 'wrap',
    },
    pesananAktif: {
        marginTop: 20,
        flex: 1,
        paddingLeft: 30,
        paddingTop: 24,
        backgroundColor: WARNA_ABU_ABU,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    }
})
