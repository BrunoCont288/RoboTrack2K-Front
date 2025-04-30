// src/components/CustomDrawerContent.js
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Caption, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                    <Avatar.Image
                        source={require('../assets/images/avatar.png')}
                        size={50}
                    />
                    <Title style={styles.title}>Nome do Usuário</Title>
                    <Caption style={styles.caption}>usuario@email.com</Caption>
                </View>

                <View style={styles.drawerSection}>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon name="home-outline" color={color} size={size} />
                        )}
                        label="Dashboard"
                        onPress={() => props.navigation.navigate('Dashboard')}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon name="robot-outline" color={color} size={size} />
                        )}
                        label="Robôs"
                        onPress={() => props.navigation.navigate('Robôs')}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon name="truck-delivery-outline" color={color} size={size} />
                        )}
                        label="Entregas"
                        onPress={() => props.navigation.navigate('Entregas')}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon name="account-outline" color={color} size={size} />
                        )}
                        label="Perfil"
                        onPress={() => props.navigation.navigate('Perfil')}
                    />
                </View>
            </View>
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 20,
    },
    title: {
        marginTop: 10,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    drawerSection: {
        marginTop: 15,
    },
});

export default CustomDrawerContent;