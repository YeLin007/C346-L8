import React, { useState } from 'react';
import {
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Image,
    Alert,
    StyleSheet,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
//pushing and commiting
const QuizQuestion = ({ index, question, imageUri, options, value, onChange }) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardHeaderRow}>
                <View style={styles.questionBadge}>
                    <Text style={styles.questionBadgeText}>Q{index}</Text>
                </View>
                <Text style={styles.tagText}>Guess the answer</Text>
            </View>

            {/* Image */}
            <Image source={{ uri: imageUri }} style={styles.cardImage} />

            {/* Question text */}
            <Text style={styles.cardQuestion}>{question}</Text>

            {/* Picker */}
            <View style={styles.pickerWrapper}>
                <Picker
                    selectedValue={value}
                    onValueChange={onChange}
                    style={styles.cardPicker}
                >
                    <Picker.Item label="-- Choose an answer --" value="" />
                    <Picker.Item label={options[0]} value={options[0]} />
                    <Picker.Item label={options[1]} value={options[1]} />
                    <Picker.Item label={options[2]} value={options[2]} />
                </Picker>
            </View>
        </View>
    );
};

const QuizApp = () => {
    const [ans1, setAns1] = useState('');
    const [ans2, setAns2] = useState('');
    const [ans3, setAns3] = useState('');
    const [ans4, setAns4] = useState('');
    const [ans5, setAns5] = useState('');
    const [ans6, setAns6] = useState('');

    const submit = () => {
        let correct = 0;
        if (ans1 === 'Tiger') correct += 1;
        if (ans2 === 'Elephant') correct += 1;
        if (ans3 === 'Penguin') correct += 1;
        if (ans4 === 'Ronaldo') correct += 1;
        if (ans5 === 'Elon Musk') correct += 1;
        if (ans6 === 'Taylor Swift') correct += 1;

        let feedback = 'Nice try! Keep going';
        if (correct === 6) feedback = 'Perfect score!';
        else if (correct >= 4) feedback = 'Great job! Almost perfect';
        else if (correct === 3) feedback = 'Good effort! You’re halfway there';
        else if (correct <= 2) feedback = 'You can do better next time';

        Alert.alert('Your Result', `Correct: ${correct} / 6\n\n${feedback}`);
    };

    return (
        <View style={styles.appContainer}>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* App title */}
                <View style={styles.titleCard}>
                    <Text style={styles.appTitle}>Guess What!</Text>
                    <Text style={styles.appSubtitle}>6 fun questions • Animals & Celebrities</Text>

                    <View style={styles.pillRow}>
                        <View style={styles.pill}>
                            <Text style={styles.pillText}>Beginner</Text>
                        </View>
                        <View style={styles.pill}>
                            <Text style={styles.pillText}>Multiple Choice</Text>
                        </View>
                    </View>
                </View>

                {/* Questions */}
                <QuizQuestion
                    index={1}
                    question="Which animal is this?"
                    imageUri="https://media.istockphoto.com/id/1420676204/photo/portrait-of-a-royal-bengal-tiger-alert-and-staring-at-the-camera-national-animal-of-bangladesh.jpg?s=612x612&w=0&k=20&c=0OCYv99Ktv3fJ-YYlg7SetHBJj3pIk58WY7GDy5VCtI="
                    options={['Tiger', 'Lion', 'Leopard']}
                    value={ans1}
                    onChange={setAns1}
                />

                <QuizQuestion
                    index={2}
                    question="Which animal is this?"
                    imageUri="https://media.istockphoto.com/id/1452952557/photo/big-tusker-craig-in-amboseli-kenya-with-a-clouded-sky-in-the-background.jpg?s=612x612&w=0&k=20&c=Hs2YQUox5mIG0NJlyhqNjRklTGvkVmk_UfHs18lYg6E="
                    options={['Rhino', 'Elephant', 'Hippo']}
                    value={ans2}
                    onChange={setAns2}
                />

                <QuizQuestion
                    index={3}
                    question="Which animal is this?"
                    imageUri="https://www.cabq.gov/artsculture/biopark/news/10-cool-facts-about-penguins/%40%40download/image/Baby%20penguin%20wikimedia%20commons.jpg"
                    options={['Penguin', 'Duck', 'Seagull']}
                    value={ans3}
                    onChange={setAns3}
                />

                <QuizQuestion
                    index={4}
                    question="Who is this person?"
                    imageUri="https://ichef.bbci.co.uk/news/480/cpsprodpb/4b33/live/12edab40-71c0-11ef-a237-49738a978907.jpg.webp"
                    options={['Ronaldo', 'Beckham', 'Messi']}
                    value={ans4}
                    onChange={setAns4}
                />

                <QuizQuestion
                    index={5}
                    question="Who is this person?"
                    imageUri="https://media.wired.com/photos/6365775e6776a0176c76e4d7/master/pass/Elon-Musk-Has-Alot-On-His-Plate-Business-1238366977.jpg"
                    options={['Jeff Bezos', 'Elon Musk', 'Bill Gates']}
                    value={ans5}
                    onChange={setAns5}
                />

                <QuizQuestion
                    index={6}
                    question="Who is this singer?"
                    imageUri="https://www.rollingstone.com/wp-content/uploads/2021/11/gettyimages-1193642267.jpg"
                    options={['Ariana Grande', 'Selena Gomez', 'Taylor Swift']}
                    value={ans6}
                    onChange={setAns6}
                />

                {/* Submit button */}
                <TouchableOpacity style={styles.button} onPress={submit} activeOpacity={0.85}>
                    <Text style={styles.buttonText}>SUBMIT ANSWERS</Text>
                    <Text style={styles.buttonSubText}>See your score & feedback</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#0f172a', // deep navy
    },
    scrollContent: {
        paddingTop: 40,
        paddingBottom: 40,
        paddingHorizontal: 16,
    },

    // Header / Title card
    titleCard: {
        backgroundColor: '#020617',
        borderRadius: 18,
        paddingVertical: 18,
        paddingHorizontal: 16,
        marginBottom: 18,
        borderWidth: 1,
        borderColor: '#1e293b',
    },
    appTitle: {
        fontSize: 28,
        fontWeight: '800',
        color: '#e5e7eb',
    },
    appSubtitle: {
        marginTop: 6,
        fontSize: 14,
        color: '#94a3b8',
    },
    pillRow: {
        flexDirection: 'row',
        marginTop: 12,
        gap: 8,
        flexWrap: 'wrap',
    },
    pill: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 999,
        backgroundColor: '#1d4ed8',
    },
    pillText: {
        color: '#e5e7eb',
        fontSize: 12,
        fontWeight: '600',
    },

    // Question card
    card: {
        marginVertical: 10,
        padding: 12,
        borderRadius: 16,
        backgroundColor: '#020617',
        borderWidth: 1,
        borderColor: '#1e293b',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 4,
    },
    cardHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    questionBadge: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 999,
        backgroundColor: '#1e40af',
    },
    questionBadgeText: {
        color: '#e5e7eb',
        fontSize: 12,
        fontWeight: '700',
    },
    tagText: {
        fontSize: 12,
        color: '#64748b',
    },
    cardImage: {
        width: '100%',
        height: 190,
        borderRadius: 12,
        marginTop: 4,
    },
    cardQuestion: {
        marginTop: 12,
        fontSize: 16,
        fontWeight: '700',
        color: '#e5e7eb',
    },
    pickerWrapper: {
        marginTop: 8,
        borderRadius: 10,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#1e293b',
        backgroundColor: '#020617',
    },
    cardPicker: {
        color: '#e5e7eb',
    },

    // Button
    button: {
        marginTop: 18,
        backgroundColor: '#22c55e',
        paddingVertical: 14,
        borderRadius: 999,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 4,
    },
    buttonText: {
        fontSize: 18,
        color: '#022c22',
        fontWeight: '800',
    },
    buttonSubText: {
        fontSize: 12,
        color: '#022c22',
        marginTop: 2,
    },
});

export default QuizApp;
