// src/screens/DashboardScreen.js
import React, { useContext } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Card, Paragraph, Title } from 'react-native-paper';
import { AuthContext } from '../context/AuthContext';

const DashboardScreen = () => {
    const { userInfo } = useContext(AuthContext);

    const data = {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(98, 0, 238, ${opacity})`,
                strokeWidth: 2,
            },
        ],
    };

    return (
        <ScrollView style={styles.container}>
            <Title style={styles.title}>Bem-vindo, {userInfo?.name}</Title>

            <Card style={styles.card}>
                <Card.Title title="Atividade Recente" />
                <Card.Content>
                    <LineChart
                        data={data}
                        width={350}
                        height={220}
                        chartConfig={{
                            backgroundColor: '#ffffff',
                            backgroundGradientFrom: '#ffffff',
                            backgroundGradientTo: '#ffffff',
                            decimalPlaces: 0,
                            color: (opacity = 1) => `rgba(98, 0, 238, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        }}
                        bezier
                    />
                </Card.Content>
            </Card>

            <View style={styles.row}>
                <Card style={styles.smallCard}>
                    <Card.Title title="Robôs Ativos" />
                    <Card.Content>
                        <Paragraph style={styles.bigText}>12</Paragraph>
                    </Card.Content>
                </Card>

                <Card style={styles.smallCard}>
                    <Card.Title title="Entregas Hoje" />
                    <Card.Content>
                        <Paragraph style={styles.bigText}>24</Paragraph>
                    </Card.Content>
                </Card>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        marginBottom: 20,
    },
    card: {
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    smallCard: {
        width: '48%',
    },
    bigText: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default DashboardScreen;