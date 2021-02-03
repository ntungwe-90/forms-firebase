import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { loginEmailAccount, loginError } from "../../redux/actions/authActions";


class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleUpdateState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };


  handleOnSubmit = () => {
    this.props.loginEmailAccount(this.state.email, this.state.password);
  };
  render() {
    const { navigation, auth } = this.props;
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Log in</Text>
        </View>
        <View>
          { auth.error.login && (
            <Text style={{ color: "red" }}>{auth.error.login}</Text>
          )}
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="username"
            value={this.state.username}
            onChangeText={(text) => {
              this.handleUpdateState("email", text);
            }}
          />

          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry={true}
            placeholder="password"
            value={this.state.password}
            onChangeText={(text) => {
              this.handleUpdateState("password", text);
            }}
          />
        </View>

        <View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText} onPress={this.handleOnSubmit}>
              log in
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.noAccountContainer}>
          <Text style={styles.noAccountText}>Dont have an account?</Text>
          <TouchableOpacity>
            <Text
              style={styles.signupText}
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    marginVertical: 150,
  },
  loginText: {
    fontSize: 50,
    color: "#5100ad",
    fontWeight: "bold",
  },
  loginTextContainer: {
    marginBottom: 30,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "#5100ad",
    fontSize: 20,
    height: 50,
    marginTop: 20,
  },
  
  buttonContainer: {
    height: 50,
    backgroundColor: "#5100ad",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  noAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  noAccountText: {
    marginRight: 10,
    fontSize: 16,
  },
  signupText: {
    fontSize: 16,
    color: "#5100ad",
  },
});

const mapStateToProp = (state) => {
  return { auth: state };
};

export default connect(mapStateToProp, { loginEmailAccount, loginError })(
  LoginScreen
);
