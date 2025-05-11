import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, useColorScheme } from 'react-native'
import { Link } from 'expo-router'
import { useState } from 'react'

import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from "../../components/ThemedTextInput"
import { useUser } from '../../hooks/useUser'
import { Colors } from '../../constants/Colors'
const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const colorScheme = useColorScheme()
  const [error, setError] = useState(null)
  const {  register } = useUser()

  const handleSubmit = async () => {
    setError(null)
    try {
      await register(email, password)
      setEmail("")
      setPassword("")
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>

        <Spacer />
        <ThemedText title={true} style={styles.title}>
          Register an Account
        </ThemedText>

        <Spacer />
        <ThemedTextInput
          style={{ marginBottom: 20, width: "80%", color: colorScheme === "dark" ? "#000": "#fff", backgroundColor: colorScheme === "dark" ? "#D3D3D3": "#ccc" }}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <ThemedTextInput
          style={{ marginBottom: 20, width: "80%", color: colorScheme === "dark" ? "#000": "#fff", backgroundColor: colorScheme === "dark" ? "#D3D3D3": "#ccc" }}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <ThemedButton onPress={handleSubmit}>
          <Text style={{ color: '#f2f2f2', width: 150, textAlign: 'center' }}>Register</Text>
        </ThemedButton>
         
        <Spacer />
        {error && <Text style={styles.error}>{error}</Text>}
        <Spacer height={100} />
        <Link href="/login" replace>
          <ThemedText style={{ textAlign: "center" }}>
            Login instead
          </ThemedText>
        </Link>

      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Register

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