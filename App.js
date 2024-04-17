// Importing react, react-native and vector icons
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';  // Ensure this package is installed

export default function App() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [liked, setLiked] = useState(false);
  const [followed, setFollowed] = useState(false);

  const handleSubmit = () => {
    Alert.alert('Submission', `Name: ${name}\nComment: ${comment}`, [
      { text: "OK", onPress: () => clearInputs() }
    ]);
  };

  const clearInputs = () => {
    setName('');
    setComment('');
  };

  const toggleLike = () => {
    setLiked(!liked);
  };

  const toggleFollow = () => {
    setFollowed(!followed);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Profile</Text>
      </View>
      <Image
        style={styles.profileImage}
        source={require('./assets/images/biruk.jpg')}
      />
      <View style={styles.iconRow}>
        <TouchableOpacity onPress={toggleLike}>
          <Icon
            name={liked ? 'heart' : 'heart-o'}
            size={30}
            color={liked ? 'red' : 'grey'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleFollow}>
          <Icon
            name={followed ? 'user-plus' : 'user-o'}
            size={30}
            color={followed ? 'blue' : 'grey'}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.infoSection}>
        <Text style={styles.infoText}>
        <Text style={styles.titleText}>Biruk's Profile Summary</Text>{"\n\n"}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.{"\n\n"}
        Integer nec odio. Praesent libero Lorem ipsum dolor sit amet, consectetur adipiscing elit.{"\n\n"}
        Sed cursus ante dapibus diam Lorem ipsum dolor sit amet, consectetur adipiscing elit.{"\n\n"}
        Sed nisi. Nulla quis sem at nibh elementum imperdiet.{"\n\n"}
        Duis sagittis ipsum. Praesent mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.{"\n\n"}
        Integer nec odio. Praesent libero Lorem ipsum dolor sit amet, consectetur adipiscing elit.{"\n\n"}
        Sed cursus ante dapibus diam Lorem ipsum dolor sit amet, consectetur adipiscing elit.{"\n\n"}
        Sed nisi. Nulla quis sem at nibh elementum imperdiet.{"\n\n"}
        Duis sagittis ipsum. Praesent mauris Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
      </ScrollView>

      <View style={styles.inputForm}>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Leave a comment"
          value={comment}
          onChangeText={setComment}
          multiline
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f8',
  },
  header: {
    padding: 20,
    backgroundColor: '#6c5ce7',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profileImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  infoSection: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#333',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  infoText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 10,
  },

  titleText: { 
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
  },

  inputForm: {
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#55efc4',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
