import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Linking } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import books from "./books";

const Reading = ({ route }) => {
    const { bookId } = route.params;
    const [content, setContent] = useState("");

    useEffect(() => {
        setContent(books[bookId]);
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <Text>{content}</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
});

export default Reading;