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
import { createEmailAccount, registerError } from "../../redux/actions/authActions";

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      comfirm: "",
    };
  }

  handleUpdateState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = () => {
    if (this.state.password !== this.state.comfirm) {
      console.log("aaaaaa");
      this.props.registerError("Passwords do not match");
      return;
    }
    console.log("fffffdgrtg");
    this.props.createEmailAccount(this.state.email, this.state.password);
  };

  render() {
    const { navigation, auth } = this.props;
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Sign up</Text>
        </View>
        <View>
          {auth.error.register && (
            <Text style={{ color: "red" }}>{auth.error.register}</Text>
          )}
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="email"
            value={this.state.email}
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

          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry={true}
            placeholder="comfirm"
            value={this.state.comfirm}
            onChangeText={(text) => {
              this.handleUpdateState("comfirm", text);
            }}
          />

          <Text style={styles.forgotPassword}>forgot password?</Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.handleOnSubmit}
          >
            <Text style={styles.buttonText}>sign up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.noAccountContainer}>
          <Text style={styles.noAccountText}>Dont have an account?</Text>
          <Text
            style={styles.signupText}
            onPress={() => {
              navigation.navigate("Log In");
            }}
          >
            Sign up
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    marginVertical: 25,
  },
  loginText: {
    fontSize: 50,
    color: "#5100ad",
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 20,
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
  forgotPassword: {
    alignSelf: "flex-end",
    marginVertical: 3,
    color: "#0853a8",
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

export default connect(mapStateToProp, { createEmailAccount, registerError })(
  RegisterScreen
);
