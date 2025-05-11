import { StyleSheet, Text, Keyboard, TouchableWithoutFeedback, TextInput, useColorScheme } from 'react-native'
import { Link } from 'expo-router'
import { useState } from 'react'
import { useUser } from '../../hooks/useUser'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from "../../components/ThemedTextInput"
import {Colors} from "../../constants/Colors"
const Login = () => {
  const colorScheme = useColorScheme();
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const { user, login } = useUser()
  const handleSubmit = async () => {
    setError(null)
    try {
      await login(email, password)
      setEmail("")
      setPassword("")
      console.log("You are logged in as ", user.email);
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        
        <Spacer />
        <ThemedText title={true} style={styles.title}>
          Login to Your Account
        </ThemedText>

        {/* <TextInput placeholder="Email" /> */}

        <Spacer />
        <ThemedTextInput
          style={{ marginBottom: 20, width: "80%", color: colorScheme === "dark" ? "#000": "#fff", backgroundColor: colorScheme === "dark" ? "#fff": "#ccc" }}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <ThemedTextInput
          style={{ marginBottom: 20, width: "80%", color: colorScheme === "dark" ? "#000": "#fff", backgroundColor: colorScheme === "dark" ? "#fff": "#ccc" }}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <ThemedButton onPress={handleSubmit}>
          <Text style={{ color: '#f2f2f2', width: 150, textAlign: 'center' }}>Login</Text>
        </ThemedButton>
        <Spacer />
        {error && <Text style={styles.error}>{error}</Text>}
        <Spacer height={100} />
        <Link href="/register" replace>
          <ThemedText style={{ textAlign: "center" }}>
            Register instead
          </ThemedText>
        </Link>

      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30
  },
  error: {
    color: Colors.warning,
    padding: 10,
    backgroundColor: '#f5c1c8',
    borderColor: Colors.warning,
    borderWidth: 1,
    borderRadius: 6,
    marginHorizontal: 10,
  }
})