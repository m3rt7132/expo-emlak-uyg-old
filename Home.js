import React, { useEffect, useState } from 'react';
import { StyleSheet, Alert, FlatList, View, ScrollView } from 'react-native';
import { MD3LightTheme as DefaultTheme, Button, Text, Card, Title, Paragraph, Appbar } from 'react-native-paper';
import { PaperProvider } from 'react-native-paper';

function Home({ navigation }) {
    const books = [
        {
            id: 1,
            title: 'Şeker Portakalı',
            author: 'Jose Mauro De Vasconcelos',
            genre: 'Duygusal',
            image: 'https://img.kitapyurdu.com/v1/getImage/fn:11462950/wh:true/wi:800',
        },
        {
            id: 2,
            title: 'Suç ve Ceza',
            author: 'Fyodor Dostoyevski',
            genre: 'Roman',
            image: 'https://img.kitapyurdu.com/v1/getImage/fn:11318194/wh:true/wi:800',
        },
        {
            id: 3,
            title: 'Beyaz Diş',
            author: 'Jack London',
            genre: 'Macera',
            image: 'https://www.iskultur.com.tr/webp/2010/10/beyazdis-1.jpg',
        },
        {
            id: 4,
            title: 'Çalı Kuşu',
            author: 'Reşat Neri Güntekin',
            genre: 'Roman',
            image: 'https://m.media-amazon.com/images/I/31ZCyaJ5tJL._AC_UF1000,1000_QL80_.jpg',
        }
    ];
    return (
        <PaperProvider>
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={styles.container}>
                    {books.map(book => (
                        <Card key={book.id} style={styles.card}>
                            <Card.Cover source={{ uri: book.image }} resizeMode="contain" />
                            <Card.Content>
                                <Title>{book.title}</Title>
                                <Paragraph>Yazar: {book.author}</Paragraph>
                                <Paragraph>Tür: {book.genre}</Paragraph>
                            </Card.Content>
                            <Card.Actions>
                                <Button onPress={() => navigation.navigate('Reading', { bookId: book.id })}>Oku</Button>
                            </Card.Actions>
                        </Card>
                    ))}
                </ScrollView>
            </View>
        </ PaperProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    card: {
        width: '48%',
        marginBottom: 16,
    },
});

export default Home;